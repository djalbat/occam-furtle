"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParameterNode;
    }
});
const _occamlanguages = require("occam-languages");
const _tokenTypes = require("../tokenTypes");
class ParameterNode extends _occamlanguages.NonTerminalNode {
    getName() {
        let name = null;
        const tokenType = _tokenTypes.NAME_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            name = content; //
            return true;
        }, tokenType);
        return name;
    }
    getType() {
        let type = null;
        const tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            type = content; //
            return true;
        }, tokenType);
        return type;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParameterNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBUWVBFX1RPS0VOX1RZUEUsIE5BTUVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtZXRlck5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXROYW1lKCkge1xuICAgIGxldCBuYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IE5BTUVfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgbmFtZSA9IGNvbnRlbnQ7IC8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gVFlQRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICB0eXBlID0gY29udGVudDsgLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShQYXJhbWV0ZXJOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJhbWV0ZXJOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsIm5hbWUiLCJ0b2tlblR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJnZXRUeXBlIiwidHlwZSIsIlRZUEVfVE9LRU5fVFlQRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2dDQUpXOzRCQUVpQjtBQUVsQyxNQUFNQSxzQkFBc0JDLCtCQUFlO0lBQ3hEQyxVQUFVO1FBQ1IsSUFBSUMsT0FBTztRQUVYLE1BQU1DLFlBQVlDLDJCQUFlO1FBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2Q04sT0FBT0ssU0FBUyxFQUFFO1lBRWxCLE9BQU87UUFDVCxHQUFHSjtRQUVILE9BQU9EO0lBQ1Q7SUFFQU8sVUFBVTtRQUNSLElBQUlDLE9BQU87UUFFWCxNQUFNUCxZQUFZUSwyQkFBZTtRQUVqQyxJQUFJLENBQUNOLGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkNFLE9BQU9ILFNBQVMsRUFBRTtZQUVsQixPQUFPO1FBQ1QsR0FBR0o7UUFFSCxPQUFPTztJQUNUO0lBRUEsT0FBT0UsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPaEIsK0JBQWUsQ0FBQ1ksMENBQTBDLENBQUNiLGVBQWVjLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDOU4ifQ==