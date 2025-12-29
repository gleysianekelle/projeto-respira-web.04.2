const body = document.body;
const texto = document.querySelector(".respira-texto");

const abrirConfig = document.getElementById("abrirConfig");
const voltar = document.getElementById("voltar");

const telaRespira = document.getElementById("tela-respira");
const telaConfig = document.getElementById("tela-config");

const toggleTema = document.getElementById("toggleTema");
const toggleAnimacao = document.getElementById("toggleAnimacao");

let inspirar = true;

/* INSPIRE / EXPIRE */
setInterval(() => {
  texto.textContent = inspirar ? "EXPIRE" : "INSPIRE";
    inspirar = !inspirar;
    }, 6000);

    /* TROCA DE TELAS */
    abrirConfig.addEventListener("click", () => {
      telaRespira.classList.remove("tela-ativa");
        telaConfig.classList.add("tela-ativa");
        });

        voltar.addEventListener("click", () => {
          telaConfig.classList.remove("tela-ativa");
            telaRespira.classList.add("tela-ativa");
            });

            /* MODO CLARO / ESCURO */
            toggleTema.addEventListener("click", () => {
              body.classList.toggle("dark");
                body.classList.toggle("light");

                  toggleTema.textContent = body.classList.contains("dark")
                      ? "Ativar modo claro"
                          : "Ativar modo escuro";
                          });

                          /* REDUZIR ANIMAÇÕES */
                          toggleAnimacao.addEventListener("click", () => {
                            body.classList.toggle("reduzir-animacoes");

                              toggleAnimacao.textContent = body.classList.contains("reduzir-animacoes")
                                  ? "Ativar animações"
                                      : "Reduzir animações";
                                      });

                                      /* PREFERS REDUCED MOTION */
                                      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                                        body.classList.add("reduzir-animacoes");
                                          toggleAnimacao.textContent = "Ativar animações";
                                          }