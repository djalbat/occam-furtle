"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableAssignmentsNode;
    }
});
var _assignment = /*#__PURE__*/ _interop_require_default(require("../../node/assignment"));
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
var VariableAssignmentsNode = /*#__PURE__*/ function(AssignmentsNode) {
    _inherits(VariableAssignmentsNode, AssignmentsNode);
    function VariableAssignmentsNode() {
        _class_call_check(this, VariableAssignmentsNode);
        return _call_super(this, VariableAssignmentsNode, arguments);
    }
    _create_class(VariableAssignmentsNode, [
        {
            key: "getType",
            value: function getType() {
                var type = null;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, terminalNodeType = terminalNode.getType();
                    if (terminalNodeType === _tokenTypes.TYPE_TOKEN_TYPE) {
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
                return _assignment.default.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentsNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return VariableAssignmentsNode;
}(_assignment.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzaWdubWVudHNOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Fzc2lnbm1lbnRcIjtcblxuaW1wb3J0IHsgVFlQRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFZBUklBQkxFX0FTU0lHTk1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSBleHRlbmRzIEFzc2lnbm1lbnRzTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlVHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVUeXBlID09PSBUWVBFX1RPS0VOX1RZUEUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgdHlwZSA9IGNvbnRlbnQ7ICAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX0FTU0lHTk1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhcmlhYmxlQXNzaW5nbm1lbnROb2RzcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2luZ25tZW50Tm9kc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBBc3NpZ25tZW50c05vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlVHlwZSIsIlRZUEVfVE9LRU5fVFlQRSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJydWxlTmFtZSIsIlZBUklBQkxFX0FTU0lHTk1FTlRfUlVMRV9OQU1FIiwidmFyaWFibGVBc3NpbmdubWVudE5vZHNzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiQXNzaWdubWVudHNOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztpRUFMTzswQkFFSTt5QkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsT0FBTztnQkFFWCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsZUFBZUYsV0FDZkcsbUJBQW1CRCxhQUFhTCxPQUFPO29CQUU3QyxJQUFJTSxxQkFBcUJDLDJCQUFlLEVBQUU7d0JBQ3hDLElBQU1DLFVBQVVILGFBQWFJLFVBQVU7d0JBRXZDUixPQUFPTyxTQUFVLEdBQUc7b0JBQ3RCO29CQUVBLElBQUlKLFVBQVUsR0FBRzt3QkFDZixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0Msd0NBQTZCLEVBQ3hDQywyQkFBMkIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRXpELE9BQU9FO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG1CQUFlLENBQUNKLDBDQUEwQyxDQTdCN0loQix5QkE2QnVLWSxVQUFVSyxZQUFZQyxTQUFTQztZQUFhOzs7V0E3Qm5ObkI7RUFBZ0NvQixtQkFBZSJ9