window.onload = async () => {

    const imagens__fundo = [
    "./assets/images/empresa-1.jpg",
    "./assets/images/empresa-2.jpg",
    "./assets/images/empresa-3.jpg"
    ];

    for (let x = 0; x <= imagens__fundo.length - 1; x++) {
        
        await new Promise(resolve => setTimeout(resolve, 3000))
         document.body.style.backgroundImage = `url(${imagens__fundo[(x) % imagens__fundo.length]})`
         await new Promise(resolve => setTimeout(resolve, 2000))
         
         if (x === imagens__fundo.length - 1) {
            x = -1;
         }
    }
}

function redirect() {
    window.location.href = "https://github.com/HendrickReis"
}
