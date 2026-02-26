"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReferenceNode;
    }
});
const _occamlanguages = require("occam-languages");
const _tokenTypes = require("../tokenTypes");
class ReferenceNode extends _occamlanguages.NonTerminalNode {
    getName() {
        let name;
        const tokenType = _tokenTypes.NAME_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            name = content; ///
            return true;
        }, tokenType);
        return name;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBOQU1FX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vdG9rZW5UeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2VOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBsZXQgbmFtZTtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IE5BTUVfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgbmFtZSA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFJlZmVyZW5jZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJlZmVyZW5jZU5vZGUiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwibmFtZSIsInRva2VuVHlwZSIsIk5BTUVfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2dDQUpXOzRCQUVBO0FBRWpCLE1BQU1BLHNCQUFzQkMsK0JBQWU7SUFDeERDLFVBQVU7UUFDUixJQUFJQztRQUVKLE1BQU1DLFlBQVlDLDJCQUFlO1FBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2Q04sT0FBT0ssU0FBUyxHQUFHO1lBRW5CLE9BQU87UUFDVCxHQUFHSjtRQUVILE9BQU9EO0lBQ1Q7SUFFQSxPQUFPTywyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9iLCtCQUFlLENBQUNTLDBDQUEwQyxDQUFDVixlQUFlVyxVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQzlOIn0=