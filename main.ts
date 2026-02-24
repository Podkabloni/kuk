input.onButtonPressed(Button.A, function () {
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
    RingbitCar.forward()
})
