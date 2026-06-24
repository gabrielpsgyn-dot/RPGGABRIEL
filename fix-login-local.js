const fs = require("fs");

const file = "public/index.html";
let text = fs.readFileSync(file, "utf8");

// Correções finais de UTF-8/símbolos quebrados
text = text.replace(/\u00e2\u2030\u02c6\s*/g, "");
text = text.replace(/≈\s*/g, "");
text = text.replace(/<button class="btn ghost small" id="backToMenuBtn">.*?Personagens<\/button>/s,
  '<button class="btn ghost small" id="backToMenuBtn">Personagens</button>'
);

// Trocar a função de senha para validar a senha na API,
// mas permitir abrir personagem local que ainda não existe no D1.
const newFn = String.raw`
async function confirmPasswordAndEnter(){
      const id = state.pendingPasswordCharacterId || state.activeId;
      const input = $('#passwordInput');
      const pwd = input ? input.value.trim() : '';
      if(!id){ toast('Selecione um personagem.'); return; }
      if(!pwd){ toast('Digite a senha padrão.'); return; }

      setSessionPassword(pwd);

      try{
        if(getApiBase()){
          // Primeiro valida a senha no servidor.
          await apiFetch('/api/characters?campaignId=' + encodeURIComponent(CAMPAIGN_ID), {method:'GET'});

          // Depois tenta baixar a ficha online.
          // Se o personagem ainda for só local, não bloqueia a entrada.
          try{
            const data = await apiFetch('/api/characters/' + encodeURIComponent(id) + '?campaignId=' + encodeURIComponent(CAMPAIGN_ID), {method:'GET'});
            if(data && data.character){
              const c = normalizeCharacter(data.character);
              const idx = state.characters.findIndex(x => x.id === c.id);
              if(idx >= 0) state.characters[idx] = c;
              else state.characters.push(c);
              state.activeId = c.id;
              saveStore(false);
            }
          }catch(fetchErr){
            const msg = String(fetchErr && fetchErr.message ? fetchErr.message : fetchErr);
            if(!/Personagem não encontrado|404/i.test(msg)){
              throw fetchErr;
            }

            const local = state.characters.find(x => x.id === id);
            if(local){
              local.campaignId = local.campaignId || CAMPAIGN_ID;
              local.__onlineSummary = false;
              state.activeId = local.id;
              saveStore(false);
            }
          }
        }else if(pwd !== LOCAL_DEV_PASSWORD){
          throw new Error('Senha padrão inválida.');
        }

        closePasswordModal();
        enterCharacter(id);
        toast('Ficha aberta.');
      }catch(err){
        setSessionPassword('');
        toast('Não abriu: ' + err.message);
      }
    }
`;

text = text.replace(
  /async function confirmPasswordAndEnter\(\)\{[\s\S]*?\n    function mergeOnlineCharacters/,
  newFn + "\n\n    function mergeOnlineCharacters"
);

fs.writeFileSync(file, text, "utf8");
console.log("Corrigido:", file);
