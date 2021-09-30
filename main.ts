let carril = 0
let nivel = 0
input.onButtonPressed(Button.A, function () {
    if (carril >= 1 && nivel == 0) {
        carril += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    carril = randint(0, 4)
})
input.onButtonPressed(Button.B, function () {
    if (carril <= 3 && nivel == 0) {
        carril += 1
    }
})
basic.forever(function () {
    basic.clearScreen()
    led.plot(carril, nivel)
    basic.pause(300)
    nivel += 1
    if (nivel == 5) {
        nivel = 0
    }
})
