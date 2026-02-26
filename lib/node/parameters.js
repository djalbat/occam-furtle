"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParamtersNode;
    }
});
const _occamlanguages = require("occam-languages");
const _ruleNames = require("../ruleNames");
class ParamtersNode extends _occamlanguages.NonTerminalNode {
    getParameterNodes() {
        const ruleName = _ruleNames.PARAMETER_RULE_NAME, parameterNodes = this.getNodesByRuleName(ruleName);
        return parameterNodes;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
        if (precedence === undefined) {
            precedence = opacity; ///
            opacity = childNodes; ///
            childNodes = ruleName; ///
            ruleName = Class; ///
            Class = ParamtersNode;
        }
        const parametersNode = _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
        return parametersNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgUEFSQU1FVEVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW10ZXJzTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFBhcmFtZXRlck5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSQU1FVEVSX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBQYXJhbXRlcnNOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnNOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFyYW10ZXJzTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldFBhcmFtZXRlck5vZGVzIiwicnVsZU5hbWUiLCJQQVJBTUVURVJfUlVMRV9OQU1FIiwicGFyYW1ldGVyTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsInVuZGVmaW5lZCIsInBhcmFtZXRlcnNOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2dDQUpXOzJCQUVJO0FBRXJCLE1BQU1BLHNCQUFzQkMsK0JBQWU7SUFDeERDLG9CQUFvQjtRQUNsQixNQUFNQyxXQUFXQyw4QkFBbUIsRUFDOUJDLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtRQUUvQyxPQUFPRTtJQUNUO0lBRUEsT0FBT0UsMkNBQTJDQyxLQUFLLEVBQUVMLFFBQVEsRUFBRU0sVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUNsRyxJQUFJQSxlQUFlQyxXQUFXO1lBQzVCRCxhQUFhRCxTQUFTLEdBQUc7WUFFekJBLFVBQVVELFlBQVksR0FBRztZQUV6QkEsYUFBYU4sVUFBVyxHQUFHO1lBRTNCQSxXQUFXSyxPQUFPLEdBQUc7WUFFckJBLFFBQVFSO1FBQ1Y7UUFFQSxNQUFNYSxpQkFBaUJaLCtCQUFlLENBQUNNLDBDQUEwQyxDQUFDQyxPQUFPTCxVQUFVTSxZQUFZQyxTQUFTQztRQUV4SCxPQUFPRTtJQUNUO0FBQ0YifQ==