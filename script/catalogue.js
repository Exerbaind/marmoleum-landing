const collectionName = document.querySelectorAll(".collections-names__btn");
let activeCollectionName = document.querySelector(
  ".collections-names__btn_active"
);
const collections = [...document.querySelectorAll(".collection")];

function choseCollectionName(collection) {
  activeCollectionName.classList.remove("collections-names__btn_active");
  collection.classList.add("collections-names__btn_active");
  activeCollectionName = collection;
}

collectionName.forEach((collection, index) => {
  collection.addEventListener("click", () => {
    for (let i = 0; i < collections.length; i++) {
      collections[i].classList.remove("first-order");
    }
    collections[index].classList.add("first-order");
    choseCollectionName(collection);
  });
});

// Раскрытие каталога

const catalogueHandler = document.querySelector(".catalogue__handler");
const catalogueList = document.querySelector(".catalogue__list");
const handlerArrow = document.querySelector(".handler__icon");

catalogueHandler.addEventListener("click", () => {
  catalogueList.classList.toggle("catalogue__list_active");
  handlerArrow.classList.toggle("handler__icon_active");
});

// Выбор толщин

const showWidthTwoAndHalf = document.querySelector(
  ".collection.real .width_two-half"
);
const showWidthTwo = document.querySelector(".collection.real .width_two");
const showWidthAll = document.querySelector(".collection.real .width_all");

const realArticles = [
  ...document.querySelectorAll(".real-collection .collection__item"),
];

showWidthTwoAndHalf.addEventListener("click", () => {
  realArticles.forEach((article) => {
    article.classList.remove("collection__item_hide");
  });
  document
    .querySelectorAll(".collection.real .collection__width")
    .forEach((width) => {
      width.classList.remove("collection__width_active");
    });
  showWidthTwoAndHalf.classList.add("collection__width_active");
});

showWidthTwo.addEventListener("click", () => {
  realArticles.forEach((article) => {
    if (article.classList.contains("two")) {
      article.classList.remove("collection__item_hide");
    } else {
      article.classList.add("collection__item_hide");
    }
    document
      .querySelectorAll(".collection.real .collection__width")
      .forEach((width) => {
        width.classList.remove("collection__width_active");
      });
    showWidthTwo.classList.add("collection__width_active");
  });
});

showWidthAll.addEventListener("click", () => {
  realArticles.forEach((article) => {
    article.classList.remove("collection__item_hide");
  });
  document
    .querySelectorAll(".collection.real .collection__width")
    .forEach((width) => {
      width.classList.remove("collection__width_active");
    });
  showWidthAll.classList.add("collection__width_active");
});
