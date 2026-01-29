"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableExpressionNode;
    }
});
var _expression = /*#__PURE__*/ _interop_require_default(require("../../node/expression"));
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
var VariableExpressionNode = /*#__PURE__*/ function(ExpressionNode) {
    _inherits(VariableExpressionNode, ExpressionNode);
    function VariableExpressionNode() {
        _class_call_check(this, VariableExpressionNode);
        return _call_super(this, VariableExpressionNode, arguments);
    }
    _create_class(VariableExpressionNode, [
        {
            key: "getType",
            value: function getType() {
                var type = null;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, terminalNodeType = terminalNode.getType();
                    if (terminalNodeType === _tokenTypes.COMPARISON_TOKEN_TYPE) {
                        var content = terminalNode.getContent();
                        type = content; ///
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return type;
            }
        },
        {
            key: "getVariableAssignmentNodes",
            value: function getVariableAssignmentNodes() {
                var ruleName = _ruleNames.VARIABLE_ASSIGNMENT_RULE_NAME, variableAssingnmentNodss = this.getNodesByRuleName(ruleName);
                return variableAssingnmentNodss;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _expression.default.fromRuleNameChildNodesOpacityAndPrecedence(VariableExpressionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return VariableExpressionNode;
}(_expression.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24vYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4cHJlc3Npb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2V4cHJlc3Npb25cIjtcblxuaW1wb3J0IHsgQ09NUEFSSVNPTl9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFZBUklBQkxFX0FTU0lHTk1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgRXhwcmVzc2lvbk5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlVHlwZSA9PT0gQ09NUEFSSVNPTl9UT0tFTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHR5cGUgPSBjb250ZW50OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9BU1NJR05NRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2luZ25tZW50Tm9kc3MgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpbmdubWVudE5vZHNzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gRXhwcmVzc2lvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFZhcmlhYmxlRXhwcmVzc2lvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlRXhwcmVzc2lvbk5vZGUiLCJnZXRUeXBlIiwidHlwZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVR5cGUiLCJDT01QQVJJU09OX1RPS0VOX1RZUEUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9BU1NJR05NRU5UX1JVTEVfTkFNRSIsInZhcmlhYmxlQXNzaW5nbm1lbnROb2RzcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkV4cHJlc3Npb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztpRUFMTTswQkFFVzt5QkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsT0FBTztnQkFFWCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsZUFBZUYsV0FDZkcsbUJBQW1CRCxhQUFhTCxPQUFPO29CQUU3QyxJQUFJTSxxQkFBcUJDLGlDQUFxQixFQUFFO3dCQUM5QyxJQUFNQyxVQUFVSCxhQUFhSSxVQUFVO3dCQUV2Q1IsT0FBT08sU0FBVSxHQUFHO29CQUN0QjtvQkFFQSxJQUFJSixVQUFVLEdBQUc7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHdDQUE2QixFQUN4Q0MsMkJBQTJCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUV6RCxPQUFPRTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxtQkFBYyxDQUFDSiwwQ0FBMEMsQ0E3QjVJaEIsd0JBNkJxS1ksVUFBVUssWUFBWUMsU0FBU0M7WUFBYTs7O1dBN0JqTm5CO0VBQStCb0IsbUJBQWMifQ==