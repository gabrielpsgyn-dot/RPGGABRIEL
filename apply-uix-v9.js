const fs = require("fs");

const file = "public/index.html";
let html = fs.readFileSync(file, "utf8");

const css = `
/* UIX V9 - DASHBOARD VISIVEL */
.dashboard-v9{
  margin:0 0 10px;
  padding:10px;
  border:3px solid #7c4826;
  border-radius:16px;
  background:linear-gradient(135deg,#fff8e8,#e7d6b8);
  color:#241b14;
}

.dashboard-v9-title{
  font-weight:900;
  font-size:15px;
  margin-bottom:8px;
  text-transform:uppercase;
  letter-spacing:.04em;
}

.dashboard-v9-grid{
  display:grid;
  grid-template-columns:82px 1fr;
  gap:10px;
  align-items:stretch;
}

.dashboard-v9-avatar{
  min-height:88px;
  border:2px solid #3c3026;
  border-radius:14px;
  background:#241b14;
  color:#fff4dc;
  display:grid;
  place-items:center;
  overflow:hidden;
  font-weight:900;
  font-size:12px;
}

.dashboard-v9-avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.dashboard-v9-bars{
  display:grid;
  gap:7px;
}

.dashboard-v9-row{
  display:grid;
  grid-template-columns:76px 1fr 58px;
  gap:6px;
  align-items:center;
}

.dashboard-v9-label{
  font-size:11px;
  font-weight:900;
  text-transform:uppercase;
}

.dashboard-v9-bar{
  height:16px;
  border:1px solid #3c3026;
  border-radius:999px;
  background:#cab99c;
  overflow:hidden;
}

.dashboard-v9-fill{
  height:100%;
  width:0%;
}

.dashboard-v9-fill.hp{background:linear-gradient(90deg,#8f1d1d,#e2493b)}
.dashboard-v9-fill.level{background:linear-gradient(90deg,#244f8e,#5b9ce4)}
.dashboard-v9-fill.corruption{background:linear-gradient(90deg,#3a164d,#9639bf)}

.dashboard-v9-value{
  font-size:11px;
  font-weight:900;
  text-align:right;
}

.dashboard-v9-inputs{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:6px;
  margin-top:8px;
}

.dashboard-v9-inputs .field{
  margin:0;
}

.dashboard-v9-inputs input{
  min-height:32px;
  padding:5px 7px;
  text-align:center;
  font-size:14px;
  font-weight:900;
}

@media(max-width:780px){
  .dashboard-v9{
    padding:8px;
    border-radius:14px;
  }

  .dashboard-v9-grid{
    grid-template-columns:72px 1fr;
    gap:7px;
  }

  .dashboard-v9-avatar{
    min-height:72px;
  }

  .dashboard-v9-row{
    grid-template-columns:62px 1fr 48px;
    gap:4px;
  }

  .dashboard-v9-label,
  .dashboard-v9-value{
    font-size:10px;
  }

  .dashboard-v9-bar{
    height:14px;
  }

  .dashboard-v9-inputs{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}
/* FIM UIX V9 */
`;

if(!html.includes("UIX V9 - DASHBOARD VISIVEL")){
  html = html.replace("</style>", css + "\n</style>");
}

const dashboard = `
                <div class="dashboard-v9">
                  <div class="dashboard-v9-title">Status do personagem</div>

                  <div class="dashboard-v9-grid">
                    <div class="dashboard-v9-avatar" id="dashboardAvatarV9">Imagem</div>

                    <div>
                      <div class="dashboard-v9-bars">
                        <div class="dashboard-v9-row">
                          <div class="dashboard-v9-label">Vida</div>
                          <div class="dashboard-v9-bar"><div class="dashboard-v9-fill hp" id="hpFillV9"></div></div>
                          <div class="dashboard-v9-value" id="hpValueV9">0/0</div>
                        </div>

                        <div class="dashboard-v9-row">
                          <div class="dashboard-v9-label">Nível</div>
                          <div class="dashboard-v9-bar"><div class="dashboard-v9-fill level" id="levelFillV9"></div></div>
                          <div class="dashboard-v9-value" id="levelValueV9">Nv. 1</div>
                        </div>

                        <div class="dashboard-v9-row">
                          <div class="dashboard-v9-label">Corrupção</div>
                          <div class="dashboard-v9-bar"><div class="dashboard-v9-fill corruption" id="corruptionFillV9"></div></div>
                          <div class="dashboard-v9-value" id="corruptionValueV9">0/10</div>
                        </div>
                      </div>

                      <div class="dashboard-v9-inputs">
                        <div class="field"><label>Vida atual</label><input data-path="vida.atuais" type="number" /></div>
                        <div class="field"><label>Vida máxima</label><input data-path="vida.maximos" type="number" /></div>
                        <div class="field"><label>Nível</label><input data-path="meta.nivel" type="number" min="1" max="20" /></div>
                        <div class="field"><label>Corrupção</label><input data-path="campanha.corrupcao" type="number" min="0" max="10" /></div>
                      </div>
                    </div>
                  </div>
                </div>
`;

