input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("D C F E A G C5 B ", 240)
        music.playMelody("- C5 G A E F C - ", 240)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        images.createBigImage(`
            . # . . . . . . . .
            # . # # # # # # # .
            . # . . . . . . . #
            # . # # # # # # # .
            . # . . . . . . . .
            `).showImage(0)
    } else if (Math.randomBoolean()) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("D - E - C E - G ", 160)
    music.playMelody("- B A G - D D - ", 360)
    music.playMelody("- E - - D - D - ", 260)
})
basic.showLeds(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # # # .
    `)
