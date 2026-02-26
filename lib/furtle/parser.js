"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FurtleParser;
    }
});
const _occamlanguages = require("occam-languages");
const _occamgrammars = require("occam-grammars");
const _nonTerminalNodeMap = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNodeMap"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FurtleParser extends _occamgrammars.FurtleParser {
    static NonTerminalNodeMap = _nonTerminalNodeMap.default;
    static defaultNonTerminalNode = _occamlanguages.NonTerminalNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEZ1cnRsZVBhcnNlciBhcyBGdXJ0bGVQYXJzZXJCYXNlIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGVNYXAgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZU1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXJ0bGVQYXJzZXIgZXh0ZW5kcyBGdXJ0bGVQYXJzZXJCYXNlIHtcbiAgc3RhdGljIE5vblRlcm1pbmFsTm9kZU1hcCA9IE5vblRlcm1pbmFsTm9kZU1hcDtcblxuICBzdGF0aWMgZGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVQYXJzZXIiLCJGdXJ0bGVQYXJzZXJCYXNlIiwiTm9uVGVybWluYWxOb2RlTWFwIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OztnQ0FOVzsrQkFFaUI7MkVBRWxCOzs7Ozs7QUFFaEIsTUFBTUEscUJBQXFCQywyQkFBZ0I7SUFDeEQsT0FBT0MscUJBQXFCQSwyQkFBa0IsQ0FBQztJQUUvQyxPQUFPQyx5QkFBeUJDLCtCQUFlLENBQUM7QUFDbEQifQ==