const userData = localStorage.getItem("user");

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const FIFTEEN_MINUTES = 15 * MINUTE;

if (!userData) {
  window.location.href = "index.html";
} else {
  const data = JSON.parse(userData);
  const NOW = Date.now();

  if (NOW - data.time > FIFTEEN_MINUTES) {
    localStorage.removeItem("user");
    window.location.href = "index.html";
  }
}

function visitWApp(app) {
  const links = {
    classroom: "https://classroom.google.com",
    drive: "https://drive.google.com",
    lessons: "https://lessons.limimake.limiplake.com",
    quizzes: "https://qz.limimake.limiplake.com",
    calculator: "https://www.theonlinecalculator.com/",
    pinpicker: "https://pinlp.limiplake.com",
    typing: "https://typing.com"
  };

  if (Object.hasOwn(links, app)) {
    window.open(links[app], "_blank", "noopener,noreferrer");
  }
}

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", logout);

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
