var expandLinks = document.getElementsByClassName("expand-review");
for (var i = 0; i < expandLinks.length; i++) {
  expandLinks[i].addEventListener("click", function() {
    var expandedContent = this.parentNode.getElementsByClassName("expanded-content")[0];
    expandedContent.style.display = (expandedContent.style.display === "none") ? "block" : "none";
  });
}
