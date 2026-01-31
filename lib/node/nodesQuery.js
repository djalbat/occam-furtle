"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodesQueryNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _ruleNames = require("../ruleNames");
var _stringLiteral = require("../utilities/stringLiteral");
var _tokenTypes = require("../tokenTypes");
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
var NodesQueryNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(NodesQueryNode, NonTerminalNode);
    function NodesQueryNode() {
        _class_call_check(this, NodesQueryNode);
        return _call_super(this, NodesQueryNode, arguments);
    }
    _create_class(NodesQueryNode, [
        {
            key: "getString",
            value: function getString() {
                var stringLiteral = this.getStringLiteral(), string = (0, _stringLiteral.stringFromStringLiteral)(stringLiteral);
                return string;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                var stringLiteral = null;
                var tokenType = _tokenTypes.STRING_LITERAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    stringLiteral = content; ///
                    return true;
                }, tokenType);
                return stringLiteral;
            }
        },
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNode = this.getNodeByRuleName(ruleName);
                return variableNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(NodesQueryNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return NodesQueryNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgU1RSSU5HX0xJVEVSQUxfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzUXVlcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSB0aGlzLmdldFN0cmluZ0xpdGVyYWwoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIGxldCBzdHJpbmdMaXRlcmFsID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHN0cmluZ0xpdGVyYWwgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKE5vZGVzUXVlcnlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOb2Rlc1F1ZXJ5Tm9kZSIsImdldFN0cmluZyIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmdMaXRlcmFsIiwic3RyaW5nIiwic3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwiLCJ0b2tlblR5cGUiLCJTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0VmFyaWFibGVOb2RlIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJ2YXJpYWJsZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7c0VBTk87eUJBRU87NkJBQ0s7MEJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsU0FBU0MsSUFBQUEsc0NBQXVCLEVBQUNIO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELGdCQUFnQjtnQkFFcEIsSUFBTUksWUFBWUMscUNBQXlCO2dCQUUzQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q1QsZ0JBQWdCUSxTQUFVLEdBQUc7b0JBRTdCLE9BQU87Z0JBQ1QsR0FBR0o7Z0JBRUgsT0FBT0o7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw2QkFBa0IsRUFDN0JDLGVBQWUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRTVDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQS9CN0lqQixnQkErQjhKYSxVQUFVSyxZQUFZQyxTQUFTQztZQUFhOzs7V0EvQjFNcEI7RUFBdUJxQix3QkFBZSJ9