const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"};

exports.getBookProfile=(req, res)=>{
    res.render("bookprofile",{
        title: dbBookProfile.titulli, 
        author: dbBookProfile.autori, 
        img: dbBookProfile.img
        });
}

