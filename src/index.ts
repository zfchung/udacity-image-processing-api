import express from 'express';
import router from "./routes";

const app = express();
const defaultPortNumber = 3000;
const port = Number(process.env.PORT || defaultPortNumber);

app.use(router);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

export default app;
