string opcao;
//String a ser declarada posteriormente;
bool exibirMenu = true;
//Booleana para termos condição de verdadeira/falsa;

while (exibirMenu){
    Console.WriteLine($"Digite a sua Opção:");
    Console.WriteLine($"Opção 1 - Cadastrar Cliente");
    Console.WriteLine($"Opção 2 - Buscar Cliente");
    Console.WriteLine($"Opção 3 - Excluir Cliente");
    Console.WriteLine($"Opção 4 - Encerrar");

    opcao = Console.ReadLine();
    //A String será declarada de acordo com o que for passado no terminal;

    switch (opcao)
    {
        case "1":
        Console.WriteLine($"Você escolheu Cadastrar Cliente");
        break;
    
        case "2":
        Console.WriteLine($"Você escolheu Buscar Cliente");
        break;

        case "3":
        Console.WriteLine($"Você escolheu Excluir Cliente");
        break;

        case "4":
        Console.WriteLine($"Você escolheu Encerrar");
        exibirMenu = false;
        break;
        //Dessa forma, ao digitar "4" exibirMenu será considerada falsa e o trecho de cod termina

        /*Environment.Exit(0);
        Outra forma de sair do código, porém essa encerraria o programa de vez, não executando
        nada depois dessa linha
        */

        default:
        Console.WriteLine($"Opção Inválida!");
        break;
        //default serve para caso nenhuma condição seja cumprida
    }
}

Console.WriteLine($"Programa encerrado!");