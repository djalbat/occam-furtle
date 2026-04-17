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
    constructor(context, string, node, breakPoint, type, disjunction, leftTerm, rightTerm){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb247XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGxvZ2ljYWxUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFRlcm1QcmltaXRpdmVWYWx1ZSA9IGxlZnRUZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUgPSByaWdodFRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBsZWZ0Qm9vbGVhbiA9bGVmdFRlcm1QcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgcmlnaHRCb29sZWFuID0gcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2p1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gfHwgcmlnaHRCb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gJiYgcmlnaHRCb29sZWFuKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bG9naWNhbFRlcm1TdHJpbmd9JyBsb2dpY2FsIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0VHlwZSIsImlzRGlzanVuY3Rpb24iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImV2YWx1YXRlIiwidGVybSIsImxvZ2ljYWxUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdFRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybVByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJyaWdodFRlcm1QcmltaXRpdmVWYWx1ZSIsImxlZnRCb29sZWFuIiwicmlnaHRCb29sZWFuIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjtrRUFFRjswQkFFQzt1QkFDTTtzQkFDRzs7Ozs7O01BRWhDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsQ0FBRTtRQUNyRixLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0osV0FBVztJQUN6QjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDSixTQUFTO0lBQ3ZCO0lBRUFLLFNBQVNaLE9BQU8sRUFBRTtRQUNoQixJQUFJYTtRQUVKLE1BQU1DLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRS9DZixRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGtCQUFrQixpQkFBaUIsQ0FBQztRQUVyRSxNQUFNUixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDTSxRQUFRLENBQUNaLFVBQ2xDTyxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDSyxRQUFRLENBQUNaLFVBQ3BDaUIsZUFBZVgsU0FBU0UsT0FBTyxJQUMvQlUsZ0JBQWdCWCxVQUFVQyxPQUFPO1FBRXZDLElBQUlTLGlCQUFpQkUsbUJBQVksRUFBRTtZQUNqQyxNQUFNQyxpQkFBaUJkLFNBQVNTLFNBQVMsSUFDbkNNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELGVBQWUsdUJBQXVCLEVBQUVILGFBQWEsNkJBQTZCLEVBQUVFLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3RIRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJSixrQkFBa0JDLG1CQUFZLEVBQUU7WUFDbEMsTUFBTU0sa0JBQWtCbEIsVUFBVVEsU0FBUyxJQUNyQ00sVUFBVSxDQUFDLEtBQUssRUFBRUksZ0JBQWdCLHdCQUF3QixFQUFFUCxjQUFjLDZCQUE2QixFQUFFQyxtQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUN6SEcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUkseUJBQXlCcEIsU0FBU3FCLGlCQUFpQixJQUNuREMsMEJBQTBCckIsVUFBVW9CLGlCQUFpQixJQUNyREUsY0FBYUgsd0JBQ2JJLGVBQWVGLHlCQUNmRyxVQUFVLElBQUksQ0FBQzFCLFdBQVcsR0FDYndCLGVBQWVDLGVBQ2JELGVBQWVDO1FBRXBDakIsT0FBT21CLElBQUFBLHFCQUFlLEVBQUNELFNBQVMvQjtRQUVoQyxNQUFNaUMsYUFBYXBCLEtBQUtFLFNBQVM7UUFFakNmLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRXBCLGtCQUFrQixtQkFBbUIsRUFBRW1CLFdBQVcsRUFBRSxDQUFDO1FBRXhGLE9BQU9wQjtJQUNUO0lBRUEsT0FBT3NCLE9BQU8sY0FBYztBQUM5QiJ9