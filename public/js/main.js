const alinks=document.getElementsByClassName("nav-link");

function activate(element){
    for(let alink of alinks){
        alink.removeClass('active');
        let href=alink.getAttribute('href');
        if(href===element)
            alink.addClass("active");
    }
}