var hora = new Date().getHours()

console.log(hora)

if (hora < 6) {
    console.log('Acordou cedo hein!')
}
else if (hora < 12) {
    console.log('Bom Dia')
}
else if (hora < 18) {
    console.log('Boa tarde')
}
else {
    console.log('Boa Noite')
}