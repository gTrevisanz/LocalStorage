function Enviar() {

    let marca  = document.getElementById('marca').value;

    let modelo = document.getElementById('modelo').value;

    const carros = {
        marca: marca, 
        modelo: modelo,
    };
    
    localStorage.setItem('carros', JSON.stringify(carros))

    console.log('Seu cadastro foi um sucesso!')
    
  }