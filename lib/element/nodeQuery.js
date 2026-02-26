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
const _necessary = require("necessary");
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _elements = require("../elements");
const _types = require("../types");
const _term = require("../utilities/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class NodeQuery extends _occamlanguages.Element {
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
        const nodeQueryString = this.getString(); ///
        context.trace(`Evaluating the '${nodeQueryString}' node query...`);
        if (this.query === null) {
            const message = `Cannot evaluate the '${nodeQueryString}' node query because its expression is malformed.`, exception = _exception.default.fromMessage(message);
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
        const nodes = this.query.execute(node), nodesLength = nodes.length;
        if (nodesLength !== 1) {
            const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const firstNode = first(nodes);
        node = firstNode; ///
        term = (0, _term.termFromNode)(node, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${nodeQueryString}' node query as '${termString}'.`);
        return term;
    }
    static name = "NodeQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5vZGVRdWVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS4uLmApO1xuXG4gICAgaWYgKHRoaXMucXVlcnkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgQ2Fubm90IGV2YWx1YXRlIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICBub2RlID0gcHJpbWl0aXZlVmFsdWU7ICAvLy9cblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBub2RlcyBpcyAke25vZGVzTGVuZ3RofSB3aGVuIGl0IHNob3VsZCBiZSAxLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJOb2RlUXVlcnkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsInF1ZXJ5IiwiZ2V0VmFyaWFibGUiLCJnZXRRdWVyeSIsImV2YWx1YXRlIiwidGVybSIsIm5vZGVRdWVyeVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidGVybVN0cmluZyIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub2RlcyIsImV4ZWN1dGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsInRlcm1Gcm9tTm9kZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzJCQUNPO2tFQUVUOzBCQUVDO3VCQUNHO3NCQUNHOzs7Ozs7QUFFN0IsTUFBTSxFQUFFQSxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFaEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxDQUFFO1FBQ2xELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsU0FBU1AsT0FBTyxFQUFFO1FBQ2hCLElBQUlRO1FBRUosTUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsZUFBZSxDQUFDO1FBRWpFLElBQUksSUFBSSxDQUFDTCxLQUFLLEtBQUssTUFBTTtZQUN2QixNQUFNUSxVQUFVLENBQUMscUJBQXFCLEVBQUVILGdCQUFnQixpREFBaUQsQ0FBQyxFQUNwR0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFMLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1A7UUFFOUIsTUFBTWdCLFdBQVdSLEtBQUtTLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsZ0JBQVMsRUFBRTtZQUMxQixNQUFNQyxhQUFhWCxLQUFLRSxTQUFTLElBQzNCRSxVQUFVLENBQUMsS0FBSyxFQUFFTyxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsZ0JBQVMsQ0FBQyxFQUFFLENBQUMsRUFDbkZMLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlYO1FBRUosTUFBTWtCLGlCQUFpQlosS0FBS2EsaUJBQWlCO1FBRTdDbkIsT0FBT2tCLGdCQUFpQixHQUFHO1FBRTNCLElBQUlsQixTQUFTLE1BQU07WUFDakIsTUFBTWlCLGFBQWFYLEtBQUtFLFNBQVMsSUFDM0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFdBQVcsc0JBQXNCLENBQUMsRUFDcEROLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1TLFFBQVEsSUFBSSxDQUFDbEIsS0FBSyxDQUFDbUIsT0FBTyxDQUFDckIsT0FDM0JzQixjQUFjRixNQUFNRyxNQUFNO1FBRWhDLElBQUlELGdCQUFnQixHQUFHO1lBQ3JCLE1BQU1aLFVBQVUsQ0FBQyxvQ0FBb0MsRUFBRVksWUFBWSxxQkFBcUIsQ0FBQyxFQUNuRlgsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTWEsWUFBWS9CLE1BQU0yQjtRQUV4QnBCLE9BQU93QixXQUFXLEdBQUc7UUFFckJsQixPQUFPbUIsSUFBQUEsa0JBQVksRUFBQ3pCLE1BQU1GO1FBRTFCLE1BQU1tQixhQUFhWCxLQUFLRSxTQUFTO1FBRWpDVixRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVuQixnQkFBZ0IsaUJBQWlCLEVBQUVVLFdBQVcsRUFBRSxDQUFDO1FBRXBGLE9BQU9YO0lBQ1Q7SUFFQSxPQUFPcUIsT0FBTyxZQUFZO0FBQzVCIn0=