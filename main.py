def on_forever():
    servos.P1.set_angle(90 + servos.P1.angle)
basic.forever(on_forever)
