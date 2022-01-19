const express = require("express");
const morgan = require("morgan");
const users = require("./routes/users");
const app = express();
const port = process.env.PORT || 3000;

//middelwares
app.use(express.json());
app.use(morgan("dev"));
/*
Returns middleware that only parses 
urlencoded bodies and only looks at 
requests where the Content-Type header 
matches the type option 
*/
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/users", users);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
