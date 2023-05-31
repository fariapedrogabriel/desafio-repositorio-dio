using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploFundamentos.Models
{
    public class Pessoa
    {
        private int _idade;
        public int Idade 
        { 
            get => _idade;
            set{
                if (value <= 0){
                    throw new ArgumentException($"Idade não pode ser menor ou igual a zero!");
                }
                _idade = value;
            } 
        }

        private string _nome;
        //Com o private, apenas nós podemos alterar o valor de _nome;
        public string Nome 
        { 
            get {
                return _nome.ToUpper();
                //Vai retornar o nome em maíusculo
            }
            //forma resumida via BODY EXPRESSIONS seria: get => _nome.ToUpper(); sendo "=>" == "return"

            set{
                if (value == ""){
                    throw new ArgumentException($"O Nome não pode ser vazio!");
                } 
                _nome = value;
            }
        }
        /*Dessa forma, se VALUE for nulo, ArgumentException para o código até ser resolvido, TACANDO o argumento de volta 
        para o terminal
        Se VALUE não for nulo, o valor é repassado a _nome
        Dessa forma, a PUBLIC STRING pode ser preenchida pelo usuário, mas vai passar por uma validação e se confirmada, 
        aí sim, será o valor atribuído a _nome, que é a variável NÃO ALTERÁVEL que utilizaremos
        */
        
        public string Sobrenome{get; set;}
        public string NomeCompleto => $"{Nome} {Sobrenome}".ToUpper();
        /*Criamos "Sobrenome" e "NomeCompleto" para incluir Sobrenome como GET SET e NomeCompleto apenas como get, pois vai apenas receber as strings, juntar e 
        converter para Maísculo
        */

        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {NomeCompleto} e tenho {Idade} ano(s)!");
            //Exemplo de GET, pois {Nome} está apenas pegando o valor já atribuído;
        }
    }
}

/*GET = obter valor que você armazenou && SET = atribuindo o valor
Quando deixamos o GET e o SET vazios, ele aceitará o valor passado;
Da forma: public string Nome { get; set; } estaríamos aceitando qualquer valor passado
Public class/propriedade - Qualquer um pode instancear a classe ou acessar a propriedade;
Private class/propriedade - Acesso restrito, só é permitido acessar dentro da própria classe, não são acessíveis externamente
No caso, colocamos como private porque ela só pode ser acessada através da propriedade e existe uma validação dentro da propriedade tanto 
no SET quanto no GET, então a propriedade fica protegida contra alterações externas
PROPRIEDADE sempre terá GET e/ou SET, do contrário é apenas um CAMPO
*/