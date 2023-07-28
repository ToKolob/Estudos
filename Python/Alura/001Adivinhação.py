import random as rd
numero_da_sorte = rd.randrange(0,100)
print (numero_da_sorte)

print('{}'.format)

dificuldade_respostas_validas = [1,2,3,4]
dificuldade = ''

while dificuldade not in dificuldade_respostas_validas:
  dificuldade = float(input('escolha qual a dificuldade que você quer jogar. \n(1)Fácil\n(2)Medio\n(3)Difícil\n(4)Modo treino\n '))

if dificuldade == 1:
  tentativas = 15
elif dificuldade == 2:
  tentativas = 10
elif dificuldade == 3:
  tentativas = 5
else:
  tentativas = 'ilimitado'








