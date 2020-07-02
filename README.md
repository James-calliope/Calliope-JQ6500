# JQ6500 MP3 river
makecode pxt extension for Jq6500 mp3 Board

**JQ6500 MP3 Module:**

![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/icon.png?raw=true "DFPlayer Mini Module")

**JQ6500 MP3 :**

![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/icon2.png?raw=true "JQ6500 Audio Board picture")

![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/icon3.jpg?raw=true "JQ6500 Audio Board picture 2")

## Basic Usage

```blocks
input.onButtonPressed(Button.A, function () {
    JQ6500.playLoopAllFiles()
})
input.onButtonPressed(Button.B, function () {
    JQ6500.setEQ(dfplayermini.EQ.Rock)
})
input.onButtonPressed(Button.AB, function () {
    JQ6500.setEQ(dfplayermini.EQ.Jazz)
})
JQ6500.connect(SerialPin.P0, SerialPin.P1)
basic.forever(function () {
	
})
```

Use ``||connect||`` to connect to JQ6500 MP3 Board.

Use ``||playLoopAllFiles||`` to play loop all files.

Use ``||setEQ||`` to set EQ for JQ6500 MP3 .

## Demo

### setup JQ6500 MP3 

#### Calliope mini + JQ6500 MP3 board
![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/microbitDemo.jpg?raw=true "Calliope mini + JQ6500 board")

#### makecode code
![Alt text](https://github.com/51bit/DFPlayerMini/raw/master/makecodeDemo.png?raw=true "makecode code")

## Supported targets

* for PXT/Calliope mini

## License

MIT
