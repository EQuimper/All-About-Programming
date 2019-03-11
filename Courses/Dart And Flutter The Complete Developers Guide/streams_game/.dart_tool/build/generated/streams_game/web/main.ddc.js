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
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let EventSinkOfMouseEvent = () => (EventSinkOfMouseEvent = dart.constFn(async.EventSink$(html.MouseEvent)))();
  let EventSinkOfMouseEventTovoid = () => (EventSinkOfMouseEventTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfMouseEvent()])))();
  main.main = function() {
    let button = html.ButtonElement._check(html.querySelector("button"));
    button[$onClick].timeout(new core.Duration.new({seconds: 1}), {onTimeout: dart.fn(sink => sink.addError("You lost!!!"), EventSinkOfMouseEventTovoid())}).listen(dart.fn(event => {
    }, MouseEventToNull()), {onError: dart.fn(err => core.print(err), dynamicTovoid())});
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAGE,QAAoB,mCAAS,kBAAa,CAAC;AAE3C,UAAM,UAAQ,QACF,CAAC,IAAI,iBAAQ,WAAU,iBAChB,QAAC,IAAI,IAAK,IAAI,SAAS,CAAC,uDAChC,CAAC,QAAC,KAAK;sCAAe,QAAC,GAAG,IAAK,UAAK,CAAC,GAAG;EACrD","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
