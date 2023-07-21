const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

const MY_HTML_FILE_PATH = "./index.html"

app.use("/views", express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.get("/video", (req, res) => {
    res.sendFile(path.join(__dirname, '/video-page.html'));
})

app.get("/video/add", (req, res) => {
    res.sendFile(path.join(__dirname, '/add-video.html'));
})

app.post("/video/add/new", (req, res) => {
    console.log(req.query);
})

app.listen(port, () => console.log(`App listening on url: http://localhost:${port}`))
