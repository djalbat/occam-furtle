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
                var type = _tokenTypes.PRIMITIVE_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.NULL) {
                        node = _nullNode.default;
                        return true;
                    }
                }, type);
                return node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = null;
                var type = _tokenTypes.STRING_LITERAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent(), stringLiteral = content; ///
                    string = stringFromStringLiteral(stringLiteral);
                    return true;
                }, type);
                return string;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                var number = null;
                var type = _tokenTypes.NUMBER_TOKEN_TYPE; ///
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        number = Number(content);
                        return true;
                    }
                }, type);
                return number;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                var boolean = null;
                var type = _tokenTypes.PRIMITIVE_TOKEN_TYPE;
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
                }, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTlVNQkVSX1RPS0VOX1RZUEUsIFBSSU1JVElWRV9UT0tFTl9UWVBFLCBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFNPTUVfUlVMRV9OQU1FLCBMT0dJQ0FMX0VYUFJFU1NJT05fUlVMRV9OQU1FLCBCUkFDS0VURURfRVhQUkVTU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0Tm9kZSgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlID0gUFJJTUlUSVZFX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBOVUxMKSB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0eXBlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gY29udGVudDsgIC8vL1xuXG4gICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdHlwZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIGxldCBudW1iZXIgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IE5VTUJFUl9UT0tFTl9UWVBFOyAvLy9cblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IFRSVUUpIHtcbiAgICAgICAgbnVtYmVyID0gTnVtYmVyKGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHR5cGUpO1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IFBSSU1JVElWRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gVFJVRSkge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgPT09IEZBTFNFKSB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0eXBlKTtcblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZ2V0U29tZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTT01FX1JVTEVfTkFNRSxcbiAgICAgICAgICBzb21lTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNvbWVOb2RlO1xuICB9XG5cbiAgZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTE9HSUNBTF9FWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvblJ1bGVOYW1lID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb25SdWxlTmFtZTtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQlJBQ0tFVEVEX0VYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb25SdWxlTmFtZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb25SdWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBFeHByZXNzaW9uTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uTm9kZSIsImdldE5vZGUiLCJub2RlIiwidHlwZSIsIlBSSU1JVElWRV9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiTlVMTCIsIm51bGxOb2RlIiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiU1RSSU5HX0xJVEVSQUxfVE9LRU5fVFlQRSIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsImdldE51bWJlciIsIm51bWJlciIsIk5VTUJFUl9UT0tFTl9UWVBFIiwiVFJVRSIsIk51bWJlciIsImdldEJvb2xlYW4iLCJib29sZWFuIiwiRkFMU0UiLCJnZXRTb21lTm9kZSIsInJ1bGVOYW1lIiwiU09NRV9SVUxFX05BTUUiLCJzb21lTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiTE9HSUNBTF9FWFBSRVNTSU9OX1JVTEVfTkFNRSIsImxvZ2ljYWxFeHByZXNzaW9uUnVsZU5hbWUiLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIkJSQUNLRVRFRF9FWFBSRVNTSU9OX1JVTEVfTkFNRSIsImJyYWNrZXRlZEV4cHJlc3Npb25SdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwiZXhwcmVzc2lvbk5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsrREFQQTtzRUFDTzt5QkFFb0I7MEJBQ21DO3lCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU1DLE9BQU9DLGdDQUFvQjtnQkFFakMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkMsSUFBSUQsWUFBWUUsZUFBSSxFQUFFO3dCQUNwQlAsT0FBT1EsaUJBQVE7d0JBRWYsT0FBTztvQkFDVDtnQkFDRixHQUFHUDtnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFNBQVM7Z0JBRWIsSUFBTVQsT0FBT1UscUNBQXlCO2dCQUV0QyxJQUFJLENBQUNSLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDTSxnQkFBZ0JQLFNBQVUsR0FBRztvQkFFbkNLLFNBQVNHLHdCQUF3QkQ7b0JBRWpDLE9BQU87Z0JBQ1QsR0FBR1g7Z0JBRUgsT0FBT1M7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxTQUFTO2dCQUViLElBQU1kLE9BQU9lLDZCQUFpQixFQUFFLEdBQUc7Z0JBRW5DLElBQUksQ0FBQ2IsZ0JBQWdCLENBQUMsU0FBQ0M7b0JBQ3JCLElBQU1DLFVBQVVELGFBQWFFLFVBQVU7b0JBRXZDLElBQUlELFlBQVlZLGVBQUksRUFBRTt3QkFDcEJGLFNBQVNHLE9BQU9iO3dCQUVoQixPQUFPO29CQUNUO2dCQUNGLEdBQUdKO2dCQUVILE9BQU9jO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsVUFBVTtnQkFFZCxJQUFNbkIsT0FBT0MsZ0NBQW9CO2dCQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2QyxJQUFJRCxZQUFZWSxlQUFJLEVBQUU7d0JBQ3BCRyxVQUFVO3dCQUVWLE9BQU87b0JBQ1Q7b0JBRUEsSUFBSWYsWUFBWWdCLGdCQUFLLEVBQUU7d0JBQ3JCRCxVQUFVO3dCQUVWLE9BQU87b0JBQ1Q7Z0JBQ0YsR0FBR25CO2dCQUVILE9BQU9tQjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxXQUFXLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUV4QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLHVDQUE0QixFQUN2Q0MsNEJBQTRCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUV6RCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLHlDQUE4QixFQUN6Q0MsOEJBQThCLElBQUksQ0FBQ04saUJBQWlCLENBQUNIO2dCQUUzRCxPQUFPUztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFWCxRQUFRLEVBQUVZLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUNoRyxJQUFJQSxlQUFlQyxXQUFXO29CQUM1QkQsYUFBYUQsU0FBUyxHQUFHO29CQUV6QkEsVUFBVUQsWUFBWSxHQUFHO29CQUV6QkEsYUFBYVosVUFBVyxHQUFHO29CQUUzQkEsV0FBV1csT0FBTyxHQUFHO29CQUVyQkEsUUE3R2VwQztnQkE4R2pCO2dCQUVBLElBQU15QyxpQkFBaUJDLHdCQUFlLENBQUNQLDBDQUEwQyxDQUFDQyxPQUFPWCxVQUFVWSxZQUFZQyxTQUFTQztnQkFFeEgsT0FBT0U7WUFDVDs7O1dBbkhtQnpDO0VBQXVCMEMsd0JBQWU7QUFzSDNELFNBQVMzQix3QkFBd0JELGFBQWE7SUFDNUMsSUFBTUYsU0FBU0UsY0FBYzZCLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtJQUU3RCxPQUFPaEM7QUFDVCJ9