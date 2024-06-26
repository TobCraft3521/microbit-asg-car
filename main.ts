const MSG = {
    TEST: 0
}

radio.setGroup(120)
radio.onReceivedMessage(MSG.TEST, () => {
    basic.showIcon(IconNames.Happy)
})