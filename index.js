const bookCollection=require("./routes/bookCollection");
const bookProfile=require("./routes/bookProfile");
const homepage=require("./routes/homepage");
const userProfile=require("./routes/userProfile");

const express=require("express");
const app=express();
app.set("view engine","pug");

app.use("/", homepage);
app.use("/book-collection", bookCollection);
app.use("/book-profile", bookProfile);
app.use("/user-profile", userProfile);

app.listen(3000);


