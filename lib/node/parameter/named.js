"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NamedParamterNode;
    }
});
const _parameter = /*#__PURE__*/ _interop_require_default(require("../../node/parameter"));
const _tokenTypes = require("../../tokenTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NamedParamterNode extends _parameter.default {
    getAlias() {
        let alias = null;
        const tokenType = _tokenTypes.NAME_TOKEN_TYPE;
        this.someTerminalNode((terminalNode, index)=>{
            if (index === 3) {
                const content = terminalNode.getContent();
                alias = content; //
                return true;
            }
        }, tokenType);
        return alias;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _parameter.default.fromRuleNameChildNodesOpacityAndPrecedence(NamedParamterNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcmFtdGVyTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9wYXJhbWV0ZXJcIjtcblxuaW1wb3J0IHsgTkFNRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZWRQYXJhbXRlck5vZGUgZXh0ZW5kcyBQYXJhbXRlck5vZGUge1xuICBnZXRBbGlhcygpIHtcbiAgICBsZXQgYWxpYXMgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gTkFNRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDMpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgYWxpYXMgPSBjb250ZW50OyAvL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gYWxpYXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQYXJhbXRlck5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKE5hbWVkUGFyYW10ZXJOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOYW1lZFBhcmFtdGVyTm9kZSIsIlBhcmFtdGVyTm9kZSIsImdldEFsaWFzIiwiYWxpYXMiLCJ0b2tlblR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaW5kZXgiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2tFQUpJOzRCQUVPOzs7Ozs7QUFFakIsTUFBTUEsMEJBQTBCQyxrQkFBWTtJQUN6REMsV0FBVztRQUNULElBQUlDLFFBQVE7UUFFWixNQUFNQyxZQUFZQywyQkFBZTtRQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUNDLGNBQWNDO1lBQ25DLElBQUlBLFVBQVUsR0FBRztnQkFDZixNQUFNQyxVQUFVRixhQUFhRyxVQUFVO2dCQUV2Q1AsUUFBUU0sU0FBUyxFQUFFO2dCQUVuQixPQUFPO1lBQ1Q7UUFDRixHQUFHTDtRQUVILE9BQU9EO0lBQ1Q7SUFFQSxPQUFPUSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9kLGtCQUFZLENBQUNVLDBDQUEwQyxDQUFDWCxtQkFBbUJZLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDL04ifQ==