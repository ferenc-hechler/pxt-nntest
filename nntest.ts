

/**
 * Functions to operate the gatorlight sensor
 */

 enum activationFunctionType{
	 None=0,
	 RELU=1,
	 SIGMOID=2,
     SOFTMAX=3,
     TANHYP=4
}



//% weight=70 icon="\u237E" color=#75CC05 block="NN"
namespace nntest {

    //% weight=10 
    //% blockId=nntest_initfcnn
    //% block="Init Brain|number %inputs|number[] %hidden|number %outputs"
    //% shim=nntest::initfcnn
    export function initfcnn(inputs: number, hidden: number[], outputs: number): void {
    	basic.showString("sim:init")
    }

    //% weight=20 
    //% blockId=nntest_fcnnfromjson
    //% block="Json Brain|string %json"
    //% shim=nntest::fcnnfromjson
    export function fcnnfromjson(json: string): void {
    	basic.showString("sim:json")
    }

    //% weight=30 
    //% blockId=nntest_setactivation
    //% block="Set Activation| %activationFunctionType"
    //% shim=nntest::setactivation
    export function setactivation(activation: activationFunctionType): void {
      switch(activation){
        case activationFunctionType.None: basic.showString("act=None")
        case activationFunctionType.RELU: basic.showString("act=RELU")
        case activationFunctionType.SIGMOID: basic.showString("act=SIGMOID")
        case activationFunctionType.SOFTMAX: basic.showString("act=SOFTMAX")
        case activationFunctionType.TANHYP: basic.showString("act=TANHYP")
        default: basic.showString("act=<invalid value>")
      }
    }

 }
