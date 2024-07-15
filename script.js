//Factory Function + prototypes

const falar={
  falar(){
    console.log(`${this.nome} está Falando.`)
  },
}
const pessoaPrototype=Object.assign({},falar)
function criaPessoa(nome,sobrenome){
  return Object.create(pessoaPrototype,{
    nome:{value:nome},
    sobrenome:{value:sobrenome}
  })
}
const p1=criaPessoa('Jean','Lucas')
p1.falar()
console.log(p1)