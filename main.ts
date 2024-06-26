const MSG = {
    TEST: 0,
    CALIBRATE: 1,
    RUN: 2,
}

radio.setGroup(120)
radio.onReceivedMessage(MSG.TEST, () => {
    basic.showIcon(IconNames.Happy)
})

radio.onReceivedMessage(
    MSG.CALIBRATE, () => {

    }
)