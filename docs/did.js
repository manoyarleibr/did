

const imgVida = document.querySelector('carta status vida > img');
const valorVida = document.querySelector('carta status vida valor');

let numeroDeVidas = 0;

imgVida.addEventListener('click',mudaVida);

const imgMana = document.querySelector('carta status mana > img');
const valorMana = document.querySelector('carta status mana valor');

let numeroDeMana = 0;

imgMana.addEventListener('click',mudaMana);

const imgDefesa = document.querySelector('carta status defesa > img')
const valorDefesa = document.querySelector('carta status defesa valor')

let numeroDeDefesa = 0

imgDefesa.addEventListener('click',mudaDefesa)


function mudaVida(e) {
    numeroDeVidas = numeroDeVidas+1;
    valorVida.innerText=numeroDeVidas;

    switch (numeroDeVidas) {
        case 1:
            e.target.src='img/vida4.png';
            
            break;
        case 25:
            e.target.src='img/vida3.png';
            
            break;
        case 50:
            e.target.src='img/vida2.png';
            
            break;
        case 75:
            e.target.src='img/vida1.png';
            
            break;

        default:
            break;
    }
}    
function mudaMana(a) {
 numeroDeMana = numeroDeMana+1;
 valorMana.innerText=numeroDeMana; 
 
    switch (numeroDeMana) {
        case 0:
            a.target.src='img/mana7.png'
            
            break;
        case 1:  
            a.target.src='img/mana6.png'
        
            break;
        case 20:
            a.target.src='img/mana5.png'
        
            break;
        case 40:
            a.target.src='img/mana4.png'
        
            break;
        case 60:
            a.target.src='img/mana3.png'

            break;
        case 80:
            a.target.src='img/mana2.png'

            break;
        case 101:
            a.target.src='img/mana1.png'
            
            break;
            default:
    }
}
function mudaDefesa(m) {
numeroDeDefesa = numeroDeDefesa+1;
valorDefesa.innerText=numeroDeDefesa
switch (numeroDeDefesa) {
    case 5:
        m.target.src='img/armadura2.png'

        break;
    case 10:
        m.target.src='img/armadura3.png'

        break;
    case 20:
        m.target.src='img/armadura4.png'
    
            break;
    case 30:
        m.target.src='img/armadura5.png'
        
            break;
    case 40:
        m.target.src='img/armadura6.png'
        
            break;
    default:
    }
}