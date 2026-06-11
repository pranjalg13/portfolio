function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";

  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("blue");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  
  const subject = encodeURIComponent("Something you want to talk about?!");
  const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);
  
  window.location.href = `mailto:pranjalgoyal13@gmail.com?subject=${subject}&body=${body}`;
});

