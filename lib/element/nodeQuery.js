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
    constructor(context, string, node, lineIndex, variable, query){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5vZGVRdWVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeSBiZWNhdXNlIGl0cyBleHByZXNzaW9uIGlzIG1hbGZvcm1lZC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpO1xuXG4gICAgbm9kZSA9IHByaW1pdGl2ZVZhbHVlOyAgLy8vXG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNMZW5ndGggIT09IDEpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgcmV0dXJuZWQgbm9kZXMgaXMgJHtub2Rlc0xlbmd0aH0gd2hlbiBpdCBzaG91bGQgYmUgMS5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZVF1ZXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiTm9kZVF1ZXJ5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidmFyaWFibGUiLCJxdWVyeSIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsInRlcm0iLCJub2RlUXVlcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInRlcm1TdHJpbmciLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9kZXMiLCJleGVjdXRlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJ0ZXJtRnJvbU5vZGUiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjsyQkFDTztrRUFFVDswQkFFQzt1QkFDRztzQkFDRzs7Ozs7O0FBRTdCLE1BQU0sRUFBRUEsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRWhDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxDQUFFO1FBQzdELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLElBQUlTO1FBRUosTUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsZUFBZSxDQUFDO1FBRWpFLElBQUksSUFBSSxDQUFDTCxLQUFLLEtBQUssTUFBTTtZQUN2QixNQUFNUSxVQUFVLENBQUMscUJBQXFCLEVBQUVILGdCQUFnQixpREFBaUQsQ0FBQyxFQUNwR0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFMLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFOUIsTUFBTWlCLFdBQVdSLEtBQUtTLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsZ0JBQVMsRUFBRTtZQUMxQixNQUFNQyxhQUFhWCxLQUFLRSxTQUFTLElBQzNCRSxVQUFVLENBQUMsS0FBSyxFQUFFTyxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsZ0JBQVMsQ0FBQyxFQUFFLENBQUMsRUFDbkZMLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlaO1FBRUosTUFBTW1CLGlCQUFpQlosS0FBS2EsaUJBQWlCO1FBRTdDcEIsT0FBT21CLGdCQUFpQixHQUFHO1FBRTNCLElBQUluQixTQUFTLE1BQU07WUFDakIsTUFBTWtCLGFBQWFYLEtBQUtFLFNBQVMsSUFDM0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFdBQVcsc0JBQXNCLENBQUMsRUFDcEROLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1TLFFBQVEsSUFBSSxDQUFDbEIsS0FBSyxDQUFDbUIsT0FBTyxDQUFDdEIsT0FDM0J1QixjQUFjRixNQUFNRyxNQUFNO1FBRWhDLElBQUlELGdCQUFnQixHQUFHO1lBQ3JCLE1BQU1aLFVBQVUsQ0FBQyxvQ0FBb0MsRUFBRVksWUFBWSxxQkFBcUIsQ0FBQyxFQUNuRlgsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTWEsWUFBWWhDLE1BQU00QjtRQUV4QnJCLE9BQU95QixXQUFXLEdBQUc7UUFFckJsQixPQUFPbUIsSUFBQUEsa0JBQVksRUFBQzFCLE1BQU1GO1FBRTFCLE1BQU1vQixhQUFhWCxLQUFLRSxTQUFTO1FBRWpDWCxRQUFRNkIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVuQixnQkFBZ0IsaUJBQWlCLEVBQUVVLFdBQVcsRUFBRSxDQUFDO1FBRXBGLE9BQU9YO0lBQ1Q7SUFFQSxPQUFPcUIsT0FBTyxZQUFZO0FBQzVCIn0=