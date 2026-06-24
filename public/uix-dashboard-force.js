(function(){
  function $(s, r=document){ return r.querySelector(s); }
  function $all(s, r=document){ return Array.from(r.querySelectorAll(s)); }

  function addCss(){
    if($('#uixDashboardForceStyle')) return;
    const style = document.createElement('style');
    style.id = 'uixDashboardForceStyle';
    style.textContent = `
      .uix-dash-force{
        margin:0 0 10px;
        padding:10px;
        border:3px solid #7c4826;
        border-radius:16px;
        background:linear-gradient(135deg,#fff8e8,#e6d6ba);
        color:#241b14;
      }

      .uix-dash-title{
        font-size:15px;
        font-weight:900;
        text-transform:uppercase;
        margin-bottom:8px;
      }

      .uix-dash-grid{
        display:grid;
        grid-template-columns:82px 1fr;
        gap:10px;
      }

      .uix-dash-avatar{
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
        text-align:center;
      }

      .uix-dash-avatar img{
        width:100%;
        height:100%;
        object-fit:cover;
      }

      .uix-dash-bars{
        display:grid;
        gap:7px;
      }

      .uix-dash-row{
        display:grid;
        grid-template-columns:76px 1fr 58px;
        gap:6px;
        align-items:center;
      }

      .uix-dash-label{
        font-size:11px;
        font-weight:900;
        text-transform:uppercase;
      }

      .uix-dash-bar{
        height:16px;
        border:1px solid #3c3026;
        border-radius:999px;
        background:#cab99c;
        overflow:hidden;
      }

      .uix-dash-fill{
        height:100%;
        width:0%;
      }

      .uix-dash-fill.hp{background:linear-gradient(90deg,#8f1d1d,#e2493b)}
      .uix-dash-fill.level{background:linear-gradient(90deg,#244f8e,#5b9ce4)}
      .uix-dash-fill.corruption{background:linear-gradient(90deg,#3a164d,#9639bf)}

      .uix-dash-value{
        font-size:11px;
        font-weight:900;
        text-align:right;
      }

      .uix-dash-inputs{
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:6px;
        margin-top:8px;
      }

      .uix-dash-inputs label{
        font-size:9px;
        font-weight:900;
        text-transform:uppercase;
      }

      .uix-dash-inputs input{
        min-height:32px;
        padding:5px 7px;
        text-align:center;
        font-size:14px;
        font-weight:900;
      }

      @media(max-width:780px){
        .uix-dash-force{padding:8px;border-radius:14px}
        .uix-dash-grid{grid-template-columns:72px 1fr;gap:7px}
        .uix-dash-avatar{min-height:72px}
        .uix-dash-row{grid-template-columns:62px 1fr 48px;gap:4px}
        .uix-dash-label,.uix-dash-value{font-size:10px}
        .uix-dash-bar{height:14px}
        .uix-dash-inputs{grid-template-columns:repeat(2,minmax(0,1fr))}
      }
    `;
    document.head.appendChild(style);
  }

  function num(v){
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  }

  function clamp(v,min,max){
    return Math.max(min, Math.min(max, v));
  }

  function getPath(path){
    try{
      if(typeof activeChar === 'function' && typeof getByPath === 'function'){
        return getByPath(activeChar(), path);
      }
    }catch(e){}
    const el = document.querySelector('[data-path="' + path + '"]');
    return el ? el.value : '';
  }

  function setPath(path, value){
    try{
      if(typeof activeChar === 'function' && typeof setByPath === 'function'){
        setByPath(activeChar(), path, value);
      }
    }catch(e){}

    document.querySelectorAll('[data-path="' + path + '"]').forEach(el => {
      if(el.value !== value) el.value = value;
    });

    try{
      if(typeof saveStore === 'function') saveStore(false);
    }catch(e){}

    updateDash();
  }

  function getLevel(){
    const direct = num(getPath('meta.nivel'));
    if(direct > 0) return direct;

    const classeNivel = String(getPath('meta.classeNivel') || '');
    const m = classeNivel.match(/(\d+)/);
    return m ? num(m[1]) : 1;
  }

  function insertDash(){
    if($('#uixDashForce')) return;

    const page = $('#page1 .page-content');
    const grid = $('#page1 .page-content .grid.p1');

    if(!page || !grid){
      setTimeout(insertDash, 500);
      return;
    }

    const dash = document.createElement('div');
    dash.id = 'uixDashForce';
    dash.className = 'uix-dash-force';
    dash.innerHTML = `
      <div class="uix-dash-title">Status do personagem</div>

      <div class="uix-dash-grid">
        <div class="uix-dash-avatar" id="uixDashAvatar">Imagem</div>

        <div>
          <div class="uix-dash-bars">
            <div class="uix-dash-row">
              <div class="uix-dash-label">Vida</div>
              <div class="uix-dash-bar"><div class="uix-dash-fill hp" id="uixHpFill"></div></div>
              <div class="uix-dash-value" id="uixHpValue">0/0</div>
            </div>

            <div class="uix-dash-row">
              <div class="uix-dash-label">Nível</div>
              <div class="uix-dash-bar"><div class="uix-dash-fill level" id="uixLevelFill"></div></div>
              <div class="uix-dash-value" id="uixLevelValue">Nv. 1</div>
            </div>

            <div class="uix-dash-row">
              <div class="uix-dash-label">Corrupção</div>
              <div class="uix-dash-bar"><div class="uix-dash-fill corruption" id="uixCorruptionFill"></div></div>
              <div class="uix-dash-value" id="uixCorruptionValue">0/10</div>
            </div>
          </div>

          <div class="uix-dash-inputs">
            <div><label>Vida atual</label><input id="uixHpNowInput" type="number"></div>
            <div><label>Vida máxima</label><input id="uixHpMaxInput" type="number"></div>
            <div><label>Nível</label><input id="uixLevelInput" type="number" min="1" max="20"></div>
            <div><label>Corrupção</label><input id="uixCorrInput" type="number" min="0" max="10"></div>
          </div>
        </div>
      </div>
    `;

    grid.parentNode.insertBefore(dash, grid);

    $('#uixHpNowInput').addEventListener('input', e => setPath('vida.atuais', e.target.value));
    $('#uixHpMaxInput').addEventListener('input', e => setPath('vida.maximos', e.target.value));
    $('#uixLevelInput').addEventListener('input', e => setPath('meta.nivel', e.target.value));
    $('#uixCorrInput').addEventListener('input', e => setPath('campanha.corrupcao', e.target.value));

    updateDash();
  }

  function updateDash(){
    const hpMax = num(getPath('vida.maximos'));
    const hpNow = num(getPath('vida.atuais'));
    const level = clamp(getLevel(), 1, 20);
    const corr = clamp(num(getPath('campanha.corrupcao')), 0, 10);

    const hpPct = hpMax > 0 ? clamp((hpNow / hpMax) * 100, 0, 100) : 0;
    const levelPct = clamp((level / 20) * 100, 0, 100);
    const corrPct = clamp((corr / 10) * 100, 0, 100);

    const hpFill = $('#uixHpFill');
    const levelFill = $('#uixLevelFill');
    const corrFill = $('#uixCorruptionFill');

    if(hpFill) hpFill.style.width = hpPct + '%';
    if(levelFill) levelFill.style.width = levelPct + '%';
    if(corrFill) corrFill.style.width = corrPct + '%';

    const hpValue = $('#uixHpValue');
    const levelValue = $('#uixLevelValue');
    const corrValue = $('#uixCorruptionValue');

    if(hpValue) hpValue.textContent = hpMax ? hpNow + '/' + hpMax : '0/0';
    if(levelValue) levelValue.textContent = 'Nv. ' + level;
    if(corrValue) corrValue.textContent = corr + '/10';

    const hpNowInput = $('#uixHpNowInput');
    const hpMaxInput = $('#uixHpMaxInput');
    const levelInput = $('#uixLevelInput');
    const corrInput = $('#uixCorrInput');

    if(hpNowInput && document.activeElement !== hpNowInput) hpNowInput.value = hpNow || '';
    if(hpMaxInput && document.activeElement !== hpMaxInput) hpMaxInput.value = hpMax || '';
    if(levelInput && document.activeElement !== levelInput) levelInput.value = level || 1;
    if(corrInput && document.activeElement !== corrInput) corrInput.value = corr || 0;

    const avatar = $('#uixDashAvatar');
    const portraitImg = $('#portraitBox img');
    if(avatar){
      avatar.innerHTML = portraitImg
        ? '<img src="' + portraitImg.src + '" alt="Imagem do personagem">'
        : 'Imagem';
    }
  }

  function addDownloadButton(){
    const tools = document.querySelector('.image-tools');
    if(!tools || document.querySelector('[data-uix-download-image]')) return;

    const btn = document.createElement('button');
    btn.className = 'btn secondary small';
    btn.type = 'button';
    btn.textContent = 'Baixar imagem';
    btn.setAttribute('data-uix-download-image', '1');

    btn.addEventListener('click', function(){
      const img = document.querySelector('#portraitBox img');
      if(!img){
        if(typeof toast === 'function') toast('Nenhuma imagem para baixar.');
        return;
      }

      const a = document.createElement('a');
      a.href = img.src;
      a.download = 'personagem_imagem.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

    tools.insertBefore(btn, tools.children[1] || null);
  }

  function boot(){
    addCss();
    insertDash();
    addDownloadButton();
    updateDash();
    setInterval(updateDash, 1000);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  }else{
    boot();
  }
})();
