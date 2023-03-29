const navMenu=document.querySelector("ul.navbar-menu");
const navBarObj=[{"/":" Home"}, {"/book-collection":"Koleksioni i librav"},{"/book-profile":"Profili i Librav"},{"/user-profile":"Profili i perdoruesit"}];

navBarObj.forEach((c)=>{
  const keys=Object.keys(c);
  navMenu.innerHTML+=`<li> <a href=${keys}> ${c[keys]}</a></li>`
});


function buyBook(id){
  alert("Libra u ble "+id);
}
console.log("hello");