let ligado: boolean = false;
let nome: string = "Henrique";
let idade: number = 30;
let altura: number = 1.9;

let nulo: null = null;
let indefinido: undefined = undefined;

let retorno: void;
let retornoView: any = false;

let produto: object = {
  name: "Henrique",
  cidade: "sp",
  idade: 30,
};

type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

let dados: string[] = ["Henrique", "Ana", "Adriana"];
let dados2: Array<string> = ["Henrique", "ana", "Adriana"];

let infos: (string | number)[] = [322, "Henrique"];

let boleto: [string, number, number] = ["Água conta", 199.9, 32342342];

dados.pop();

let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
