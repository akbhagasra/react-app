# React apps

This repo contains practice projects built using react and tailwind for styling

## Routes

- `/`
- `/currency-app`

## How to setup prettier

- run `npm i -D prettier`
- add `.prettierrc` and `.prettierignore` files

## Learnings

1. Using `Key` in loops

   - In React, when you iterate over a list and create components dynamically using the map function or a similar method, it is important to include a unique key prop for each component. The key prop is a special attribute that helps React identify which items have changed, been added, or been removed. It aids in optimizing the rendering process and improving performance.
   - It's essential to use a stable and unique identifier as the key to ensure the effectiveness of React's [reconciliation](https://legacy.reactjs.org/docs/reconciliation.html) process. Avoid using array indices as keys, as they might not be stable if the list order changes. Use unique identifiers associated with each item, such as database IDs or other unique attributes.

2. Using `useId`

   - The useId hook in React is a utility function that helps generate unique IDs for elements.
   - This can be particularly useful when associating labels with form controls, such as input elements, using the htmlFor attribute in labels. By ensuring that each label and its corresponding input share the same ID, you create a clear association between them, enhancing accessibility and improving user experience.

3. Use `event.preventDefault()` when there is a form else on submit of the form app reloads the page.

4. `flex-wrap` allows us to control how the items in a flex box behave when they exceed the container's size
