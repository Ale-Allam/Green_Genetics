let tabVidMouseenter = document.querySelectorAll(".vids-tabs div");
let mainVid = document.querySelectorAll(".video-container video");
let myPexplain = document.querySelector(".explain");
let vidIdTab = document.querySelectorAll(".vid-id div");

tabVidMouseenter.forEach((tap) => {
  // tap.onmouseleave = function () {
  //   myPexplain.innerText=""
  // }
  tap.onmouseenter = function () {
    tabVidMouseenter.forEach((tap) => {
      tap.classList.remove("active");
    });
    mainVid.forEach((vid) => {
      if (this.dataset.id === vid.id) {
        mainVid.forEach((vid) => {
          vid.classList.remove("active-vid");
          vid.pause();
        });
        vid.play();
        vid.classList.add("active-vid");
      }
    });
    this.classList.add("active");
    if (this.dataset.id === "vid1") {
      myPexplain.innerText = "Our Company have big experience with plants";
    } else if (this.dataset.id === "vid2") {
      myPexplain.innerText = "We can help you build your own DREAM";
    } else if (this.dataset.id === "vid3") {
      myPexplain.innerText =
        "We can teach you how to be professional with all type of plants";
    } else if (this.dataset.id === "vid4") {
      myPexplain.innerText = "We also help youths to have a job";
    }
  };
});
// h e a d e r'
let head = document.querySelector(".head-head");
var lastSrolltop = 0;
window.addEventListener("scroll", () => {
  var scrollTop = window.scrollY;
  if (scrollTop > lastSrolltop) {
    head.style.transform="translateY(-100%)"
  }else {
    head.style.transform="translateY(0%)"
  }
  lastSrolltop = scrollTop;
})
// create spans
let addressS = document.querySelectorAll(".vids-tabs .rotate-letters");
let addressSpans = addressS.forEach((e) => createSpans(e));

// creating a function to put each letter inside element in span
function createSpans(text) {
  let styleElement = text.innerText
    .split("")
    .map((e) => `<span>${e}</span>`)
    .join("");
  text.innerHTML = styleElement;
  for (let i = 0; i < 5; i++) {
    addressS[0].children[i].style.color = "#B2D2A4";
  }
}
// creating a function to put each letter inside element in span

// coloring "GREEN" WORD

// burger menue
let openMenue = document.querySelector(".burger");
let closeMenue = document.querySelector(".genetics-links .fa-xmark");
let geneticsLinks = document.querySelector(".genetics-links");
// open it
openMenue.onclick = () => {
  geneticsLinks.classList.add("show-genetics-links");
};
// close it
closeMenue.onclick = () => {
  geneticsLinks.classList.remove("show-genetics-links");
};
// burger menue
let showHelight = document.querySelectorAll(".genetics-links .links ");

// function on event to dynmic links height
function dynamicFunction() {
  // burger menue arrow
  // geneticsLinks.classList.add("dynamic-genetics-inks");
  // console.log(document.querySelector(".dynamic-genetics-inks"))
  if (this.children[1].getBoundingClientRect().height === 0) {
    this.children[1].style.height = `${
      this.children[1].children[0].getBoundingClientRect().height
    }px`;
    this.children[0].children[1].style.rotate = "180deg";
  } else {
    this.children[0].children[1].style.rotate = "0deg";
    this.children[1].style.height = "0";
  }
}

// add all settings to links on page load and also on page resize
window.onload = () => {
  if (window.innerWidth <= 1023) {
    showHelight.forEach((links) => {
      links.classList.add("dynamic-links");
    });

    showHelight.forEach((links) => {
      links.classList.remove("static-links");
    });
    let allDynamicLinks = document.querySelectorAll(".dynamic-links");
    allDynamicLinks.forEach((links) => (links.children[1].style.height = "0"));
    allDynamicLinks.forEach((links) => {
      links.addEventListener("click", dynamicFunction, false);
    });
  } else {
    showHelight.forEach((links) => {
      links.classList.remove("dynamic-links");
      links.removeEventListener("click", dynamicFunction, false);
    });
    //
    showHelight.forEach((links) => {
      links.classList.add("static-links");
    });
    let allStaticLinks = document.querySelectorAll(".static-links");
    allStaticLinks.forEach((links) => {
      links.children[1].style.height = `calc(${
        links.children[1].children[0].getBoundingClientRect().height
      }px + 20px)`;
    });
  }
};
// add all settings to links on page load and also on page resize
window.onresize = () => {
  if (window.innerWidth <= 1023) {
    showHelight.forEach((links) => {
      links.classList.add("dynamic-links");
    });
    //
    showHelight.forEach((links) => {
      links.classList.remove("static-links");
    });
    let allDynamicLinks = document.querySelectorAll(".dynamic-links");
    allDynamicLinks.forEach((links) => (links.children[1].style.height = "0"));
    allDynamicLinks.forEach((links) => {
      links.addEventListener("click", dynamicFunction, false);
    });
  } else {
    showHelight.forEach((links) => {
      links.classList.remove("dynamic-links");
      links.removeEventListener("click", dynamicFunction, false);
    });
    //
    showHelight.forEach((links) => {
      links.classList.add("static-links");
    });
    let allStaticLinks = document.querySelectorAll(".static-links");
    allStaticLinks.forEach((links) => {
      links.children[1].style.height = `calc(${
        links.children[1].children[0].getBoundingClientRect().height
      }px + 20px)`;
    });
  }
};

// hidden and show sectioins on scroll
let observer = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("show-observe");
    } else {
      item.target.classList.remove("show-observe");
    }
  });
});

let hiddenElements = document.querySelectorAll(".hidden-observe");
hiddenElements.forEach((el) => observer.observe(el));

// footer copy right
const d = new Date();
// let copyRight = document.querySelector(".copy-right span").innerText=`${d.getFullYear()}`;

// filter header links for link page
const filterCategory = document.querySelectorAll('.link a');
let categoryArr = [];
// filterCategory.forEach(e => {
//   e.addEventListener('click', function () {
//     e.href = `links.html#${e.innerText}`
//   })
// })