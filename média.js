const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;
const media = (nota1+nota2+nota3+nota4)/4;
console.log(media);

const arrayNotas = [10,6.5,8,7.5];
i=0;
let notas=0
while(i<arrayNotas.length){
    notas += arrayNotas[i];
    i++;
}
const novaMedia = notas/arrayNotas.length;
// console.log(notas);
console.log(novaMedia);