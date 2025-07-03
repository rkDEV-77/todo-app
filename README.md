# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# GITHUB LINK OF PROJECT --> https://github.com/rkDEV-77/todo-app

# Explanation of how a To-Do List Project works with the following functionalities:

-> Add Task

-> Delete Task

-> Mark Task as Completed using Checkbox

-> Edit Task

-> Functionality Overview (Step-by-Step)

# WORKING OF TODO APP

## 1. Initial Setup

-> The project consists of an input field, an "Add" button, and a list area to display tasks.
-> JavaScript maintains a list of tasks (usually in an array of objects)


## 2. Add Task

-> User types in a task in the input field and clicks the "Add" button.
-> A new task object is created and pushed into the task array.
-> The list is re-rendered to show the new task.
-> Input is cleared for the next entry.

 UI Update:-
-> A new  element is added, typically with:
-> A checkbox (to mark complete)
-> Task text
-> "Edit" and "Delete" buttons


## 3. Delete Task

-> When the user clicks the "Delete" (🗑️) button:
-> That task is removed from the array.
-> The list is re-rendered, excluding the deleted task.

 UI Update:-
->Task disappears from the list.

## 4. Mark as Completed (Checkbox)

-> Checkbox next to the task toggles completed: true/false in the task object.
-> Task text styling is updated (e.g., line-through, color, backGround).

 UI Update:-
-> Completed tasks show a visual change (e.g., strike-through ).


## 5. Edit Task

-> Clicking the "Edit" (✏️) button:
-> Converts the task text into an input field with the current text.
-> Creates the "Edit" button to "Save" changes.
-> After editing, clicking "Save":
-> Updates the task's text in the array.
-> Re-renders the task with the new text.

 UI Update:-
-> Task shows an input box temporarily, then updates with new content.


#  Optional Enhancements
-> Save to localStorage to persist tasks across page reloads.
-> Show tasks status: All / Completed / Incomplete.
-> Styled UI with Tailwind CSS.



