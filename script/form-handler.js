const form = document.querySelector(".pop-up");
const formHandler = [...document.querySelectorAll(".formHandler")];
const closeForm = document.querySelector(".form__close");

formHandler.forEach((item) => {
  item.addEventListener("click", () => {
    form.classList.add("pop-up_active");
  });
});

closeForm.addEventListener("click", () => {
  form.classList.remove("pop-up_active");
});
