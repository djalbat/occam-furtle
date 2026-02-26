"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParamterNode;
    }
});
const _occamlanguages = require("occam-languages");
const _tokenTypes = require("../tokenTypes");
class ParamterNode extends _occamlanguages.NonTerminalNode {
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
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
        if (precedence === undefined) {
            precedence = opacity; ///
            opacity = childNodes; ///
            childNodes = ruleName; ///
            ruleName = Class; ///
            Class = ParamterNode;
        }
        const parameterNode = _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
        return parameterNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBUWVBFX1RPS0VOX1RZUEUsIE5BTUVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi90b2tlblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtdGVyTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldE5hbWUoKSB7XG4gICAgbGV0IG5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gTkFNRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBuYW1lID0gY29udGVudDsgLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBUWVBFX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHR5cGUgPSBjb250ZW50OyAvL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBvcGFjaXR5OyAvLy9cblxuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUGFyYW10ZXJOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtZXRlck5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhcmFtdGVyTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJuYW1lIiwidG9rZW5UeXBlIiwiTkFNRV9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0VHlwZSIsInR5cGUiLCJUWVBFX1RPS0VOX1RZUEUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwicGFyYW1ldGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztnQ0FKVzs0QkFFaUI7QUFFbEMsTUFBTUEscUJBQXFCQywrQkFBZTtJQUN2REMsVUFBVTtRQUNSLElBQUlDLE9BQU87UUFFWCxNQUFNQyxZQUFZQywyQkFBZTtRQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkNOLE9BQU9LLFNBQVMsRUFBRTtZQUVsQixPQUFPO1FBQ1QsR0FBR0o7UUFFSCxPQUFPRDtJQUNUO0lBRUFPLFVBQVU7UUFDUixJQUFJQyxPQUFPO1FBRVgsTUFBTVAsWUFBWVEsMkJBQWU7UUFFakMsSUFBSSxDQUFDTixnQkFBZ0IsQ0FBQyxDQUFDQztZQUNyQixNQUFNQyxVQUFVRCxhQUFhRSxVQUFVO1lBRXZDRSxPQUFPSCxTQUFTLEVBQUU7WUFFbEIsT0FBTztRQUNULEdBQUdKO1FBRUgsT0FBT087SUFDVDtJQUVBLE9BQU9FLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFDbEcsSUFBSUEsZUFBZUMsV0FBVztZQUM1QkQsYUFBYUQsU0FBUyxHQUFHO1lBRXpCQSxVQUFVRCxZQUFZLEdBQUc7WUFFekJBLGFBQWFELFVBQVcsR0FBRztZQUUzQkEsV0FBV0QsT0FBTyxHQUFHO1lBRXJCQSxRQUFRZDtRQUNWO1FBRUEsTUFBTW9CLGdCQUFnQm5CLCtCQUFlLENBQUNZLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQyxTQUFTQztRQUV2SCxPQUFPRTtJQUNUO0FBQ0YifQ==