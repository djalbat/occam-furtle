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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzaWdubWVudHNOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Fzc2lnbm1lbnRcIjtcblxuaW1wb3J0IHsgVFlQRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFZBUklBQkxFX0FTU0lHTk1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSBleHRlbmRzIEFzc2lnbm1lbnRzTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBUWVBFX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHR5cGUgPSBjb250ZW50OyAgLy8vXG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9BU1NJR05NRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2luZ25tZW50Tm9kc3MgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpbmdubWVudE5vZHNzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gQXNzaWdubWVudHNOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRUeXBlIiwidHlwZSIsInRva2VuVHlwZSIsIlRZUEVfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9BU1NJR05NRU5UX1JVTEVfTkFNRSIsInZhcmlhYmxlQXNzaW5nbm1lbnROb2RzcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkFzc2lnbm1lbnRzTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7aUVBTE87MEJBRUk7eUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFlBQVlDLDJCQUFlO2dCQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q04sT0FBT0ssU0FBVSxHQUFHO2dCQUN0QixHQUFHSjtnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHdDQUE2QixFQUN4Q0MsMkJBQTJCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUV6RCxPQUFPRTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxtQkFBZSxDQUFDSiwwQ0FBMEMsQ0F0QjdJZCx5QkFzQnVLVSxVQUFVSyxZQUFZQyxTQUFTQztZQUFhOzs7V0F0Qm5OakI7RUFBZ0NrQixtQkFBZSJ9