const collectionName = document.querySelectorAll(".collections-names__btn");
let activeCollectionName = document.querySelector(
  ".collections-names__btn_active"
);

function choseCollectionName(collection) {
  activeCollectionName.classList.remove("collections-names__btn_active");
  collection.classList.add("collections-names__btn_active");
  activeCollectionName = collection;
}

collectionName.forEach((collection) => {
  collection.addEventListener("click", () => {
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
