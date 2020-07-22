const title = document.querySelector("#title");

function handleClick(event) {
  title.style.color = "blue";
  console.log(event);
}

title.addEventListener("click", handleClick);
