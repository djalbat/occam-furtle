"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableAssignmentNode;
    }
});
var _assignment = /*#__PURE__*/ _interop_require_default(require("../../node/assignment"));
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
var VariableAssignmentNode = /*#__PURE__*/ function(AssignmentrNode) {
    _inherits(VariableAssignmentNode, AssignmentrNode);
    function VariableAssignmentNode() {
        _class_call_check(this, VariableAssignmentNode);
        return _call_super(this, VariableAssignmentNode, arguments);
    }
    _create_class(VariableAssignmentNode, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNode = this.getNodeByRuleName(ruleName);
                return variableNode;
            }
        },
        {
            key: "getExpressionNode",
            value: function getExpressionNode() {
                var ruleName = _ruleNames.EXPRESSION_RULE_NAME, expressionNode = this.getNodeByRuleName(ruleName);
                return expressionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _assignment.default.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return VariableAssignmentNode;
}(_assignment.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2lnbm1lbnQvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NpZ25tZW50ck5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYXNzaWdubWVudFwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsIEVYUFJFU1NJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnROb2RlIGV4dGVuZHMgQXNzaWdubWVudHJOb2RlIHtcbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIEFzc2lnbm1lbnRyTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRFeHByZXNzaW9uTm9kZSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiZXhwcmVzc2lvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJBc3NpZ25tZW50ck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2lFQUpPO3lCQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxlQUFlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU1QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLCtCQUFvQixFQUMvQkMsaUJBQWlCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUU5QyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1AsUUFBUSxFQUFFUSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxtQkFBZSxDQUFDSiwwQ0FBMEMsQ0FmN0lULHdCQWVzS0UsVUFBVVEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBZmxOWjtFQUErQmEsbUJBQWUifQ==