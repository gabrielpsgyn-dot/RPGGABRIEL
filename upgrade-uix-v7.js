const fs = require("fs");

const file = "public/index.html";
let html = fs.readFileSync(file, "utf8");

/* =========================
   CSS UIX V7
========================= */
const css = `
/* UIX V7 - painel superior de personagem */
.hero-status-v7{
  display:grid;
  grid-template-columns:92px 1fr;
  gap:12px;
  align-items:stretch;
  margin:0 0 10px;
  padding:10px;
  border:2px solid #3c3026;
  border-radius:16px;
  background:linear-gradient(135deg,#fffaf0,#eadcc4);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.55);
}

.hero-face-v7{
  border:2px solid #3c3026;
  border-radius:14px;
  background:#21170f;
  min-height:92px;
  display:grid;
  place-items:center;
  overflow:hidden;
  color:#f7ead0;
  font-weight:900;
  text-align:center;
  font-size:12px;
}

.hero-face-v7 img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.hero-bars-v7{
  display:grid;
  gap:7px;
}

.hero-line-v7{
  display:grid;
  grid-template-columns:88px 1fr 76px;
  gap:7px;
  align-items:center;
}

.hero-label-v7{
  font-weight:900;
  color:#2b1b10;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.04em;
}

.hero-bar-v7{
  height:18px;
  border:1px solid #3c3026;
  border-radius:999px;
  overflow:hidden;
  background:#d8c9ae;
  box-shadow:inset 0 2px 5px rgba(0,0,0,.18);
}

.hero-fill-v7{
  height:100%;
  width:0%;
  transition:width .2s ease;
}

.hero-fill-v7.hp{
  background:linear-gradient(90deg,#9b1f1f,#d94a38);
}

.hero-fill-v7.level{
  background:linear-gradient(90deg,#325f9f,#4f8bd8);
}

.hero-fill-v7.corruption{
  background:linear-gradient(90deg,#442060,#8d3fb0);
}

.hero-value-v7{
  font-weight:900;
  text-align:right;
  color:#2b1b10;
  font-size:12px;
}

.hero-inputs-v7{
  display:grid;
  grid-template-columns:repeat(4, minmax(0,1fr));
  gap:6px;
  margin-top:4px;
}

.hero-inputs-v7 .field{
  margin:0;
}

.hero-inputs-v7 input{
  min-height:34px;
  padding:6px 8px;
  font-size:15px;
  font-weight:800;
  text-align:center;
}

.image-box{
  background:linear-gradient(135deg,#151922,#2c2118) !important;
  color:#f8edda !important;
}

.image-box img{
  width:100%;
  height:auto;
  object-fit:contain;
  border-radius:12px;
}

@media (max-width:780px){
  .hero-status-v7{
    grid-template-columns:76px 1fr;
    gap:8px;
    padding:8px;
    border-radius:13px;
  }

  .hero-face-v7{
    min-height:76px;
    border-radius:12px;
  }

  .hero-line-v7{
    grid-template-columns:64px 1fr 58px;
    gap:5px;
  }

  .hero-label-v7,
  .hero-value-v7{
    font-size:10.5px;
  }

  .hero-bar-v7{
    height:15px;
  }

  .hero-inputs-v7{
    grid-template-columns:repeat(2, minmax(0,1fr));
    gap:5px;
  }

  .hero-inputs-v7 input{
    min-height:32px;
    font-size:14px;
  }
}
/* FIM UIX V7 */
`;

if(!html.includes("UIX V7 - painel superior de personagem")){
  html = html.replace("</style>", css + "\n</style>");
}

/* =========================
   HTML - painel superior
========================= */
const hero = `
                <div class="hero-status-v7">
                  <div class="hero-face-v7" id="heroPortraitV7">Imagem</div>
                  <div class="hero-bars-v7">
                    <div class="hero-line-v7">
                      <div class="hero-label-v7">Vida</div>
                      <div class="hero-bar-v7"><div class="hero-fill-v7 hp" id="hpFillV7"></div></div>
                      <div class="hero-value-v7" id="hpTextV7">0/0</div>
                    </div>

                    <div class="hero-line-v7">
                      <div class="hero-label-v7">Nível</div>
                      <div class="hero-bar-v7"><div class="hero-fill-v7 level" id="levelFillV7"></div></div>
                      <div class="hero-value-v7" id="levelTextV7">Nv. 1</div>
                    </div>

                    <div class="hero-line-v7">
                      <div class="hero-label-v7">Corrupção</div>
                      <div class="hero-bar-v7"><div class="hero-fill-v7 corruption" id="corruptionFillV7"></div></div>
                      <div class="hero-value-v7" id="corruptionTextV7">0/10</div>
                    </div>

                    <div class="hero-inputs-v7">
                      <div class="field"><label>Vida atual</label><input data-path="vida.atuais" type="number" /></div>
                      <div class="field"><label>Vida máxima</label><input data-path="vida.maximos" type="number" /></div>
                      <div class="field"><label>Nível</label><input data-path="meta.nivel" type="number" min="1" max="20" /></div>
                      <div class="field"><label>Corrupção</label><input data-path="campanha.corrupcao" type="number" min="0" max="10" /></div>
                    </div>
                  </div>
                </div>
`;

if(!html.includes("hero-status-v7")){
  html = html.replace(
    `            <div class="grid p1">`,
    `${hero}
            <div class="grid p1">`
  );
}

