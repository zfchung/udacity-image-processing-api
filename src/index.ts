import express from 'express';

const app = express();
const defaultPortNumber = 3000;
const port = Number(process.env.PORT || defaultPortNumber);

app.get("/", (req, res) => {
    res.send("Hello World");
})


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

