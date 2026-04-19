function login() {
  const pin = document.getElementById("pinf").value;
  const pass = document.getElementById("passf").value;

  document.getElementById("errfld").innerText =
    "PIN: " + pin + " | Pass: " + pass;
}
