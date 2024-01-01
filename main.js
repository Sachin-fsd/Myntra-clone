let size = document.querySelectorAll(".size");

for (let x of size) {
  x.addEventListener("click", (event) => {
    for (y of size) {
      y.classList.remove("clicked_size");
    }

    event.target.classList.add("clicked_size");
    console.log(event.target);
  });
}

let address = document.getElementById("submit");
let name_check = /^[A-Za-z0-9 ]{2,}$/;
let phone_check = /^[0-9]{10}$/;

address.addEventListener("click", (e) => {
//   e.preventDefault();
  let inputs = document.querySelectorAll("form input");
  let obj = {};
  for (let x of inputs) {
    if (x.placeholder !== "Mobile No") {
      if (!name_check.test(x.value)) {
        alert("invalid Details");
        return;
      }
    } else {
      if (!phone_check.test(x.value)) {
        alert("Invalid details");
        return;
      }
    }
  }

  for (let x of inputs) {
    obj[x.placeholder] = x.value;
  }
  console.log(obj);

});

//payment
