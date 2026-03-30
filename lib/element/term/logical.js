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
    constructor(context, string, node, lineIndex, type, disjunction, leftTerm, rightTerm){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb247XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGxvZ2ljYWxUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFRlcm1QcmltaXRpdmVWYWx1ZSA9IGxlZnRUZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUgPSByaWdodFRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBsZWZ0Qm9vbGVhbiA9bGVmdFRlcm1QcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgcmlnaHRCb29sZWFuID0gcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2p1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gfHwgcmlnaHRCb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gJiYgcmlnaHRCb29sZWFuKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bG9naWNhbFRlcm1TdHJpbmd9JyBsb2dpY2FsIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidHlwZSIsImRpc2p1bmN0aW9uIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRUeXBlIiwiaXNEaXNqdW5jdGlvbiIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZXZhbHVhdGUiLCJ0ZXJtIiwibG9naWNhbFRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJCT09MRUFOX1RZUEUiLCJsZWZ0VGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInJpZ2h0VGVybVN0cmluZyIsImxlZnRUZXJtUHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsInJpZ2h0VGVybVByaW1pdGl2ZVZhbHVlIiwibGVmdEJvb2xlYW4iLCJyaWdodEJvb2xlYW4iLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwidGVybVN0cmluZyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCO2tFQUVGOzBCQUVDO3VCQUNNO3NCQUNHOzs7Ozs7TUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFPO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQ3BGLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixXQUFXO0lBQ3pCO0lBRUFLLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNKLFNBQVM7SUFDdkI7SUFFQUssU0FBU1osT0FBTyxFQUFFO1FBQ2hCLElBQUlhO1FBRUosTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFL0NmLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsa0JBQWtCLGlCQUFpQixDQUFDO1FBRXJFLE1BQU1SLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNNLFFBQVEsQ0FBQ1osVUFDbENPLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNLLFFBQVEsQ0FBQ1osVUFDcENpQixlQUFlWCxTQUFTRSxPQUFPLElBQy9CVSxnQkFBZ0JYLFVBQVVDLE9BQU87UUFFdkMsSUFBSVMsaUJBQWlCRSxtQkFBWSxFQUFFO1lBQ2pDLE1BQU1DLGlCQUFpQmQsU0FBU1MsU0FBUyxJQUNuQ00sVUFBVSxDQUFDLEtBQUssRUFBRUQsZUFBZSx1QkFBdUIsRUFBRUgsYUFBYSw2QkFBNkIsRUFBRUUsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDdEhHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlKLGtCQUFrQkMsbUJBQVksRUFBRTtZQUNsQyxNQUFNTSxrQkFBa0JsQixVQUFVUSxTQUFTLElBQ3JDTSxVQUFVLENBQUMsS0FBSyxFQUFFSSxnQkFBZ0Isd0JBQXdCLEVBQUVQLGNBQWMsNkJBQTZCLEVBQUVDLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3pIRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNSSx5QkFBeUJwQixTQUFTcUIsaUJBQWlCLElBQ25EQywwQkFBMEJyQixVQUFVb0IsaUJBQWlCLElBQ3JERSxjQUFhSCx3QkFDYkksZUFBZUYseUJBQ2ZHLFVBQVUsSUFBSSxDQUFDMUIsV0FBVyxHQUNid0IsZUFBZUMsZUFDYkQsZUFBZUM7UUFFcENqQixPQUFPbUIsSUFBQUEscUJBQWUsRUFBQ0QsU0FBUy9CO1FBRWhDLE1BQU1pQyxhQUFhcEIsS0FBS0UsU0FBUztRQUVqQ2YsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFcEIsa0JBQWtCLG1CQUFtQixFQUFFbUIsV0FBVyxFQUFFLENBQUM7UUFFeEYsT0FBT3BCO0lBQ1Q7SUFFQSxPQUFPc0IsT0FBTyxjQUFjO0FBQzlCIn0=