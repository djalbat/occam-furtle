"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    furtleParserFromBNF: function() {
        return furtleParserFromBNF;
    },
    furtleParserFromBNFAndStartRuleName: function() {
        return furtleParserFromBNFAndStartRuleName;
    },
    furtleParserFromNothing: function() {
        return furtleParserFromNothing;
    }
});
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _parser = /*#__PURE__*/ _interop_require_default(require("../furtle/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamparsers.parserUtilities.parserFromRulesAndStartRuleName;
function furtleParserFromBNF(bnf) {
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
function furtleParserFromNothing() {
    var bnf = _parser.default.bnf;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(_parser.default, rules);
    return furtleParser;
}
function furtleParserFromBNFAndStartRuleName(bnf, startRuleName) {
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRulesAndStartRuleName(_parser.default, rules, startRuleName);
    return furtleParser;
}
var _default = {
    furtleParserFromBNF: furtleParserFromBNF,
    furtleParserFromNothing: furtleParserFromNothing,
    furtleParserFromBNFAndStartRuleName: furtleParserFromBNFAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fb2NjYW0tZ3JhbW1hcnMvdXRpbGl0aWVzL3BhcnNlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBGdXJ0bGVQYXJzZXIgZnJvbSBcIi4uL2Z1cnRsZS9wYXJzZXJcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcywgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlUGFyc2VyRnJvbUJORihibmYpIHtcbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIGNvbnN0IGZ1cnRsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhGdXJ0bGVQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlUGFyc2VyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBGdXJ0bGVQYXJzZXI7XG5cbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIGNvbnN0IGZ1cnRsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhGdXJ0bGVQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWUoYm5mLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICBjb25zdCBmdXJ0bGVQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKEZ1cnRsZVBhcnNlciwgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZnVydGxlUGFyc2VyRnJvbUJORixcbiAgZnVydGxlUGFyc2VyRnJvbU5vdGhpbmcsXG4gIGZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lXG59O1xuIl0sIm5hbWVzIjpbImZ1cnRsZVBhcnNlckZyb21CTkYiLCJmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZSIsImZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwicGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImJuZiIsInJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsImZ1cnRsZVBhcnNlciIsIkZ1cnRsZVBhcnNlciIsInN0YXJ0UnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQStDQSxPQUlFO2VBSkY7O0lBdENnQkEsbUJBQW1CO2VBQW5CQTs7SUEwQkFDLG1DQUFtQztlQUFuQ0E7O0lBZEFDLHVCQUF1QjtlQUF2QkE7Ozs0QkFuQmdCO3FDQUNPOzZEQUVkOzs7Ozs7QUFFekIsSUFBUUMsZUFBbUVDLDZCQUFlLENBQWxGRCxjQUFjRSxrQkFBcURELDZCQUFlLENBQXBFQyxpQkFBaUJDLGtDQUFvQ0YsNkJBQWUsQ0FBbkRFO0FBRWhDLFNBQVNOLG9CQUFvQk8sR0FBRztJQUNyQyxJQUFJQztJQUVKQSxRQUFRTCxhQUFhSTtJQUVyQkMsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztJQUUzQyxJQUFNRSxlQUFlTCxnQkFBZ0JNLGVBQVksRUFBRUg7SUFFbkQsT0FBT0U7QUFDVDtBQUVPLFNBQVNSO0lBQ2QsSUFBTSxBQUFFSyxNQUFRSSxlQUFZLENBQXBCSjtJQUVSLElBQUlDO0lBRUpBLFFBQVFMLGFBQWFJO0lBRXJCQyxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO0lBRTNDLElBQU1FLGVBQWVMLGdCQUFnQk0sZUFBWSxFQUFFSDtJQUVuRCxPQUFPRTtBQUNUO0FBRU8sU0FBU1Qsb0NBQW9DTSxHQUFHLEVBQUVLLGFBQWE7SUFDcEUsSUFBSUo7SUFFSkEsUUFBUUwsYUFBYUk7SUFFckJDLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7SUFFM0MsSUFBTUUsZUFBZUosZ0NBQWdDSyxlQUFZLEVBQUVILE9BQU9JO0lBRTFFLE9BQU9GO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JWLHFCQUFBQTtJQUNBRSx5QkFBQUE7SUFDQUQscUNBQUFBO0FBQ0YifQ==