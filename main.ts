controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (answer < 50) {
        my_sprite_1 = sprites.create(img`
            . 3 3 3 3 3 . . 3 3 3 3 . . . . 
            3 3 4 4 4 3 3 . 3 4 4 4 3 3 . . 
            3 4 5 5 5 e 3 3 e 5 5 5 4 3 3 . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 3 . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 3 . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e 3 . 
            3 e e 5 5 5 5 5 5 5 5 e e 3 3 . 
            3 3 e 5 f 5 5 5 5 f 5 e 3 3 3 3 
            . 3 f 5 5 5 4 4 5 5 5 f 3 f f 3 
            . 3 3 4 5 5 f f 5 5 6 f f 5 f 3 
            . . 3 f 6 6 6 6 6 6 4 4 4 5 f 3 
            . . 3 f 5 5 5 5 5 5 5 f f f 3 3 
            . . 3 f 5 4 5 f f f 5 f 3 3 3 . 
            . . 3 f f f f f 3 3 f f 3 . . . 
            `, SpriteKind.Player)
    } else {
        my_sprite_1 = sprites.create(img`
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            .............c66333333c.
            ..........bccc66cc33333c
            ..........b55c6c55c3333c
            ..........ff5c6c5ff333cc
            ..........ff5ccc5ff666cc
            ...........b55355c33333c
            ..........cc55555bcc333c
            .........c5cccccccc5c3c.
            .........c5555c55555cb..
            .........c555c4c5554c5b.
            .........c455c4c555c45c.
            ..........ccc444ccccccc.
            `, SpriteKind.Player)
    }
})
let my_sprite_1: Sprite = null
let answer = 0
answer = 16 + (15 + (17 + 15))
game.splash("the total is" + answer)
game.splash("\"The average age is\"" + answer / 4)
