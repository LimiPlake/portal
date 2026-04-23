function visitWApp(app) {
  const links = {
    classroom: "https://classroom.google.com",
    drive: "https://drive.google.com",
    lessons: "lessonslm.limiplake.com",
    quizzes: "quizzes.limiplake.com",
    calculator: "https://tinyurl.com/calculatorlp",
    pinpicker: "https://limiplake.github.io/limipoints/index.html",
    typing: "https://www.typing.com"
  };

  if (links[app]) {
    window.open(links[app], "_blank");
  }
}
