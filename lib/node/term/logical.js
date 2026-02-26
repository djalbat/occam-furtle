"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LogicalTermNode;
    }
});
const _necessary = require("necessary");
const _term = /*#__PURE__*/ _interop_require_default(require("../../node/term"));
const _ruleNames = require("../../ruleNames");
const _tokenTypes = require("../../tokenTypes");
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first, last } = _necessary.arrayUtilities;
class LogicalTermNode extends _term.default {
    getOperator() {
        let operator = null;
        const tokenType = _tokenTypes.SPECIAL_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            operator = content; ///
            return true;
        }, tokenType);
        return operator;
    }
    isConjection() {
        const operator = this.getOperator(), conjection = operator === _constants.CONJUNCTION_OPERATOR;
        return conjection;
    }
    isDisjunction() {
        const operator = this.getOperator(), disjunction = operator === _constants.DISJUNCTION_OPERATOR;
        return disjunction;
    }
    getTermNodes() {
        const ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getNodesByRuleName(ruleName);
        return termNodes;
    }
    getLeftTermNode() {
        const firstExpresionNode = this.getFirstTermNode(), leftTermNode = firstExpresionNode; ///
        return leftTermNode;
    }
    getRightTermNode() {
        const lastTermNode = this.getLastTermNode(), rightTermNode = lastTermNode; ///
        return rightTermNode;
    }
    getLastTermNode() {
        const termNodes = this.getTermNodes(), lastTermNode = last(termNodes);
        return lastTermNode;
    }
    getFirstTermNode() {
        const termNodes = this.getTermNodes(), firstTermNode = first(termNodes);
        return firstTermNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _term.default.fromRuleNameChildNodesOpacityAndPrecedence(LogicalTermNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXJtTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgU1BFQ0lBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IENPTkpVTkNUSU9OX09QRVJBVE9SLCBESVNKVU5DVElPTl9PUEVSQVRPUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2ljYWxUZXJtTm9kZSBleHRlbmRzIFRlcm1Ob2RlIHtcbiAgZ2V0T3BlcmF0b3IoKSB7XG4gICAgbGV0IG9wZXJhdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNQRUNJQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgb3BlcmF0b3IgPSBjb250ZW50OyAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBvcGVyYXRvcjtcbiAgfVxuXG4gIGlzQ29uamVjdGlvbigpIHtcbiAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMuZ2V0T3BlcmF0b3IoKSxcbiAgICAgICAgICBjb25qZWN0aW9uID0gKG9wZXJhdG9yID09PSBDT05KVU5DVElPTl9PUEVSQVRPUik7XG5cbiAgICByZXR1cm4gY29uamVjdGlvbjtcbiAgfVxuXG4gIGlzRGlzanVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLmdldE9wZXJhdG9yKCksXG4gICAgICAgICAgZGlzanVuY3Rpb24gPSAob3BlcmF0b3IgPT09IERJU0pVTkNUSU9OX09QRVJBVE9SKTtcblxuICAgIHJldHVybiBkaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXM7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RFeHByZXNpb25Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZmlyc3RFeHByZXNpb25Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0VGVybU5vZGUgPSB0aGlzLmdldExhc3RUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBsYXN0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMYXN0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgICBsYXN0VGVybU5vZGUgPSBsYXN0KHRlcm1Ob2Rlcyk7XG5cbiAgICByZXR1cm4gbGFzdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0VGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUZXJtTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoTG9naWNhbFRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMb2dpY2FsVGVybU5vZGUiLCJmaXJzdCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIlRlcm1Ob2RlIiwiZ2V0T3BlcmF0b3IiLCJvcGVyYXRvciIsInRva2VuVHlwZSIsIlNQRUNJQUxfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImlzQ29uamVjdGlvbiIsImNvbmplY3Rpb24iLCJDT05KVU5DVElPTl9PUEVSQVRPUiIsImlzRGlzanVuY3Rpb24iLCJkaXNqdW5jdGlvbiIsIkRJU0pVTkNUSU9OX09QRVJBVE9SIiwiZ2V0VGVybU5vZGVzIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldExlZnRUZXJtTm9kZSIsImZpcnN0RXhwcmVzaW9uTm9kZSIsImdldEZpcnN0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibGFzdFRlcm1Ob2RlIiwiZ2V0TGFzdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImZpcnN0VGVybU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBcUJBOzs7MkJBVlU7NkRBRVY7MkJBRVU7NEJBQ0k7MkJBQ3dCOzs7Ozs7QUFFM0QsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHQyx5QkFBYztBQUV2QixNQUFNSCx3QkFBd0JJLGFBQVE7SUFDbkRDLGNBQWM7UUFDWixJQUFJQyxXQUFXO1FBRWYsTUFBTUMsWUFBWUMsOEJBQWtCO1FBRXBDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2Q04sV0FBV0ssU0FBUyxHQUFHO1lBRXZCLE9BQU87UUFDVCxHQUFHSjtRQUVILE9BQU9EO0lBQ1Q7SUFFQU8sZUFBZTtRQUNiLE1BQU1QLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCUyxhQUFjUixhQUFhUywrQkFBb0I7UUFFckQsT0FBT0Q7SUFDVDtJQUVBRSxnQkFBZ0I7UUFDZCxNQUFNVixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQlksY0FBZVgsYUFBYVksK0JBQW9CO1FBRXRELE9BQU9EO0lBQ1Q7SUFFQUUsZUFBZTtRQUNiLE1BQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxZQUFZLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO1FBRTFDLE9BQU9FO0lBQ1Q7SUFFQUUsa0JBQWtCO1FBQ2hCLE1BQU1DLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixJQUMxQ0MsZUFBZUYsb0JBQXFCLEdBQUc7UUFFN0MsT0FBT0U7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGdCQUFnQkYsY0FBYyxHQUFHO1FBRXZDLE9BQU9FO0lBQ1Q7SUFFQUQsa0JBQWtCO1FBQ2hCLE1BQU1SLFlBQVksSUFBSSxDQUFDSCxZQUFZLElBQzdCVSxlQUFlM0IsS0FBS29CO1FBRTFCLE9BQU9PO0lBQ1Q7SUFFQUgsbUJBQW1CO1FBQ2pCLE1BQU1KLFlBQVksSUFBSSxDQUFDSCxZQUFZLElBQzdCYSxnQkFBZ0IvQixNQUFNcUI7UUFFNUIsT0FBT1U7SUFDVDtJQUVBLE9BQU9DLDJDQUEyQ2IsUUFBUSxFQUFFYyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2hDLGFBQVEsQ0FBQzZCLDBDQUEwQyxDQUFDakMsaUJBQWlCb0IsVUFBVWMsWUFBWUMsU0FBU0M7SUFBYTtBQUN6TiJ9