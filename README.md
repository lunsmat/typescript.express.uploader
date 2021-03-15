<p align="center">
    <img src=".github/logo.png" alt="Uploader" width="200" />
</p>

<h1 align="center">Uploader</h1>
<p>Upload your photos</p>

## 📖 Description

This is an application to upload photos,

<p align="center">
    <a href="#-description">Description</a>&nbsp; • &nbsp;
    <a href="#-technologies">Technologies</a>&nbsp; • &nbsp;
    <a href="#-installation">Installation</a>&nbsp; • &nbsp;
    <a href="#-project-status">Project Status</a>&nbsp; • &nbsp;
    <a href="#-features">Features</a>&nbsp; • &nbsp;
    <a href="#-contribution">Contribution</a>&nbsp; • &nbsp;
    <a href="#-license">License</a>&nbsp; • &nbsp;
    <a href="#-author">Author</a>
</p>

## ⚒️ Technologies

- <img src=".github/technologies/nodejs.svg" alt="Node" height="18" /> &nbsp; NodeJS v14.16.0
- <img src=".github/technologies/express.svg" alt="EX" height="18" /> &nbsp; Express v4.17.1
- <img src=".github/technologies/typescript.svg" alt="TS" height="18" /> &nbsp; TypeScript v4.2.3
- <img src=".github/technologies/eslint.svg" alt="ESLint" height="18" /> &nbsp; ESLint v7.22.0
- <img src=".github/technologies/jest.svg" alt="Jest" height="18" /> &nbsp; Jest v26.6.3
- <img src=".github/technologies/babel.svg" alt="Babel" height="18" /> &nbsp; Babel v7.13.10
- <img src=".github/technologies/mongodb.svg" alt="Babel" height="18" /> &nbsp; Mongoose v5.11.15
- <img src=".github/technologies/aws.svg" alt="Babel" height="18" /> &nbsp; AWS
  - <img src=".github/technologies/s3.svg" alt="Babel" height="18" /> &nbsp; S3


## ⚙ Installation

If you want to run locally in your machine, you can do the following steps.

### Requirements

The requirements to install this app are:

- <img src=".github/technologies/git.svg" alt="Git" height="18" /> &nbsp; [Git](https://git-scm.com)
- <img src=".github/technologies/nodejs.svg" alt="Node" height="18" /> &nbsp; [NodeJS](https://nodejs.org/en/)
- <img src=".github/technologies/mongodb.svg" alt="Babel" height="18" /> &nbsp; [Mongo](https://www.mongodb.com/3)
- <img src=".github/technologies/yarn.svg" alt="Node" height="18" /> &nbsp; [Yarn](https://yarnpkg.com/)
- <img src=".github/technologies/insomnia.svg" alt="Node" height="18" /> &nbsp; [Insomnia](https://insomnia.rest) (To test the API)
- <img src=".github/technologies/vscode.svg" alt="ESLint" height="18" /> &nbsp; [Visual Studio Code](https://code.visualstudio.com) (Optional to have a good code editor)

### How to install and run

To install the project have to:

```bash
# Clone the repository
$ git clone https://github.com/Luan-Farias/typescript.express.uploader.git

# Enter in the project folder
$ cd typescript.express.uploader

# Install dependencies, if you doesn't have yarn you can use `npm install`
$ yarn

# Copy and paste the file .env.example to a file called .env and fill in the file with the necessaries variables

# For test all the app you can run
$ yarn test

# OBS: The test will use local storage, so if you want to run with aws and change the app have certain that you know what you doing

# Start the server in development mode, if you doesn't have yarn you can use `npm run dev`
$ yarn dev

# With this you have started the project server

# The server will start by default in port 3333, you can access <http://localhost:3333/api/ping> that is a test route
```

After this, you can test this api opening the Insomnia.

To test you have to do:

- Download the Insomnia file. <a href=".github/insomnia.json" download>(you can click here)</a>
- Open the APP insomnia
- Go to Application > Preferences > Data > Import Data > From File > Select the Insomnia File.
- With this you can have access to insomnia workspace that I was using in this app, so test some routes
  - It's better if you go to tests and run all tests in order, if no one test fail, so all the application it's working


## 📊 Project Status

This project it's in development mode, go to features section to know what features of the project are being developed.


## ✔ Features

- [x] Make a Express Application
- [x] Configure Development Mode
  - [x] Add Typescript
  - [x] Configure project folder
  - [x] Add and configure ESLint
  - [x] Add and configure Jest
    - [x] Make first test
  - [x] Add and configure Babel
- [x] Start Development
  - [x] Configure Cors
  - [x] Configure DotEnv
  - [x] Configure and connect to database
    - [x] Make Photos model
  - [x] Make tests (Using TDD)
  - [x] Configure multer to store photos in local ambient
    - [x] Get all photos
    - [x] Upload a photo
    - [x] Delete a photo
  - [x] Configure multer to use S3 to store the photos
  - [ ] v1.0.0 of the project finished, deploy.


## 🎉 Contribution

If you want to contribute to the project, you can:

- [x] Report Issues with:
  - [x] Bugs or problems
  - [x] New requested features
  - [x] Documentation idea
- [x] Give to the project star and fork
- [x] Make pull requests

Obs: The pull request doesn't have to, necessarily , be about code, can be about documentation, code pratiques, etc.


## 📕 License

This project is under the license MIT, you can check the file [LICENSE](./LICENSE) to see the license.


## 🔮 Author

<img src="https://github.com/luan-farias.png" alt="Luan Farias" width="200" />

[Luan Farias](https://github.com/luan-farias)

Made with 💜 by Luan Farias. Contact-me:

- 📩 [Email: luan.farias_bvs@outlook.com](mailto:luan.farias_bvs@outlook.com)
- 💼 [LinkedIn: Luan Farias](https://www.linkedin.com/in/luan-farias-08572219b/)
