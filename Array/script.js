let idades = [18, 20, 12, 35, 14,15,38,88,99]
let precos = []


function array00(){
    
    // let  i = 14
    // console.log("idade:" + idades[i]);

    //     console.log( " idade:" + idades[0]);
//     console.log( " idade:" + idades[1]);
//     console.log( " idade:" + idades[2]); 
//     console.log( " idade:" + idades[3]);
//     console.log( " idade:" + idades[4]);
//  console.log( " idade:" + idades[5]);
//     for(let i=0;i<6;i++){
//         console.log("idade: " + idades[i]);
//     }
// }
const produtos = [
  "Smartphone 5G 128GB", "Notebook Intel i7 16GB", "Fone de Ouvido Bluetooth", "Smartwatch Esportivo", "Teclado Mecânico RGB",
  "Mouse Sem Fio Ergonômico", "Monitor Gamer 24 Pol", "Cadeira Gamer Reclinável", "Caixa de Som Portátil", "Carregador Rápido Tipo-C",
  "Televisão Smart 4K 55", "Console de Videogame", "Controle Sem Fio", "Roteador Wi-Fi 6 Giga", "HD Externo 1TB Portátil",
  "SSD NVMe 500GB", "Placa de Vídeo RTX", "Memória RAM DDR4 8GB", "Microfone Condensador USB", "Webcam Full HD 1080p",
  "Cafeteira Elétrica Inox", "Air Fryer Sem Óleo", "Liquidificador Portátil", "Forno Micro-ondas 30L", "Aspirador de Pó Vertical",
  "Batedeira Planetária", "Ferro de Passar a Vapor", "Ventilador de Coluna", "Panela de Pressão Elétrica", "Torradeira Automática",
  "Mochila Impermeável", "Tênis de Corrida Leve", "Camiseta Algodão Básica", "Calça Jeans Slim", "Jaqueta Corta-Vento",
  "Relógio de Pulso Analógico", "Óculos de Sol Proteção UV", "Carteira de Couro Legitimo", "Garrafa Térmica Inox", "Guarda-Chuva Automático",
  "Livro de Ficção Científica", "Jogo de Tabuleiro Estratégia", "Luminária de Mesa LED", "Organizador de Cabos Mesa", "Suporte articulado Monitor",
  "Almofada Ergonômica Cadeira", "Tapete para Mouse Extra Grande", "Kit Chaves de Fenda Precisão", "Maleta de Ferramentas", "Furadeira Impacto Elétrica"
];


    for(let i=0;i<produtos.length;i++){
        document.getElementById('lista-precos').innerHTML += produtos[i] + "<br>"
    }
}