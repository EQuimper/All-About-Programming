import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:build_test/builder.dart' as _i2;
import 'package:build_config/build_config.dart' as _i3;
import 'package:build_modules/builders.dart' as _i4;
import 'package:build_web_compilers/builders.dart' as _i5;
import 'package:build/build.dart' as _i6;
import 'dart:isolate' as _i7;
import 'package:build_runner/build_runner.dart' as _i8;

final _builders = <_i1.BuilderApplication>[
  _i1.apply(
      'build_test|test_bootstrap',
      [_i2.debugIndexBuilder, _i2.debugTestBuilder, _i2.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i3.InputSet(include: ['test/**'])),
  _i1.apply('build_modules|module_library', [_i4.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|vm',
      [
        _i4.metaModuleBuilderFactoryForPlatform('vm'),
        _i4.metaModuleCleanBuilderFactoryForPlatform('vm'),
        _i4.moduleBuilderFactoryForPlatform('vm')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|dart2js',
      [
        _i4.metaModuleBuilderFactoryForPlatform('dart2js'),
        _i4.metaModuleCleanBuilderFactoryForPlatform('dart2js'),
        _i4.moduleBuilderFactoryForPlatform('dart2js')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_modules|dartdevc',
      [
        _i4.metaModuleBuilderFactoryForPlatform('dartdevc'),
        _i4.metaModuleCleanBuilderFactoryForPlatform('dartdevc'),
        _i4.moduleBuilderFactoryForPlatform('dartdevc'),
        _i4.unlinkedSummaryBuilderForPlatform('dartdevc'),
        _i4.linkedSummaryBuilderForPlatform('dartdevc')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i5.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers|dart_source_cleanup',
        'build_modules|dartdevc',
        'build_modules|dart2js'
      ]),
  _i1.apply('build_web_compilers|entrypoint', [_i5.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i3.InputSet(include: [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i6.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: _i6.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('build_modules|module_cleanup', _i4.moduleCleanup,
      defaultGenerateFor: const _i3.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers|dart_source_cleanup', _i5.dartSourceCleanup,
      defaultReleaseOptions: _i6.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i3.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i5.dart2JsArchiveExtractor,
      defaultReleaseOptions: _i6.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i3.InputSet())
];
main(List<String> args, [_i7.SendPort sendPort]) async {
  var result = await _i8.run(args, _builders);
  sendPort?.send(result);
}
