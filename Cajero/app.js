//ID Paneles
const formulario = document.getElementById('formulario')
const inicio = document.getElementById('inicio')
const login = document.getElementById('login')
const operaciones = document.getElementById('operaciones')
const operacionSaldo = document.getElementById('operacionSaldo')
const operacionDeposito = document.getElementById('operacionDeposito')
const operacionRetiro = document.getElementById('operacionRetiro')
//Pantalla
const pantalla = document.getElementById('pantalla')
const pantallaBtn = document.getElementById('pantallaBtn')
const regresarSaldo = document.getElementById('regresarSaldo')
//ID Login
const inicioSesion = document.getElementById('inicioSesion')
const user = document.getElementById('user')
const password = document.getElementById('password')
//ID Operaciones
const saldo = document.getElementById('saldo')
const depositar = document.getElementById('depositar')
const retirar = document.getElementById('retirar')
//ID Operación Saldo
const consultaSaldo = document.getElementById('consultaSaldo')
//ID Operación Depósito
const deposito = document.getElementById('deposito')
const btnDeposito = document.getElementById('btnDeposito')
const regresarDeposito = document.getElementById('regresarDeposito')
//ID Operación Retiro
const retiro = document.getElementById('retiro')
const btnRetiro = document.getElementById('btnRetiro')
const regresarRetiro = document.getElementById('regresarRetiro')


//Variables

const cuentas = [
    {
        nombre:'Mauricio',
        usuario:'mau',
        contraseña: 'fili',
        saldo : 900,
    },
    {
        nombre:'Myriam',
        usuario : 'myrmir',
        contraseña : '123',
        saldo : 10,
    }
]

let index

//login
const iniciarSesion = (user,password) =>{
    const evaluar = (element) =>{
        return element.usuario === user
    }
    index = cuentas.findIndex(evaluar)
    if (index === -1) { //no existe
        const failLogin = document.createElement ('label')
        inicio.appendChild(failLogin)
        inicio.textContent = `El usuario no existe. Verifica la información.`
    }
    else if (password !== cuentas[index].contraseña) {
        const failLogin = document.createElement ('label')
        inicio.appendChild(failLogin)
        inicio.textContent = `La contraseña es incorrecta.`
    }
    else {
        console.log('Bienvenido')
        operaciones.classList.add('visible');
        operaciones.classList.remove('hide');
        login.classList.add('hide');
        login.classList.remove('visible');
        const bienvenido = document.createElement ('h1')
        inicio.appendChild(bienvenido)
        inicio.textContent = `"Guau" ${cuentas[index].nombre}, bienvenido al banco del perrito`
    }
}
inicioSesion.addEventListener('click', (evento)=>{
    evento.preventDefault()
    const user = document.getElementById('user').value
    const password = document.getElementById('password').value
    iniciarSesion(user,password)
})

//Operaciones
const botonDepositar = () => {
    operaciones.classList.add('hide')
    operaciones.classList.remove('visible')
    operacionDeposito.classList.add('visible')
    operacionDeposito.classList.remove('hide')
    pantalla.classList.add('hide')
    pantalla.classList.remove('visible')
    inicio.classList.add('hide')
    inicio.classList.remove('visible')
}

const botonRetirar = () => {
    operaciones.classList.add('hide')
    operaciones.classList.remove('visible')
    operacionRetiro.classList.add('visible')
    operacionRetiro.classList.remove('hide')
    pantalla.classList.add('hide')
    pantalla.classList.remove('visible')
    inicio.classList.add('hide')
    inicio.classList.remove('visible')
}

depositar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    botonDepositar()
})

retirar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    botonRetirar()
})
//Saldo

const mostrarSaldo = () =>{
   const operacionSaldo = document.createElement ('label')
    pantalla.appendChild(operacionSaldo)
    pantalla.textContent = `${cuentas[index].nombre}, tu saldo es de: $${cuentas[index].saldo} ¿Deseas realizar alguna otra operación?`
    operaciones.classList.add('hide')
    operaciones.classList.remove('visible')
    pantalla.classList.add('visiblie')
    pantalla.classList.remove('hide')
    pantallaBtn.classList.add('visible')
    pantallaBtn.classList.remove('hide')
    inicio.classList.add('hide')
    inicio.classList.remove('visible')
}

saldo.addEventListener('click', (evento)=>{
    evento.preventDefault()
    console.log('click')
    mostrarSaldo()
})

