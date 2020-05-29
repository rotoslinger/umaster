namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.setImage(img`
. . a . . 
. a e a . 
. a a a . 
. a e a . 
. a a a . 
. a e a . 
. a a a . 
. . e . . 
. . e . . 
. . e . . 
a a e a a 
a a e a a 
a f f f a 
a a a a a 
a a a a a 
`)
        mySprite.vy = -110
        pause(600)
        mySprite.ay = 10
        mySprite.setImage(img`
. . . . . a . . . . . 
. . . . a e a . . . . 
. . . . a a a . . . . 
. . . a a e a a . . . 
. . a a a a a a a . . 
. a a a a e a a a a . 
a a a a a a a a a a a 
. . . . . e . . . . . 
. . . . . e . . . . . 
. . . . . e . . . . . 
. . . a a e a a . . . 
. . . a a e a a . . . 
. . . a f f f a . . . 
. . . a a a a a . . . 
. . . a a a a a . . . 
`)
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . a . . . . . 
. . . . a e a . . . . 
. . . . a a a . . . . 
. . . a a e a a . . . 
. . a a a a a a a . . 
. a a a a e a a a a . 
a a a a a a a a a a a 
. . . . . e . . . . . 
. . . . . e . . . . . 
. . . . . e . . . . . 
. . . a a e a a . . . 
. . . a a e a a . . . 
. . . a f f f a . . . 
. . . a a a a a . . . 
. . . a a a a a . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
mySprite.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.ay = 200
        controller.moveSprite(mySprite, 100, 0)
    }
})
