var fs = require('fs'); 
var linter = require("../src/jshint");

// load a file into jshint and display results
exports.example = function () {
	"use strict";
	var body = fs.readFileSync(__dirname + '/02.file.js.sample', 'utf-8');
	var result = linter.lint({ code: body });
	var report = result.report;
	var tree = result.tree;
	var errors = [];
	var type = "";
	var lineNum, i;
	for (lineNum in report.messages) {
		errors = report.messages[lineNum];
		for (i = 0; i < errors.length; i++) {
			type = errors[i].type === report.ERROR ? "Error" : "Warning";
			console.log("Line " + errors[i].line + ":", type, errors[i].data.desc);
		}
	}
};