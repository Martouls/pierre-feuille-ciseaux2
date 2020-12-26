input.onButtonPressed(Button.A, function () {
    basic.showString("1,2,3")
    Pierre = 1
    Feuille = 2
    Ciseaux = 3
    Choix = randint(1, 3)
    if (Choix == 1) {
        basic.showLeds(`
            . . # # .
            # # # # .
            # # # # #
            . # # # #
            . . . . .
            `)
    }
    if (Choix == 2) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (Choix == 3) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Choix = 0
let Ciseaux = 0
let Feuille = 0
let Pierre = 0
basic.showString("PIERRE, FEUILLE, CISEAUX")
