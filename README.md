# pxt-nntest
test repository for the neural networks calliope extension

## infos

* https://makecode.com/extensions/getting-started/vscode
* https://makecode.com/extensions/getting-started/simple-extension
* https://learn.sparkfun.com/tutorials/how-to-create-a-makecode-package-for-microbit/all
* https://github.com/sparkfun/pxt-gator-light
* https://forum.calliope.cc/t/makecode-erweiterungen-fuer-groove-sensoren-in-c/1363

## build

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


## Supported targets

* for PXT/microbit
* for PXT/calliope
