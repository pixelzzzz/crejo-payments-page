function inputCardNumber(e) {
  if (e.key === "Backspace") return;

  const cardNumberLength = document.getElementById("form-card-number").value
    .length;
  if (
    cardNumberLength === 4 ||
    cardNumberLength === 9 ||
    cardNumberLength === 14
  ) {
    document.getElementById("form-card-number").value =
      document.getElementById("form-card-number").value + " ";
  }

  document.getElementById("card-number").value = document.getElementById(
    "form-card-number"
  ).value;
}

function inputCardName() {
  document.getElementById("card-name").value = document.getElementById(
    "form-card-name"
  ).value;
}

function inputCardEndDate(e) {
  if (e.key === "Backspace") return;

  const expiryStringLength = document.getElementById("valid-thru-input").value
    .length;
  if (expiryStringLength === 2) {
    document.getElementById("valid-thru-input").value =
      document.getElementById("valid-thru-input").value + "/";
  }

  document.getElementById("card-expiry").value = document.getElementById(
    "valid-thru-input"
  ).value;
}

function onSubmit() {
  alert(
    JSON.stringify({
      card_number: document.getElementById("form-card-number").value,
      card_name: document.getElementById("form-card-name").value,
      expiry: document.getElementById("valid-thru-input").value,
    })
  );
}
