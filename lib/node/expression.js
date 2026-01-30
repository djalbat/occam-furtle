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
                var tokenType = _tokenTypes.PRIMITIVE_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.NULL) {
                        node = _nullNode.default;
                        return true;
                    }
                }, tokenType);
                return node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = null;
                var tokenType = _tokenTypes.STRING_LITERAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent(), stringLiteral = content; ///
                    string = stringFromStringLiteral(stringLiteral);
                    return true;
                }, tokenType);
                return string;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                var number = null;
                var tokenType = _tokenTypes.NUMBER_TOKEN_TYPE; ///
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        number = Number(content);
                        return true;
                    }
                }, tokenType);
                return number;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                var boolean = null;
                var tokenType = _tokenTypes.PRIMITIVE_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        boolean = true;
                        return true;
                    }
                    if (content === _constants.FALSE) {
                        boolean = false;
                        return true;
                    }
                }, tokenType);
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
            key: "getEveryNode",
            value: function getEveryNode() {
                var ruleName = _ruleNames.EVERY_RULE_NAME, everyNode = this.getNodeByRuleName(ruleName);
                return everyNode;
            }
        },
        {
            key: "getLogicalExpressionNode",
            value: function getLogicalExpressionNode() {
                var ruleName = _ruleNames.LOGICAL_EXPRESSION_RULE_NAME, logicalExpressionRuleName = this.getNodeByRuleName(ruleName);
                return logicalExpressionRuleName;
            }
        },
        {
            key: "getBracketedExpressionNode",
            value: function getBracketedExpressionNode() {
                var ruleName = _ruleNames.BRACKETED_EXPRESSION_RULE_NAME, bracketedExpressionRuleName = this.getNodeByRuleName(ruleName);
                return bracketedExpressionRuleName;
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
function stringFromStringLiteral(stringLiteral) {
    var string = stringLiteral.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTlVNQkVSX1RPS0VOX1RZUEUsIFBSSU1JVElWRV9UT0tFTl9UWVBFLCBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFNPTUVfUlVMRV9OQU1FLCBFVkVSWV9SVUxFX05BTUUsIExPR0lDQUxfRVhQUkVTU0lPTl9SVUxFX05BTUUsIEJSQUNLRVRFRF9FWFBSRVNTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXROb2RlKCkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFBSSU1JVElWRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gTlVMTCkge1xuICAgICAgICBub2RlID0gbnVsbE5vZGU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gU1RSSU5HX0xJVEVSQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICBsZXQgbnVtYmVyID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IE5VTUJFUl9UT0tFTl9UWVBFOyAvLy9cblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IFRSVUUpIHtcbiAgICAgICAgbnVtYmVyID0gTnVtYmVyKGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICBsZXQgYm9vbGVhbiA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBQUklNSVRJVkVfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IFRSVUUpIHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBGQUxTRSkge1xuICAgICAgICBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZ2V0U29tZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTT01FX1JVTEVfTkFNRSxcbiAgICAgICAgICBzb21lTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNvbWVOb2RlO1xuICB9XG5cbiAgZ2V0RXZlcnlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVZFUllfUlVMRV9OQU1FLFxuICAgICAgICAgIGV2ZXJ5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGV2ZXJ5Tm9kZTtcbiAgfVxuXG4gIGdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IExPR0lDQUxfRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb25SdWxlTmFtZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uUnVsZU5hbWU7XG4gIH1cblxuICBnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEJSQUNLRVRFRF9FWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uUnVsZU5hbWUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uUnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRXhwcmVzc2lvbk5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCkge1xuICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlIiwibm9kZSIsInRva2VuVHlwZSIsIlBSSU1JVElWRV9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiTlVMTCIsIm51bGxOb2RlIiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiU1RSSU5HX0xJVEVSQUxfVE9LRU5fVFlQRSIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsImdldE51bWJlciIsIm51bWJlciIsIk5VTUJFUl9UT0tFTl9UWVBFIiwiVFJVRSIsIk51bWJlciIsImdldEJvb2xlYW4iLCJib29sZWFuIiwiRkFMU0UiLCJnZXRTb21lTm9kZSIsInJ1bGVOYW1lIiwiU09NRV9SVUxFX05BTUUiLCJzb21lTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0RXZlcnlOb2RlIiwiRVZFUllfUlVMRV9OQU1FIiwiZXZlcnlOb2RlIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiTE9HSUNBTF9FWFBSRVNTSU9OX1JVTEVfTkFNRSIsImxvZ2ljYWxFeHByZXNzaW9uUnVsZU5hbWUiLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIkJSQUNLRVRFRF9FWFBSRVNTSU9OX1JVTEVfTkFNRSIsImJyYWNrZXRlZEV4cHJlc3Npb25SdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwiZXhwcmVzc2lvbk5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsrREFQQTtzRUFDTzt5QkFFb0I7MEJBQ21DO3lCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsT0FBTztnQkFFWCxJQUFNQyxZQUFZQyxnQ0FBb0I7Z0JBRXRDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBQ0M7b0JBQ3JCLElBQU1DLFVBQVVELGFBQWFFLFVBQVU7b0JBRXZDLElBQUlE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