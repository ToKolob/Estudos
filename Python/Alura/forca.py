palavra_secreta = 'Moroni'
letra_chutada = []

def dica():
  print('Sua dica é: ',end='')
  for letra in palavra_secreta:  

    if letra.lower in letra_chutada:
      print (letra,end=' ')
    else:
      print ('_',end=' ')
    
  print(f'\n Você ja tentou {letra_chutada}')

tentativa = input('Informe uma letra ou a palavra secreta')
if len(tentativa) > 1:

  print('palavra')
  
else:

  print ('letra')    


    
