
# Introduction

This is a simple reminder app for react-redux beginner.

## ScreenShot
![Image text](https://raw.githubusercontent.com/RidicZhi/redux-reminder-app/master/Screen%20Shot%202019-05-08%20at%2010.01.57%20pm.png)
![Image text](https://raw.githubusercontent.com/RidicZhi/redux-reminder-app/master/Screen%20Shot%202019-05-08%20at%2010.02.49%20pm.png)
![Image text](https://raw.githubusercontent.com/RidicZhi/redux-reminder-app/master/Screen%20Shot%202019-05-08%20at%2010.10.16%20pm.png)

## How To Run

```
git clone https://github.com/RidicZhi/redux-reminder-app.git
cd redux-reminder-app
npm install
npm start
```

## Technology

* React / Create React App
* Bootstrap4
* Redux
* Middleware / ConfigureStore
* Date Processing
* Cookie Processing
* JavaScript ES6
* Deployed on [Github Page](https://ridiczhi.github.io/redux-reminder-app)

## Function
Create/Delete reminders and stage it to both redux store and browser cookie.  
Calculate the time from now of the event by [moment](https://momentjs.com/).  
When refresh the page, redux store will read Reminders from cookie by [sfcookies](https://www.npmjs.com/package/sfcookies).  
ConfigureStore enable us to observe the state changing in ***Development*** mode via [redux-logger](https://github.com/LogRocket/redux-logger) and [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) and does not provide middleware to ***Production*** mode.

