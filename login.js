// check if already logged in (with expiry)
const userData = localStorage.getItem("user");

if (userData) {
  const data = JSON.parse(userData);

  const NOW = Date.now();
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const fifteenMinutes = 15 * MINUTE;

  if (NOW - data.time <= fifteenMinutes) {
    window.location.href = "mainpage.html";
  } else {
    localStorage.removeItem("user");
  }
}

const btn = document.getElementById("loginactivate");
btn.addEventListener("click", login);

async function login() {
  const pin = document.getElementById("pinf").value;
  const pass = document.getElementById("passf").value;
  const err = document.getElementById("errfld");

  err.innerText = "";

  try {
    const res = await fetch("users.json");
    const users = await res.json();

    if (users[pin] && users[pin].passcode === pass) {
      const name = users[pin].name;

      const ok = confirm("Is this you?\n\n" + name);

      if (ok) {
        // save user + time
        localStorage.setItem("user", JSON.stringify({
          pin: pin,
          name: name,
          time: Date.now()
        }));

        window.location.href = "mainpage.html";
      } else {
        err.innerText = "Login cancelled";
      }

    } else {
      err.innerText = "Wrong PIN or Passcode";
    }

  } catch (e) {
    err.innerText = "Error loading users";
    console.error(e);
  }
}
