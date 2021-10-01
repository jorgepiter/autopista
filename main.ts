let carril = 0
let nivel = 0
let Agitado = 0
input.onButtonPressed(Button.A, function () {
    if (carril >= 1 && nivel == 1) {
        carril += -1
        nivel = 0
    }
})
function cambiar () {
    led.plot(carril, nivel)
    basic.pause(300)
    nivel += 1
    if (nivel == 5) {
        nivel = 0
    }
}
input.onGesture(Gesture.Shake, function () {
    carril = randint(0, 4)
    nivel = 0
    Agitado = 1
})
input.onButtonPressed(Button.B, function () {
    if (carril <= 3 && nivel == 1) {
        carril += 1
        nivel = 0
    }
})
basic.forever(function () {
    if (Agitado == 1) {
        cambiar()
        if (nivel == 1) {
            basic.pause(500)
        }
        basic.clearScreen()
    }
})
