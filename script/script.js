// Mobile nav functionality
const headerEl = document.querySelector(".header");

headerEl.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.id === "open") {
    headerEl.classList.add("nav-open");
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  } else if (e.target.id === "close" || e.target.localName === "a") {
    headerEl.classList.remove("nav-open");
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
  }
});

// Sticky nav
const bodyEl = document.querySelector("#body");

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    // console.log(entry);

    if (!entry.isIntersecting) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    root: null, //Null means viewport
    threshold: 0, // 0 triggers event as soon as sectionHeroEl leaves the viewport
    rootMargin: "-80px", // coresponds to the 8rem of height added in sticky in css
  }
);

observer.observe(sectionHeroEl);

//Automatic footer year
const footerYear = document.querySelector(".footer-year");

const year = new Date().getFullYear();

footerYear.innerHTML = year;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBSELITE

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
