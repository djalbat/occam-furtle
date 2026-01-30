"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodeQueryNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _ruleNames = require("../ruleNames");
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
var NodeQueryNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(NodeQueryNode, NonTerminalNode);
    function NodeQueryNode() {
        _class_call_check(this, NodeQueryNode);
        return _call_super(this, NodeQueryNode, arguments);
    }
    _create_class(NodeQueryNode, [
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
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(NodeQueryNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return NodeQueryNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vZGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IFZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vdG9rZW5UeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlUXVlcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHtcbiAgICBsZXQgc3RyaW5nTGl0ZXJhbCA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBzdHJpbmdMaXRlcmFsID0gY29udGVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShOb2RlUXVlcnlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOb2RlUXVlcnlOb2RlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInN0cmluZ0xpdGVyYWwiLCJ0b2tlblR5cGUiLCJTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0VmFyaWFibGVOb2RlIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJ2YXJpYWJsZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7c0VBTE87eUJBRU87MEJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGdCQUFnQjtnQkFFcEIsSUFBTUMsWUFBWUMscUNBQXlCO2dCQUUzQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q04sZ0JBQWdCSyxTQUFVLEdBQUc7b0JBRTdCLE9BQU87Z0JBQ1QsR0FBR0o7Z0JBRUgsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw2QkFBa0IsRUFDN0JDLGVBQWUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRTVDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQXhCN0lkLGVBd0I2SlUsVUFBVUssWUFBWUMsU0FBU0M7WUFBYTs7O1dBeEJ6TWpCO0VBQXNCa0Isd0JBQWUifQ==