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
    getBindingsNode() {
        const ruleName = _ruleNames.BINDINGS_RULE_NAME, parametersNode = this.getNodeByRuleName(ruleName);
        return parametersNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _assignment.default.fromRuleNameChildNodesOpacityAndPrecedence(ArrayAssignmentNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NpZ25tZW50ck5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYXNzaWdubWVudFwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsIEJJTkRJTkdTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXlBc3NpZ25tZW50Tm9kZSBleHRlbmRzIEFzc2lnbm1lbnRyTm9kZSB7XG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRCaW5kaW5nc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBCSU5ESU5HU19SVUxFX05BTUUsXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIEFzc2lnbm1lbnRyTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQXJyYXlBc3NpZ25tZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFzc2lnbm1lbnRyTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsInJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRCaW5kaW5nc05vZGUiLCJCSU5ESU5HU19SVUxFX05BTUUiLCJwYXJhbWV0ZXJzTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzttRUFKTzsyQkFFMkI7Ozs7OztBQUV4QyxNQUFNQSw0QkFBNEJDLG1CQUFlO0lBQzlEQyxrQkFBa0I7UUFDaEIsTUFBTUMsV0FBV0MsNkJBQWtCLEVBQzdCQyxlQUFlLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO1FBRTVDLE9BQU9FO0lBQ1Q7SUFFQUUsa0JBQWtCO1FBQ2hCLE1BQU1KLFdBQVdLLDZCQUFrQixFQUM3QkMsaUJBQWlCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO1FBRTlDLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPQywyQ0FBMkNQLFFBQVEsRUFBRVEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9aLG1CQUFlLENBQUNTLDBDQUEwQyxDQUFDVixxQkFBcUJHLFVBQVVRLFlBQVlDLFNBQVNDO0lBQWE7QUFDcE8ifQ==