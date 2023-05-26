const Input = document.querySelector(".form__input")
const todo = document.getElementById("todo")
const TodoAll = document.getElementById("all")
const TodoActive = document.getElementById("active")
const TodoCompleted = document.getElementById("completed")
const TodoClear = document.querySelector(".todo__clear")
const nav = document.querySelector(".nav__list")
const theme = document.querySelector(".header__theme")
let checkBtn = document.querySelector(".btn")
let i = 0
let TodoCount = document.querySelector(".todo__count")
let completed = todo.childNodes.length - 1;



function inputEnter() {

  let InputInner = document.querySelector(".form__input").value
  let TodoItem = document.createElement("div");
  TodoItem.className = "todo__item";
  TodoItem.classList.add("todo__item--active")
  TodoItem.classList.add("swiper-slide")
  let TodoText = document.createElement("p");
  TodoText.className = "todo__text";
  TodoText.innerHTML = InputInner;
  let check = document.createElement("button");
  check.className = "btn-reset";
  check.classList.add("btn")
  let checkImg = document.createElement("div");
  checkImg.className = "todo__img"

  TodoItem.id = "todo-" + i;
  TodoText.id = "todo-" + i;
  check.id = "todo-" + i;
  check.type = "button"

  todo.appendChild(TodoItem)
  TodoItem.appendChild(TodoText)
  TodoItem.appendChild(check)
  check.appendChild(checkImg)






  check.addEventListener("click", function () {
    check.classList.add('todo__completed')
    TodoText.classList.add('todo__text--completed')
    TodoItem.classList.add('todo__item--completed')
    checkImg.classList.add('todo__img--completed')
    TodoItem.classList.remove('todo__item--active')
  })

  TodoAll.addEventListener("click", function () {
    TodoAll.classList.add("nav__btn--active")
    TodoActive.classList.remove("nav__btn--active")
    TodoCompleted.classList.remove("nav__btn--active")
    TodoItem.style.display = "block";
  })

  TodoActive.addEventListener("click", function () {
    TodoActive.classList.add("nav__btn--active")
    TodoAll.classList.remove("nav__btn--active")
    TodoCompleted.classList.remove("nav__btn--active")
    TodoItem.style.display = "block";
    if (TodoItem.classList.contains("todo__item--completed")) {
      TodoItem.style.display = "none";
    }

  })

  TodoCompleted.addEventListener("click", function () {
    TodoCompleted.classList.add("nav__btn--active")
    TodoAll.classList.remove("nav__btn--active")
    TodoActive.classList.remove("nav__btn--active")
    TodoItem.style.display = "block";
    if (TodoItem.classList.contains("todo__item--active")) {
      TodoItem.style.display = "none";
    }

  })

  TodoClear.addEventListener("click", function () {
    completed = todo.childNodes.length - 1;
    TodoCount.innerHTML = completed + " items left"
    if (TodoItem.classList.contains("todo__item--completed")) {
      TodoItem.remove()
    }
  })


}


theme.addEventListener("click", function () {
  let header = document.querySelector(".header")
  let todo = document.querySelector(".todo")
  let TodoContent = document.querySelector(".todo__content")




  if (header.classList.contains("darck-theme")) {
    header.classList.remove("darck-theme")
    TodoContent.classList.remove("darck-theme")
    nav.classList.remove("darck-theme")


    header.style.backgroundImage = "url(../img/bg-desktop-light.jpg)";
    todo.style.backgroundColor = "hsl(0deg, 0%, 98%)"
    Input.style.backgroundColor = "white"

  } else {
    header.classList.add("darck-theme")
    TodoContent.classList.add("darck-theme")
    nav.classList.add("darck-theme")

    header.style.backgroundImage = "url(../img/bg-desktop-dark.jpg)";
    todo.style.backgroundColor = "hsl(235, 21%, 11%)"
    Input.style.backgroundColor = "hsl(235, 24%, 19%)"
  }
})



Input.addEventListener("keydown", function (event) {










  if (event.keyCode === 13) {
    event.preventDefault();


    i += 1
    completed = todo.childNodes.length;
    TodoCount.innerHTML = completed + " items left"
    inputEnter()


  }


});











