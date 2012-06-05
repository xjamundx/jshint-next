module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		lint: {
			all: [ "src/**/*.js" ],
			examples: [ "example/**/*.js" ]
		},

		test: {
			all: [ "test/unit/**/*.js" ]
		},
		
		examples: {
			jquery: "jquery.js"
		},
		
		jshint: {
			options: {
				"es5": true,
				"node": true,
				"globalstrict": true,
				"strict": true,
				"white":  true,
				"smarttabs": true
			}
		}
	});

	grunt.registerTask("default", "lint test");
	grunt.registerMultiTask("examples", "Run examples", function () {
		var done = this.async();
		require("./example/" + this.data).run(done);
	});
};
