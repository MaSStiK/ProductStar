const http = require("http");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8000;

const requestHandler = (req, res) => {
    switch (req.url) {
        case "/image": {
            const image = fs.readFileSync(`${__dirname}/image.jpg`);
            res.setHeader("content-type", "image/jpg");
            res.end(image);
            break;
        }
        case "/music": {
            const music = fs.readFileSync(`${__dirname}/music.mp3`);
            res.setHeader("content-type", "audio/mpeg");
            res.end(music);
            break;
        }
        case "/html": {
            const html = `
                <html>
                    <head>
                        <title>My server is working!</title>
                    </head>
                    <body>
                        <h1>Hello from server!</h1>
                        <h2>Current time: ${new Date().toLocaleString()}</h2>
                    </body>
                </html>
            `;
            res.setHeader("content-type", "text/html");
            res.end(html)
            break;
        }
        default: {
            res.setHeader("content-type", "text/plain");
            res.end("Hello from server!");
        }
    }
};

const server = http.createServer(requestHandler);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});