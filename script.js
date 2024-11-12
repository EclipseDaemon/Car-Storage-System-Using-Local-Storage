const addBtn = document.getElementById("addbtn");
const carInput = document.getElementById("carInput");
const addedValue = document.getElementById("addedvalue");
const removeCar = document.getElementById("removeCar");

removeCar.addEventListener("click", (e) => {
  e.preventDefault();
  const cars = localStorage.getItem("Cars");
  if (cars) {
    const confirmation = confirm(
      "Are you sure you want to delete cars from local storage?"
    );
    if (confirmation) {
      localStorage.removeItem("Cars");
      alert("Cars Removed");
      loadCars();
      carInput.value = "";
    } else {
      alert("Action Cancel");
    }
  } else {
    alert("Cars not present in local storage");
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newCar = carInput.value.trim();

  if (!newCar) {
    alert("Please Enter Car !");
  } else {
    const Cars = JSON.parse(localStorage.getItem("Cars")) || [];
    if (Cars.some((Car) => Car.toLowerCase() === newCar.toLowerCase())) {
      alert("Cars already present");
      carInput.value = "";
    } else {
      const formatedCar =
        newCar.charAt(0).toUpperCase() + newCar.slice(1).toLowerCase();
      Cars.push(formatedCar);
      localStorage.setItem("Cars", JSON.stringify(Cars));
      carInput.value = "";
    }
  }
  loadCars();
});

function loadCars() {
  addedValue.innerHTML =
    JSON.parse(localStorage.getItem("Cars")) || "No Cars Present";
}

window.onload = () => {
  loadCars();
};