const btnRegresarSaldo = () => {
    operacionSaldo.classList.add('hide')
    operacionSaldo.classList.remove('visible')
    operaciones.classList.add('visible')
    operaciones.classList.remove('hide')
    pantalla.classList.add('hide')
    pantalla.classList.remove('visible')
    pantallaBtn.classList.add('hide')
    pantallaBtn.classList.remove('visible')
    inicio.classList.add('visible')
    inicio.classList.remove('hide')
}

regresarSaldo.addEventListener('click', (evento)=>{
    evento.preventDefault()
    console.log('click')
    btnRegresarSaldo()
})

//Depositar
const depositarSaldo = (deposito,) => {

    if (deposito > 2000){
        const operacionDeposito = document.createElement ('label')
        pantalla.textContent = `${cuentas[index].nombre}, lo sentimos, no puedes depositar más de $2000 a tu cuenta.`
        pantalla.appendChild(operacionDeposito)
        pantalla.classList.add('visible')
        pantalla.classList.remove('hide')
    }else if(deposito === 0){
        const operacionDeposito = document.createElement ('label')
        pantalla.textContent = `${cuentas[index].nombre}, ingresa una cantidad válida para depositar.`
        pantalla.appendChild(operacionDeposito)
        pantalla.classList.add('visible')
        pantalla.classList.remove('hide')    
    }else{
       let totalDeposito = deposito + cuentas[index].saldo
       cuentas[index].saldo = totalDeposito
       console.log(totalDeposito)
       const operacionDeposito = document.createElement ('label')
       pantalla.textContent = `${cuentas[index].nombre}, has depositado $${deposito} a tu cuenta.`
       pantalla.appendChild(operacionDeposito)
       pantalla.classList.add('visible')
       pantalla.classList.remove('hide')
    }
  }

  btnDeposito.addEventListener('click', (evento)=>{
    evento.preventDefault()
    let deposito = parseFloat(document.getElementById('deposito').value)
    depositarSaldo(deposito)
})

const btnRegresarDeposito = () => {
    operaciones.classList.add('visible');
    operaciones.classList.remove('hide');
    operacionDeposito.classList.add('hide')
    operacionDeposito.classList.remove('visible')
    pantalla.classList.add('hide')
    pantalla.classList.remove('visible')
    inicio.classList.add('visible')
    inicio.classList.remove('hide')
}

regresarDeposito.addEventListener('click', (evento) => {
    evento.preventDefault()
    btnRegresarDeposito()
})

//Retirar

const retirarSaldo = (retiro,) => {
    if((retiro >= 0) && (retiro > cuentas[index].saldo)){
        const operacionRetiro = document.createElement ('label')
        pantalla.textContent = `${cuentas[index].nombre}, te recordamos que no puedes retirar un monto mayor $${cuentas[index].saldo} ni menor a $1.`
        pantalla.appendChild(operacionRetiro)
        pantalla.classList.add('visible')
        pantalla.classList.remove('hide')
    }else if((cuentas[index].saldo - retiro < 10)){
        const operacionRetiro = document.createElement ('label')
        pantalla.textContent = `${cuentas[index].nombre}, lo sentimos, tu saldo no puede ser menor a $10.`
        pantalla.appendChild(operacionRetiro)
        pantalla.classList.add('visible')
        pantalla.classList.remove('hide')
    }else{
        let totalRetirar = cuentas[index].saldo - retiro
        cuentas[index].saldo = totalRetirar
        console.log(totalRetirar)
        const operacionRetiro = document.createElement ('label')
        pantalla.textContent = `${cuentas[index].nombre}, has retirado $${retiro} a tu cuenta.`
        pantalla.appendChild(operacionRetiro)
        pantalla.classList.add('visible')
        pantalla.classList.remove('hide')
    }
}

btnRetiro.addEventListener('click', (evento)=>{
    evento.preventDefault()
    let retiro = parseFloat(document.getElementById('retiro').value)
    retirarSaldo(retiro)
})

const btnRegresarRetiro = () => {
    operaciones.classList.add('visible');
    operaciones.classList.remove('hide');
    operacionRetiro.classList.add('hide')
    operacionRetiro.classList.remove('visible')
    pantalla.classList.add('hide')
    pantalla.classList.remove('visible')
    inicio.classList.add('visible')
    inicio.classList.remove('hide')
}

regresarRetiro.addEventListener('click', (evento) => {
    evento.preventDefault()
    btnRegresarRetiro()
})