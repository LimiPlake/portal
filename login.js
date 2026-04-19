console.log("JS LOADED");

const btn = document.getElementById("loginactivate");
btn.addEventListener("click", login);

async function login() {
  const pin = document.getElementById("pinf").value;
  const pass = document.getElementById("passf").value;
  const err = document.getElementById("errfld");

  try {
    const res = await fetch("users.json");
    console.log("fetch response:", res);

    const users = await res.json();
    console.log("users data:", users);

    if (users[pin] && users[pin].passcode === pass) {
      err.innerText = "SUCCESS";
      window.location.href = "mainpage.html";
    } else {
      err.innerText = "Wrong PIN or Passcode";
    }

  } catch (e) {
    console.error("ERROR:", e);
    err.innerText = "Error loading users";
  }
}
