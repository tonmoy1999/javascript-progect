const quizDB=[
    {
    question:"May hello hlw asdsdsajd",
    a:"Hello To My Land",
    b:"Hey text Markup Language",
    c:"HyperText Markup Language",
    d:"HyperText Markup Language",
    ans:"ans4"
},
{
    question:"May hello hlw asdsdsajd",
    a:"Hello To My Land",
    b:"Hey text Markup Language",
    c:"HyperText Markup Language",
    d:"HyperText Markup Language",
    ans:"ans4"
},
{
    question:"May hello hlw asdsdsajd",
    a:"Hello To My Land",
    b:"Hey text Markup Language",
    c:"HyperText Markup Language",
    d:"HyperText Markup Language",
    ans:"ans4"
}

];

const question=document.querySelector(".question");
const apotionl=document.querySelector("#apotionl");
const apotion2=document.querySelector("#apotion2");
const apotion3=document.querySelector("#apotion3");
const apotion4=document.querySelector("#apotion4");
const submit=document.querySelector("#submit");
 let questioncont=0;

const loadQuestion = () =>{
    let questionList=quizDB[questioncont];
    question.innerText=questionList.question;
    apotionl.innerText = questionList.a;
    apotion2.innerText = questionList.b;
    apotion3.innerText = questionList.c;
    apotion4.innerText = questionList.d;
};
loadQuestion();
const getanswer=()=>{

}
submit,addEventListener("click", ()=>{
   const conanswer= getanswer();
});