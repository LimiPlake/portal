const btn = document.getElementById("loginactivate");
btn.addEventListener("click", login);

async function login() {
  const pin = document.getElementById("pinf").value;
  const pass = document.getElementById("passf").value;
  const err = document.getElementById("errfld");

  try {
    const res = await fetch("users.json");
    const users = await res.json();

    // check if PIN exists
    if (users[pin] && users[pin].passcode === pass) {
      // success → go to portal
      window.location.href = "mainpage.html";
    } else {
      // wrong login
      err.innerText = "Wrong PIN or Passcode";
    }

  } catch (e) {
    err.innerText = "Error loading users";
  }
}
