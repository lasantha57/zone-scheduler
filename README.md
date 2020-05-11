## Requirements

Node 8
NPM 5.2+


## How To Run

1. Install dependencies using `yarn` or `npm start`
2. Quick start using `yarn start` or `npm start`

The project can be accessed by open `http://localhost:1234/` in browser.

To create a production like environment run `yarn build` or `npm run build`. 
This will create a new folder called `build`, that can be served in a server.

## How it was created

Here I used react library for Front End development as it easy the work with DOM API, and further it supports to handle the state. Adding external library I was able to enable the FE routing for the react application.

With the useContext API and React Hooks, there is no need to install external libraries or add a bunch of files and folders in order to get our app working. This makes it a much simpler, more straightforward way to handle global state management in the application.

This project was created using creat-react-app boilerplate as it helps to simplify development process as it gives zero configurations and start the implementation quick as possible.

I used bootstrap as style framework as it gives more utility classes to be used when it comes to the layouting and positioning elements, and it supports reposiveness as well.

I have configured `enzyme` to be used as JavaScript Testing utility as it supports shallow redering and all. But cound't cover the tests in this application.

ESLint and Prettier are used to improve the quality of the code.

## Roadmap

Enhance the code coverage on unit tests
Ehnance user input validations
Enahance UI/UX

