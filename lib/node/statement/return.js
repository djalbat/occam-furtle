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
    getTermNode() {
        const ruleName = _ruleNames.TERM_RULE_NAME, termNode = this.getNodeByRuleName(ruleName);
        return termNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _statement.default.fromRuleNameChildNodesOpacityAndPrecedence(ReturnStatementNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0dXJuU3RhdGVtZW50Tm9kZSBleHRlbmRzIFN0YXRlbWVudE5vZGUge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBTdGF0ZW1lbnROb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShSZXR1cm5TdGF0ZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSZXR1cm5TdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Tm9kZSIsImdldFRlcm1Ob2RlIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7a0VBSks7MkJBRUs7Ozs7OztBQUVoQixNQUFNQSw0QkFBNEJDLGtCQUFhO0lBQzVEQyxjQUFjO1FBQ1osTUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFdBQVcsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFeEMsT0FBT0U7SUFDVDtJQUVBLE9BQU9FLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1Qsa0JBQWEsQ0FBQ00sMENBQTBDLENBQUNQLHFCQUFxQkcsVUFBVUssWUFBWUMsU0FBU0M7SUFBYTtBQUNsTyJ9