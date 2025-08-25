// Placeholder data for 186 tools
const categories = {
  "pdf-doc": ["PDF Merger", "PDF Splitter", "PDF Compressor", "PDF to Word", "Word to PDF", "PDF to Excel", "Excel to PDF", "PDF to JPG/PNG", "JPG to PDF", "HTML to PDF", "Screenshot to PDF", "eSign PDF Tool", "PDF Unlocker", "PDF Protector", "PDF Page Organizer", "PDF Page Number Adder", "PDF Watermark", "PDF Notes Highlighter", "Resume Builder", "Invoice Generator", "E-book Creator", "PDF Redaction", "PDF Repair", "PDF to PDF/A", "Extract Images", "Metadata Editor", "Scan to PDF", "PDF Comparison Tool", "PDF Flattener"],
  "text-tools": ["OCR", "Handwriting to Text", "Word Counter", "Character Counter", "Text Diff Checker", "Plagiarism Checker", "Grammar Checker", "Essay Rephraser", "Text Summarizer", "Case Converter", "Lorem Ipsum Generator", "Random Text Generator", "Fancy Text Generator", "Text-to-Speech", "Speech-to-Text", "Story Plot Generator", "Privacy Policy Generator"],
  // ... Continue with all 11 categories
};

window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("toolsGrid");
  for (let cat in categories) {
    categories[cat].forEach(tool => {
      const col = document.createElement("div");
      col.className = "col-md-3 col-sm-6";
      col.innerHTML = `
        <div class="tool-card p-3 text-center">
          <i class="bi bi-tools fs-2"></i>
          <h5 class="mt-2">${tool}</h5>
        </div>`;
      grid.appendChild(col);
    });
  }
});
