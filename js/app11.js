const postrray=[
    {
        titel:"HI MY NAME IS SABBBIR",
        body:"Good Morning",
        id:"01777000444"
    },
    {
        titel:"HI MY NAME IS SABBBIR",
        body:"Good Morning",
        id:"01777000444"
    },
    {
        titel:"HI MY NAME IS SABBBIR",
        body:"Good Morning",
        id:"01777000444"
    }
];

const postdiv=document.querySelector("#posts");

const cardfun= () => {
    postrray.map((p) =>{
        const divTeg=document.createElement("div");
         divTeg.classList.add("item");
        divTeg.innerHTML =`<h2>${p.titel}</h2> <p>${p.body}</p> <span>${p.id}</apan>`;
        postdiv.appendChild(divTeg);
        // console.log(divTeg);
    });
};
cardfun();