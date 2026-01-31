"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProcedureDeclarationNode;
    }
});
var _declaration = /*#__PURE__*/ _interop_require_default(require("../../node/declaration"));
var _tokenTypes = require("../../tokenTypes");
var _ruleNames = require("../../ruleNames");
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
var ProcedureDeclarationNode = /*#__PURE__*/ function(DeclarationNode) {
    _inherits(ProcedureDeclarationNode, DeclarationNode);
    function ProcedureDeclarationNode() {
        _class_call_check(this, ProcedureDeclarationNode);
        return _call_super(this, ProcedureDeclarationNode, arguments);
    }
    _create_class(ProcedureDeclarationNode, [
        {
            key: "getType",
            value: function getType() {
                var type;
                var tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    type = content; ///
                }, tokenType);
                return type;
            }
        },
        {
            key: "getLabelNode",
            value: function getLabelNode() {
                var ruleName = _ruleNames.LABEL_RULE_NAME, labelNode = this.getNodeByRuleName(ruleName);
                return labelNode;
            }
        },
        {
            key: "getParametersNode",
            value: function getParametersNode() {
                var ruleName = _ruleNames.PARAMETERS_RULE_NAME, parametersNode = this.getNodeByRuleName(ruleName);
                return parametersNode;
            }
        },
        {
            key: "getReturnBlockNode",
            value: function getReturnBlockNode() {
                var ruleName = _ruleNames.RETURN_BLOCK_RULE_NAME, returnBlockNode = this.getNodeByRuleName(ruleName);
                return returnBlockNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ProcedureDeclarationNode;
}(_declaration.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBUWVBFX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuaW1wb3J0IHsgTEFCRUxfUlVMRV9OQU1FLCBQQVJBTUVURVJTX1JVTEVfTkFNRSwgUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgRGVjbGFyYXRpb25Ob2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFRZUEVfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgdHlwZSA9IGNvbnRlbnQ7ICAvLy9cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBMQUJFTF9SVUxFX05BTUUsXG4gICAgICAgICAgbGFiZWxOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJBTUVURVJTX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnNOb2RlO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2tOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZXR1cm5CbG9ja05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBEZWNsYXJhdGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJ0b2tlblR5cGUiLCJUWVBFX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJnZXRMYWJlbE5vZGUiLCJydWxlTmFtZSIsIkxBQkVMX1JVTEVfTkFNRSIsImxhYmVsTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJQQVJBTUVURVJTX1JVTEVfTkFNRSIsInBhcmFtZXRlcnNOb2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSIsInJldHVybkJsb2NrTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkRlY2xhcmF0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87MEJBRUk7eUJBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxZQUFZQywyQkFBZTtnQkFFakMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkNOLE9BQU9LLFNBQVUsR0FBRztnQkFDdEIsR0FBR0o7Z0JBRUgsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSywrQkFBb0IsRUFDL0JDLGlCQUFpQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFOUMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSxpQ0FBc0IsRUFDakNDLGtCQUFrQixJQUFJLENBQUNOLGlCQUFpQixDQUFDSDtnQkFFL0MsT0FBT1M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNWLFFBQVEsRUFBRVcsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBcEM3SXBCLDBCQW9Dd0tVLFVBQVVXLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBDcE52QjtFQUFpQ3dCLG9CQUFlIn0=