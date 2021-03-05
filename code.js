var caixa = document.querySelector(".modal");
let bol = false;

function modal(){
    caixa.classList.add('open');
    document.querySelector(".modal").style.display = block;
    document.body.style.opacity = 0.4;
    bol = true;
}

if (bol){
    window.addEventListener(onclick, ()=>{
        alert("CLICO");
    })
}