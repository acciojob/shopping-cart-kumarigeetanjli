//your code here
var itemName = document.getElementById("item-name-input");
var itemQuantity = document.getElementById("item-qty-input");
var itemPrice = document.getElementById("item-price-input");

var tbody = document.querySelector("tbody");

var grandTotal = document.getElementById("total");
var totalSoFar = 0;

var addItem = document.querySelector("#add");

addItem.addEventListener("click", (event) => {
  // otherwise it will submit the form
  event.preventDefault();

  let newRow = document.createElement("tr");

  let name = document.createElement("td");
  name.innerText = itemName.value;
  name.classList.add("item");
  newRow.append(name);

  let price = document.createElement("td");
  price.innerText = itemPrice.value;
  newRow.append(price);
  price.classList.add("price");

  let quantity = document.createElement("td");
  quantity.innerText = itemQuantity.value;
  newRow.append(quantity);

  // is valid item
  if (itemName.value && itemQuantity.value && itemPrice.value) {
    let total = document.createElement("td");
    total.innerText = itemPrice.value * itemQuantity.value;
    newRow.append(total);

    tbody.append(newRow);

    totalSoFar += Number(total.innerText);
    grandTotal.innerHTML = "Total Ammount " + totalSoFar + " $";
  }

  // reset
  itemName.value = "";
  itemQuantity.value = "";
  itemPrice.value = "";
});
