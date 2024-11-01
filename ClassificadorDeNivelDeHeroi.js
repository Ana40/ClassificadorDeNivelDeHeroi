// Armazenar o nome e a quantidade de experiência (XP) do herói
const nome = gets(); // Lê o nome do herói
const experiencia = parseInt(gets()); // Lê a XP e converte para inteiro

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para classificar o nível com base na XP
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída da mensagem final
print(`O Herói de nome ${nome} está no nível de ${nivel}`);