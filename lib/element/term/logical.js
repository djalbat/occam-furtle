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
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _elements = require("../../elements");
const _types = require("../../types");
const _term = require("../../utilities/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class LogicalTerm extends _occamlanguages.Element {
    constructor(context, string, node, type, disjunction, leftTerm, rightTerm){
        super(context, string, node);
        this.type = type;
        this.disjunction = disjunction;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    getType() {
        return this.type;
    }
    isDisjunction() {
        return this.disjunction;
    }
    getLeftTerm() {
        return this.leftTerm;
    }
    getRightTerm() {
        return this.rightTerm;
    }
    evaluate(context) {
        let term;
        const logicalTermString = this.getString(); ///
        context.trace(`Evaluating the '${logicalTermString}' logical term...`);
        const leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
        if (leftTermType !== _types.BOOLEAN_TYPE) {
            const leftTermString = leftTerm.getString(), message = `The '${leftTermString}' left term's type is '${leftTermType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        if (rightTermType !== _types.BOOLEAN_TYPE) {
            const rightTermString = rightTerm.getString(), message = `The '${rightTermString}' right term's type is '${rightTermType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const leftTermPrimitiveValue = leftTerm.getPrimitiveValue(), rightTermPrimitiveValue = rightTerm.getPrimitiveValue(), leftBoolean = leftTermPrimitiveValue, rightBoolean = rightTermPrimitiveValue, boolean = this.disjunction ? leftBoolean || rightBoolean : leftBoolean && rightBoolean;
        term = (0, _term.termFromBoolean)(boolean, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${logicalTermString}' logical term as '${termString}'.`);
        return term;
    }
    static name = "LogicalTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbjtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgbG9naWNhbFRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2xvZ2ljYWxUZXJtU3RyaW5nfScgbG9naWNhbCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBsZWZ0IHRlcm0ncyB0eXBlIGlzICcke2xlZnRUZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChyaWdodFRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IHJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3JpZ2h0VGVybVN0cmluZ30nIHJpZ2h0IHRlcm0ncyB0eXBlIGlzICcke3JpZ2h0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybVByaW1pdGl2ZVZhbHVlID0gbGVmdFRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICByaWdodFRlcm1QcmltaXRpdmVWYWx1ZSA9IHJpZ2h0VGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGxlZnRCb29sZWFuID1sZWZ0VGVybVByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICByaWdodEJvb2xlYW4gPSByaWdodFRlcm1QcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzanVuY3Rpb24gP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0Qm9vbGVhbiB8fCByaWdodEJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0Qm9vbGVhbiAmJiByaWdodEJvb2xlYW4pO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMb2dpY2FsVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTG9naWNhbFRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZGlzanVuY3Rpb24iLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFR5cGUiLCJpc0Rpc2p1bmN0aW9uIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJldmFsdWF0ZSIsInRlcm0iLCJsb2dpY2FsVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsIkJPT0xFQU5fVFlQRSIsImxlZnRUZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRUZXJtU3RyaW5nIiwibGVmdFRlcm1QcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwicmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUiLCJsZWZ0Qm9vbGVhbiIsInJpZ2h0Qm9vbGVhbiIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7a0VBRUY7MEJBRUM7dUJBQ007c0JBQ0c7Ozs7OztNQUVoQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQ3pFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixXQUFXO0lBQ3pCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNKLFNBQVM7SUFDdkI7SUFFQUssU0FBU1gsT0FBTyxFQUFFO1FBQ2hCLElBQUlZO1FBRUosTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFL0NkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixrQkFBa0IsaUJBQWlCLENBQUM7UUFFckUsTUFBTVIsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ00sUUFBUSxDQUFDWCxVQUNsQ00sWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDWCxVQUNwQ2dCLGVBQWVYLFNBQVNFLE9BQU8sSUFDL0JVLGdCQUFnQlgsVUFBVUMsT0FBTztRQUV2QyxJQUFJUyxpQkFBaUJFLG1CQUFZLEVBQUU7WUFDakMsTUFBTUMsaUJBQWlCZCxTQUFTUyxTQUFTLElBQ25DTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxlQUFlLHVCQUF1QixFQUFFSCxhQUFhLDZCQUE2QixFQUFFRSxtQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUN0SEcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSUosa0JBQWtCQyxtQkFBWSxFQUFFO1lBQ2xDLE1BQU1NLGtCQUFrQmxCLFVBQVVRLFNBQVMsSUFDckNNLFVBQVUsQ0FBQyxLQUFLLEVBQUVJLGdCQUFnQix3QkFBd0IsRUFBRVAsY0FBYyw2QkFBNkIsRUFBRUMsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDekhHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1JLHlCQUF5QnBCLFNBQVNxQixpQkFBaUIsSUFDbkRDLDBCQUEwQnJCLFVBQVVvQixpQkFBaUIsSUFDckRFLGNBQWFILHdCQUNiSSxlQUFlRix5QkFDZkcsVUFBVSxJQUFJLENBQUMxQixXQUFXLEdBQ2J3QixlQUFlQyxlQUNiRCxlQUFlQztRQUVwQ2pCLE9BQU9tQixJQUFBQSxxQkFBZSxFQUFDRCxTQUFTOUI7UUFFaEMsTUFBTWdDLGFBQWFwQixLQUFLRSxTQUFTO1FBRWpDZCxRQUFRaUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVwQixrQkFBa0IsbUJBQW1CLEVBQUVtQixXQUFXLEVBQUUsQ0FBQztRQUV4RixPQUFPcEI7SUFDVDtJQUVBLE9BQU9zQixPQUFPLGNBQWM7QUFDOUIifQ==