/* =========================
   Defaults novos
========================= */
html = html.replace(
  `nomePersonagem:'Novo Personagem', classeNivel:'', antecedente:'', nomeJogador:'', raca:'', alinhamento:'', experiencia:0,`,
  `nomePersonagem:'Novo Personagem', classeNivel:'', nivel:1, antecedente:'', nomeJogador:'', raca:'', alinhamento:'', experiencia:0,`
);

/* =========================
   Botão baixar imagem
========================= */
html = html.replace(
  `<button class="btn secondary small" data-image-action="upload" data-image-path="descricao.aparenciaImagem">Enviar imagem</button>
                    <button class="btn danger small" data-image-action="remove" data-image-path="descricao.aparenciaImagem">Remover</button>`,
  `<button class="btn secondary small" data-image-action="upload" data-image-path="descricao.aparenciaImagem">Enviar imagem</button>
                    <button class="btn secondary small" data-image-action="download" data-image-path="descricao.aparenciaImagem">Baixar imagem</button>
                    <button class="btn danger small" data-image-action="remove" data-image-path="descricao.aparenciaImagem">Remover</button>`
);

/* =========================
   Funções JS novas
========================= */
const js = `
    function clampV7(n, min, max){
      n = Number(n);
      if(!Number.isFinite(n)) n = 0;
      return Math.max(min, Math.min(max, n));
    }

    function parseLevelV7(c){
      const direct = Number(getByPath(c, 'meta.nivel'));
      if(Number.isFinite(direct) && direct > 0) return direct;

      const txt = String(getByPath(c, 'meta.classeNivel') || '');
      const m = txt.match(/(\\\\d+)/);
      return m ? Number(m[1]) : 1;
    }

    function renderHeroStatusV7(){
      const c = activeChar();
      if(!c) return;

      const hpMax = Math.max(0, Number(getByPath(c, 'vida.maximos') || 0));
      const hpNow = Math.max(0, Number(getByPath(c, 'vida.atuais') || 0));
      const hpPct = hpMax > 0 ? clampV7((hpNow / hpMax) * 100, 0, 100) : 0;

      const level = clampV7(parseLevelV7(c), 1, 20);
      const levelPct = clampV7((level / 20) * 100, 0, 100);

      const corr = clampV7(Number(getByPath(c, 'campanha.corrupcao') || 0), 0, 10);
      const corrPct = clampV7((corr / 10) * 100, 0, 100);

      const hpFill = $('#hpFillV7');
      const levelFill = $('#levelFillV7');
      const corrFill = $('#corruptionFillV7');
      const hpText = $('#hpTextV7');
      const levelText = $('#levelTextV7');
      const corrText = $('#corruptionTextV7');
      const heroPortrait = $('#heroPortraitV7');

      if(hpFill) hpFill.style.width = hpPct + '%';
      if(levelFill) levelFill.style.width = levelPct + '%';
      if(corrFill) corrFill.style.width = corrPct + '%';

      if(hpText) hpText.textContent = hpMax ? (hpNow + '/' + hpMax) : '0/0';
      if(levelText) levelText.textContent = 'Nv. ' + level;
      if(corrText) corrText.textContent = corr + '/10';

      const img = getByPath(c, 'descricao.aparenciaImagem');
      if(heroPortrait){
        heroPortrait.innerHTML = img
          ? '<img src="' + img + '" alt="Imagem do personagem">'
          : '<span>Imagem</span>';
      }
    }

    function downloadCharacterImageV7(path){
      const c = activeChar();
      if(!c) return;
      const data = getByPath(c, path);
      if(!data){
        toast('Nenhuma imagem para baixar.');
        return;
      }

      const name = ((c.meta && c.meta.nomePersonagem) || 'personagem')
        .normalize('NFD')
        .replace(/[\\\\u0300-\\\\u036f]/g,'')
        .replace(/[^a-z0-9]+/gi,'_')
        .replace(/^_|_$/g,'')
        .toLowerCase();

      const a = document.createElement('a');
      a.href = data;
      a.download = (name || 'personagem') + '_imagem.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
`;

if(!html.includes("function renderHeroStatusV7")){
  html = html.replace(`    function renderImages(){`, js + `

    function renderImages(){`);
}

/* =========================
   Chamar render novo
========================= */
html = html.replace(
  `      renderImages();
      renderCalculations();`,
  `      renderImages();
      renderHeroStatusV7();
      renderCalculations();`
);

html = html.replace(
  `      renderCalculations();
      renderCharacterList();`,
  `      renderHeroStatusV7();
      renderCalculations();
      renderCharacterList();`
);

/* =========================
   Download image action
========================= */
html = html.replace(
  `function handleImageAction(btn){
      const path = btn.dataset.imagePath;
      const action = btn.dataset.imageAction;
      if(action === 'remove'){`,
  `function handleImageAction(btn){
      const path = btn.dataset.imagePath;
      const action = btn.dataset.imageAction;
      if(action === 'download'){
        downloadCharacterImageV7(path);
        return;
      }
      if(action === 'remove'){`
);

/* =========================
   Remover símbolos quebrados restantes
========================= */
html = html
  .replace(/â‰ˆ\\s*/g, "")
  .replace(/≈\\s*/g, "")
  .replace(/âˆ’/g, "-")
  .replace(/−/g, "-")
  .replace(/â†/g, "Personagens");

fs.writeFileSync(file, html, "utf8");
console.log("UIX V7 aplicado:", file);
