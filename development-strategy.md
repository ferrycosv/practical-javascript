# TODO List: development strategy

Building this site one step at a time

---

## 0. Setup

- `index.html`: basic layout and references to external files
- `style.css`: css style attributes of the HTML elements

---

## 1. Data & Log

- `data/todoList.js` & `log.js`

---

## 2. User Story: `Add todo`

- A user can add a new TODO task to the list by typing the new task and pressing enter
- I wrote the code in `data/todoList.js`
- The handler function stores in the `todoList` object the new task typed in the input field and renders the list to the screen. The handler is connected to the UI with a `keydown` for `Enter` event.

---

## 3. User Story: `Change todo`

- A user can change the text of a TODO task directly on the list by typing the new task and pressing enter
- I wrote the code in `data/todoList.js` and `handler.js`
- The handler function stores in the `todoList` object the new value of the task changed in the input field and renders the list to the screen. The handler is connected to the UI with a `keydown` for `Enter` event and `onchange` event in case they are pending changes to save.

---

## 4. User Story: `Delete todo`

- A user can delete a TODO task directly on the list by clicking X icon on the selected task
- I wrote the code in `data/todoList.js` and `handler.js`
- The handler function deletes from the `todoList` object task selected by clicking the corresponding X icon and renders the updated list to the screen. The handler is connected to the UI with a `click` event.

---

## 5. User Story: `Toggle completed todo`

- A user can check or un-check a TODO task directly on the list by clicking V icon on the selected task
- I wrote the code in `data/todoList.js` and `handler.js`
- The handler function toggles the completed attribute from the `todoList` object task selected by clicking the corresponding V icon and renders the updated list to the screen. The handler is connected to the UI with a `click` event.

---

## 6. User Story: `Toggle all to completed`

- A user can check or un-check all tasks at once by clicking gib V icon next to the new task input field
- I wrote the code in `data/todoList.js` and `handler.js`
- The handler function toggles to completed the attribute of all todos from the `todoList` object by clicking the big V icon and renders the updated list to the screen. The handler is connected to the UI with a `click` event.