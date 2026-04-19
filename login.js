const btn = document.getElementById("loginactivate");
btn.addEventListener("click", login);

function login() {
  const pin = document.getElementById("pinf").value;
  const pass = document.getElementById("passf").value;

  document.getElementById("errfld").innerText =
    "PIN: " + pin + " | Pass: " + pass;
}
