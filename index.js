const path=require("path");
//Routerat
const bookCollection=require("./routes/bookCollection");
const bookProfile=require("./routes/bookProfile");
const homepage=require("./routes/homepage");
const userProfile=require("./routes/userProfile");
const logIn=require("./routes/login");
const register=require("./routes/register")
const about=require("./routes/about")
const dashboard=require('./routes/dashboard')
const crudiPerLibra=require("./routes/crudiPerLibra")
const libratEBlere=require('./routes/libratEBlere')
const mesazhet=require('./routes/mesazhet')
//const komentet=requrie('./routes/komentet')

//Expressi the connfigat e tij
const express=require("express");
const app=express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", path.join(__dirname, "views"));
app.set("view engine","pug");
//Pathat kreyesore per 
app.use("/", homepage);
app.use("/book-collection", bookCollection);
app.use("/book-profile", bookProfile);
app.use("/user-profile", userProfile);
app.use("/log-in", logIn);
app.use('/register', register);
app.use('/about', about);
app.use('/dashboard', dashboard);
app.use("/crudiPerLibra", crudiPerLibra);
app.use('/libratEBlere', libratEBlere);
app.use('/mesazhet', mesazhet);
app.use((req, res,next)=>{
    res.status(404).render("err404");
})
app.listen(3000,()=>console.log("Po nijn ne porten 3000"));


