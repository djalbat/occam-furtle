"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LabelNode;
    }
});
const _occamlanguages = require("occam-languages");
const _tokenTypes = require("../tokenTypes");
class LabelNode extends _occamlanguages.NonTerminalNode {
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
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(LabelNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IE5BTUVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldE5hbWUoKSB7XG4gICAgbGV0IG5hbWU7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOQU1FX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIG5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShMYWJlbE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkxhYmVsTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJuYW1lIiwidG9rZW5UeXBlIiwiTkFNRV9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0NBSlc7NEJBRUE7QUFFakIsTUFBTUEsa0JBQWtCQywrQkFBZTtJQUNwREMsVUFBVTtRQUNSLElBQUlDO1FBRUosTUFBTUMsWUFBWUMsMkJBQWU7UUFFakMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDQztZQUNyQixNQUFNQyxVQUFVRCxhQUFhRSxVQUFVO1lBRXZDTixPQUFPSyxTQUFTLEdBQUc7WUFFbkIsT0FBTztRQUNULEdBQUdKO1FBRUgsT0FBT0Q7SUFDVDtJQUVBLE9BQU9PLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2IsK0JBQWUsQ0FBQ1MsMENBQTBDLENBQUNWLFdBQVdXLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDMU4ifQ==