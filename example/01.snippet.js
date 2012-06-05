var linter = require("../src/jshint");

// missing semi and 2 undefined vars
exports.example = function() {
	"use strict";
  var result = linter.lint({ code: 'javascript = awesome'});
  var num, i;
  for (num in result.report.messages) {
    for (i = 0; i < result.report.messages[num].length; i++) {
      console.log("Line " + result.report.messages[num][0].line + ": " + result.report.messages[num][i].data.desc);
    }
  }
}