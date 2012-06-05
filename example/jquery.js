var request = require("request");
var linter = require("../src/jshint");

exports.run = function (done) {
	"use strict";
	console.time("Downloading jQuery");
	request.get("http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js", function (err, res, body) {
		console.timeEnd("Downloading jQuery");
		if (res.statusCode !== 200) {
			throw new Error("Could not download jQuery");
		}
		console.time("Linting Code");
		var result = linter.lint({ code: body });
		console.timeEnd("Linting Code");
		var report = result.report;
		var tree = result.tree;
		var errors = [];
		var type = "";
		for (var lineNum in report.messages) {
			errors = report.messages[lineNum];
			for (var i = 0; i < errors.length; i++) {
				type = errors[i].type === report.ERROR ? "Error" : "Warning";
				console.log("Line: " + errors[i].line, type, errors[i].data.desc);
			}
		}
		done();
	});
};