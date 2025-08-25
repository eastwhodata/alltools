document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchBox");
  const categorySelect = document.getElementById("categorySelect");
  const toolSelect = document.getElementById("toolSelect");
  
  function filterTools() {
    const query = (searchInput.value || "").toLowerCase();
    const category = categorySelect.value;
    const toolName = toolSelect.value;

    document.querySelectorAll(".tool-card").forEach(card => {
      const title = card.querySelector("h6").textContent.toLowerCase();
      const cat = card.dataset.category;
      if (
        (query === "" || title.includes(query)) &&
        (category === "" || cat === category) &&
        (toolName === "" || title === toolName.toLowerCase())
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  if(searchInput) searchInput.addEventListener("input", filterTools);
  if(categorySelect) categorySelect.addEventListener("change", filterTools);
  if(toolSelect) toolSelect.addEventListener("change", filterTools);
});
