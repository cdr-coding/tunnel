let x2 = 0
let y2 = 0
basic.forever(function () {
    for (let z = 0; z <= 2; z++) {
        for (let x = 0; x <= 4; x++) {
            x2 = Math.abs(x - 2)
            for (let y = 0; y <= 4; y++) {
                y2 = Math.abs(y - 2)
                if (z == Math.max(x2, y2)) {
                    led.toggle(x, y)
                }
            }
        }
        basic.pause(500)
    }
})
