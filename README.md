# Laundry-App

## Introduction

This is a simple full stack React application which provides a solid starting point for [ExpressJS](https://expressjs.com/), [ReactJS](https://reactjs.org/), [NodeJS](https://nodejs.org/en/), and [MongoDB](https://www.mongodb.com/) based applications. Client side code is written in React and the backend API is written using Express.

Laundry-App is an Android-based application built with React Native. while the website version is built with React Redux. The results of this implementation can produce a web and android application so that consumers can directly order so that consumers' dirty clothes can be taken directly by laundry employees.

## Before You Begin

Before you begin i recommend you to read about the basic building blocks that assemble this application:
* MongoDB - Go through [MongoDB Official Website](https://www.mongodb.com/) and proceed to their [Official Manual](https://www.mongodb.com/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through it's [Official Website](https://expressjs.com/), which has a [Getting Started](https://expressjs.com/en/starter/installing.html) guide, as well as an [ExpressJS](https://expressjs.com/en/guide/routing.html) guide for general express topics.
* ReactJS - React's [Official Website](https://reactjs.org/) is a great starting point.
* Node.js - Start by going through [Node.js Official Website](https://nodejs.org/en/) which should get you going with the Node.js platform.

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* MongoDB - [Download & Install MongoDB](https://sequelize.org/docs/v6/getting-started/), and make sure it's running on the default port (27017).

## front-end

 - ReactJS (ES6)
 - react-router (*Single Page Application*)
 - react hooks
 - bootstrap

*source files in `frontend/` folder.*
## front-end mobile

 - ReactJS Native
 - react-navigation (*Single Page Application*)
 - react hooks
 - css

*source files in `FrontendMobile/` folder.*
## back-end

 - NodeJS
 - ExpressJS
 - MongoDB

*source files in `backend/` folder*

## Quick Start

open terminal to run server,
*Please make sure your MongoDB is running*

```bash
# Clone the repository
git clone https://github.com/abaz1d/Laundry-App

# Go inside the directory
cd Laundry-App

# Install dependencies for server
cd backend && npm install

# Start server
npm start
```

open new terminal to run client Web App

```bash
# Go inside the directory
cd Laundry-App

# Install dependencies for client Web App
cd frontend && npm install

# Start client Web App
npm start
```

open new terminal to run client Mobile App

```bash
# Go inside the directory
cd Laundry-App

# Install dependencies for client Mobile App
cd FrontendMobile && yarn install

# Start client Android/iOS Mobile App
yarn run android
# or
yarn run ios
```

this application should run on port 3000 , you can access it through browser, just go to [http://localhost:3000/](http://localhost:3000/) for Client Web App. and [http://localhost:3001/](http://localhost:3001/) for RESTful APIs.

### Screenshots Client Web App
Youtube Video Preview : https://youtu.be/WJ-0Tec1ibo <br/>
<img src="https://user-images.githubusercontent.com/95122515/194790431-ad0ba974-4a2c-4c5d-b829-a8d9d01f4929.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194790470-c2037d1d-0c72-4e77-8f90-269c63d8261e.png" width="49%">

<img src="https://user-images.githubusercontent.com/95122515/194790548-a8cd614e-e8f0-452a-9fca-c99c625214c3.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194790548-a8cd614e-e8f0-452a-9fca-c99c625214c3.png" width="49%">

<img src="https://user-images.githubusercontent.com/95122515/194790725-049231b1-1291-4c84-aacf-c3b6f4431c45.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194790730-98cfea2e-ee38-4d73-8db5-147808a6a19b.png" width="49%">

<img src="https://user-images.githubusercontent.com/95122515/194790828-e8e0d6bf-35e7-4c7b-9a15-2b16b63e678b.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194790836-57595714-73ce-4b7c-9620-1005bac11243.png" width="49%">


### Screenshots Client Web App
<img src="https://user-images.githubusercontent.com/95122515/194791235-4c778d59-27a8-40fa-9f80-7593cc071ec9.png" width="19%"> <img src="https://user-images.githubusercontent.com/95122515/194791242-acaa0530-d011-4b69-a790-f4acaccc03c1.png" width="19%"> <img src="https://user-images.githubusercontent.com/95122515/194791256-1f96aa85-ebd1-47b4-95e1-3027e5c3981c.png" width="19%"> <img src="https://user-images.githubusercontent.com/95122515/194791248-f69d381e-b52a-40a8-b709-cff08b92e826.png" width="19%"> <img src="https://user-images.githubusercontent.com/95122515/194791258-fad33f1e-284c-44b3-bb86-13c32e42f5a2.png" width="19%">


### Screenshots Admin Web App
<img src="https://user-images.githubusercontent.com/95122515/194790912-2f6c971d-267b-4002-81a5-ee5938d2802f.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194790921-9c93d27b-90f9-49f6-860f-b67dceb9537b.png" width="49%">

![admin-dashboard](https://user-images.githubusercontent.com/95122515/194790985-53f790da-836a-4b1d-8e01-23dfac63d2dd.png)

<img src="https://user-images.githubusercontent.com/95122515/194790997-2b5f0a55-4441-4cb7-a184-e241f9c4050d.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194791004-86679cb3-c60f-4d37-bdb9-e5910f0322fd.png" width="49%">

<img src="https://user-images.githubusercontent.com/95122515/194791055-3ee01d70-dc2a-4018-8e1f-ce2ac6394dde.png" width="49%"> <img src="https://user-images.githubusercontent.com/95122515/194791061-5bc3b56a-be68-470c-b202-24a984f05d23.png" width="49%">
