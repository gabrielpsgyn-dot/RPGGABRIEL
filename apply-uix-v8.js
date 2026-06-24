const fs = require("fs");

const file = "public/index.html";
let html = fs.readFileSync(file, "utf8");

const css = `
/* UIX V8 - topo vivo do personagem */
.character-dashboard-v8{
  display:grid;
  grid-template-columns:92px 1fr;
  gap:10px;
  margin:0 0 10px;
  padding:10px;
  border:2px solid #3c3026;
  border-radius:16px;
  background:linear-gradient(135deg,#fff9ea,#e6d6ba);
}

.character-avatar-v8{
  min-height:92px;
  border:2px solid #3c3026;
  border-radius:14px;
  overflow:hidden;
  background:#21170f;
  color:#f7ead0;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:12px;
  text-align:center;
}

.character-avatar-v8 img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.character-bars-v8{
  display:grid;
  gap:7px;
}

.status-row-v8{
  display:grid;
  grid-template-columns:78px 1fr 62px;
  align-items:center;
  gap:6px;
}

.status-label-v8{
  font-size:11px;
  font-weight:900;
  text-transform:uppercase;
  color:#2b1b10;
}

.status-bar-v8{
  height:16px;
  border:1px solid #3c3026;
  border-radius:999px;
  overflow:hidden;
  background:#cdbb9d;
}

.status-fill-v8{
  height:100%;
  width:0%;
}

.status-fill-v8.life{background:linear-gradient(90deg,#861b1b,#df463a)}
.status-fill-v8.level{background:linear-gradient(90deg,#254c86,#5795dc)}
.status-fill-v8.corruption{background:linear-gradient(90deg,#3b174d,#8d38b8)}

.status-value-v8{
  text-align:right;
  font-size:11px;
  font-weight:900;
  color:#2b1b10;
}

.dashboard-inputs-v8{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:5px;
  margin-top:4px;
}

.dashboard-inputs-v8 .field{
  margin:0;
}

.dashboard-inputs-v8 input{
  min-height:32px;
  padding:5px 7px;
  text-align:center;
  font-weight:900;
  font-size:14px;
}

@media(max-width:780px){
  .character-dashboard-v8{
    grid-template-columns:78px 1fr;
    padding:8px;
    gap:7px;
    border-radius:13px;
  }

  .character-avatar-v8{
    min-height:78px;
    border-radius:12px;
  }

  .status-row-v8{
    grid-template-columns:64px 1fr 50px;
    gap:4px;
  }

  .status-label-v8,
  .status-value-v8{
    font-size:10px;
  }

  .status-bar-v8{
    height:14px;
  }

  .dashboard-inputs-v8{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}
/* FIM UIX V8 */
`;

if(!html.includes("UIX V8 - topo vivo do personagem")){
  html = html.replace("</style>", css + "\n</style>");
}

const dashboard = `
                <div class="character-dashboard-v8">
                  <div class="character-avatar-v8" id="characterAvatarV8">Imagem</div>

                  <div class="character-bars-v8">
                    <div class="status-row-v8">
                      <div class="status-label-v8">Vida</div>
                      <div class="status-bar-v8"><div class="status-fill-v8 life" id="lifeFillV8"></div></div>
                      <div class="status-value-v8" id="lifeValueV8">0/0</div>
                    </div>

                    <div class="status-row-v8">
                      <div class="status-label-v8">Nível</div>
                      <div class="status-bar-v8"><div class="status-fill-v8 level" id="levelFillV8"></div></div>
                      <div class="status-value-v8" id="levelValueV8">Nv. 1</div>
                    </div>

                    <div class="status-row-v8">
                      <div class="status-label-v8">Corrupção</div>
                      <div class="status-bar-v8"><div class="status-fill-v8 corruption" id="corruptionFillV8"></div></div>
                      <div class="status-value-v8" id="corruptionValueV8">0/10</div>
                    </div>

                    <div class="dashboard-inputs-v8">
                      <div class="field"><label>Vida atual</label><input data-path="vida.atuais" type="number" /></div>
                      <div class="field"><label>Vida máxima</label><input data-path="vida.maximos" type="number" /></div>
                      <div class="field"><label>Nível</label><input data-path="meta.nivel" type="number" min="1" max="20" /></div>
                      <div class="field"><label>Corrupção</label><input data-path="campanha.corrupcao" type="number" min="0" max="10" /></div>
                    </div>
                  </div>
                </div>
`;

if(!html.includes("character-dashboard-v8")){
  html = html.replace(
    /(\s*)<div class="grid p1">/,
    "$1" + dashboard + "\n$1<div class=\"grid p1\">"
  );
}

