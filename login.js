// check if already logged in (with expiry)
const userData = localStorage.getItem("user");

if (userData) {
  const data = JSON.parse(userData);

  const NOW = Date.now();
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const FIFTEEN_MINUTES = 15 * MINUTE;

  if (NOW - data.time <= FIFTEEN_MINUTES) {
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
    const res = await fetch("https://appslp-api.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pin: pin,
        pass: pass
      })
    });

    const result = await res.json();

    if (result.success) {
      const name = result.name;

      const ok = confirm("Is this you?\n\n" + name);

      if (ok) {
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
    err.innerText = "Error connecting to server";
    console.error(e);
  }
}
