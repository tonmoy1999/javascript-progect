//*
// 1.Dom Selection
// 2.Event Listener
// 3.basic Validation
// 4.creating Element
// 5.Append
// 

// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const year = document.querySelector("#year");
// const btn = document.querySelector(".btn");
// const bookList = document.querySelector("#book-list");

// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log(title.value)
//     if(title.value == '' || author.value == '' || year.value == '' ){
//         alert("kiso akta dite hode");
//     }
//     else{
//         const newRowtr=document.createElement("tr");
//         bookList.appendChild(newRowtr);

//         const newTitel = document.createElement("th");
//         newTitel.innerHTML = title.value;
//         newRowtr.appendChild(newTitel);
    
//         const newAuthor = document.createElement("th");
//         newAuthor.innerHTML = author.value;
//         newRowtr.appendChild(newAuthor);

//         const newYear = document.createElement("th");
//         newYear.innerHTML = year.value;
//         newRowtr.appendChild(newYear);
//     }
// });


const titleName=document.querySelector("#title");
const authorName=document.querySelector("#author");
const yearName=document.querySelector("#year");
const btn=document.querySelector(".btn");
const bookList=document.querySelector("#book-list");
document.getElementById("newpage").style.display = "none";

const myNme=()=>{
    document.getElementById("book-form").style.display="none";
    document.getElementById("newpage").style.display = "block";
}

    btn.addEventListener("click",function(e){
        e.preventDefault();
        // if(!titleName.value || !authorName.value  || !yearName.value  ){
        // alert("3 input  filap")
        // }
         if(!titleName.value){
            alert("Titel poron koron")
        }
        else if(!authorName.value){
            alert("author poron koron")
        }
        else if(!yearName.value){
            alert("year poron koron")
        }
        else{
            const newTr=document.createElement("tr");
            bookList.appendChild(newTr);
        
            const newTh=document.createElement("th");
            newTr.appendChild(newTh);
            newTh.innerHTML = titleName.value;
        
            const newThh=document.createElement("th");
            newTr.appendChild(newThh);
            newThh.innerHTML = authorName.value;
        
            const newThhh=document.createElement("th");
            newTr.appendChild(newThhh);
            newThhh.innerHTML = yearName.value;
            myNme()
        }
        });





