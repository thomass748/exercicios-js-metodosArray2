const usuarios = [
{ id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
{ id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
{ id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
{ id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

console.log(usuarios)
console.log('---------------------------')
const listarUsuarios = usuarios.map((item) => {
    return {
        nome: item.nome,
        cargo: item.cargo
    }
})
console.log(listarUsuarios)

console.log('---------------------------')
const buscarUsuarioPorId = usuarios.find((item) => item.id === 2)
console.log(buscarUsuarioPorId)

console.log('---------------------------')
const listarUsuariosAtivos = usuarios.filter((item) => item.ativo === true)
console.log(listarUsuariosAtivos)

console.log('---------------------------')
const existeUsuarioInativo = usuarios.some((item) => item.ativo === false)
console.log(existeUsuarioInativo)

console.log('---------------------------')
const todosUsuariosMaioresDeIdade = usuarios.every((item) => item.idade > 17)
console.log(todosUsuariosMaioresDeIdade)

console.log('---------------------------')
const calcularMediaIdade = usuarios.reduce((ac, item) => ac + item.idade, 0) / usuarios.length;
console.log(calcularMediaIdade);