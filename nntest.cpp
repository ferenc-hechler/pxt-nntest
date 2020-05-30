/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun temt6000 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


#include <pxt.h>
#include <MicroBit.h>
#include <cstdint>
#include <math.h>

#include "platform/Utils.h"
#include "common/logUtils.h"

using namespace pxt;

namespace nntest {


//% blockId=nntest_initfcnn
//% block="Init Brain|number %inputs|number[] %hidden|number %outputs"
//% shim=nntest::initfcnn
void initfcnn(int inputs, RefCollection &hidden, int outputs) {

//	if (brain != 0) {
//		delete brain;
//	}
//	brain = new NN(inputs);

	logLn("initfcnn:");

    int numHidden = hidden.length();

    logNamedInt("inputs", inputs);
	logNamedInt("numHidden", numHidden);
    logNamedInt("outputs", outputs);

//	uBit.serial.printf("creating FCNN: in:%d, hidden-layers:%d, out:%d\r\n", inputs, numHidden, outputs);

    for (int i=0; i<numHidden; i++) {
	    TNumber tn = hidden.getAt(i);
		int nodes = toInt(tn);
		logNamedInt("  hidden layer", nodes);
//		brain->addLayer(nodes);
//	    uBit.serial.printf("    hidden layer #%d: %d\r\n", i, nodes);
    }

//	brain->addLayer(outputs);

//    uBit.serial.printf("FCNN successfully created\r\n");
}



//% weight=30
//% blockId=nntest_setactivation
//% block="Set Activation| %activationFunctionType"
//% shim=nntest::setactivation
void setactivation(int activation) {
	logNamedInt("activation", activation);
}

}
