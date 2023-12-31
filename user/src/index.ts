import express from "express";
import {currentUserRouter} from "./routes/current-user";
import {signinRouter} from "./routes/signin";
import {signoutRouter} from "./routes/signout";
import {signupRouter} from "./routes/signup";
import {errorHandler} from "./middlewares/error-handler";

const app = express();
app.use(express.json());

const port = 3000;

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`User server: Listening on port ${port}`);
});