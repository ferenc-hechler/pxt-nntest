

/**
 * Functions to operate the gatorlight sensor
 */

 enum nntestType{
	 Lux=1,
	 adcVal=2
 }



//% weight=70 icon="\u237E" color=#75CC05 block="NN"
namespace nntest {

    //% blockId=nntest_initfcnn
    //% block="Init Brain|number %inputs|number[] %hidden|number %outputs"
    //% shim=nntest::initfcnn
    export function initfcnn(inputs: number, hidden: number[], outputs: number): void {
    	basic.showString("sim:init")
    }


    /**
    * Reads the number
    */
    //% weight=30 blockId="nntest_light" block="Get Number %num in %nntestType"
    export function light(num: number, type: nntestType): number{
      switch(type){
        case nntestType.Lux: return getLux(num)
        case nntestType.adcVal: return num
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in nntest.cpp
     */
    //% shim=nntest::getLux
    function getLux(ADCVal: number) {
        return 3*ADCVal
    }

 }
