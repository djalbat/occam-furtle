"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComparisonTermNode;
    }
});
const _necessary = require("necessary");
const _term = /*#__PURE__*/ _interop_require_default(require("../../node/term"));
const _constants = require("../../constants");
const _ruleNames = require("../../ruleNames");
const _tokenTypes = require("../../tokenTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first, second } = _necessary.arrayUtilities;
class ComparisonTermNode extends _term.default {
    isNegated() {
        let negated = false;
        const tokenType = _tokenTypes.SPECIAL_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            if (content === _constants.NOT_EQUAL_TO) {
                negated = true;
            }
            return true;
        }, tokenType);
        return negated;
    }
    getTermNodes() {
        const ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getNodesByRuleName(ruleName);
        return termNodes;
    }
    getLeftTermNode() {
        const firstTermNode = this.getFirstTermNode(), leftTermNode = firstTermNode; ///
        return leftTermNode;
    }
    getRightTermNode() {
        const secondTermNode = this.getSecondTermNode(), rightTermNode = secondTermNode; ///
        return rightTermNode;
    }
    getFirstTermNode() {
        const termNodes = this.getTermNodes(), firstTermNode = first(termNodes);
        return firstTermNode;
    }
    getSecondTermNode() {
        const termNodes = this.getTermNodes(), secondTermNode = second(termNodes);
        return secondTermNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _term.default.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonTermNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXJtTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtXCI7XG5cbmltcG9ydCB7IE5PVF9FUVVBTF9UTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgU1BFQ0lBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyaXNvblRlcm1Ob2RlIGV4dGVuZHMgVGVybU5vZGUge1xuICBpc05lZ2F0ZWQoKSB7XG4gICAgbGV0IG5lZ2F0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNQRUNJQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IE5PVF9FUVVBTF9UTykge1xuICAgICAgICBuZWdhdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybU5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBzZWNvbmRUZXJtTm9kZSA9IHRoaXMuZ2V0U2Vjb25kVGVybU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gc2Vjb25kVGVybU5vZGU7ICAvLy9cblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0VGVybU5vZGU7XG4gIH1cblxuICBnZXRTZWNvbmRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIHNlY29uZFRlcm1Ob2RlID0gc2Vjb25kKHRlcm1Ob2Rlcyk7XG5cbiAgICByZXR1cm4gc2Vjb25kVGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUZXJtTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29tcGFyaXNvblRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wYXJpc29uVGVybU5vZGUiLCJmaXJzdCIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwiVGVybU5vZGUiLCJpc05lZ2F0ZWQiLCJuZWdhdGVkIiwidG9rZW5UeXBlIiwiU1BFQ0lBTF9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiTk9UX0VRVUFMX1RPIiwiZ2V0VGVybU5vZGVzIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldExlZnRUZXJtTm9kZSIsImZpcnN0VGVybU5vZGUiLCJnZXRGaXJzdFRlcm1Ob2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInNlY29uZFRlcm1Ob2RlIiwiZ2V0U2Vjb25kVGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXFCQTs7OzJCQVZVOzZEQUVWOzJCQUVROzJCQUNFOzRCQUNJOzs7Ozs7QUFFbkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYztBQUV6QixNQUFNSCwyQkFBMkJJLGFBQVE7SUFDdERDLFlBQVk7UUFDVixJQUFJQyxVQUFVO1FBRWQsTUFBTUMsWUFBWUMsOEJBQWtCO1FBRXBDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2QyxJQUFJRCxZQUFZRSx1QkFBWSxFQUFFO2dCQUM1QlAsVUFBVTtZQUNaO1lBRUEsT0FBTztRQUNULEdBQUdDO1FBRUgsT0FBT0Q7SUFDVDtJQUVBUSxlQUFlO1FBQ2IsTUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFlBQVksSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7UUFFMUMsT0FBT0U7SUFDVDtJQUVBRSxrQkFBa0I7UUFDaEIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxlQUFlRixlQUFlLEdBQUc7UUFFdkMsT0FBT0U7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxnQkFBZ0JGLGdCQUFpQixHQUFHO1FBRTFDLE9BQU9FO0lBQ1Q7SUFFQUwsbUJBQW1CO1FBQ2pCLE1BQU1KLFlBQVksSUFBSSxDQUFDSCxZQUFZLElBQzdCTSxnQkFBZ0JuQixNQUFNZ0I7UUFFNUIsT0FBT0c7SUFDVDtJQUVBSyxvQkFBb0I7UUFDbEIsTUFBTVIsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JVLGlCQUFpQnRCLE9BQU9lO1FBRTlCLE9BQU9PO0lBQ1Q7SUFFQSxPQUFPRywyQ0FBMkNaLFFBQVEsRUFBRWEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU8xQixhQUFRLENBQUN1QiwwQ0FBMEMsQ0FBQzNCLG9CQUFvQmUsVUFBVWEsWUFBWUMsU0FBU0M7SUFBYTtBQUM1TiJ9