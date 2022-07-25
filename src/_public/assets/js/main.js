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
  // navToggle.classList.toggle("is-active");
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

/*=============== SHOW MORE PRODUCT ===============*/
// ------- LIST 1 -------
let productList1 = document.querySelectorAll(
  ".p-product__list1 > .p-product__wrapitem"
);
let btn1List = document.querySelectorAll(
  ".p-product__list1 > .p-product__wrapitem > .p-product__item > .p-product__btn"
);

let clearProductList1 = function () {
  for (let i = 0; i < productList1.length; i++) {
    productList1[i].classList.remove("is-showmore");
  }
};

// ------- LIST 2 -------
let productList2 = document.querySelectorAll(
  ".p-product__list2 > .p-product__wrapitem"
);
let btn2List = document.querySelectorAll(
  ".p-product__list2 > .p-product__wrapitem > .p-product__item > .p-product__btn"
);

let clearProductList2 = function () {
  for (let i = 0; i < productList1.length; i++) {
    productList2[i].classList.remove("is-showmore");
  }
};

// ------- LIST 3 -------
let productList3 = document.querySelectorAll(
  ".p-product__list3 > .p-product__wrapitem"
);
let btn3List = document.querySelectorAll(
  ".p-product__list3 > .p-product__wrapitem > .p-product__item > .p-product__btn"
);

let clearProductList3 = function () {
  for (let i = 0; i < productList1.length; i++) {
    productList3[i].classList.remove("is-showmore");
  }
};

// --------------------
for (let i = 0; i < productList1.length; i++) {
  btn1List[i].onclick = function () {
    clearProductList1();
    productList1[i].classList.add("is-showmore");
  };

  btn2List[i].onclick = function () {
    clearProductList2();
    productList2[i].classList.add("is-showmore");
  };

  btn3List[i].onclick = function () {
    clearProductList3();
    productList3[i].classList.add("is-showmore");
  };
}

/*=============== SHOW CONTENT INTRO ===============*/
let showContent = document.querySelectorAll(".p-intro__showinfo");
let introContents = document.querySelectorAll(".p-intro__content > a");
for (let i = 0; i < showContent.length; i++) {
  showContent[i].onclick = function () {
    introContents[i].classList.toggle("is-showcontent");
  };
}

/*=============== RENDER QA CONTENT ===============*/
let qas = [
  {
    id: 1,
    title: "虫除け対策に直接体や環境に噴きかけても良いですか？",
    desc: "刺激が強過ぎる可能性がありますので、薄めて使用してください。また素材によっては変質(変色)するおそれがありますので注意してください。",
  },
  {
    id: 2,
    title: "体に使用する際の注意点は？",
    desc: "刺激作用があるため、目や目の周囲、粘膜等に付着しないように注意してください。",
  },
  {
    id: 3,
    title:
      "ハッカ油アイテムを作る際に使用する量は紹介されている量を守らないといけませんか？",
    desc: "紹介している量はあくまでも目安になります。ただし、これ以上の量を加えると刺激が強過ぎる可能性があるので注意してください。紹介している量はあくまでも目安になります。ただし、これ以上の量を加えると刺激が強過ぎる可能性があるので注意してください。",
  },
  {
    id: 4,
    title: "虫除け対策に直接体や環境に噴きかけても良いですか？",
    desc: "刺激が強過ぎる可能性がありますので、薄めて使用してください。また素材によっては変質(変色)するおそれがありますので注意してください。",
  },
  {
    id: 5,
    title: "使用期限はどのくらいですか？",
    desc: "パッケージ裏面に賞味期限を記載しています。遮光して、涼しい所に保管してください。刺激が強過ぎる可能性がありますので、薄めて使用してください。また素材によっては変質(変色)するおそれがありますので注意してください。",
  },
];

let qa_list = document.querySelector("#qa-list");

const renderQA = (qa) => {
  qa.forEach((e) => {
    let qal = `
          <dl class="p-qa__content">
            <dt class="p-qa__title">
              <figure>
                <img src="./assets/img/qa/qa_icon.png" alt="qa-icon">
              </figure>
              <p>${e.title}</p>
            </dt>
            <dd>
              ${e.desc}
            </dd>
          </dl>
        `;
    qa_list.insertAdjacentHTML("beforeend", qal);
  });
};
renderQA(qas);