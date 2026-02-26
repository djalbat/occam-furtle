"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NamedParamtersNode;
    }
});
const _parameters = /*#__PURE__*/ _interop_require_default(require("../../node/parameters"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NamedParamtersNode extends _parameters.default {
    getNamedParameterNodes() {
        const ruleName = _ruleNames.NAMED_PARAMETER_RULE_NAME, namedParamterNodes = this.getNodesByRuleName(ruleName);
        return namedParamterNodes;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _parameters.default.fromRuleNameChildNodesOpacityAndPrecedence(NamedParamtersNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJhbXRlcnNOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3BhcmFtZXRlcnNcIjtcblxuaW1wb3J0IHsgTkFNRURfUEFSQU1FVEVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZWRQYXJhbXRlcnNOb2RlIGV4dGVuZHMgUGFyYW10ZXJzTm9kZSB7XG4gIGdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBOQU1FRF9QQVJBTUVURVJfUlVMRV9OQU1FLFxuICAgICAgICAgIG5hbWVkUGFyYW10ZXJOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtdGVyTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQYXJhbXRlcnNOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShOYW1lZFBhcmFtdGVyc05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5hbWVkUGFyYW10ZXJzTm9kZSIsIlBhcmFtdGVyc05vZGUiLCJnZXROYW1lZFBhcmFtZXRlck5vZGVzIiwicnVsZU5hbWUiLCJOQU1FRF9QQVJBTUVURVJfUlVMRV9OQU1FIiwibmFtZWRQYXJhbXRlck5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O21FQUpLOzJCQUVnQjs7Ozs7O0FBRTNCLE1BQU1BLDJCQUEyQkMsbUJBQWE7SUFDM0RDLHlCQUF5QjtRQUN2QixNQUFNQyxXQUFXQyxvQ0FBeUIsRUFDcENDLHFCQUFxQixJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtRQUVuRCxPQUFPRTtJQUNUO0lBRUEsT0FBT0UsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPVCxtQkFBYSxDQUFDTSwwQ0FBMEMsQ0FBQ1Asb0JBQW9CRyxVQUFVSyxZQUFZQyxTQUFTQztJQUFhO0FBQ2pPIn0=