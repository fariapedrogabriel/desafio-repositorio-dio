/*---Apagar

Console.WriteLine($"4 - Listas");

//Uma lista trabalha como um array mas não precisa definir tamanho, é como um array melhorado;

List<string> listaString = new List<string>();

listaString.Add("SP");
listaString.Add("BA");
listaString.Add("MG");

Console.WriteLine($"Itens na minha lista: {listaString.Count} - Capacidade {listaString.Capacity}");

listaString.Add("SC");

Console.WriteLine($"Itens na minha lista: {listaString.Count} - Capacidade {listaString.Capacity}");

listaString.Add("PR");

Console.WriteLine($"Itens na minha lista: {listaString.Count} - Capacidade {listaString.Capacity}");

listaString.Remove("BA");

Console.WriteLine($"Itens na minha lista: {listaString.Count} - Capacidade {listaString.Capacity}");


//Percorrendo a lista com o FORÇ;
for(int contador = 0; contador < listaString.Count; contador++){
    Console.WriteLine($"Contador Nº {contador} - {listaString[contador]}");
}
//COUNT funciona como o LENGHT;
/*CONTADOR inicia em 0, a condição é ler toda a lista e o contador é encrementado;
No console, imprimimos o valor do contador, pedimos o resultado da lista naquela posição que
também é automáticamente a que o contador estiver, mas poderíamos definir uma própria;
*/

/*---Apagar
//Percorrendo a lista com o FOREACH;
int contadorForeach = 0;
foreach (string item in listaString){
    Console.WriteLine($"Contador Nº {contadorForeach} - {item}");
    contadorForeach++;
}

/*Sempre que possível, prefira usar listas, internamente ela trabalha como array mas não te mostra
isso
A lista automaticamente reconfigura a sua capacidade máxima etc
*/
