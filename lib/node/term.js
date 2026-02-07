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
var _occamlanguages = require("occam-languages");
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
                var termNode = _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
                return termNode;
            }
        }
    ]);
    return TermNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgUFJJTUlUSVZFX1JVTEVfTkFNRSxcbiAgICAgICAgIE5FR0FURURfVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICBMT0dJQ0FMX1RFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgQlJBQ0tFVEVEX1RFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgQ09NUEFSSVNPTl9URVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBSSU1JVElWRV9SVUxFX05BTUUsXG4gICAgICAgICAgcHJpbWl0aXZlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZU5vZGU7XG4gIH1cblxuICBnZXROZWdhdGVkVGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBORUdBVEVEX1RFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5lZ2F0ZWRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExvZ2ljYWxUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IExPR0lDQUxfVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgbG9naWNhbFRlcm1SdWxlTmFtZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxvZ2ljYWxUZXJtUnVsZU5hbWU7XG4gIH1cblxuICBnZXRCcmFja2V0ZWRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEJSQUNLRVRFRF9URVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtUnVsZU5hbWUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRUZXJtUnVsZU5hbWU7XG4gIH1cblxuICBnZXRDb21wYXJpc29uVGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT01QQVJJU09OX1RFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbXBhcmlzb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyaXNvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVGVybU5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgdGVybU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRQcmltaXRpdmVOb2RlIiwiUFJJTUlUSVZFX1JVTEVfTkFNRSIsInByaW1pdGl2ZU5vZGUiLCJnZXROZWdhdGVkVGVybU5vZGUiLCJORUdBVEVEX1RFUk1fUlVMRV9OQU1FIiwibmVnYXRlZFRlcm1Ob2RlIiwiZ2V0TG9naWNhbFRlcm1Ob2RlIiwiTE9HSUNBTF9URVJNX1JVTEVfTkFNRSIsImxvZ2ljYWxUZXJtUnVsZU5hbWUiLCJnZXRCcmFja2V0ZWRUZXJtTm9kZSIsIkJSQUNLRVRFRF9URVJNX1JVTEVfTkFNRSIsImJyYWNrZXRlZFRlcm1SdWxlTmFtZSIsImdldENvbXBhcmlzb25UZXJtTm9kZSIsIkNPTVBBUklTT05fVEVSTV9SVUxFX05BTUUiLCJjb21wYXJpc29uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwidGVybU5vZGUiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzhCQVRXO3lCQU9VOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxlQUFlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU1QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLGlDQUFzQixFQUNqQ0Msa0JBQWtCLElBQUksQ0FBQ04saUJBQWlCLENBQUNIO2dCQUUvQyxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1WLFdBQVdXLGlDQUFzQixFQUNqQ0Msc0JBQXNCLElBQUksQ0FBQ1QsaUJBQWlCLENBQUNIO2dCQUVuRCxPQUFPWTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLFdBQVdjLG1DQUF3QixFQUNuQ0Msd0JBQXdCLElBQUksQ0FBQ1osaUJBQWlCLENBQUNIO2dCQUVyRCxPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1oQixXQUFXaUIsb0NBQXlCLEVBQ3BDQyxpQkFBaUIsSUFBSSxDQUFDZixpQkFBaUIsQ0FBQ0g7Z0JBRTlDLE9BQU9rQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFcEIsUUFBUSxFQUFFcUIsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQ2hHLElBQUlBLGVBQWVDLFdBQVc7b0JBQzVCRCxhQUFhRCxTQUFTLEdBQUc7b0JBRXpCQSxVQUFVRCxZQUFZLEdBQUc7b0JBRXpCQSxhQUFhckIsVUFBVyxHQUFHO29CQUUzQkEsV0FBV29CLE9BQU8sR0FBRztvQkFFckJBLFFBckRldEI7Z0JBc0RqQjtnQkFFQSxJQUFNMkIsV0FBV0MsK0JBQWUsQ0FBQ1AsMENBQTBDLENBQUNDLE9BQU9wQixVQUFVcUIsWUFBWUMsU0FBU0M7Z0JBRWxILE9BQU9FO1lBQ1Q7OztXQTNEbUIzQjtFQUFpQjRCLCtCQUFlIn0=