/*Copiando um Array;

Console.WriteLine($"Olá!");

int [] arrayInteiros = new int [3];

arrayInteiros[0] = 19;
arrayInteiros[1] = 21;
arrayInteiros[2] = 28;

int[] arrayInteirosDobrado = new int[arrayInteiros.Length * 2];
Array.Copy(arrayInteiros, arrayInteirosDobrado, arrayInteiros.Length);

Console.WriteLine($"Teste");
*/

/*---apagar
Console.WriteLine($"Olá!");

int [] arrayInteiros = new int [3];

arrayInteiros[0] = 19;
arrayInteiros[1] = 21;
arrayInteiros[2] = 28;
//arrayInteiros[3] = 17;

/*Array.Resize( ref arrayInteiros, arrayInteiros.Length * 2);
Redimencionando um Array, pois naturalmente ele nasce e morre com o mesmo tamanho, essa função
apenas implicitamente copia o Array antigo aumentando seu tamanho e mantendo os valores originais;
*/

/*---apagar
Console.WriteLine($"Percorrendo o Array com FOR");
for(int contador = 0; contador < arrayInteiros.Length; contador++){
    Console.WriteLine($"Posição Nº{contador}: {arrayInteiros[contador]}");
}
/*FOR ()"cria variável com n para iniciar"; "condição, no caso, comprimento do array"; "encremento"){
    Scopo a ser executado dentro do for;
}*/

/*---apagar
Console.WriteLine($"Percorrendo o Array com FOREACH (SEM CONTADOR)");
foreach(int valor in arrayInteiros){
    Console.WriteLine($"{valor}");
}
/*FOREACH para cada "valor" dentro de "arrayInteiros", executar a função, sem contador apenas
retorna o resultado;
*/
/*---apagar
Console.WriteLine($"Percorrendo o Array com FOREACH (COM CONTADOR)");
int contadorForeach = 0;
foreach(int valor in arrayInteiros){
    Console.WriteLine($"Posição Nº{contadorForeach}: {valor}");
    contadorForeach++;
}
/*
Adicionado CONTADOR para que seja possível imprimir o resultado dessa forma em cada posição,
do contrário, só retornaria o valor;
*/