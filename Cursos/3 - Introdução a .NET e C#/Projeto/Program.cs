using ExemploFundamentos.Models;

Pessoa p1 = new Pessoa($"Pedro", "Vieira");
/*Atribuindo "SET"/propriedades a p1, utilizando construtores para atribuição de forma otimizada, do contrário poderíamos fazer como
p1.Nome = "Pedro";
p1.Sobrenome = "Vieira";
*/
Pessoa p2 = new Pessoa(nome: "Gabriel", sobrenome: "Faria");
//Podemos também fazer assim, deixando claro quais propriedades estamos declarando

Curso cursoDeIngles = new Curso();
cursoDeIngles.Nome = "Ingles";
cursoDeIngles.Alunos = new List<Pessoa>();

cursoDeIngles.AddAluno(p1);
cursoDeIngles.AddAluno(p2);
cursoDeIngles.ListarAlunos();
/*No último pedaço do código, adicionamos aluno usando p1 e p2 como parâmetro para AddAluno. No começo do código, p1 e p2 são variáveis do tipo pessoa, duas 
instâncias da classe pessoa;
Quando você faz um new, você está fazendo uma instância daquela classe, está materializando a classe para poder trabalhar com ela;
Um método é um bloco de código que faz alguma coisa;
*/