const Input = document.querySelector(".form__input")
const todo = document.getElementById("todo")
const TodoAll = document.getElementById("all")
const TodoActive = document.getElementById("active")
const TodoCompleted = document.getElementById("completed")
const TodoClear = document.querySelector(".todo__clear")
const nav = document.querySelector(".nav")
const theme = document.querySelector(".header__theme")
let checkBtn = document.querySelector(".btn")
let i = 0
let TodoCount = document.querySelector(".todo__count")
let completed = todo.childNodes.length - 1;



function inputEnter() {
  let InputInner = document.querySelector(".form__input").value

  let TodoItem = document.createElement("li");
  TodoItem.className = "todo__item";
  TodoItem.classList.add("todo__item--active")


  let TodoText = document.createElement("label");
  TodoText.className = "todo__text";
  TodoText.innerHTML = InputInner;

  let check = document.createElement("input");
  check.className = "todo__check";
  check.type ="checkbox"

  let TodoClose = document.createElement("button");
  TodoClose.className = "todo__close";
  TodoClose.type = "button"
  TodoClose.classList.add("btn-reset")

  TodoItem.id = "todo-" + i;
  TodoText.id = "todo-" + i;
  check.id = "todo-" + i;
  TodoClose.id = "todo-" + i;

  todo.appendChild(TodoItem)
  TodoItem.appendChild(check)
  TodoItem.appendChild(TodoText)
  TodoItem.appendChild(TodoClose)






  check.addEventListener("click", function () {
    if (check.classList.contains("todo__completed")) {
      check.classList.remove('todo__completed')
      TodoText.classList.remove('todo__text--completed')
      TodoItem.classList.remove('todo__item--completed')
      TodoItem.classList.add('todo__item--active')
    } else {
      check.classList.add('todo__completed')
      TodoText.classList.add('todo__text--completed')
      TodoItem.classList.add('todo__item--completed')
      TodoItem.classList.remove('todo__item--active')
    }

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
      completed = todo.childNodes.length - 1;
      TodoCount.innerHTML = completed + " items left"

    }
  })

  TodoClose.addEventListener("click", function () {
    TodoItem.remove()
    completed = todo.childNodes.length - 1;
    TodoCount.innerHTML = completed + " items left"
  })


}


theme.addEventListener("click", function () {
  let header = document.querySelector(".header")
  let todo = document.querySelector(".todo")
  let TodoContent = document.querySelector(".todo__content")
  let NavList = document.querySelector(".nav__list")



  if (header.classList.contains("darck-theme--bg")) {
    theme.classList.remove("darck-theme--icon")
    TodoContent.classList.remove("darck-theme")
    nav.classList.remove("darck-theme")
    header.classList.remove("darck-theme--bg")
    todo.classList.remove("darck-theme--todo")
    Input.classList.remove("darck-theme--text")
    NavList.classList.remove("darck-theme")

  } else {
    theme.classList.add("darck-theme--icon")
    TodoContent.classList.add("darck-theme")
    nav.classList.add("darck-theme")
    header.classList.add("darck-theme--bg")
    todo.classList.add("darck-theme--todo")
    Input.classList.add("darck-theme--text")
    NavList.classList.add("darck-theme")
  }
})



Input.addEventListener("keydown", function (event) {
  let InputInner = document.querySelector(".form__input").value

  if (event.keyCode === 13) {
    event.preventDefault();

    if (InputInner.length > 1) {
      i += 1
      completed = todo.childNodes.length;
      TodoCount.innerHTML = completed + " items left"
      inputEnter()
      event.preventDefault();
      this.value = '';
    }


  }


});











