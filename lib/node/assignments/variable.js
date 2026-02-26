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
const _assignment = /*#__PURE__*/ _interop_require_default(require("../../node/assignment"));
const _tokenTypes = require("../../tokenTypes");
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class VariableAssignmentsNode extends _assignment.default {
    getType() {
        let type;
        const tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            type = content; ///
        }, tokenType);
        return type;
    }
    getVariableAssignmentNodes() {
        const ruleName = _ruleNames.VARIABLE_ASSIGNMENT_RULE_NAME, variableAssingnmentNodss = this.getNodesByRuleName(ruleName);
        return variableAssingnmentNodss;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _assignment.default.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentsNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzaWdubWVudHNOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2Fzc2lnbm1lbnRcIjtcblxuaW1wb3J0IHsgVFlQRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IFZBUklBQkxFX0FTU0lHTk1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSBleHRlbmRzIEFzc2lnbm1lbnRzTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBUWVBFX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHR5cGUgPSBjb250ZW50OyAgLy8vXG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBWQVJJQUJMRV9BU1NJR05NRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2luZ25tZW50Tm9kc3MgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpbmdubWVudE5vZHNzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gQXNzaWdubWVudHNOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJBc3NpZ25tZW50c05vZGUiLCJnZXRUeXBlIiwidHlwZSIsInRva2VuVHlwZSIsIlRZUEVfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwicnVsZU5hbWUiLCJWQVJJQUJMRV9BU1NJR05NRU5UX1JVTEVfTkFNRSIsInZhcmlhYmxlQXNzaW5nbm1lbnROb2RzcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OzttRUFMTzs0QkFFSTsyQkFDYzs7Ozs7O0FBRS9CLE1BQU1BLGdDQUFnQ0MsbUJBQWU7SUFDbEVDLFVBQVU7UUFDUixJQUFJQztRQUVKLE1BQU1DLFlBQVlDLDJCQUFlO1FBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2Q04sT0FBT0ssU0FBVSxHQUFHO1FBQ3RCLEdBQUdKO1FBRUgsT0FBT0Q7SUFDVDtJQUVBTyw2QkFBNkI7UUFDM0IsTUFBTUMsV0FBV0Msd0NBQTZCLEVBQ3hDQywyQkFBMkIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7UUFFekQsT0FBT0U7SUFDVDtJQUVBLE9BQU9FLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2pCLG1CQUFlLENBQUNjLDBDQUEwQyxDQUFDZix5QkFBeUJXLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDeE8ifQ==