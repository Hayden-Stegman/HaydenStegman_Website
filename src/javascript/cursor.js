const cursorDot = document.querySelector("#cursor-dot");

if (window.innerWidth >= 960) {
  document.addEventListener("mousemove", (e) => {
    cursorDot.setAttribute(
      "style",
      "top: " + (e.pageY - 5) + "px; left: " + (e.pageX - 5) + "px;"
    );
  });
}