# TODO List: development strategy

Building this site one step at a time

---

## 0. Setup

- `index.html`: basic layout and references to external files
- `style.css`: css style attributes of the HTML elements

---

## 2. Data & Log

- `data/todoList.js` & `log.js`

---

## 3. User Story: `Add todo`

- A user can add a new TODO task to the list by typing the new task and pressing enter
- I wrote the code in `data/todoList.js`
- The handler function stores in the `todoList` object the new task typed in the input field, and renders the list to the screen. The handler is connected to the UI with a `keydown` for `Enter` event.