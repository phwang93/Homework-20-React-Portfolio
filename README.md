# Homework-20-React-Portfolio

Build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

<p align = "center">
<img alt="preview" src="/client/src/images/screenshot.png">
</p>

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Deployed URL for the Application 

Heroku for the application: [Heroku](https://jate-app-ph.herokuapp.com).
## Table of Contents

- [Homework-20-React-Portfolio](#homework-20-react-portfolio)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Deployed URL for the Application](#deployed-url-for-the-application)
  - [Table of Contents](#table-of-contents)
  - [Resources](#resources)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

## Resources

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Heroku](https://heroku.com)
## Installation

* Git Clone the Repo into your system

* To install dependencies, run the following in your terminal:
  
`npm i`
## Usage

* After installations are completed, run the app with: 
  
`npm start`

## License

* Copyright 2022 Philip Hwang
* This repository is licensed under the [MIT license](./LICENSE).

## Questions

If you have any questions, please contact me at: 
* Email: [pshwang93@gmail.com](mailto:pshwang93@gmail.com). 
* GitHub: [phwang93](https://github.com/phwang93).
* Repo: [Homework-19-Text-Editor](https://github.com/phwang93/Homework-19-Text-Editor).
* Heroku: [JATE App](https://jate-app-ph.herokuapp.com).