// Inserir depois do cabeçalho da página 1, antes da grid principal.
if(!html.includes("dashboard-v9")){
  const target = `<div class="grid p1">`;
  const idx = html.indexOf(target);
  if(idx === -1){
    throw new Error("Não achei <div class=\"grid p1\">. Dashboard não foi inserido.");
  }
  html = html.slice(0, idx) + dashboard + "\n            " + html.slice(idx);
}

// Garantir nível no personagem novo
html = html.replace(
  "nomePersonagem:'Novo Personagem', classeNivel:'', antecedente:",
  "nomePersonagem:'Novo Personagem', classeNivel:'', nivel:1, antecedente:"
);

const js = `
    function clampV9(value, min, max){
      value = Number(value);
      if(!Number.isFinite(value)) value = 0;
      return Math.max(min, Math.min(max, value));
    }

    function getLevelV9(c){
      const direct = Number(getByPath(c, 'meta.nivel'));
      if(Number.isFinite(direct) && direct > 0) return direct;

      const txt = String(getByPath(c, 'meta.classeNivel') || '');
      const match = txt.match(/(\\d+)/);
      return match ? Number(match[1]) : 1;
    }

    function renderDashboardV9(){
      const c = activeChar();
      if(!c) return;

      const hpMax = Math.max(0, Number(getByPath(c, 'vida.maximos') || 0));
      const hpNow = Math.max(0, Number(getByPath(c, 'vida.atuais') || 0));
      const hpPct = hpMax > 0 ? clampV9((hpNow / hpMax) * 100, 0, 100) : 0;

      const level = clampV9(getLevelV9(c), 1, 20);
      const levelPct = clampV9((level / 20) * 100, 0, 100);

      const corruption = clampV9(Number(getByPath(c, 'campanha.corrupcao') || 0), 0, 10);
      const corruptionPct = clampV9((corruption / 10) * 100, 0, 100);

      const hpFill = $('#hpFillV9');
      const levelFill = $('#levelFillV9');
      const corruptionFill = $('#corruptionFillV9');

      if(hpFill) hpFill.style.width = hpPct + '%';
      if(levelFill) levelFill.style.width = levelPct + '%';
      if(corruptionFill) corruptionFill.style.width = corruptionPct + '%';

      const hpValue = $('#hpValueV9');
      const levelValue = $('#levelValueV9');
      const corruptionValue = $('#corruptionValueV9');

      if(hpValue) hpValue.textContent = hpMax ? hpNow + '/' + hpMax : '0/0';
      if(levelValue) levelValue.textContent = 'Nv. ' + level;
      if(corruptionValue) corruptionValue.textContent = corruption + '/10';

      const avatar = $('#dashboardAvatarV9');
      const img = getByPath(c, 'descricao.aparenciaImagem');

      if(avatar){
        avatar.innerHTML = img
          ? '<img src="' + img + '" alt="Imagem do personagem">'
          : '<span>Imagem</span>';
      }
    }
`;

if(!html.includes("function renderDashboardV9")){
  html = html.replace("    function renderImages(){", js + "\n\n    function renderImages(){");
}

html = html.replaceAll(
  "renderImages();\n      renderCalculations();",
  "renderImages();\n      renderDashboardV9();\n      renderCalculations();"
);

html = html.replaceAll(
  "renderCalculations();\n      renderCharacterList();",
  "renderDashboardV9();\n      renderCalculations();\n      renderCharacterList();"
);

// Botão baixar imagem
html = html.replace(
  `<button class="btn secondary small" data-image-action="upload" data-image-path="descricao.aparenciaImagem">Enviar imagem</button>
                    <button class="btn danger small" data-image-action="remove" data-image-path="descricao.aparenciaImagem">Remover</button>`,
  `<button class="btn secondary small" data-image-action="upload" data-image-path="descricao.aparenciaImagem">Enviar imagem</button>
                    <button class="btn secondary small" data-image-action="download" data-image-path="descricao.aparenciaImagem">Baixar imagem</button>
                    <button class="btn danger small" data-image-action="remove" data-image-path="descricao.aparenciaImagem">Remover</button>`
);

if(!html.includes("downloadCharacterImageV9")){
  html = html.replace(
    "    function downloadCharacterImageV8(path){",
    "    function downloadCharacterImageV9(path){"
  );

  html = html.replace(
    `const action = btn.dataset.imageAction;
      if(action === 'download'){
        downloadCharacterImageV8(path);
        return;
      }`,
    `const action = btn.dataset.imageAction;
      if(action === 'download'){
        downloadCharacterImageV9(path);
        return;
      }`
  );
}

// Validação final obrigatória
if(!html.includes("dashboard-v9")){
  throw new Error("FALHOU: dashboard-v9 não entrou no HTML.");
}

if(!html.includes("renderDashboardV9")){
  throw new Error("FALHOU: renderDashboardV9 não entrou no HTML.");
}

fs.writeFileSync(file, html, "utf8");
console.log("OK: UIX V9 aplicado no index.html");
