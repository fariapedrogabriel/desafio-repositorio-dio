#---Múltiplicas Atribuições
name, idade, humano = "Pedro", 21, True
print(name)
print(idade)
print(humano)
# aqui vemos como é possível atribuir variáveis diferentes na mesma linha, separando por ","

Pedro, Felipe, Matheus = 31, 34, 26
print(Pedro, Felipe, Matheus)
# aqui, atribuímos idades sequênciais para os nomes

Anna = Luiza = "17/05"
print(Anna)
# aqui a idéia foi registrar a mesma data para duas pessoas diferentes, o "=" entre os nomes significa que o valor a seguir vai ser para ambvos

a, b, c = d = 1, 3, 4
print(a)
print(b)
print(c)
print(d)
# aqui, "a", "b" e "c" estão separados por ",", então vão receber os valores em sequência, d recebe os 3 valores informados
# se colocarmos mais letras do que valores, vamos receber "not enough values to unpack (expected 3, got 2)", por exemplo
# se colocarmos mais números do que letras, vamos receber "too many values to unpack (expected 2)", por exemplo
# os valores devem ter onde serem atribuídos e vice-versa



# #---BOOLEAN
# human = False
# print(type(human))
# # escrever com a primeira letra MAIÚSCULA

# print(f'Você é Humano?')

# if human:
#     print(f"Verdadeiro!")
# else:
#     print(f'Falso!')
# # começando a escrever melhorando as convenções de boas práticas em PY, retirando o ";" do final de cada linha
# # a condicional IF não precisa de {} para abrir e fechar um scopo, podendo inicíá-lo apenas a partir do ":"
# #---BOOLEAN


#---FLOAT
# # números que contém casas decimais
# altura = 1.69;
# print(type(altura));

# # imprimindo em f'LITERALS'
# print(f'Minha altura é: {altura}cm');

# # imprimindo convertendo manualmente
# print("Minha altura é: " + str(altura) + "cm");
#---FLOAT


#---INTEIROS
# idade1 = 30;
# print(type(idade));

# idade1 += 1;
# # += implica em ADIÇÃO/ATRIBUIÇÃO DE INCREMENTO

# idadefutura = idade1 + 10

# # imprimindo em template f'LITERALS'
# print(f'Hoje tenho {idade1} anos!');
# print(f'Em 10 anos, terei {idadefutura} anos!');

# # imprimindo convertendo manualmente os números INTEIROS em STRINGS
# print("Hoje tenho " + str(idade1) + " anos!");
# print("Em 10 anos, terei " + str(idadefutura) + " anos!");
#---INTEIROS



#---SEGUNDO TESTE
# first_name = "Pedro";
# print(type(first_name));

# last_name = "Vieira";
# full_name = (f'{first_name} {last_name}');

# print(full_name);
# print(f'{first_name} {last_name}');
# #testando uma aproximação de TEMPLATE LITERALS em PY

# idade = 31;
# print(f'Olá, meu nome é {first_name} e tenho {idade} anos!');
#---SEGUNDO TESTE



#---PRIMEIRO TESTE
# print('Hello World!');

# name = "Pedro";
# print(name);

# print(f'Hello {name}');
#---PRIMEIRO TESTE