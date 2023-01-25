const form= document.querySelector("form");
const cardbody= document.querySelector(".scard-body");
const guassNambur= document.querySelector("#guassNambur");
const chek=document.querySelector("#chek");
const resulttext= document.querySelector(".resulttext");
const remenig= document.querySelector(".remenig");


form.addEventListener("submit", (evnt)=>{
    evnt.preventDefault();
    chekresult(guassNambur.value);
});
   const chekresult=(guass)=>{
const rendom= guass();
// console.log(rendom);
   }


const getRendomNumber = (e)=>{
 return Math.floor(Math.random() * e )+1;


};
