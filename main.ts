input.onButtonPressed(Button.A, function () {
    iClassIoT.triggerIFTTT(
    "test",
    "A",
    "I ",
    "am",
    "Joseph"
    )
    radio.sendNumber(9)
})
iClassIoT.init(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
iClassIoT.connectWiFi("MakerSpace-GUEST", "guest1234")
