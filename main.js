const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o nome do herói? ", (nome) => {
  rl.question("Qual a quantidade de XP do herói? ", (xp) => {
    xp = Number(xp);
    let nivel = "";

    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else if (xp >= 10001) {
      nivel = "Radiante";
    } else {
      nivel = "Desconhecido";
    }

    console.log(`O herói ${nome} possui ${xp} XP e está no nível ${nivel}.`);
    rl.close();
  });
});
