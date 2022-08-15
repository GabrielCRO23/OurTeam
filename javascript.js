const SELECT = document.querySelectorAll(".plus-icon");
const test = document.querySelector("#JAVASCRIPTTEST");
const polygon = document.querySelector(".polygon");

SELECT.forEach((element) => {
  element.addEventListener("click", function () {
    test.style.display = test.style.display === "flex" ? "none" : "flex";
    polygon.style.display = polygon.style.display === "flex" ? "none" : "flex";
  });
});
