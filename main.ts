const MSG = {
    TEST: 0,
    CALIBRATE: 1,
    RUN: 2,
    STOP: 3

}
let run = false
let speed = 100
let lSpeed = 1
let rSpeed = 1
radio.setGroup(120)

radio.onReceivedNumber(function (code) {
    switch (code) {
        case MSG.TEST:
            basic.showIcon(IconNames.Confused)
        case MSG.RUN:
            run = true
        case MSG.STOP:
            run = false
    }
    adjustSpeed()
})

radio.onReceivedValue((name, val) => {
    if (name === "lSpeed") {
        lSpeed = val
    } else {
        rSpeed = val
    }
    adjustSpeed()
})

const adjustSpeed = () => {
    servos.P0.run(run && lSpeed * speed)
    servos.P1.run(run && rSpeed * speed * -1)
}