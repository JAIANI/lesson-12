// delete button after click
function deleteButton() {
  var button = document.getElementById("delete-btn");
  button.parentNode.removeChild(button);
}
// refresh page after click
function refresh() {
  window.location.reload();
}
// add image
const image = document.createElement("img");
document.body.prepend(image);
image.src = " https://picsum.photos/1400/800";
image.classList.add("photos");
console.log(image);
// // change title after click
