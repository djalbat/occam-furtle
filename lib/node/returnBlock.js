"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReturnBlockNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _ruleNames = require("../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ReturnBlockNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ReturnBlockNode, NonTerminalNode);
    function ReturnBlockNode() {
        _class_call_check(this, ReturnBlockNode);
        return _call_super(this, ReturnBlockNode, arguments);
    }
    _create_class(ReturnBlockNode, [
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                var nonsenseNodes = this.getNonsenseNodes(), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
                return nonsensical;
            }
        },
        {
            key: "getStepNodes",
            value: function getStepNodes() {
                var ruleName = _ruleNames.STEP_RULE_NAME, stepNodes = this.getNodesByRuleName(ruleName);
                return stepNodes;
            }
        },
        {
            key: "getNonsenseNodes",
            value: function getNonsenseNodes() {
                var ruleName = _ruleNames.NONSENSE_RULE_NAME, nonsenseNodes = this.getNodesByRuleName(ruleName);
                return nonsenseNodes;
            }
        },
        {
            key: "getReturnStatementNode",
            value: function getReturnStatementNode() {
                var ruleName = _ruleNames.RETURN_STATEMENT_RULE_NAME, returnStatement = this.getNodeByRuleName(ruleName);
                return returnStatement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(ReturnBlockNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ReturnBlockNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgU1RFUF9SVUxFX05BTUUsIE5PTlNFTlNFX1JVTEVfTkFNRSwgUkVUVVJOX1NUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVybkJsb2NrTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IHRoaXMuZ2V0Tm9uc2Vuc2VOb2RlcygpLFxuICAgICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gbm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRTdGVwTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVEVQX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdGVwTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RlcE5vZGVzO1xuICB9XG5cbiAgZ2V0Tm9uc2Vuc2VOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE5PTlNFTlNFX1JVTEVfTkFNRSxcbiAgICAgICAgICBub25zZW5zZU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgICByZXR1cm4gbm9uc2Vuc2VOb2RlcztcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSRVRVUk5fU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFJldHVybkJsb2NrTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUmV0dXJuQmxvY2tOb2RlIiwiaXNOb25zZW5zaWNhbCIsIm5vbnNlbnNlTm9kZXMiLCJnZXROb25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vbnNlbnNpY2FsIiwiZ2V0U3RlcE5vZGVzIiwicnVsZU5hbWUiLCJTVEVQX1JVTEVfTkFNRSIsInN0ZXBOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsIk5PTlNFTlNFX1JVTEVfTkFNRSIsImdldFJldHVyblN0YXRlbWVudE5vZGUiLCJSRVRVUk5fU1RBVEVNRU5UX1JVTEVfTkFNRSIsInJldHVyblN0YXRlbWVudCIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzt5QkFFbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0Msc0JBQXNCRixjQUFjRyxNQUFNLEVBQzFDQyxjQUFlRixzQkFBc0I7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFlBQVksSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRTFDLE9BQU9FO1lBQ1Q7OztZQUVBUCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUssV0FBV0ksNkJBQWtCLEVBQzdCVixnQkFBZ0IsSUFBSSxDQUFDUyxrQkFBa0IsQ0FBQ0g7Z0JBRTVDLE9BQU9OO1lBQ1g7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsV0FBV00scUNBQTBCLEVBQ3JDQyxrQkFBa0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ1I7Z0JBRS9DLE9BQU9PO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDVCxRQUFRLEVBQUVVLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQTlCN0lqQixpQkE4QitKUSxVQUFVVSxZQUFZQyxTQUFTQztZQUFhOzs7V0E5QjNNcEI7RUFBd0JxQix3QkFBZSJ9