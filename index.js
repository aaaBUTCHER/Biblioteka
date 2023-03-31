const path=require("path");
const bookCollection=require("./routes/bookCollection");
const bookProfile=require("./routes/bookProfile");
const homepage=require("./routes/homepage");
const userProfile=require("./routes/userProfile");

const express=require("express");
const app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", path.join(__dirname, "views"));
app.set("view engine","pug");


app.use("/", homepage);
app.use("/book-collection", bookCollection);
app.use("/book-profile", bookProfile);
app.use("/user-profile", userProfile);
app.use((req, res,next)=>{
    res.status(404).send("error file not found");
})
app.listen(3000);


