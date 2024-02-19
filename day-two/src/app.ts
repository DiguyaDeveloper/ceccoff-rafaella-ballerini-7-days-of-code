import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await askQuestion("Qual é o seu nome? ");

  console.log(`Olá, ${name}!`);

  const age = await askQuestion("Quantos anos você tem? ");

  console.log(`Então, ${name}, você tem ${age} anos de idade!`);

  const language = await askQuestion(
    "Qual linguagem de programação você está estudando? "
  );

  console.log(`Então, ${name}, você está estudando ${language}!`);

  console.log(
    `Muito prazer ${name}, você tem ${age} anos e já está aprendendo ${language}!`
  );

  await handleAskLanguages(name);

  rl.close();
}

async function handleAskLanguages(name) {
  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Sass",
    "Less",
    "Stylus",
    "Java",
    "Python",
    "Ruby",
  ];

  const response = {
    1: `Muito bom! ${name} Continue estudando e você terá muito sucesso.`,
    2: `Ahh que pena... ${name} Já tentou aprender outras linguagens?`,
  };

  for await (const iterator of languages) {
    const language = await askQuestion(
      `Você gosta de estudar ${iterator}? Responda com o número 1 para SIM ou 2 para NÃO.`
    );

    console.log(response[language]);
  }
}

main();
