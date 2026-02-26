"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnonymousProcedureNode;
    }
});
const _procedure = /*#__PURE__*/ _interop_require_default(require("../../node/procedure"));
const _tokenTypes = require("../../tokenTypes");
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class AnonymousProcedureNode extends _procedure.default {
    getType() {
        let type;
        const tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            type = content; ///
        }, tokenType);
        return type;
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
        return _procedure.default.fromRuleNameChildNodesOpacityAndPrecedence(AnonymousProcedureNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb2NlZHVyZS9hbm95bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb2NlZHVyZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcHJvY2VkdXJlXCI7XG5cbmltcG9ydCB7IFRZUEVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5pbXBvcnQgeyBQQVJBTUVURVJTX1JVTEVfTkFNRSwgUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5vbnltb3VzUHJvY2VkdXJlTm9kZSBleHRlbmRzIFByb2NlZHVyZU5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gVFlQRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICB0eXBlID0gY29udGVudDsgIC8vL1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSQU1FVEVSU19SVUxFX05BTUUsXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTm9kZTtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFVFVSTl9CTE9DS19SVUxFX05BTUUsXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2tOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gUHJvY2VkdXJlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIlByb2NlZHVyZU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsInRva2VuVHlwZSIsIlRZUEVfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFBhcmFtZXRlcnNOb2RlIiwicnVsZU5hbWUiLCJQQVJBTUVURVJTX1JVTEVfTkFNRSIsInBhcmFtZXRlcnNOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRSZXR1cm5CbG9ja05vZGUiLCJSRVRVUk5fQkxPQ0tfUlVMRV9OQU1FIiwicmV0dXJuQmxvY2tOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2tFQUxLOzRCQUVNOzJCQUM2Qjs7Ozs7O0FBRTlDLE1BQU1BLCtCQUErQkMsa0JBQWE7SUFDL0RDLFVBQVU7UUFDUixJQUFJQztRQUVKLE1BQU1DLFlBQVlDLDJCQUFlO1FBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2Q04sT0FBT0ssU0FBVSxHQUFHO1FBQ3RCLEdBQUdKO1FBRUgsT0FBT0Q7SUFDVDtJQUVBTyxvQkFBb0I7UUFDbEIsTUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFOUMsT0FBT0U7SUFDVDtJQUVBRSxxQkFBcUI7UUFDbkIsTUFBTUosV0FBV0ssaUNBQXNCLEVBQ2pDQyxrQkFBa0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7UUFFL0MsT0FBT007SUFDVDtJQUVBLE9BQU9DLDJDQUEyQ1AsUUFBUSxFQUFFUSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT3BCLGtCQUFhLENBQUNpQiwwQ0FBMEMsQ0FBQ2xCLHdCQUF3QlcsVUFBVVEsWUFBWUMsU0FBU0M7SUFBYTtBQUNyTyJ9