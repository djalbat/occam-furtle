"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NegatedTermNode;
    }
});
const _term = /*#__PURE__*/ _interop_require_default(require("../../node/term"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NegatedTermNode extends _term.default {
    getTermNode() {
        const ruleName = _ruleNames.TERM_RULE_NAME, termNode = this.getNodeByRuleName(ruleName);
        return termNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _term.default.fromRuleNameChildNodesOpacityAndPrecedence(NegatedTermNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm0vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1cIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lZ2F0ZWRUZXJtTm9kZSBleHRlbmRzIFRlcm1Ob2RlIHtcbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gVGVybU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKE5lZ2F0ZWRUZXJtTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTmVnYXRlZFRlcm1Ob2RlIiwiVGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZEQUpBOzJCQUVVOzs7Ozs7QUFFaEIsTUFBTUEsd0JBQXdCQyxhQUFRO0lBQ25EQyxjQUFjO1FBQ1osTUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFdBQVcsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFeEMsT0FBT0U7SUFDVDtJQUVBLE9BQU9FLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1QsYUFBUSxDQUFDTSwwQ0FBMEMsQ0FBQ1AsaUJBQWlCRyxVQUFVSyxZQUFZQyxTQUFTQztJQUFhO0FBQ3pOIn0=