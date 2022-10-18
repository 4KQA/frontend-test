function showReferences() {
    var x = document.getElementById("reference_content");
    // Hvis den er væk...
    if (x.style.display === "none") {
    // Viser element hvis den er væk (block)
      x.style.display = "block";
    // Gemmer den hvis den er displayed (none)
    } else {
      x.style.display = "none";
    }
  }



