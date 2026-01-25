"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get furtleParserFromBNF () {
        return furtleParserFromBNF;
    },
    get furtleParserFromBNFAndStartRuleName () {
        return furtleParserFromBNFAndStartRuleName;
    },
    get furtleParserFromNothing () {
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
function furtleParserFromBNF(Class, bnf) {
    if (bnf === undefined) {
        bnf = Class; ///
        Class = _parser.default; ///
    }
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(Class, rules);
    return furtleParser;
}
function furtleParserFromNothing(Class) {
    if (Class === undefined) {
        Class = _parser.default; ///
    }
    var bnf = _parser.default.bnf;
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRules(Class, rules);
    return furtleParser;
}
function furtleParserFromBNFAndStartRuleName(Class, bnf, startRuleName) {
    if (startRuleName === undefined) {
        startRuleName = bnf; ///
        bnf = Class; ///
        Class = _parser.default; ///
    }
    var rules;
    rules = rulesFromBNF(bnf);
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    var furtleParser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);
    return furtleParser;
}
var _default = {
    furtleParserFromBNF: furtleParserFromBNF,
    furtleParserFromNothing: furtleParserFromNothing,
    furtleParserFromBNFAndStartRuleName: furtleParserFromBNFAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IEZ1cnRsZVBhcnNlciBmcm9tIFwiLi4vZnVydGxlL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tQk5GKENsYXNzLCBibmYpIHtcbiAgaWYgKGJuZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm5mID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gRnVydGxlUGFyc2VyOyAgLy8vXG4gIH1cblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgY29uc3QgZnVydGxlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZ1cnRsZVBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nKENsYXNzKSB7XG4gIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgQ2xhc3MgPSBGdXJ0bGVQYXJzZXI7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IHsgYm5mIH0gPSBGdXJ0bGVQYXJzZXI7XG5cbiAgbGV0IHJ1bGVzO1xuXG4gIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIGNvbnN0IGZ1cnRsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVQYXJzZXJGcm9tQk5GQW5kU3RhcnRSdWxlTmFtZShDbGFzcywgYm5mLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGlmIChzdGFydFJ1bGVOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydFJ1bGVOYW1lID0gYm5mOyAgLy8vXG5cbiAgICBibmYgPSBDbGFzczsgIC8vL1xuXG4gICAgQ2xhc3MgPSBGdXJ0bGVQYXJzZXI7ICAvLy9cbiAgfVxuXG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICBjb25zdCBmdXJ0bGVQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKENsYXNzLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZ1cnRsZVBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVQYXJzZXJGcm9tQk5GLFxuICBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyxcbiAgZnVydGxlUGFyc2VyRnJvbUJORkFuZFN0YXJ0UnVsZU5hbWVcbn07XG4iXSwibmFtZXMiOlsiZnVydGxlUGFyc2VyRnJvbUJORiIsImZ1cnRsZVBhcnNlckZyb21CTkZBbmRTdGFydFJ1bGVOYW1lIiwiZnVydGxlUGFyc2VyRnJvbU5vdGhpbmciLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiQ2xhc3MiLCJibmYiLCJ1bmRlZmluZWQiLCJGdXJ0bGVQYXJzZXIiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJmdXJ0bGVQYXJzZXIiLCJzdGFydFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpRUE7ZUFBQTs7UUF4RGdCQTtlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQWxCQUM7ZUFBQUE7Ozs0QkF6QmdCO3FDQUNPOzZEQUVkOzs7Ozs7QUFFekIsSUFBUUMsZUFBbUVDLDZCQUFlLENBQWxGRCxjQUFjRSxrQkFBcURELDZCQUFlLENBQXBFQyxpQkFBaUJDLGtDQUFvQ0YsNkJBQWUsQ0FBbkRFO0FBRWhDLFNBQVNOLG9CQUFvQk8sS0FBSyxFQUFFQyxHQUFHO0lBQzVDLElBQUlBLFFBQVFDLFdBQVc7UUFDckJELE1BQU1ELE9BQVEsR0FBRztRQUVqQkEsUUFBUUcsZUFBWSxFQUFHLEdBQUc7SUFDNUI7SUFFQSxJQUFJQztJQUVKQSxRQUFRUixhQUFhSztJQUVyQkcsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztJQUUzQyxJQUFNRSxlQUFlUixnQkFBZ0JFLE9BQU9JO0lBRTVDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTWCx3QkFBd0JLLEtBQUs7SUFDM0MsSUFBSUEsVUFBVUUsV0FBVztRQUN2QkYsUUFBUUcsZUFBWSxFQUFHLEdBQUc7SUFDNUI7SUFFQSxJQUFNLEFBQUVGLE1BQVFFLGVBQVksQ0FBcEJGO0lBRVIsSUFBSUc7SUFFSkEsUUFBUVIsYUFBYUs7SUFFckJHLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7SUFFM0MsSUFBTUUsZUFBZVIsZ0JBQWdCRSxPQUFPSTtJQUU1QyxPQUFPRTtBQUNUO0FBRU8sU0FBU1osb0NBQW9DTSxLQUFLLEVBQUVDLEdBQUcsRUFBRU0sYUFBYTtJQUMzRSxJQUFJQSxrQkFBa0JMLFdBQVc7UUFDL0JLLGdCQUFnQk4sS0FBTSxHQUFHO1FBRXpCQSxNQUFNRCxPQUFRLEdBQUc7UUFFakJBLFFBQVFHLGVBQVksRUFBRyxHQUFHO0lBQzVCO0lBRUEsSUFBSUM7SUFFSkEsUUFBUVIsYUFBYUs7SUFFckJHLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7SUFFM0MsSUFBTUUsZUFBZVAsZ0NBQWdDQyxPQUFPSSxPQUFPRztJQUVuRSxPQUFPRDtBQUNUO0lBRUEsV0FBZTtJQUNiYixxQkFBQUE7SUFDQUUseUJBQUFBO0lBQ0FELHFDQUFBQTtBQUNGIn0=