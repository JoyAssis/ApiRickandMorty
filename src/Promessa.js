/**
 * Promise ou promessa
 * A promessa de que algo irá acontecer
 * poderá dar certo ou errado,mas irá acontecer.
 */

let aceitar = true
console.log ('pedir carro')
const promessa = new Promise((resolve,reject)=>{
  if(aceitar){
    return resolve("pedido aceito")
  }else{
    return resolve('carro chegou')
  }
  
});

console.log ('aguardando')

promessa
.then(result =>console.log (result))
.catch(err =>console.log (err))
.finally(()=>console.logo("finalizada"))