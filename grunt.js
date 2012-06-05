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
		  all: [ "example/*.js" ]
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
  	grunt.file.expandFiles(this.data).forEach(function(file) {
      console.log(file);
  		require(__dirname + "/" + file).example();
		});
	});
};
