//Cast ou Casting (Conversão de uma Variável para outra);
int a = Convert.ToInt32("5");

Console.WriteLine(a);

//Outra forma, "Parse"
a = int.Parse("7");

Console.WriteLine(a);

/*Diferença entre Convert e Parse:
A principal diferença entre eles é o tratamento de valores nulos:
Convert pode converter um valor nulo/vazio/sem dados, convertendo para 0.
Parse não pode converter valor nulo.

É preferêncial utilizar convert para poder trabalhar com valores nulos.
*/