html = html.replace(
  "nomePersonagem:'Novo Personagem', classeNivel:'', antecedente:",
  "nomePersonagem:'Novo Personagem', classeNivel:'', nivel:1, antecedente:"
);

const js = `
    function clampV8(value, min, max){
      value = Number(value);
      if(!Number.isFinite(value)) value = 0;
      return Math.max(min, Math.min(max, value));
    }

    function getLevelV8(c){
      const direct = Number(getByPath(c, 'meta.nivel'));
      if(Number.isFinite(direct) && direct > 0) return direct;

      const txt = String(getByPath(c, 'meta.classeNivel') || '');
      const match = txt.match(/(\\d+)/);
      return match ? Number(match[1]) : 1;
    }

    function renderDashboardV8(){
      const c = activeChar();
      if(!c) return;

      const hpMax = Math.max(0, Number(getByPath(c, 'vida.maximos') || 0));
      const hpNow = Math.max(0, Number(getByPath(c, 'vida.atuais') || 0));
      const hpPct = hpMax > 0 ? clampV8((hpNow / hpMax) * 100, 0, 100) : 0;

      const lvl = clampV8(getLevelV8(c), 1, 20);
      const lvlPct = clampV8((lvl / 20) * 100, 0, 100);

      const corr = clampV8(Number(getByPath(c, 'campanha.corrupcao') || 0), 0, 10);
      const corrPct = clampV8((corr / 10) * 100, 0, 100);

      const lifeFill = $('#lifeFillV8');
      const levelFill = $('#levelFillV8');
      const corruptionFill = $('#corruptionFillV8');

      if(lifeFill) lifeFill.style.width = hpPct + '%';
      if(levelFill) levelFill.style.width = lvlPct + '%';
      if(corruptionFill) corruptionFill.style.width = corrPct + '%';

      const lifeValue = $('#lifeValueV8');
      const levelValue = $('#levelValueV8');
      const corruptionValue = $('#corruptionValueV8');

      if(lifeValue) lifeValue.textContent = hpMax ? hpNow + '/' + hpMax : '0/0';
      if(levelValue) levelValue.textContent = 'Nv. ' + lvl;
      if(corruptionValue) corruptionValue.textContent = corr + '/10';

      const avatar = $('#characterAvatarV8');
      const img = getByPath(c, 'descricao.aparenciaImagem');
      if(avatar){
        avatar.innerHTML = img
          ? '<img src="' + img + '" alt="Imagem do personagem">'
          : '<span>Imagem</span>';
      }
    }

    function downloadCharacterImageV8(path){
      const c = activeChar();
      if(!c) return;

      const img = getByPath(c, path);
      if(!img){
        toast('Nenhuma imagem para baixar.');
        return;
      }

      const name = ((c.meta && c.meta.nomePersonagem) || 'personagem')
        .normalize('NFD')
        .replace(/[\\u0300-\\u036f]/g,'')
        .replace(/[^a-z0-9]+/gi,'_')
        .replace(/^_|_$/g,'')
        .toLowerCase();

      const a = document.createElement('a');
      a.href = img;
      a.download = (name || 'personagem') + '_imagem.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
`;

if(!html.includes("function renderDashboardV8")){
  html = html.replace("    function renderImages(){", js + "\n\n    function renderImages(){");
}

html = html.replaceAll(
  "renderImages();\n      renderCalculations();",
  "renderImages();\n      renderDashboardV8();\n      renderCalculations();"
);

html = html.replaceAll(
  "renderCalculations();\n      renderCharacterList();",
  "renderDashboardV8();\n      renderCalculations();\n      renderCharacterList();"
);

html = html.replace(
  `<button class="btn secondary small" data-image-action="upload" data-image-path="descricao.aparenciaImagem">Enviar imagem</button>
                    <button class="btn danger small" data-image-action="remove" data-image-path="descricao.aparenciaImagem">Remover</button>`,
  `<button class="btn secondary small" data-image-action="upload" data-image-path="descricao.aparenciaImagem">Enviar imagem</button>
                    <button class="btn secondary small" data-image-action="download" data-image-path="descricao.aparenciaImagem">Baixar imagem</button>
                    <button class="btn danger small" data-image-action="remove" data-image-path="descricao.aparenciaImagem">Remover</button>`
);

html = html.replace(
  `const action = btn.dataset.imageAction;
      if(action === 'remove'){`,
  `const action = btn.dataset.imageAction;
      if(action === 'download'){
        downloadCharacterImageV8(path);
        return;
      }
      if(action === 'remove'){`
);

fs.writeFileSync(file, html, "utf8");
console.log("UIX V8 aplicado com sucesso.");
