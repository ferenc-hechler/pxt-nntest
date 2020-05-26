

/**
 * Functions to operate the gatorlight sensor
 */

 enum nntestType{
	 Lux=1,
	 adcVal=2
 }



//% color=#f44242 icon="\uf185"
namespace nntest {

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
