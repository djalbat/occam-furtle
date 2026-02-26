"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ArrayAssignmentNode;
    }
});
const _assignment = /*#__PURE__*/ _interop_require_default(require("../../node/assignment"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ArrayAssignmentNode extends _assignment.default {
    getVariableNode() {
        const ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNode = this.getNodeByRuleName(ruleName);
        return variableNode;
    }
    getParametersNode() {
        const ruleName = _ruleNames.PARAMETERS_RULE_NAME, parametersNode = this.getNodeByRuleName(ruleName);
        return parametersNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _assignment.default.fromRuleNameChildNodesOpacityAndPrecedence(ArrayAssignmentNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NpZ25tZW50ck5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYXNzaWdubWVudFwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsIFBBUkFNRVRFUlNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheUFzc2lnbm1lbnROb2RlIGV4dGVuZHMgQXNzaWdubWVudHJOb2RlIHtcbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSQU1FVEVSU19SVUxFX05BTUUsXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIEFzc2lnbm1lbnRyTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQXJyYXlBc3NpZ25tZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFzc2lnbm1lbnRyTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsIlBBUkFNRVRFUlNfUlVMRV9OQU1FIiwicGFyYW1ldGVyc05vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7bUVBSk87MkJBRTZCOzs7Ozs7QUFFMUMsTUFBTUEsNEJBQTRCQyxtQkFBZTtJQUM5REMsa0JBQWtCO1FBQ2hCLE1BQU1DLFdBQVdDLDZCQUFrQixFQUM3QkMsZUFBZSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUU1QyxPQUFPRTtJQUNUO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSixXQUFXSywrQkFBb0IsRUFDL0JDLGlCQUFpQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtRQUU5QyxPQUFPTTtJQUNUO0lBRUEsT0FBT0MsMkNBQTJDUCxRQUFRLEVBQUVRLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPWixtQkFBZSxDQUFDUywwQ0FBMEMsQ0FBQ1YscUJBQXFCRyxVQUFVUSxZQUFZQyxTQUFTQztJQUFhO0FBQ3BPIn0=