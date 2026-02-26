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
const _term = require("../utilities/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NodesQuery extends _occamlanguages.Element {
    constructor(context, string, node, variable, query){
        super(context, string, node);
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
        if (termType !== _types.NODE_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let node;
        const primitiveValue = term.getPrimitiveValue();
        node = primitiveValue; ///
        if (node === null) {
            const termString = term.getString(), message = `The '${termString}' term's node is null.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = this.query.execute(node);
        term = (0, _term.termFromNodes)(nodes, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${termString}'.`);
        return term;
    }
    static name = "NodesQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTm9kZXNRdWVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeS4uLmApO1xuXG4gICAgaWYgKHRoaXMucXVlcnkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgQ2Fubm90IGV2YWx1YXRlIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkgYmVjYXVzZSBpdHMgZXhwcmVzc2lvbiBpcyBtYWxmb3JtZWQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKTtcblxuICAgIG5vZGUgPSBwcmltaXRpdmVWYWx1ZTsgIC8vL1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIGlzIG51bGwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5xdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2Rlc1F1ZXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJOb2Rlc1F1ZXJ5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsInRlcm0iLCJub2Rlc1F1ZXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ0ZXJtU3RyaW5nIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vZGVzIiwiZXhlY3V0ZSIsInRlcm1Gcm9tTm9kZXMiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjtrRUFFRjswQkFFQzt1QkFDRztzQkFDSTs7Ozs7O01BRTlCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssQ0FBRTtRQUNsRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNQLE9BQU8sRUFBRTtRQUNoQixJQUFJUTtRQUVKLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGdCQUFnQixDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDTCxLQUFLLEtBQUssTUFBTTtZQUN2QixNQUFNUSxVQUFVLENBQUMscUJBQXFCLEVBQUVILGlCQUFpQixrREFBa0QsQ0FBQyxFQUN0R0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFMLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1A7UUFFOUIsTUFBTWdCLFdBQVdSLEtBQUtTLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsZ0JBQVMsRUFBRTtZQUMxQixNQUFNQyxhQUFhWCxLQUFLRSxTQUFTLElBQzNCRSxVQUFVLENBQUMsS0FBSyxFQUFFTyxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsZ0JBQVMsQ0FBQyxFQUFFLENBQUMsRUFDbkZMLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlYO1FBRUosTUFBTWtCLGlCQUFpQlosS0FBS2EsaUJBQWlCO1FBRTdDbkIsT0FBT2tCLGdCQUFpQixHQUFHO1FBRTNCLElBQUlsQixTQUFTLE1BQU07WUFDakIsTUFBTWlCLGFBQWFYLEtBQUtFLFNBQVMsSUFDM0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFdBQVcsc0JBQXNCLENBQUMsRUFDcEROLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1TLFFBQVEsSUFBSSxDQUFDbEIsS0FBSyxDQUFDbUIsT0FBTyxDQUFDckI7UUFFakNNLE9BQU9nQixJQUFBQSxtQkFBYSxFQUFDRixPQUFPdEI7UUFFNUIsTUFBTW1CLGFBQWFYLEtBQUtFLFNBQVM7UUFFakNWLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWhCLGlCQUFpQixrQkFBa0IsRUFBRVUsV0FBVyxFQUFFLENBQUM7UUFFdEYsT0FBT1g7SUFDVDtJQUVBLE9BQU9rQixPQUFPLGFBQWE7QUFDN0IifQ==