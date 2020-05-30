serial.writeLine("START")
nntest.initfcnn(3, [7, 7], 2)
nntest.setactivation(activationFunctionType.TANHYP)
let v = 34
basic.showNumber(v)
serial.writeLine("STOP")
