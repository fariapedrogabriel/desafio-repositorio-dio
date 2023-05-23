/*
//1 - Cast ou Casting (Conversão de uma Variável para outra);
int a = Convert.ToInt32("1");

Console.WriteLine(a);

//2 - Outra forma, "Parse";
a = int.Parse("2");

Console.WriteLine(a);

/*Diferença entre Convert e Parse:
A principal diferença entre eles é o tratamento de valores nulos:
Convert pode converter um valor nulo/vazio/sem dados, convertendo para 0;
Parse não pode converter valor nulo;

É preferêncial utilizar convert para poder trabalhar com valores nulos;


//3 - Convertendo para string;
int inteiro = 3;
string b = inteiro.ToString();

Console.WriteLine(b);

//4 - Conversão implícita;
int c = 4;
double d = c;
//Também serve para long;

Console.WriteLine(d);
//O Contrário não poderia ser feito, pois int pode não suportar um número de double ou long

*/