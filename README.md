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


## ⚙ Installation

### Requirements

The requirements to install this app are:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Insomnia](https://insomnia.rest) (To test the API)
- [Visual Studio Code](https://code.visualstudio.com) (Optional to have a good code editor)

### How to install and run

To install the project have to:

```bash
# Clone the repository
$ git clone https://github.com/Luan-Farias/typescript.express.uploader.git

# Enter in the project folder
$ cd typescript.express.uploader

# Install dependencies, if you doesn't have yarn you can use `npm install`
$ yarn

# Start the server if you doesn't have yarn you can use `npm run start`
$ yarn start

# With this you have started the project server

# The server will start by default in port 3333, you can access <http://localhost:3333/api/ping> that is a test route
```

After this, you can test this api opening the Insomnia.

To test you have to do:

- Download the Insomnia file. <a href=".github/insomnia.json" download>(you can click here)</a>
- Open the APP insomnia
- Go to Application > Preferences > Data > Import Data > From File > Select the Insomnia File.
- With this you can have access to insomnia workspace that I was using in this app, so test some routes


## 📊 Project Status

This project is starting now, so it's in development mode.


## ✔ Features

- [x] Make a Express Application
- [ ] Configure Development Mode
  - [ ] Add Typescript
  - [ ] Configure project folder
  - [ ] Add and configure ESLint
  - [ ] Add and configure Jest
    - [ ] Make first test
  - [ ] Add and configure Babel
- [ ] Start Development
  - [ ] Configure Cors
  - [ ] Configure DotEnv
  - [ ] Configure and connect to database
    - [ ] Make Photos model
  - [ ] Make tests (Using TDD)
  - [ ] Configure multer to store photos in local ambient
    - [ ] Get all photos
    - [ ] Upload a photo
    - [ ] Delete a photo
  - [ ] Configure multer to use S2 to store the photos
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
