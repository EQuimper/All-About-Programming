define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const main = Object.create(_root);
  const $onClick = dartx.onClick;
  const $innerHtml = dartx.innerHtml;
  const $onInput = dartx.onInput;
  let MouseEventTovoid = () => (MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let MouseEventTobool = () => (MouseEventTobool = dart.constFn(dart.fnType(core.bool, [html.MouseEvent])))();
  let dynamicAndEventSinkToNull = () => (dynamicAndEventSinkToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, async.EventSink])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  main.main = function() {
    let button = html.ButtonElement._check(html.querySelector("button"));
    let input = html.InputElement._check(html.querySelector("input"));
    let div = html.DivElement._check(html.querySelector("div"));
    button[$onClick].take(4).where(dart.fn(event => input.value === "banana", MouseEventTobool())).listen(dart.fn(event => core.print("You got it!"), MouseEventTovoid()), {onDone: dart.fn(() => core.print("Nope, bad guesses"), VoidTovoid())});
    let validateEmail = async.StreamTransformer.fromHandlers({handleData: dart.fn((inputValue, sink) => {
        if (dart.dtest(dart.dsend(inputValue, 'contains', ["@"]))) {
          sink.add(inputValue);
        } else {
          sink.addError("Enter a valid email");
        }
      }, dynamicAndEventSinkToNull())});
    input[$onInput].map(dart.dynamic, dart.fn(event => dart.dload(dart.dload(event, 'target'), 'value'), dynamicTodynamic())).transform(dart.dynamic, validateEmail).listen(dart.fn(inputValue => div[$innerHtml] = "", dynamicToString()), {onError: dart.fn(err => div[$innerHtml] = core.String._check(err), dynamicTodynamic())});
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAIE,QAAoB,mCAAS,kBAAa,CAAC;AAC3C,QAAmB,iCAAQ,kBAAa,CAAC;AACzC,QAAiB,6BAAM,kBAAa,CAAC;AAErC,UAAM,UAAQ,KAAK,CAAC,QAAQ,CAAC,QAAC,KAAK,IAAK,KAAK,MAAM,KAAI,qCAAgB,CACnE,QAAC,KAAK,IAAK,UAAK,CAAC,8CACT,cAAM,UAAK,CAAC;AAExB,QAAM,gBACF,AAAI,oCAA8B,cAAa,SAAC,UAAU,EAAE,IAAI;AAClE,kCAAI,UAAU,eAAU,QAAM;AAC5B,cAAI,IAAI,CAAC,UAAU;eACd;AACL,cAAI,SAAS,CAAC;;;AAIlB,SAAK,UAAQ,IACL,eAAC,QAAC,KAAa,0BAAK,KAAK,qDACnB,eAAC,aAAa,QACjB,CACL,QAAC,UAAU,IAAK,GAAG,YAAU,GAAG,kCACvB,QAAC,GAAG,IAAK,GAAG,YAAU,sBAAG,GAAG;EAE7C","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
