
# Introduction

This is a simple reminder app for react-redux beginner.

## ScreenShot
![Image text]()
![Image text]()

## How To Run

```
git clone https://github.com/RidicZhi/redux-reminder-app.git
cd react-accounts-app
npm install
npm run
npm start
```

## Technology

* React / Create React App
* Bootstrap4
* Redux
* Middleware(redux-logger, redux-devtools)/ConfigStore(provides different middleware for prod/dev version)
* Js Date Processing(moment)
* Cookie
* JavaScript ES6
* Deployed on [Github Page](https://ridiczhi.github.io/redux-reminder-app)

## Function
Create/Delete reminders and stage it to both redux store and browser cookie.
Calculate the time from now of the event by [moment](https://momentjs.com/).
When refresh the page, redux store will read Reminders from cookie.
