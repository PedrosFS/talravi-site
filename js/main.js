// ==========================================================================
// Talravi Consultoria — main.js
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Menu mobile ----------
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // TODO: troque a URL abaixo pelo endpoint do Formspree (ver README.md)
  const FORM_ENDPOINT = "https://formspree.io/f/xkodknbq";

  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;

      if (FORM_ENDPOINT.includes("SEU_ID_AQUI")) {
        showStatus(
          "Formulário ainda não configurado — veja o README para conectar ao Formspree.",
          "err"
        );
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });

        if (response.ok) {
          showStatus("Mensagem enviada com sucesso! Retornaremos em breve.", "ok");
          form.reset();
        } else {
          showStatus("Não foi possível enviar agora. Tente novamente ou use o WhatsApp.", "err");
        }
      } catch (err) {
        showStatus("Falha de conexão. Tente novamente ou use o WhatsApp.", "err");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  function showStatus(message, kind) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `form-status visible ${kind}`;
  }
});
