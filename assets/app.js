/* Audyt umów kredytowych — interakcje LP
   - rok w stopce
   - walidacja formularzy (inline, bez utraty danych)
   - FAQ: zamykanie pozostałych przy otwarciu (accordion behaviour)
   - placeholder submit (do podpięcia pod backend / CRM / e-mail)
*/
(function () {
  "use strict";

  // Rok w stopce
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal-on-scroll (IntersectionObserver; respektuje prefers-reduced-motion)
  var reveals = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // FAQ accordion — jednocześnie otwarte tylko jedno
  var faqItems = document.querySelectorAll(".faq details");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Walidacja + obsługa wysyłki
  var forms = document.querySelectorAll("form.form");
  forms.forEach(function (form) {
    // czyść stan błędu przy edycji
    form.addEventListener("input", function (e) {
      if (e.target.classList) e.target.classList.remove("invalid");
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var required = form.querySelectorAll("[required]");
      required.forEach(function (field) {
        var valid = field.type === "checkbox" ? field.checked : String(field.value).trim() !== "";
        if (field.type === "email" && valid) {
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        }
        if (!valid) {
          ok = false;
          field.classList.add("invalid");
        }
      });

      if (!ok) {
        var firstBad = form.querySelector(".invalid");
        if (firstBad) firstBad.focus();
        return;
      }

      // === PODPIĘCIE BACKENDU ===
      // Tu wstaw realny endpoint (fetch POST do API / CRM / usługi mailowej).
      // Dane dostępne przez: new FormData(form)
      // Przykład:
      // fetch('/api/lead', { method:'POST', body: new FormData(form) })
      //   .then(...).catch(...)

      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Dziękujemy — zgłoszenie przyjęte ✓";
      }
      form.reset();
      // Opcjonalnie: przewinięcie do komunikatu / wyświetlenie ekranu "co dalej".
    });
  });
})();
