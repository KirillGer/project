const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentNode;
    const isActive = accordionItem.classList.contains("active");
    
    accordionHeaders.forEach(header => {
      header.parentNode.classList.remove("active");
    });
    
    if (!isActive) {
      accordionItem.classList.add("active");
    }
  });
});
