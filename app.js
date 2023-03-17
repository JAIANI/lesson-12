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
// about country
function renderCountries(arr) {
  const renderedHtml = arr
    .map((el) => {
      return `
		<div class="country">
			<img src="${el.flags.png}" alt="${el.flags.alt}" />
			<h3>${el.name.official}</h3>
			<div class="btns">
				<button class="btn see-more">see more info</button>
				<button class="btn remove-card">remove </button>
			</div>
			<table class="hidden">
				<tbody>
					<tr>
						<th>capital</th>
						<td>${el.capital.join(", ")}</td>
					</tr>
					<tr>
						<th>area</th>
						<td>${el.area}</td>
					</tr>
					<tr>
						<th>population</th>
						<td>${el.population}</td>
					</tr>
				</tbody>
			</table>
		</div>
		`;
    })
    .join("");
  console.log(renderedHtml);
  countriesSection.innerHTML = renderedHtml;
  const removeBtns = countriesSection.querySelectorAll(".remove-card");
  const seeMoreBtns = countriesSection.querySelectorAll(".see-more");

  console.log(removeBtns, seeMoreBtns);

  seeMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.closest(".country"));
      const table = btn.closest(".country").querySelector("table");
      console.log(table);

      const table2 = btn.parentElement.nextElementSibling;
      console.log(table2);

      table.classList.toggle("hidden");
    });
  });

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.closest(".country"));
      console.log(btn.parentElement.parentElement);
      btn.closest(".country").remove();
    });
  });
}
renderCountries(countries);
