// let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let header = document.querySelector(".c-header");
let menuMobile = document.querySelector("#menuMobile");
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
let bodyPage = document.querySelector('body');

window.onscroll = function () {
  handleScrollTopHeader();
};

function handleScrollTopHeader() {
  let scrollTopHeader =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (scrollTopHeader > 50) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }
}

menuMobile.onclick = function () {
  menuMobile.classList.toggle("is-active");
  bodyPage.classList.toggle("hidden-scroll");
};

for (let i = 0; i < navBarList.length; i++) {
  navBarList[i].onclick = function () {
    menuMobile.classList.remove("is-active");
  };
}

for (let i = 0; i < showInfos.length; i++) {
  showInfos[i].onclick = function () {
    introContents[i].classList.toggle("is-show");
  };
}

//

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

const pointArr = [0, 1, 2];
pointArr.forEach(function (e) {
  pointList1Btn[e].onclick = function () {
    // console.log("e", e);
    clearPointList1();
    pointList1[e].classList.add("active");
  };

  pointList2Btn[e].onclick = function () {
    clearPointList2();
    pointList2[e].classList.add("active");
  };
  pointList3Btn[e].onclick = function () {
    clearPointList3();
    pointList3[e].classList.add("active");
  };
});

// for (let i = 0; i < pointList1.length; i++) {
//   pointList1Btn[e].onclick = function () {
//     // console.log("e", e);
//     clearPointList1();
//     pointList1[e].classList.add("active");
//   };

//   pointList2Btn[e].onclick = function () {
//     clearPointList2();
//     pointList2[e].classList.add("active");
//   };
//   pointList3Btn[e].onclick = function () {
//     clearPointList3();
//     pointList3[i].classList.add("active");
//   };
// }

// $('.p-point__btnMore').click(function() {
//   var itemCurrent = $(this).parent('.p-point__Item');
//   console.log('itemCurrent', itemCurrent);
//   itemCurrent.find('.p-point__info').fadeIn();
//   itemCurrent.siblings('.p-point__Item').find('.p-point__info').fadeOut();
// });

//
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  console.log("scrollY", scrollY);

  Array.prototype.slice.call(sections).forEach(function (current) {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
      console.log('sectionId', sectionId)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".c-header__nav a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else if (scrollY >= 6822) {
      document
        .querySelector(".c-header__nav a[href*=" + "video" + "]")
        .classList.add("active-link");
      document
        .querySelector(".c-header__nav a[href*=" + "intro" + "]")
        .classList.remove("active-link");
    } else {
      document
        .querySelector(".c-header__nav a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//
let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if (isIE11) {
  $(document).ready(function () {
    $(".c-header__link").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $("html,body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          1200,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
}
