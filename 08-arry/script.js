
const nomes = [
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
];

let idades = [22, 33, 32]

let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const copiaSemana = []

function inverterArray(){
    while(diasDaSemana.length > 0){
        let removido = diasDaSemana.pop()
        copiaSemana.push(removido)
    }
    diasDaSemana = copiaSemana
    console.log(diasDaSemana);
     console.log(copiaSemana);
    
    
}


let produtos = ["Meia", "Pá de corte", "Suco de manga", "Leite"]
let precos = [665.9999, 777, 12, 4]

function adicionarProduto(){
    let preco, produto

    do{
        produto = prompt("Nome do produto:")
    }while(produto == '')

    do{
        preco = Number(prompt("Preço do produto:"))
    }while(preco <= 0)

    produtos.push(produto)
    precos.push(preco)

    verProdutosComPrecos()
}

function aumentarPrecos(){
    for(let i=0; i<precos.length; i++){
        precos[i] = precos[i] * 4
    }
    verProdutosComPrecos()
}

function removerUltimo(){
    produtos.pop()          // remove o produto
    precos.pop()            // remove o preço

    verProdutosComPrecos() // atualiza a lista na tela
}

function verProdutosComPrecos(){
    document.getElementById('listaProdutos').innerHTML = ''
    for(let i=0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + 
        j + "°: " + produtos[i] + " R$ " + 
        precos[i].toFixed(2).replace('.', ',') 
        + 
        "</p>"
    } 
}

function verProdutos(){
    console.log(produtos);
    for(let i=0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById('listaProdutos').innerHTML += 
        "<p>" + j + "°: " + produtos[i] + "</p>"
    } 
}
 const diasdasemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
 let copiasemana = [];

 function inverterarray(){
     while(diasdasemana.length >0){
       let removido = diasdasemana.pop()
    copiasemana.push(removido)
     }
     diasdasemana = copiasemana
    console.log(diasdasemana);
    console.log(copiasemana);  
 }

 const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
 diasDaSemana.push('Feriado');
 console.log(diasDaSemana);

  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
 diasDaSemana.pop(); 
 console.log(diasDaSemana); 

  const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  numerosPares[2] = 12
  console.log(numerosPares); 

 let frutas = ['banana', 'maçã', 'uva'];
 frutas.push('morango');
 console.log(frutas); 

 let removerfrutas = ['banana', 'maçã', 'uva' , 'morango'];
 removerfrutas.pop()
 removerfrutas[1] = 'uva'
 removerfrutas[2] = 'morango'
 console.log(removerfrutas);

 const amigos = ['Lucas', 'Mariana', 'Carlos'];
 console.log(amigos);
  const amigos = ['Lucas', 'Mariana', 'Carlos'];
  console.log(amigos);
 amigos.push('helena','jeferson','fernando')
 const idades = [17,23,34,9,33,17]
 console.log(idades);

 let soma = idades[0] + idades[1]
 console.log(soma);
 let media = (soma + idades[2]+ idades[3] + idades[4] + idades[5]) / 6
 console.log(media);

 const produtos =['Maçãs', 'Pão', 'Leite']
 console.log(produtos);
 produtos.push('cafe','chocolate')
 produtos.pop()
 produtos[2] = 'cafe'
 produtos[3] = 'chocolate'
 let verificacao = produtos.includes('Pão')
 console.log(verificacao);

 const impar = [];
 impar.push(9,1,3,21,11)
 console.log(impar);

 const listadenumeros = [10,67,89,21,23,35];
 let numeros
 for(let i = 0; i < listadenumeros.length; i++){
     numeros = listadenumeros[i] * 2
     console.log(numeros);
 }

 const cidades = ['sao paulo','paris','seul','toquio']
 function exercicio(){
     document.getElementById('texto').innerHTML = "eu gosto de " + cidades[2] + " e adoro " + cidades[3]
 }
