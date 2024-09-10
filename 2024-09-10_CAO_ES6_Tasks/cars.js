// cars.js
function addCarBrandsToApp(app) {
    const carBrands = ["BMW", "VW", "AUDI", "MB"];
    const carListItems = carBrands.map((brand) => `<li>${brand}</li>`);
    const carListHtml = `<ul>${carListItems.join("")}</ul>`;
    app.innerHTML += carListHtml;
}

export default addCarBrandsToApp;
