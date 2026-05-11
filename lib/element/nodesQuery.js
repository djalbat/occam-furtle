"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamlanguages = require("occam-languages");
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _elements = require("../elements");
const _types = require("../types");
const _nominal = require("../utilities/nominal");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NodesQuery extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, query){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.query = query;
    }
    getVariable() {
        return this.variable;
    }
    getQuery() {
        return this.query;
    }
    evaluate(context) {
        let term;
        const nodesQueryString = this.getString(); ///
        context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);
        if (this.query === null) {
            const message = `Cannot evaluate the '${nodesQueryString}' nodes query because its expression is malformed.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        term = this.variable.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.NOMINAL_VALUE_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let node;
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue; ///
        node = nominalValue.getNode();
        if (node === null) {
            const termString = term.getString(), message = `The '${termString}' term's node is null.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = this.query.execute(node);
        term = (0, _nominal.termFromNodesAndNominalValue)(nodes, nominalValue);
        const termString = term.getString();
        context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${termString}'.`);
        return term;
    }
    static name = "NodesQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PTUlOQUxfVkFMVUVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTm9kZXNRdWVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5vZGVzUXVlcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PTUlOQUxfVkFMVUVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlID0gcHJpbWl0aXZlVmFsdWU7ICAvLy9cblxuICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIGlzIG51bGwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5xdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tTm9kZXNBbmROb21pbmFsVmFsdWUobm9kZXMsIG5vbWluYWxWYWx1ZSk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVzUXVlcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5vZGVzUXVlcnkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmFyaWFibGUiLCJxdWVyeSIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsInRlcm0iLCJub2Rlc1F1ZXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT01JTkFMX1ZBTFVFX1RZUEUiLCJ0ZXJtU3RyaW5nIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZSIsImdldE5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJ0ZXJtRnJvbU5vZGVzQW5kTm9taW5hbFZhbHVlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7a0VBRUY7MEJBRUM7dUJBQ1k7eUJBQ1U7Ozs7OztNQUU3QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssQ0FBRTtRQUM5RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixJQUFJUztRQUVKLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGdCQUFnQixDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDTCxLQUFLLEtBQUssTUFBTTtZQUN2QixNQUFNUSxVQUFVLENBQUMscUJBQXFCLEVBQUVILGlCQUFpQixrREFBa0QsQ0FBQyxFQUN0R0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFMLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFOUIsTUFBTWlCLFdBQVdSLEtBQUtTLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUseUJBQWtCLEVBQUU7WUFDbkMsTUFBTUMsYUFBYVgsS0FBS0UsU0FBUyxJQUMzQkUsVUFBVSxDQUFDLEtBQUssRUFBRU8sV0FBVyxVQUFVLEVBQUVILFNBQVMsa0JBQWtCLEVBQUVFLHlCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUM1RkwsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSVo7UUFFSixNQUFNbUIsaUJBQWlCWixLQUFLYSxpQkFBaUIsSUFDdkNDLGVBQWVGLGdCQUFpQixHQUFHO1FBRXpDbkIsT0FBT3FCLGFBQWFDLE9BQU87UUFFM0IsSUFBSXRCLFNBQVMsTUFBTTtZQUNqQixNQUFNa0IsYUFBYVgsS0FBS0UsU0FBUyxJQUMzQkUsVUFBVSxDQUFDLEtBQUssRUFBRU8sV0FBVyxzQkFBc0IsQ0FBQyxFQUNwRE4sWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTVcsUUFBUSxJQUFJLENBQUNwQixLQUFLLENBQUNxQixPQUFPLENBQUN4QjtRQUVqQ08sT0FBT2tCLElBQUFBLHFDQUE0QixFQUFDRixPQUFPRjtRQUUzQyxNQUFNSCxhQUFhWCxLQUFLRSxTQUFTO1FBRWpDWCxRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVsQixpQkFBaUIsa0JBQWtCLEVBQUVVLFdBQVcsRUFBRSxDQUFDO1FBRXRGLE9BQU9YO0lBQ1Q7SUFFQSxPQUFPb0IsT0FBTyxhQUFhO0FBQzdCIn0=