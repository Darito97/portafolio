const [menuIcon, menu] = [document.getElementById('menuIcon'), document.getElementById('menu')];
var primeraVez = [true, true, true];
menuIcon.addEventListener('click', () =>{
    menu.style.display=== "block" 
        ? menu.style.display= "none"
        : menu.style.display= "block"
})
window.addEventListener('resize', () => {
    if(window.innerWidth> 450){
        menu.style.display= "flex"
    }
    else{
        menu.style.display= "none"
    }
})

window.addEventListener('scroll', () =>{

    if(primeraVez[0]) {
        if(window.scrollY > 150){
            const textos = document.getElementsByClassName('articleSobreMi')
            textos[0].className = 'articleSobreMi aparecer'
            textos[1].className = 'articleSobreMi aparecer'
            primeraVez[0]= false
        }
    }
    if(primeraVez[1]){
        if(window.scrollY > 730){
            const habilidades = document.querySelector('#misHabilidades')
            habilidades.className= 'aparecerDesdeAbajo'
            primeraVez[1]= false
        }
    }
    if(primeraVez[2]){
        if(window.scrollY > 1250){
            const proyectos = document.getElementsByClassName('project');
            for(let proyecto of proyectos){
                proyecto.className = 'project aparecerDesdeAbajo'
            }
            primeraVez[2]= false
        }
    }
    
})
