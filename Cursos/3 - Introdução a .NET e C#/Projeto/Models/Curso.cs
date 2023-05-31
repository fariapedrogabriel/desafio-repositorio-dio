using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemploFundamentos.Models{
    public class Curso{
        public string Nome {get; set;}

        public List<Pessoa> Alunos {get; set;}
        //Lista de Pessoas, só vai aceitar objetos tipo Pessoa;

        public void AddAluno(Pessoa aluno){
            /*public == privado ou público
        void == tipo de Método/Retorno, nesse caso, ele não retorna nada. No caso da calculadora ele trazia o resultado, porém 
        nesse, só queremos que adicione um aluno. "VOID" significa vazio, ou seja, não retorna nada;
        AddAluno == Nome do Método;
        () == Parâmetros; Ou seja, está recebendo como argumento a classe Pessoa;
        aluno == Nome do Parâmetro/Argumento;
        */
            Alunos.Add(aluno);
            //Por fim, ele executa a função de adicionar na lista "Alunos.Add" (Nome da lista.Função) o valor de (aluno), não precisa de RETURN por ser VOID;
        }

        public int ObterQuantidadeAlunosMatriculados(){
            /*Tipo INT, vai retornar um número
            Nome do método
            Executa a função do scopo
            Sem parâmetro/argumento, pois o valor vai ser o do RETURN
            */
            int quantidade = Alunos.Count;
            //Cria um INTEIRO utilizando a função de CONTAR a LISTA ALUNOS, dessa forma estará sempre de acordo com a contagem ATUAL da LISTA;
            return quantidade;
            //RETORNA o valor encontrado para quando executado o Método, o método é um INTEIRO então o resultado precisa ser INTEIRO;
        }

        public bool DelAluno(Pessoa aluno){
            return Alunos.Remove(aluno);
        /*Vazio se não precisarmos de retorno, apenas da função de remoção executada;
        No caso, colocamos como booleano e o return a função do scopo, que vai retornar como TRUE se o método REMOVE for executado e FALSE, do contrário;
        */
        }
    }

}

//Lembrando que existem métodos CRIADOS e JÁ CONTIDOS, aqui CRIAMOS alguns como o AddAluno e utilizamos de outros JÁ CONTIDOS, como o .Remove .Add ETC;
