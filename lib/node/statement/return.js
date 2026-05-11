"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReturnStatementNode;
    }
});
const _statement = /*#__PURE__*/ _interop_require_default(require("../../node/statement"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ReturnStatementNode extends _statement.default {
    getValueNode() {
        const ruleName = _ruleNames.VALUE_RULE_NAME, valueNode = this.getNodeByRuleName(ruleName);
        return valueNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _statement.default.fromRuleNameChildNodesOpacityAndPrecedence(ReturnStatementNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBWQUxVRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVyblN0YXRlbWVudE5vZGUgZXh0ZW5kcyBTdGF0ZW1lbnROb2RlIHtcbiAgZ2V0VmFsdWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFMVUVfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIFN0YXRlbWVudE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFJldHVyblN0YXRlbWVudE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJldHVyblN0YXRlbWVudE5vZGUiLCJTdGF0ZW1lbnROb2RlIiwiZ2V0VmFsdWVOb2RlIiwicnVsZU5hbWUiLCJWQUxVRV9SVUxFX05BTUUiLCJ2YWx1ZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztrRUFKSzsyQkFFTTs7Ozs7O0FBRWpCLE1BQU1BLDRCQUE0QkMsa0JBQWE7SUFDNURDLGVBQWU7UUFDYixNQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUV6QyxPQUFPRTtJQUNUO0lBRUEsT0FBT0UsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPVCxrQkFBYSxDQUFDTSwwQ0FBMEMsQ0FBQ1AscUJBQXFCRyxVQUFVSyxZQUFZQyxTQUFTQztJQUFhO0FBQ2xPIn0=