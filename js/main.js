// Localstorage
let localColors = localStorage.getItem("colors_option");
if (localColors !== null) {
  document.body.style.setProperty(
    "--main-color",
    localStorage.getItem("colors_option")
  );
}

// document.addEventListener("DOMContentLoaded", function () {
//   //The first argument are the elements to which the plugin shall be initialized
//   //The second argument has to be at least a empty object or a object with your desired options
//   OverlayScrollbars(document.querySelectorAll("body"), {});
// });

// let modeStorage = localStorage.getItem("dark_mode");
// if (modeStorage !== null) {
//   document.body.classList.add("dark");
// } else {
//   document.body.classList.remove("dark");
// }

// Typewriter Effect
let text =
    "I design and code modern & Interactive websites, and I love what I do.",
  place = document.querySelector(".typewriter"),
  i = 0;

window.onload = function typeWriter() {
  let theFun = setInterval(function () {
    place.textContent += text[i];
    i = i + 1;

    if (i > text.length - 1) {
      clearInterval(theFun);
    }
  }, 100);
};

// Smooth Scroll
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");
const topLink = document.querySelector(".goTop");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 1000) {
    topLink.classList.add("show-top");
  } else {
    topLink.classList.remove("show-top");
  }
});

// Set the smooth
const scrollLinks = document.querySelectorAll(".scroll");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // this.classList.add('active')

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// Toggle Settings Box
const box = document.querySelector(".settings-box");
const gear = document
  .querySelector(".gear")
  .addEventListener("click", function () {
    box.classList.toggle("hide");
  });

// Images Popups
// let works = document.querySelectorAll('.grid img')
// works.forEach(img => {
//     img.addEventListener('click', (e) => {
//         let overlay = document.createElement('div')
//         overlay.className = 'overlay'
//         document.body.appendChild(overlay)

//         let popup = document.createElement('div')
//         popup.className = 'popup'

//         if(img.alt !== null){
//             let title = document.createElement('h3')
//                 text = document.createTextNode(img.alt)
//             title.appendChild(text)
//             popup.appendChild(title)
//         }

//         let popImg = document.createElement('img')
//         popImg.src = img.src
//         popup.appendChild(popImg)
//         document.body.appendChild(popup)

//         let close = document.createElement('span')
//             closeText = document.createTextNode('X')
//         close.className = 'close'
//         close.appendChild(closeText)
//         popup.appendChild(close)
//     })
// })

// Close Popup
document.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentNode.remove();
    document.querySelector(".overlay").remove();
  }
});

// Switch Website Color
const darkBtn = document.querySelector(".settings-box .status .dark");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Set localStorage
  // localStorage.setItem("dark_mode", document.body.class("dark"));
});

// Show Menu
const menuBtn = document
  .querySelector(".menu")
  .addEventListener("click", () => {
    document.querySelector(".nav ul").classList.toggle("show-ul");
  });

// Colors options
const arrColors = document.querySelectorAll(".colors ul li");

arrColors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.body.style.setProperty("--main-color", e.target.dataset.color);

    // Set localStorage
    localStorage.setItem("colors_option", e.target.dataset.color);

    // Active class
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
