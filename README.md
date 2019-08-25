## description

This repo is a test TODO application using React with the [usage](#usage) and [requirements](#requirements) listed below.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## usage

First start the server side app which can be found in this [repo](https://github.com/GeorgeKyriakou/todos-express-typescript)

1. Install all dependencies by running the following in the root of this project ([Yarn](https://yarnpkg.com) needs to be installed as a prerequisite):

```
yarn install
```

2. build the application by running:

```
yarn build
```

3. start the application by running:

```
yarn start
```

---

## requirements

These are the requirements for the application.

- Creating, reading, updating and deleting To Do items. (done)
- Each item should have a title, description and a due date. There is no need for a database in the back-end, but you can use one if you want (done)

```json
{
  "title": "foo",
  "description": "bar",
  "due_date": new Date()
}
```

- Sorting and Filtering/Searching for items (done)
- Pagination and the ability to pre-populate the application with items (done)

For the sake of usability, I have added a `completed` property which indicates wether the specific TODO has been done. On save, a random id is generated and returned from the backend for each new entity, thus the final object looks like so:

```json
{
  "title": "foo",
  "description": "bar",
  "due_date": new Date(),
  "completed": false,
  "id": 123415362454
}
```

---

## testing

The lack of tests for this app is due to my inexperience with React, and how to specifically test component behaviours.

## misc

React seems like a fun framework, and using the Context API makes it very easy to keep track of its state.
