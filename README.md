# OpenDex

Open Source student project. Small Pokédex in the form of a website

## About the Project

OpenDex is a student project which aims to discover OpenSource development through various elements such as the Readme, the license, templates (issues/pull requests) etc... 

Here, we've decided to create a small web application using React for the frontend and Express for the Api. This web application represents a pokedex, and the user can add a pokemon, modify his pokedex...

## Summary
- [How To Install the Project](#how-to-install-the-project)
- [Languages and Technologies](#languages-and-technologies)
   - [Front-End](#front-end)
   - [Back-End](#back-end)
   - [Database](#database)
   - [Docker](#docker)
- [Run](#run)
- [Architecture](#architecture)
- [License](#license)
- [Authors](#authors)

## How To Install the Project

Firstly, it all depends on whether you intend to use the various components via Docker containers.

See below for your preferred option. 

Before any install, you need to clone the project

```bash
git clone https://github.com/chatelet69/OpenDex.git
or via SSH
git clone git@github.com:chatelet69/OpenDex.git
```

### Docker Container

A docker-compose file is present at the root of the directory, containing 3 services: the api, the front end and the database. For the API, a Dockerfile is also present to provide the image for building the api.

To start containers you can run : 

```bash
docker compose up --build
```
The --build option is used to build the api service with its Dockerfile, you can remove it if you don't need it

Check that containers have been successfully booted

```bash
docker ps
```

The website should normally be accessible at `http://localhost:3000` and the api at `http://localhost:3001`
(Or the port you specified)

### On your machine (without docker)

First, you need to install the dependencies, then you can use the "start" script with npm at the root of the directory<br>
Of course, don't forget to replace the .env file in /api with the configuration information for your database.

```bash
npm install
npm start
```

You can also manually launch the api and the front end separately by executing the following command in each folder `/api` and `/opendex_front`

```bash
npm start
```

#### Build the React Frontend App

In `/opendex_front`

```bash
npm run build
```

You will have a `build` folder which is the static site built by React. This static build therefore doesn't need to have the node server running.

The node server for the React application enables the development application to be launched, and it is this application that receives hot updates from React. (See https://webpack.js.org/guides/hot-module-replacement/)

## Languages and Technologies

### Front-End
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

### Back-End
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Database 
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

### Containerization
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Run
### Required 
- Docker installation with docker compose
### Commands for developping
** Run for the first time ** ```docker compose up```
  
## Architecture 

├── api<br>
│   ├── index.ts<br>
│   ├── .env<br>
│   ├── src<br>
│   │   ├── middlewares<br>
│   │   ├── routes<br>
│   │   ├── controllers<br>
│   │   ├── repositories<br>
│   │   └── services<br>
│   ├── package.json<br>
│   └── tsconfig.json<br>
| <br>
├── opendex_front<br>
│   ├── package.json<br>
│   ├── .gitignore<br>
│   ├── src<br>
│   │   ├── App.js<br>
│   │   ├── index.js<br>
│   │   ├── pages<br>
│   │   ├── css<br>
│   │   └── assets<br>
│   ├── public<br>
│   │   ├── index.html<br>
│   │   ├── favicon.ico<br>
│   │   ├── manifest.json<br>
│   │   ├── robots.txt<br>
│   │   └── logo192.png<br>
│   └── build<br>
|<br>
|—— <strong>docker-compose.yml</strong><br>
|—— <strong>package.json</strong><br>
|—— SECURITY.md<br>
|—— LICENSE

## License

<img src="https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge">

This project is under MIT License

See https://en.wikipedia.org/wiki/MIT_License

## Authors

We're three computer science students with a passion for web and software development. Through this project, we've been able to experiment with the various specifics of Open Source development.

You can find our Github profiles below
- <a href="https://github.com/PommePain">@L4p1s</a>
- <a href="https://github.com/Rayannmp4">@Rayannmp4</a>
- <a href="https://github.com/Spykoninho">@Spyko</a>

## For contributors
See [the contributors guide](./CONTRIBUTORS.md)
