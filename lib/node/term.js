"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermNode;
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
var TermNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TermNode, NonTerminalNode);
    function TermNode() {
        _class_call_check(this, TermNode);
        return _call_super(this, TermNode, arguments);
    }
    _create_class(TermNode, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNode = this.getNodeByRuleName(ruleName);
                return variableNode;
            }
        },
        {
            key: "getPrimitiveNode",
            value: function getPrimitiveNode() {
                var ruleName = _ruleNames.PRIMITIVE_RULE_NAME, primitiveNode = this.getNodeByRuleName(ruleName);
                return primitiveNode;
            }
        },
        {
            key: "getNegatedTermNode",
            value: function getNegatedTermNode() {
                var ruleName = _ruleNames.NEGATED_TERM_RULE_NAME, negatedTermNode = this.getNodeByRuleName(ruleName);
                return negatedTermNode;
            }
        },
        {
            key: "getLogicalTermNode",
            value: function getLogicalTermNode() {
                var ruleName = _ruleNames.LOGICAL_TERM_RULE_NAME, logicalTermRuleName = this.getNodeByRuleName(ruleName);
                return logicalTermRuleName;
            }
        },
        {
            key: "getBracketedTermNode",
            value: function getBracketedTermNode() {
                var ruleName = _ruleNames.BRACKETED_TERM_RULE_NAME, bracketedTermRuleName = this.getNodeByRuleName(ruleName);
                return bracketedTermRuleName;
            }
        },
        {
            key: "getComparisonTermNode",
            value: function getComparisonTermNode() {
                var ruleName = _ruleNames.COMPARISON_TERM_RULE_NAME, comparisonNode = this.getNodeByRuleName(ruleName);
                return comparisonNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                if (precedence === undefined) {
                    precedence = opacity; ///
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = TermNode;
                }
                var termNode = _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
                return termNode;
            }
        }
    ]);
    return TermNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICBQUklNSVRJVkVfUlVMRV9OQU1FLFxuICAgICAgICAgTkVHQVRFRF9URVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIExPR0lDQUxfVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICBCUkFDS0VURURfVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICBDT01QQVJJU09OX1RFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRQcmltaXRpdmVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJJTUlUSVZFX1JVTEVfTkFNRSxcbiAgICAgICAgICBwcmltaXRpdmVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlTm9kZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE5FR0FURURfVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgbmVnYXRlZFRlcm1Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmVnYXRlZFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTE9HSUNBTF9URVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICBsb2dpY2FsVGVybVJ1bGVOYW1lID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbG9naWNhbFRlcm1SdWxlTmFtZTtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQlJBQ0tFVEVEX1RFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm1SdWxlTmFtZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZFRlcm1SdWxlTmFtZTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTVBBUklTT05fVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgY29tcGFyaXNvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJpc29uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXJtTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJ2YXJpYWJsZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFByaW1pdGl2ZU5vZGUiLCJQUklNSVRJVkVfUlVMRV9OQU1FIiwicHJpbWl0aXZlTm9kZSIsImdldE5lZ2F0ZWRUZXJtTm9kZSIsIk5FR0FURURfVEVSTV9SVUxFX05BTUUiLCJuZWdhdGVkVGVybU5vZGUiLCJnZXRMb2dpY2FsVGVybU5vZGUiLCJMT0dJQ0FMX1RFUk1fUlVMRV9OQU1FIiwibG9naWNhbFRlcm1SdWxlTmFtZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwiQlJBQ0tFVEVEX1RFUk1fUlVMRV9OQU1FIiwiYnJhY2tldGVkVGVybVJ1bGVOYW1lIiwiZ2V0Q29tcGFyaXNvblRlcm1Ob2RlIiwiQ09NUEFSSVNPTl9URVJNX1JVTEVfTkFNRSIsImNvbXBhcmlzb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJ1bmRlZmluZWQiLCJ0ZXJtTm9kZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7c0VBVE87eUJBT2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDZCQUFrQixFQUM3QkMsZUFBZSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFNUMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSxpQ0FBc0IsRUFDakNDLGtCQUFrQixJQUFJLENBQUNOLGlCQUFpQixDQUFDSDtnQkFFL0MsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixXQUFXVyxpQ0FBc0IsRUFDakNDLHNCQUFzQixJQUFJLENBQUNULGlCQUFpQixDQUFDSDtnQkFFbkQsT0FBT1k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixXQUFXYyxtQ0FBd0IsRUFDbkNDLHdCQUF3QixJQUFJLENBQUNaLGlCQUFpQixDQUFDSDtnQkFFckQsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsV0FBV2lCLG9DQUF5QixFQUNwQ0MsaUJBQWlCLElBQUksQ0FBQ2YsaUJBQWlCLENBQUNIO2dCQUU5QyxPQUFPa0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRXBCLFFBQVEsRUFBRXFCLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUNoRyxJQUFJQSxlQUFlQyxXQUFXO29CQUM1QkQsYUFBYUQsU0FBUyxHQUFHO29CQUV6QkEsVUFBVUQsWUFBWSxHQUFHO29CQUV6QkEsYUFBYXJCLFVBQVcsR0FBRztvQkFFM0JBLFdBQVdvQixPQUFPLEdBQUc7b0JBRXJCQSxRQXJEZXRCO2dCQXNEakI7Z0JBRUEsSUFBTTJCLFdBQVdDLHdCQUFlLENBQUNQLDBDQUEwQyxDQUFDQyxPQUFPcEIsVUFBVXFCLFlBQVlDLFNBQVNDO2dCQUVsSCxPQUFPRTtZQUNUOzs7V0EzRG1CM0I7RUFBaUI0Qix3QkFBZSJ9