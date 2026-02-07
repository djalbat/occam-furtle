"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StepNode;
    }
});
var _occamlanguages = require("occam-languages");
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
var StepNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(StepNode, NonTerminalNode);
    function StepNode() {
        _class_call_check(this, StepNode);
        return _call_super(this, StepNode, arguments);
    }
    _create_class(StepNode, [
        {
            key: "getArrayAssignmentNode",
            value: function getArrayAssignmentNode() {
                var ruleName = _ruleNames.ARRAY_ASSIGNMENT_RULE_NAME, arrayAssignmentNode = this.getNodeByRuleName(ruleName);
                return arrayAssignmentNode;
            }
        },
        {
            key: "getObjectAssignmentNode",
            value: function getObjectAssignmentNode() {
                var ruleName = _ruleNames.OBJECT_ASSIGNMENT_RULE_NAME, objectAssignmentNode = this.getNodeByRuleName(ruleName);
                return objectAssignmentNode;
            }
        },
        {
            key: "getVariableAssignmentsNode",
            value: function getVariableAssignmentsNode() {
                var ruleName = _ruleNames.VARIABLE_ASSIGNMENTS_RULE_NAME, variableAssignmentsNode = this.getNodeByRuleName(ruleName);
                return variableAssignmentsNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StepNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgQVJSQVlfQVNTSUdOTUVOVF9SVUxFX05BTUUsIE9CSkVDVF9BU1NJR05NRU5UX1JVTEVfTkFNRSwgVkFSSUFCTEVfQVNTSUdOTUVOVFNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFSUkFZX0FTU0lHTk1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIGFycmF5QXNzaWdubWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBhcnJheUFzc2lnbm1lbnROb2RlO1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBPQkpFQ1RfQVNTSUdOTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgb2JqZWN0QXNzaWdubWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBvYmplY3RBc3NpZ25tZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfQVNTSUdOTUVOVFNfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0ZXBOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGVwTm9kZSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJydWxlTmFtZSIsIkFSUkFZX0FTU0lHTk1FTlRfUlVMRV9OQU1FIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUiLCJPQkpFQ1RfQVNTSUdOTUVOVF9SVUxFX05BTUUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVkFSSUFCTEVfQVNTSUdOTUVOVFNfUlVMRV9OQU1FIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzhCQUpXO3lCQUV3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekYsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHFDQUEwQixFQUNyQ0Msc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUVuRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLHNDQUEyQixFQUN0Q0MsdUJBQXVCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUVwRCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLHlDQUE4QixFQUN6Q0MsMEJBQTBCLElBQUksQ0FBQ04saUJBQWlCLENBQUNIO2dCQUV2RCxPQUFPUztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1YsUUFBUSxFQUFFVyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQywrQkFBZSxDQUFDSiwwQ0FBMEMsQ0F0QjdJWixVQXNCd0pFLFVBQVVXLFlBQVlDLFNBQVNDO1lBQWE7OztXQXRCcE1mO0VBQWlCZ0IsK0JBQWUifQ==