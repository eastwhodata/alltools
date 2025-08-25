// ===== Category + Tools Data (complete 186 tools in 11 categories) =====
const siteCategories = {
  "pdf-doc": {
    title: "📄 PDF & Document Tools",
    icon: "bi-file-earmark-pdf",
    tools: [
      "PDF Merger","PDF Splitter","PDF Compressor","PDF to Word Converter","Word to PDF Converter",
      "PDF to Excel Converter","Excel to PDF Converter","PDF to JPG/PNG Converter","JPG/PNG to PDF Converter",
      "HTML to PDF Converter","Screenshot to PDF Converter","eSign PDF Tool","PDF Unlocker","PDF Protector",
      "PDF Page Organizer","PDF Page Number Adder","PDF Watermark Tool","PDF Notes Highlighter",
      "Resume Builder","Invoice Generator","E-book Creator","PDF Redaction Tool","PDF Repair Tool",
      "PDF to PDF/A Converter","Extract Images from PDF","PDF Metadata Editor","Scan to PDF with Deskew",
      "PDF Comparison Tool (Diff Checker)","PDF Flattener"
    ]
  },

  "text-tools": {
    title: "✍️ Text & Content Tools",
    icon: "bi-fonts",
    tools: [
      "OCR (Image to Text Extractor)","Handwriting to Text Converter","Word Counter","Character Counter",
      "Text Diff Checker","Plagiarism Checker","Grammar Checker","Essay Rephraser / Paraphrasing Tool",
      "Text Summarizer","Case Converter","Lorem Ipsum Generator","Random Text Generator","Fancy Text Generator",
      "Text-to-Speech","Speech-to-Text","Story Plot Generator","Privacy Policy Generator"
    ]
  },

  "image-video": {
    title: "🎨 Image, Video & Audio Tools",
    icon: "bi-image",
    tools: [
      "Image Resizer","Image Compressor","Image Cropper","Image to PNG Converter","Image to JPG Converter",
      "WebP to PNG/JPG Converter","Image Format Batch Converter","Image Background Remover",
      "Passport Photo Maker","Photo to Sketch Tool","Photo Collage Maker","Image Watermark Tool",
      "Image Color Extractor","Meme Generator","GIF Maker","Video Compressor","Video to Audio Converter",
      "Slideshow Maker","Audio Joiner","Audio Noise Remover","Audio Speed Changer","Audio Pitch Changer",
      "Screen Recorder","Webcam Photo Capture Tool"
    ]
  },

  "dev-tools": {
    title: "👨‍💻 Developer & Tech Tools",
    icon: "bi-code-slash",
    tools: [
      "Code Formatter / Beautifier","CSS Minifier","JavaScript Minifier","JSON Formatter & Validator",
      "JSON to CSV Converter","CSV to JSON Converter","CSV Viewer Tool","Regex Tester","Markdown Editor",
      "Markdown to HTML Converter","HTML to Markdown Converter","URL Encoder & Decoder",
      "HTML Encoder & Decoder","Base64 Encoder & Decoder","Convert Image to Base64","Color Code Picker",
      "HTML Table Generator","HTACCESS Redirect Generator","Fake Data Generator",
      "API Request Tester (REST Client)","AI Chatbot Demo"
    ]
  },

  "seo-tools": {
    title: "📈 SEO & Webmaster Tools",
    icon: "bi-graph-up",
    tools: [
      "Meta Tag Generator","Keyword Density Checker","Sitemap Generator","XML Sitemap Validator",
      "Robots.txt Generator","Google Index Checker","Domain Authority Checker",
      "Backlink Checker","Page Speed Checker","Mobile-Friendly Test"
    ]
  },

  "student-tools": {
    title: "🎓 Student & Academic Tools",
    icon: "bi-mortarboard",
    tools: [
      "GPA / CGPA Calculator","Plagiarism Checker","Flashcard Maker","MCQ Quiz Generator",
      "Exam Timer Tool","ID Card Generator","Certificate Generator","Equation Editor",
      "Periodic Table Tool","Chemistry Equation Balancer","Physics Formula Calculator",
      "Typing Speed Test Tool","Reading Speed Test Tool"
    ]
  },

  "calculators": {
    title: "📊 Calculators & Financial Tools",
    icon: "bi-calculator",
    tools: [
      "Scientific Calculator","Percentage Calculator","Discount Calculator","Age Calculator",
      "Date Calculator","Loan / EMI / Mortgage Calculator","Interest Calculator",
      "Retirement Calculator","Currency Converter","Fuel Cost Calculator",
      "Unit Price Calculator","Bill Splitter Tool","Tip Calculator","Budget Planner",
      "Shopping List Price Estimator","Calculator for Electric Bills"
    ]
  },

  "unit-converters": {
    title: "📏 Unit Converter Tools",
    icon: "bi-rulers",
    tools: [
      "Length Converter","Weight Converter","Temperature Converter","Volume Converter",
      "Speed Converter","Area Converter","Pressure Converter","Energy Converter",
      "Data Storage Converter","Fuel Efficiency Converter","Angle Converter",
      "Time Zone Converter","Recipe Converter","Roman Numeral Converter",
      "Binary/Decimal/Hex Converter","Scientific Unit Prefix Converter"
    ]
  },

  "security": {
    title: "🛡️ Security & Network Tools",
    icon: "bi-shield-lock",
    tools: [
      "Password Generator","MD5 Hash Generator","SHA256 Hash Generator","UUID / Random String Generator",
      "IP Address Lookup","IP Geolocation Finder","Whois Lookup","SSL Certificate Checker",
      "HTTP Headers Checker","URL Shortener","Internet Speed Test"
    ]
  },

  "social-media": {
    title: "👥 Social Media Tools",
    icon: "bi-chat-dots",
    tools: [
      "YouTube Thumbnail Downloader","YouTube Tags Extractor","Instagram Photo Downloader",
      "Twitter/Facebook/TikTok Video Downloader","Hashtag Generator","Social Media Post Generator",
      "Twitter Character Counter","Emoji Keyboard"
    ]
  },

  "everyday": {
    title: "🏠 Everyday Life & Misc Tools",
    icon: "bi-stars",
    tools: [
      "QR Code Generator","Barcode Generator","To-Do List / Daily Planner","Grocery List Maker",
      "Health Tracker","BMI Calculator","Calorie Calculator","Ovulation / Pregnancy Calculator",
      "Baby Growth Chart Calculator","Birthday Reminder Tool","Random Decision Maker (Spin Wheel)",
      "Flip a Coin Simulator","Dice Roller Simulator","Random Number Generator",
      "Lottery Number Generator","Business Name Generator","Language Translator",
      "Wedding Invitation Generator","Horoscope / Zodiac Tool","Leap Year Checker",
      "Name to Numerology Calculator"
    ]
  }
};


// ===== Rendering =====
window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("toolsGrid");
  const toolDropdown = document.getElementById("toolSelect");

  if (!grid) return;

  for (let key in siteCategories) {
    const cat = siteCategories[key];

    // Category card container
    const catDiv = document.createElement("div");
    catDiv.className = "category-card";

    // Category title
    catDiv.innerHTML = `
      <div class="category-heading">
        <i class="bi ${cat.icon}"></i> ${cat.title}
      </div>
      <div class="row category-tools"></div>
    `;

    const toolsRow = catDiv.querySelector(".category-tools");

    // Tools grid
    cat.tools.forEach(tool => {
      const col = document.createElement("div");
      col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
      col.innerHTML = `
        <div class="tool-card text-center" data-category="${key}">
          <i class="bi bi-tools"></i>
          <h6 class="mt-2">${tool}</h6>
        </div>`;
      toolsRow.appendChild(col);

      // Populate tool dropdown
      if(toolDropdown) {
        const opt = document.createElement("option");
        opt.value = tool;
        opt.textContent = tool;
        toolDropdown.appendChild(opt);
      }
    });

    grid.appendChild(catDiv);
  }
});
