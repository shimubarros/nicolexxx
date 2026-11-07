(function () {
  var raiz = document.documentElement;
  raiz.classList.remove("sem-js");

  /* ---------- Abertura: pode ser pulada, termina sozinha e sempre libera a rolagem ---------- */
  var abertura = document.getElementById("abertura");
  function encerrarAbertura() {
    raiz.classList.remove("travado");
    if (!abertura || abertura.hidden) return;
    abertura.classList.add("saindo");
    setTimeout(function () { abertura.hidden = true; }, 480);
    try { sessionStorage.setItem("nicolexxx-abertura", "1"); } catch (e) {}
    document.removeEventListener("keydown", teclaAbertura);
  }
  function teclaAbertura(e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") encerrarAbertura(); }
  window.encerrarAbertura = encerrarAbertura;

  if (abertura) {
    if (!raiz.classList.contains("travado")) {
      abertura.hidden = true; /* movimento reduzido ou ja vista nesta sessao */
    } else {
      document.getElementById("pular-abertura").addEventListener("click", encerrarAbertura);
      abertura.addEventListener("click", function (e) { if (e.target === abertura) encerrarAbertura(); });
      document.addEventListener("keydown", teclaAbertura);
      setTimeout(encerrarAbertura, 4100);
    }
  }

  /* ---------- Topo muda de fundo ao rolar ---------- */
  var topo = document.querySelector(".topo");
  function aoRolar() { if (topo) topo.classList.toggle("rolado", window.scrollY > 40); }
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  /* ---------- Revelar secoes ---------- */
  var revelar = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (itens) {
      itens.forEach(function (i) { if (i.isIntersecting) { i.target.classList.add("visivel"); obs.unobserve(i.target); } });
    }, { threshold: 0.12 });
    revelar.forEach(function (el) { obs.observe(el); });
  } else {
    revelar.forEach(function (el) { el.classList.add("visivel"); });
  }

  /* ---------- Faixa fixa no celular: some sobre a capa, as redes e o rodape ---------- */
  var faixa = document.querySelector(".faixa-assinatura");
  var esconder = document.querySelectorAll("[data-esconde-faixa]");
  if (faixa && esconder.length && "IntersectionObserver" in window) {
    var visiveis = new Set();
    var obsFaixa = new IntersectionObserver(function (itens) {
      itens.forEach(function (i) { if (i.isIntersecting) visiveis.add(i.target); else visiveis.delete(i.target); });
      faixa.classList.toggle("oculta", visiveis.size > 0);
    }, { threshold: 0 });
    esconder.forEach(function (el) { obsFaixa.observe(el); });
  }

  /* ---------- Previas: sem menu de contexto nem arrastar (o arquivo ja vem desfocado) ---------- */
  document.querySelectorAll(".galeria img").forEach(function (img) {
    img.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    img.addEventListener("dragstart", function (e) { e.preventDefault(); });
  });

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
