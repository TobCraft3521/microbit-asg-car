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
            break
        case MSG.RUN:
            run = true
            break

        case MSG.STOP:
            run = false
            break

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
    if(run) {
    servos.P0.run(lSpeed * speed)
    servos.P1.run(rSpeed * speed * -1)
    }else {
        servos.P0.run(0)
        servos.P1.run(0)
    }
}

input.onButtonPressed(Button.A, function() {
    
})

input.onLogoEvent(TouchButtonEvent.Touched, function() {
    run = true
    adjustSpeed()
})

input.onLogoEvent(TouchButtonEvent.Released, function () {
    run = false
    adjustSpeed()
})
