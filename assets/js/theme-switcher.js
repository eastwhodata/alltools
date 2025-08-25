document.addEventListener("DOMContentLoaded", () => {
  const themeSelector = document.getElementById("themeSelector");
  const savedTheme = localStorage.getItem("theme") || "theme-default";
  document.body.className = savedTheme;
  if(themeSelector) themeSelector.value = savedTheme.replace("theme-","");

  if (themeSelector) {
    themeSelector.addEventListener("change", () => {
      const theme = "theme-" + themeSelector.value;
      document.body.className = theme;
      localStorage.setItem("theme", theme);
    });
  }
});
