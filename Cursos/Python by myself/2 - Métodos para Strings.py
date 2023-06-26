print("Ola!")

name = "pedro" #atribuindo a string à variável
print(name) #imprimindo sem alterações
print(len(name)) #imprimindo o comprimento da string
print(name.find("r")) #localizando o índice de uma letra
print(name.capitalize()) #"capitalizando", tornando a primeira letra maiúscula
print(name.upper()) #colocando toda a string em maiúsculo
# print(name)(name.lowe()) #faria o inverso
print(name.isdigit()) #booleano, questiona se o valor atribuído são digitos, retornaria "true" caso fosse, por exemplo "123"3
print(name.isalpha()) #questiona se são carácteres alfabéticos
print(type(name)) #imprime o tipo da variável
print(name.count("o")) #conta o parâmetro informado dentro da string em questão, no caso, pedi para contar quantos "o" tem em "Pedro"
# se eu quisesse, no caso, contar de tal número existe num número maior, precisaria informá-lo em string para usar esse comando, ou então como abaixo
numero = 89435093458943984358943
print(str(numero).count("8"))
# voltando aos métodos para STRINGS
print(name.replace("o", "u"))#substituindo uma letra por outra, necessário 2 parâmetros
print(name*3)#imprimindo a string *3


