// //Utilizando o FOR;
// int numero = 5;

// for(int contador = 0; contador <= 100; contador++)
// {
//     Console.WriteLine($"{numero} x {contador} = {numero * contador}");
// }
// /*A variável "numero" é o inteiro que queremos multiplicar, criamos a variável "contador" para
// representar o valor a ser multiplicado, a condição para quando parar de multiplicar e o 
// encremento a ser posto a cada execução
// */



// //Utilizando o WHILE;
// int numero2 = 5;
// int contador2 = 1;

// while (contador2 <= 10){
//     Console.WriteLine($"{contador2}* Execução: {numero2} x {contador2} = {numero2 * contador2}");
//     contador2++;

// //Criando uma condição para parar a execução do código "break", também funciona com FOR;
//     if (contador2 == 6){
//         break;
//     }
// }
// /* Só verifica a condição, você é responsável por declarar a variável e declarar o encremento
// por conta própria, ou ele pode entrar em loop infinito por permanecer no mesmo valor sempre
// */



// //Utilizando o DO WHILE (FAÇA x ação ENQUANTO y condição);

// int soma = 0, numero3 = 0;
// //Aqui declaramos duas Variáveis (do mesmo tipo) na mesma linha sem necessidade de repetir INT

// do
// {
//     Console.WriteLine("Digite um número para somar (0 para parar)");
//     numero3 = Convert.ToInt32(Console.ReadLine());
//     //Convertemos a String para Inteiro

//     soma += numero3;
//     //Soma vai ser somada a número
// }   while (numero3 != 0);
//     //Enquanto número for diferente de 0

// Console.WriteLine($"A soma dos números é igual a {soma}");
// //No momento que a condição WHILE for concretizada, vai interromper o DO e executar o restante



