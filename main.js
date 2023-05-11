let picture1 = document.getElementById('picture1');
let picture2 = document.getElementById('picture2');


urls = ["picture1.jpg", "picture2.jpg"] //array of picture urls
picture1.addEventListener("click", () =>{
document.body.style.background = urls[0];

});


picture2.addEventListener("click", () =>{
    document.body.style.background = urls[1];
    
    });


