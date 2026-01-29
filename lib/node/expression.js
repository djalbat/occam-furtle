"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionNode;
    }
});
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _constants = require("../constants");
var _tokenTypes = require("../tokenTypes");
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
var ExpressionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ExpressionNode, NonTerminalNode);
    function ExpressionNode() {
        _class_call_check(this, ExpressionNode);
        return _call_super(this, ExpressionNode, arguments);
    }
    _create_class(ExpressionNode, [
        {
            key: "getNode",
            value: function getNode() {
                var node = null;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, terminalNodeType = terminalNode.getType();
                        if (terminalNodeType === _tokenTypes.PRIMITIVE_TOKEN_TYPE) {
                            var content = terminalNode.getContent();
                            if (content === _constants.NULL) {
                                node = _nullNode.default;
                                return true;
                            }
                        }
                    }
                });
                return node;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                var boolean = null;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, terminalNodeType = terminalNode.getType();
                        if (terminalNodeType === _tokenTypes.PRIMITIVE_TOKEN_TYPE) {
                            var content = terminalNode.getContent();
                            if (content === _constants.TRUE) {
                                boolean = true;
                                return true;
                            }
                            if (content === _constants.FALSE) {
                                boolean = false;
                                return true;
                            }
                        }
                    }
                });
                return boolean;
            }
        },
        {
            key: "getSomeNode",
            value: function getSomeNode() {
                var ruleName = _ruleNames.SOME_RULE_NAME, someNode = this.getNodeByRuleName(ruleName);
                return someNode;
            }
        },
        {
            key: "getBitwiseExpressionNode",
            value: function getBitwiseExpressionNode() {
                var ruleName = _ruleNames.BITWISE_EXPRESSION_RULE_NAME, bitwiseExpressionRuleName = this.getNodeByRuleName(ruleName);
                return bitwiseExpressionRuleName;
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
                    Class = ExpressionNode;
                }
                var expressionNode = _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
                return expressionNode;
            }
        }
    ]);
    return ExpressionNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBSSU1JVElWRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFNPTUVfUlVMRV9OQU1FLCBCSVRXSVNFX0VYUFJFU1NJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldE5vZGUoKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZVR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0ZXJtaW5hbE5vZGVUeXBlID09PSBQUklNSVRJVkVfVE9LRU5fVFlQRSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnQgPT09IE5VTEwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZVR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICAgIGlmICh0ZXJtaW5hbE5vZGVUeXBlID09PSBQUklNSVRJVkVfVE9LRU5fVFlQRSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnQgPT09IFRSVUUpIHtcbiAgICAgICAgICAgIGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGVudCA9PT0gRkFMU0UpIHtcbiAgICAgICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldFNvbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU09NRV9SVUxFX05BTUUsXG4gICAgICAgICAgc29tZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzb21lTm9kZTtcbiAgfVxuXG4gIGdldEJpdHdpc2VFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEJJVFdJU0VfRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgYml0d2lzZUV4cHJlc3Npb25SdWxlTmFtZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGJpdHdpc2VFeHByZXNzaW9uUnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRXhwcmVzc2lvbk5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uTm9kZSIsImdldE5vZGUiLCJub2RlIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVHlwZSIsImdldFR5cGUiLCJQUklNSVRJVkVfVE9LRU5fVFlQRSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiTlVMTCIsIm51bGxOb2RlIiwiZ2V0Qm9vbGVhbiIsImJvb2xlYW4iLCJUUlVFIiwiRkFMU0UiLCJnZXRTb21lTm9kZSIsInJ1bGVOYW1lIiwiU09NRV9SVUxFX05BTUUiLCJzb21lTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0Qml0d2lzZUV4cHJlc3Npb25Ob2RlIiwiQklUV0lTRV9FWFBSRVNTSU9OX1JVTEVfTkFNRSIsImJpdHdpc2VFeHByZXNzaW9uUnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsInVuZGVmaW5lZCIsImV4cHJlc3Npb25Ob2RlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsrREFQQTtzRUFDTzt5QkFFTTswQkFDRzt5QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE9BQU87Z0JBRVgsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1DLHdCQUF3QkQsVUFBVUUsY0FBYztvQkFFdEQsSUFBSUQsdUJBQXVCO3dCQUN6QixJQUFNRSxlQUFlSCxXQUNmSSxtQkFBbUJELGFBQWFFLE9BQU87d0JBRTdDLElBQUlELHFCQUFxQkUsZ0NBQW9CLEVBQUU7NEJBQzdDLElBQU1DLFVBQVVKLGFBQWFLLFVBQVU7NEJBRXZDLElBQUlELFlBQVlFLGVBQUksRUFBRTtnQ0FDcEJYLE9BQU9ZLGlCQUFRO2dDQUVmLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT1o7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxVQUFVO2dCQUVkLElBQUksQ0FBQ2IsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNQyx3QkFBd0JELFVBQVVFLGNBQWM7b0JBRXRELElBQUlELHVCQUF1Qjt3QkFDekIsSUFBTUUsZUFBZUgsV0FDZkksbUJBQW1CRCxhQUFhRSxPQUFPO3dCQUU3QyxJQUFJRCxxQkFBcUJFLGdDQUFvQixFQUFFOzRCQUM3QyxJQUFNQyxVQUFVSixhQUFhSyxVQUFVOzRCQUV2QyxJQUFJRCxZQUFZTSxlQUFJLEVBQUU7Z0NBQ3BCRCxVQUFVO2dDQUVWLE9BQU87NEJBQ1Q7NEJBRUEsSUFBSUwsWUFBWU8sZ0JBQUssRUFBRTtnQ0FDckJGLFVBQVU7Z0NBRVYsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxXQUFXLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUV4QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLHVDQUE0QixFQUN2Q0MsNEJBQTRCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUV6RCxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFUixRQUFRLEVBQUVTLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUNoRyxJQUFJQSxlQUFlQyxXQUFXO29CQUM1QkQsYUFBYUQsU0FBUyxHQUFHO29CQUV6QkEsVUFBVUQsWUFBWSxHQUFHO29CQUV6QkEsYUFBYVQsVUFBVyxHQUFHO29CQUUzQkEsV0FBV1EsT0FBTyxHQUFHO29CQUVyQkEsUUFqRmU1QjtnQkFrRmpCO2dCQUVBLElBQU1pQyxpQkFBaUJDLHdCQUFlLENBQUNQLDBDQUEwQyxDQUFDQyxPQUFPUixVQUFVUyxZQUFZQyxTQUFTQztnQkFFeEgsT0FBT0U7WUFDVDs7O1dBdkZtQmpDO0VBQXVCa0Msd0JBQWUifQ==