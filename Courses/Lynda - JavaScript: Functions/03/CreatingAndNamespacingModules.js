var ray = (function () {
    var DEFAULTS = {
        say: 'hello',
        speed: 'normal'
    }
    return {
        speak: function () {
            var myArguments = arguments[0] || '';
            var statement = myArguments.say || DEFAULTS.say;
            console.log(statement); // howdy
            return this;
        },
        run: function () {
            var myArguments = arguments[0] || '';
            var running = myArguments.speed || DEFAULTS.speed;
            console.log('running...', running);
            return this;
        }
    };
})();

ray.speak({ say: 'howdy' }).run().speak({ say: 'run faster' });

/* Result:
howdy
running... normal
run faster
 */
