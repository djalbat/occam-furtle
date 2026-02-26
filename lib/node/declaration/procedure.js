"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProcedureDeclarationNode;
    }
});
const _declaration = /*#__PURE__*/ _interop_require_default(require("../../node/declaration"));
const _tokenTypes = require("../../tokenTypes");
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ProcedureDeclarationNode extends _declaration.default {
    getType() {
        let type;
        const tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            type = content; ///
        }, tokenType);
        return type;
    }
    getLabelNode() {
        const ruleName = _ruleNames.LABEL_RULE_NAME, labelNode = this.getNodeByRuleName(ruleName);
        return labelNode;
    }
    getParametersNode() {
        const ruleName = _ruleNames.PARAMETERS_RULE_NAME, parametersNode = this.getNodeByRuleName(ruleName);
        return parametersNode;
    }
    getReturnBlockNode() {
        const ruleName = _ruleNames.RETURN_BLOCK_RULE_NAME, returnBlockNode = this.getNodeByRuleName(ruleName);
        return returnBlockNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBUWVBFX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuaW1wb3J0IHsgTEFCRUxfUlVMRV9OQU1FLCBQQVJBTUVURVJTX1JVTEVfTkFNRSwgUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgRGVjbGFyYXRpb25Ob2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFRZUEVfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgdHlwZSA9IGNvbnRlbnQ7ICAvLy9cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBMQUJFTF9SVUxFX05BTUUsXG4gICAgICAgICAgbGFiZWxOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJBTUVURVJTX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnNOb2RlO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2tOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZXR1cm5CbG9ja05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBEZWNsYXJhdGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJ0b2tlblR5cGUiLCJUWVBFX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJnZXRMYWJlbE5vZGUiLCJydWxlTmFtZSIsIkxBQkVMX1JVTEVfTkFNRSIsImxhYmVsTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJQQVJBTUVURVJTX1JVTEVfTkFNRSIsInBhcmFtZXRlcnNOb2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSIsInJldHVybkJsb2NrTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztvRUFMTzs0QkFFSTsyQkFDOEM7Ozs7OztBQUUvRCxNQUFNQSxpQ0FBaUNDLG9CQUFlO0lBQ25FQyxVQUFVO1FBQ1IsSUFBSUM7UUFFSixNQUFNQyxZQUFZQywyQkFBZTtRQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkNOLE9BQU9LLFNBQVUsR0FBRztRQUN0QixHQUFHSjtRQUVILE9BQU9EO0lBQ1Q7SUFFQU8sZUFBZTtRQUNiLE1BQU1DLFdBQVdDLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1KLFdBQVdLLCtCQUFvQixFQUMvQkMsaUJBQWlCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO1FBRTlDLE9BQU9NO0lBQ1Q7SUFFQUMscUJBQXFCO1FBQ25CLE1BQU1QLFdBQVdRLGlDQUFzQixFQUNqQ0Msa0JBQWtCLElBQUksQ0FBQ04saUJBQWlCLENBQUNIO1FBRS9DLE9BQU9TO0lBQ1Q7SUFFQSxPQUFPQywyQ0FBMkNWLFFBQVEsRUFBRVcsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU92QixvQkFBZSxDQUFDb0IsMENBQTBDLENBQUNyQiwwQkFBMEJXLFVBQVVXLFlBQVlDLFNBQVNDO0lBQWE7QUFDek8ifQ==