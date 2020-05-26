/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorlight sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorlight sensor
 */

 enum nntestType{
	 Lux=1,
	 adcVal=2,
 }



//% color=#f44242 icon="\uf185"
namespace nntest {

    /**
    * Reads the number
    */
    //% weight=30 blockId="nntest_light" block="Get light on pin %pin | in %nntestType"
    export function light(pin: AnalogPin, type: nntestType): number{
      let ADCVal = 5
      switch(type){
        case nntestType.Lux: return getLux(ADCVal)
        case nntestType.adcVal: return ADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in nntest.cpp
     */
    //% shim=nntest::getLux
    function getLux(ADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }
