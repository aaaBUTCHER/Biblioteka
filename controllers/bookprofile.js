const dbBookProfile={titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg"};
const dbBooks=[ {titulli:"Beni ecen nuk vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"}, 
                {titulli:"Beni nashta ecen  vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"},
                {titulli:"Beni munde te ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"komedi"},
                {titulli:"Beni nuk ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"shkence"},
                {titulli:"Beni nuk eshte fukara", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
                {titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
            ];

exports.getBookProfile=(req, res)=>{
    const id=req.params.id;
    const libriIDerguar=dbBooks[id-1];
    res.render("librat/profiliILibrit", {libri:libriIDerguar});
}

exports.getAllBooks=(req, res)=>{
    const zhanri=req.query;
    if(!(Object.keys(zhanri).length === 0) && zhanri.zhanri!=="clear"){
        console.log(zhanri)
        const filterdBooks=dbBooks.filter((c)=>{
            return zhanri.zhanri===c.zhanri;
        });
        return res.render("librat/index",{titulliIfaqes:"Librat me zhaner:"+zhanri.zhanri, librat: filterdBooks});
    }
    res.render("librat/index",{titulliIfaqes:"Te gjitha librat", librat: dbBooks})
}

