# pxt-nntest
test repository for the neural networks calliope extension

## infos

* https://makecode.com/extensions/getting-started/vscode
* https://makecode.com/extensions/getting-started/simple-extension
* https://learn.sparkfun.com/tutorials/how-to-create-a-makecode-package-for-microbit/all
* https://github.com/sparkfun/pxt-gator-light
* https://forum.calliope.cc/t/makecode-erweiterungen-fuer-groove-sensoren-in-c/1363

## build

### prerequisite

install pxt

install pxt-microbit, runs server, create project, modify project and build from cli:

```
(yotta) E:\CALLIOPE>mkdir pxt-microbit
(yotta) E:\CALLIOPE>cd pxt-microbit
(yotta) E:\CALLIOPE\pxt-microbit>pxt target microbit
        ... downloads ...

(yotta) E:\CALLIOPE\pxt-microbit>pxt serve
        ... create project "nntest2", edit files, exit browser, <Ctrl>-'C' ...

(yotta) E:\CALLIOPE\pxt-microbit>cd projects\nntest2
(yotta) E:\CALLIOPE\pxt-microbit\projects\nntest2>pxt install
Using target microbit with build engine yotta
  target: v3.0.1 E:\CALLIOPE\pxt-microbit\node_modules\pxt-microbit
  pxt-core: v5.37.83 E:\CALLIOPE\pxt-microbit\node_modules\pxt-core
installing dependencies...

(yotta) E:\CALLIOPE\pxt-microbit\projects\nntest2>pxt build
Using target microbit with build engine yotta
  target: v3.0.1 E:\CALLIOPE\pxt-microbit\node_modules\pxt-microbit
  pxt-core: v5.37.83 E:\CALLIOPE\pxt-microbit\node_modules\pxt-core
building E:\CALLIOPE\pxt-microbit\projects\nntest2

(yotta) E:\CALLIOPE\pxt-microbit\projects\nntest2>copy built\binary.hex G:\
        1 Datei(en) kopiert.
        ... calliope mini runs newest code ...
```

Remark: when using pxt-calliope as target the build fails with the message file "device.h" not found.

### build from fresh checkout



```
(yotta) E:\CALLIOPE\pxt-microbit\projects>git clone https://github.com/ferenc-hechler/pxt-nntest.git

(yotta) E:\CALLIOPE\pxt-microbit\projects>cd pxt-nntest

(yotta) E:\CALLIOPE\pxt-microbit\projects\pxt-nntest>pxt install
Using target microbit with build engine yotta
  target: v3.0.1 E:\CALLIOPE\pxt-microbit\node_modules\pxt-microbit
  pxt-core: v5.37.83 E:\CALLIOPE\pxt-microbit\node_modules\pxt-core
installing dependencies...

(yotta) E:\CALLIOPE\pxt-microbit\projects\pxt-nntest>pxt build
Using target microbit with build engine yotta
  target: v3.0.1 E:\CALLIOPE\pxt-microbit\node_modules\pxt-microbit
  pxt-core: v5.37.83 E:\CALLIOPE\pxt-microbit\node_modules\pxt-core
building E:\CALLIOPE\pxt-microbit\projects\pxt-nntest
polling C++ build https://makecode.com/compile/f60db3bb2519ae8c63ba832606daf5a8ced182d2a852e30de65bf9046491946b.json
polling C++ build https://makecode.com/compile/f60db3bb2519ae8c63ba832606daf5a8ced182d2a852e30de65bf9046491946b.json
build log https://makecode.com/compile/f60db3bb2519ae8c63ba832606daf5a8ced182d2a852e30de65bf9046491946b.log
fetching https://pxt.azureedge.net/compile/f60db3bb2519ae8c63ba832606daf5a8ced182d2a852e30de65bf9046491946b.hex

(yotta) E:\CALLIOPE\pxt-microbit\projects\pxt-nntest>copy built\binary.hex g:\
        1 Datei(en) kopiert.
```



## Supported targets

* for PXT/microbit
* for PXT/calliope
