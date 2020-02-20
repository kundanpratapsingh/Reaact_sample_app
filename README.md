This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshots:

<br/>

#### https://user-images.githubusercontent.com/41427831/74939720-617fca80-5416-11ea-8861-946522fa3887.png

#### https://user-images.githubusercontent.com/41427831/74940215-1dd99080-5417-11ea-86d2-453797b65296.png

#### https://user-images.githubusercontent.com/41427831/74940353-4f525c00-5417-11ea-83ef-94c2eb35d6c9.png

#### https://user-images.githubusercontent.com/41427831/74940503-87f23580-5417-11ea-8ae9-39d92b9ff01d.png

### Steps to run the application Locally

# connect with MongoDB Compass

https://docs.mongodb.com/compass/master/connect/
url to connect(example) --- mongodb://localhost:27017/mernshopping

## To run Server

change the directory to shopping_list_backend and run `npm run server` command.

## To run Client

change the directory to my-app and run `npm start` command.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Description about application

This application is Based on MERN stack.Once the React Application starts it will fetch Items from MongoDB using
http://localhost:5001/api/items/ api.

Each Time User ADD a new Item or Delete Any Item different Endpoints are being Triggered and DB is Being updated.

All React Components are StateLess Components and State is declared Using useState Hooks.
