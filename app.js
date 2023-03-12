function deleteButton() {
  var button = document.getElementById("delete-btn");
  button.parentNode.removeChild(button);
}
function refresh() {
  window.location.reload();
}

const image = document.createElement("img");
document.body.appendChild(image);
image.src = " https://picsum.photos/1400/800";
image.classList.add("photos");
console.log(image);
