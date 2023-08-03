/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade.
Ao terminar, imprima novamente todas as informações das três listas.*/

 const nomes =[
    "Ana",
    "Beatriz",
    "Carla",
    "Diana",
    "Evandro",
    "Fernanda",
    "Giselly",
    "Hannah",
    "Iago",
    "José"
 ];
    console.log(nomes); //Imprime a primeira vez

    nomes.splice(4, 2, 'Maria', 'Janete', 'Lucas'); //a partir do índice 4, remover dois elementos e acrescentar 3 novos
    console.log(nomes); // Imprime com as mudanças, fiz mais do que o pedido porque queria testar

 const idades =[
   "33",
   "15",
   "40",
   "22",
   "35",
   "28",
   "18",
   "30",
   "14",
   "52" 
 ];
    console.log(idades); //Imprime a primeira vez

    idades.splice(3,1,"46"); //a partir do índice 3, remover um elemento e adicionar o "46", no caso uma substituição
    console.log(idades); // Imprime com as mudanças

 const coresFavoritas =[
    "Azul",
    "Amarelo",
    "Rosa",
    "Preto",
    "Verde",
    "Roxo",
    "Laranja",
    "Branco",
    "Vermelho",
    "Marrom"
 ];
    console.log(coresFavoritas) //Imprime a primeira vez

    coresFavoritas.splice(2,2,'rosa choque', 'Cinza') //a partir do índice 2, substituir dois elementos por outros dois
    console.log(coresFavoritas) // Imprime com as mudanças
 