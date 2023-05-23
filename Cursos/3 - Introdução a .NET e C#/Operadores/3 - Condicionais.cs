/*
//Utilizando o if em c#
int quantidadeEmEstoque = 7;
int quantidadeCompra = 1;

Console.WriteLine("No *Primeiro Caso*, é possível realizar a venda?");
if (quantidadeEmEstoque >= quantidadeCompra){
    Console.WriteLine("Sim, compra concluída!");
}
    else {
    Console.WriteLine("Desculpe, não é possível por falta de estoque!");
    }



//Também seria possível fazê-lo com variável booleana
int quantidadeEmEstoque2 = 5;
int quantidadeCompra2 = 7;
bool possivelVenda = (quantidadeEmEstoque2 >= quantidadeCompra2);

Console.WriteLine($"\nNo *Segundo Caso*, é possível realizar a venda? {possivelVenda}");

if (possivelVenda){
    Console.WriteLine("Compra Concluída");
}
    else {
    Console.WriteLine("Desculpe, não temos em estoque");
    }


//If com pipes e readline;
Console.WriteLine("Digite uma letra");
string letra = Console.ReadLine();

/*if (letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u")
    {
        Console.WriteLine("Vogal");
    }


//Condicional com Switch Case;
switch (letra)
{ 
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        Console.WriteLine("Vogal");
        break;

    default:
        Console.WriteLine("Não é uma Vogal");
        break;
}

*/