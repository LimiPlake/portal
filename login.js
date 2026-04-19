const btn = document.getElementById("loginactivate");

btn.addEventListener("click", login);

function login() {
  document.getElementById("errfld").innerText = "Button clicked!";
}
