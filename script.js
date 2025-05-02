function toggleLista(toggleElement) {
    const lista = toggleElement.nextElementSibling;
    if (lista.style.display === "none" || lista.style.display === "") {
      lista.style.display = "block";
      toggleElement.textContent = toggleElement.textContent.replace("▶", "▼").replace("Mostrar", "Ocultar");
    } else {
      lista.style.display = "none";
      toggleElement.textContent = toggleElement.textContent.replace("▼", "▶").replace("Ocultar", "Mostrar");
    }
  }

  // Garante que todas as listas comecem escondidas
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lista").forEach(lista => {
      lista.style.display = "none";
    });
  });