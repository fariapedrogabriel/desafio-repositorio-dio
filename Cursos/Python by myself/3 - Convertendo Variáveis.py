#type casting = convert the type of a value to another type

x = 1 #int
y = 2.0 #float
# se eu digitasse "y = 2,0" seria uma TUPLE, atribuindo 2 valores separados por vírgula a "y" e não um valor com casa decimal
z = "3" #string

print(x)
print(y)
print(z)

# convertendo para outro tipo de variável

c = int(y) + x #dessa forma, estou alterando TEMPORARIAMENTE "y" para INTEIRO, reforçando, apenas para essa linha de código
print(c) #se não tivesse feito dessa forma, o valor impresso seria em FLOAT e retornaria "3.0"

y = int(y) #dessa forma, "y" seria PERMANENTEMENTE convertido para INTEIRO o a partir dessa linha de código
print(y)

print(z*3) #apesar de "z" ter um valor de "3", ele é uma string e não pode ser matemáticamente alterado, então o retorno aqui será "333"
print(int(z)*3) #aqui, estamos TEMPORARIAMENTE alterando "z" de string para inteiro, podendo assim realizar operações matemáticas

print(float(x)) #aqui, estamos convertendo "x" para FLOAT, podendo assim ver suas casas decimais

print(str(x).count("1")) #converti "x" para STRING, podendo assim executar um comando exclusivo de strings para contar quanto de tal letra tenho dentro de "x"