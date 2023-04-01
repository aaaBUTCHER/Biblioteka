const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"};
const dbBooks=[ {titulli:"Beni ecen nuk vetem", autori:"Fan Noli", img:"/img/img1.jpg"}, 
                {titulli:"Beni nashta ecen  vetem", autori:"Fan Noli", img:"/img/img1.jpg"},
                {titulli:"Beni munde te ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"},
                {titulli:"Beni nuk ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"},
                {titulli:"Beni nuk eshte fukara", autori:"Fan Noli", img:"/img/img1.jpg"},
                {titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"},
            ];

exports.getBookProfile=(req, res)=>{
    const id=req.params.id;
    const libriIDerguar=dbBooks[id-1];
    res.render("librat/profiliILibrit", {libri:libriIDerguar});
}

exports.getAllBooks=(req, res)=>{
    const zhanri=req.query;
    if(!zhanri.zhanri)
    res.render("librat/index",{titulliIfaqes:"Te gjitha librat", librat: dbBooks})
}

