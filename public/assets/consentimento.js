/* Recursos opcionais so carregam depois de consentimento dado na pagina de Privacidade.
   Hoje o unico recurso opcional sao as fontes do Google Fonts. Este consentimento
   NAO autoriza anuncios nem medicao de visitas (o site nao usa nenhum dos dois). */
(function () {
  var CHAVE = "nicolexxx-consentimento-v1";

  function ler() {
    try { return JSON.parse(localStorage.getItem(CHAVE)) || null; } catch (e) { return null; }
  }
  function gravar(valor) {
    try {
      if (valor === null) localStorage.removeItem(CHAVE);
      else localStorage.setItem(CHAVE, JSON.stringify(valor));
    } catch (e) { /* navegador bloqueou o armazenamento: segue sem os recursos opcionais */ }
  }
  function carregarFontes() {
    if (document.getElementById("fontes-externas")) return;
    var pre = document.createElement("link");
    pre.rel = "preconnect"; pre.href = "https://fonts.gstatic.com"; pre.crossOrigin = "";
    var css = document.createElement("link");
    css.id = "fontes-externas"; css.rel = "stylesheet";
    css.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Manrope:wght@400;600;700&display=swap";
    document.head.appendChild(pre); document.head.appendChild(css);
  }

  var atual = ler();
  if (atual && atual.fontes === true) carregarFontes();

  window.NicoleConsentimento = {
    estado: function () { var c = ler(); return c ? (c.fontes ? "aceito" : "recusado") : "pendente"; },
    aceitar: function () { gravar({ fontes: true, em: new Date().toISOString() }); carregarFontes(); },
    recusar: function () { gravar({ fontes: false, em: new Date().toISOString() }); },
    revogar: function () {
      gravar(null);
      var css = document.getElementById("fontes-externas");
      if (css) css.remove();
    }
  };
})();
