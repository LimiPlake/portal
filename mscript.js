function visitWApp(app) {
  const links = {
    classroom: "https://classroom.google.com",
    drive: "https://drive.google.com",
    lessons: "lessons.html",
    quizzes: "quizzes.html",
    calculator: "calculator.html",
    pinpicker: "pinpicker.html",
    typing: "https://www.typing.com"
  };

  if (links[app]) {
    window.open(links[app], "_blank");
  }
}
