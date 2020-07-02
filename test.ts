input.onButtonPressed(Button.AB, function () {
    JQ6500.setEQ(dfplayermini.EQ.Jazz)
    JQ6500.playFileInFolder(1, 1, JQ6500.isRepeat.No)
})
input.onButtonPressed(Button.A, function () {
    JQ6500.playFile(1, JQ6500.isRepeat.No)
})
input.onButtonPressed(Button.B, function () {
    JQ6500.playLoopFolder(1)
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(30)
dfplayermini.press(JQ6500.playType.Play)
dfplayermini.playLoopAllFiles()
basic.forever(function () {
	
})
