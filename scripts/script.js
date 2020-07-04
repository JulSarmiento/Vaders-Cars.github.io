// recorre 15 kilometros por litros 
// el tanque tiene 45 litros
// el usuario da X kilometros 
// debemos decirle cuantos TANQUES necesita para recorrer los X kilometros 

// necesito los numeros que ingrese en el INPUT 

// con el SUBMIT 

// ----- > el valor X ----- > hago regla de 3 

const kilometers = document.querySelector('.section .form input');
const form = document.querySelector('.section form');
const message= document.getElementById('result'); 

form.addEventListener('submit', function(event){
    event.preventDefault();

    const result = Math.ceil((kilometers.value / 15 ) / 45);

    if(result <= 1 ){
        message.innerHTML = '<p>Usted no necesita abastecerse de combustible para completar la distancia deseada. Con la capacidad de 675 kilometros por tanque, usted puede cumplir todos sus sueños.</p>';

    } else {
        message.innerHTML = `<p>Usted necesita ${result} tanques de nafta para completar la distancia deseada.</p>`
    };
})




