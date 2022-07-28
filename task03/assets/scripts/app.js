let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let introContents = $$(".p-intro__content > a");
let showInfos = $$(".p-intro__showInfo");
let pointList1 = $$(".p-point__list1 > .p-point__wrapItem");
let pointList2 = $$(".p-point__list2 > .p-point__wrapItem");
let pointList3 = $$(".p-point__list3 > .p-point__wrapItem");
let navBarList = $$(".c-header__nav > ul > li > a");
let pointList1Btn = $$(
  ".p-point__list1 > .p-point__wrapItem > .p-point__Item > .p-point__btnMore"
);
let pointList2Btn = $$(
  ".p-point__list2 > .p-point__wrapItem > .p-point__Item > .p-point__btnMore"
);
let pointList3Btn = $$(
  ".p-point__list3 > .p-point__wrapItem > .p-point__Item > .p-point__btnMore"
);


for (let i = 0; i < showInfos.length; i++) {
  showInfos[i].onclick = function () {
    introContents[i].classList.toggle("is-show");
  };
}

let clearPointList1 = function () {
  for (let i = 0; i < pointList1.length; i++) {
    pointList1[i].classList.remove("active");
  }
};
let clearPointList2 = function () {
  for (let i = 0; i < pointList2.length; i++) {
    pointList2[i].classList.remove("active");
  }
};
let clearPointList3 = function () {
  for (let i = 0; i < pointList3.length; i++) {
    pointList3[i].classList.remove("active");
  }
};

for (let i = 0; i < pointList1.length; i++) {
  pointList1Btn[i].onclick = function () {
    clearPointList1();
    pointList1[i].classList.add("active");
  };

  pointList2Btn[i].onclick = function () {
    clearPointList2();
    pointList2[i].classList.add("active");
  };

  pointList3Btn[i].onclick = function () {
    clearPointList3();
    pointList3[i].classList.add("active");
  };
}

/*===== MENU SHOW/HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.querySelector(".c-header__menu");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-active");
    navMenu.classList.toggle("is-showmenu");
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        navMenu.classList.remove("is-showmenu");
        navToggle.classList.remove("is-active");
    }
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".c-header__link");
function linkAction() {
    // When we click on each link, we remove the is-showmenu class
    navToggle.classList.toggle("is-active");
    navMenu.classList.toggle("is-showmenu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL TOP HEADER ===============*/
const header = document.querySelector(".c-header");
function handleScrollTopHeader() {
    let scrollTopHeader =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
    if (scrollTopHeader > 50) {
        header.classList.add("is-animate");
    } else {
        header.classList.remove("is-animate");
    }
}

window.onscroll = function () {
    handleScrollTopHeader();
};

/*=============== SCROLL ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".c-header__nav a[href*=" + sectionId + "]")
                .classList.add("is-active");
        } else {
            document
                .querySelector(".c-header__nav a[href*=" + sectionId + "]")
                .classList.remove("is-active");
        }
    });
}
window.addEventListener("scroll", scrollActive);