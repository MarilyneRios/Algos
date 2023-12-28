const criticalities = document.querySelectorAll('.criticality');

for (let i = 0; i < criticalities.length; i++) {
    switch (criticalities[i].textContent) {
        case '4':
            criticalities[i].style.backgroundColor = '#2ecc71';
            break;
        case '3':
            criticalities[i].style.backgroundColor = '#f1c40f';
            break;
        case '2':
            criticalities[i].style.backgroundColor = '#e67e22';
            break;
        case '1':
            criticalities[i].style.backgroundColor = '#e74c3c';
            break;
    }
}
//----------------------------------------------------------------------
const criticalities2 = document.querySelectorAll('.criticality');

for (let i = 0; i < criticalities.length; i++) {
    if (criticalities[i].textContent === '4') {
        criticalities[i].style.backgroundColor = '#2ecc71';
    } else if (criticalities[i].textContent === '3') {
        criticalities[i].style.backgroundColor = '#f1c40f';
    } else if (criticalities[i].textContent === '2') {
        criticalities[i].style.backgroundColor = '#e67e22';
    } else if (criticalities[i].textContent === '1') {
        criticalities[i].style.backgroundColor = '#e74c3c';
    }
}
//----------------------------------------------------------------------

/*
Faites disparaître (via display: none) les tasks qui ont un niveau d’urgence supérieur à 2, et laissez tous les autres tasks affichés.

⚠️ Attention, les div contenant les tasks sont organisées avec flexbox (display: flex), 
pensez-à ré-attribuer le display: flex dans le cas où le niveau d’urgence n’est pas supérieur à 2
*/
const criticalities3 = document.querySelectorAll('.criticality');

for (let i = 0; i < criticalities.length; i++) {
    switch (criticalities[i].textContent) {
        case '4':
            criticalities[i].style.backgroundColor = '#2ecc71';
            break;
        case '3':
            criticalities[i].style.backgroundColor = '#f1c40f';
            break;
        case '2':
            criticalities[i].style.backgroundColor = '#e67e22';
            break;
        case '1':
            criticalities[i].style.backgroundColor = '#e74c3c';
            break;
    }
    
}
for (let i = 0; i < criticalities.length; i++) {
    if (criticalities[i].textContent > 2) {
        criticalities[i].parentNode.style.display = 'none';
    } else {
        criticalities[i].parentNode.style.display = 'flex';
    }
}