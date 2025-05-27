function toggleLanguage() {
  const projectsintroen = document.getElementById("projects-intro-en");
  const projectsintromn = document.getElementById("projects-intro-mn");

  const projectsEnText1 = document.getElementById("projects-en-text-1");
  const projectsMnText1 = document.getElementById("projects-mn-text-1");

  const projectsEnText2 = document.getElementById("projects-en-text-2");
  const projectsMnText2 = document.getElementById("projects-mn-text-2");

  const projectsEnText3 = document.getElementById("projects-en-text-3");
  const projectsMnText3 = document.getElementById("projects-mn-text-3");

  const projectsEnText4 = document.getElementById("projects-en-text-4");
  const projectsMnText4 = document.getElementById("projects-mn-text-4");

  const projectsEnText5 = document.getElementById("projects-en-text-5");
  const projectsMnText5 = document.getElementById("projects-mn-text-5");

  const toggleButton = document.getElementById("lang-toggle");

  toggleText(projectsintroen, projectsintromn);
  toggleText(projectsEnText1, projectsMnText1);
  toggleText(projectsEnText2, projectsMnText2);
  toggleText(projectsEnText3, projectsMnText3);
  toggleText(projectsEnText4, projectsMnText4);
  toggleText(projectsEnText5, projectsMnText5);

  if (toggleButton.innerHTML === "Монгол хэл рүү шилжих") {
    toggleButton.innerHTML = "Switch to English";
  } else {
    toggleButton.innerHTML = "Монгол хэл рүү шилжих";
  }
}

function toggleText(enText, mnText) {
  if (enText.style.display === "none") {
    enText.style.display = "block";
    mnText.style.display = "none";
  } else {
    enText.style.display = "none";
    mnText.style.display = "block";
  }
}
