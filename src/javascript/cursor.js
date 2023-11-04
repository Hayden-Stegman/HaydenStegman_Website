const cursorDot = document.querySelector(".cursorDot");
const cursorFollow = document.querySelector(".cursorFollow");

if (window.innerWidth >= 960) {
  document.addEventListener("mousemove", (e) => {
    cursorDot.setAttribute(
      "style",
      "top: " + (e.pageY - 3) + "px; left: " + (e.pageX - 3) + "px;"
    );
    cursorFollow.setAttribute(
      "style",
      "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
    );
  });
}
