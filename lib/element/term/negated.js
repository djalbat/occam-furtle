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
const _default = (0, _elements.define)(class NegatedTerm extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, type, term){
        super(context, string, node, breakPoint);
        this.type = type;
        this.term = term;
    }
    getType() {
        return this.type;
    }
    getTerm() {
        return this.term;
    }
    evaluate(context) {
        let term;
        const negatedTermString = this.getString(); ///
        context.trace(`Evaluating the '${negatedTermString}' negated term...`);
        term = this.term.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.BOOLEAN_TYPE) {
            const termString = term.getString(), message = `The '${termString}' left term's type is '${termType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let boolean;
        const primitiveValue = term.getPrimitiveValue();
        boolean = primitiveValue; ///
        boolean = !boolean;
        term = (0, _term.termFromBoolean)(boolean, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${negatedTermString}' negated term as '${termString}'.`);
        return term;
    }
    static name = "NegatedTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5lZ2F0ZWRUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgdGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCBuZWdhdGVkVGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHRlcm0uLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbjtcblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpO1xuXG4gICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgIGJvb2xlYW4gPSAhYm9vbGVhbjtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5lZ2F0ZWRUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJ0ZXJtIiwiZ2V0VHlwZSIsImdldFRlcm0iLCJldmFsdWF0ZSIsIm5lZ2F0ZWRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsIkJPT0xFQU5fVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsInRlcm1Gcm9tQm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCO2tFQUVGOzBCQUVDO3VCQUNNO3NCQUNHOzs7Ozs7TUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFPO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDekQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixJQUFJSztRQUVKLE1BQU1JLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRS9DVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsa0JBQWtCLGlCQUFpQixDQUFDO1FBRXJFSixPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxRQUFRLENBQUNSO1FBRTFCLE1BQU1ZLFdBQVdQLEtBQUtDLE9BQU87UUFFN0IsSUFBSU0sYUFBYUMsbUJBQVksRUFBRTtZQUM3QixNQUFNQyxhQUFhVCxLQUFLSyxTQUFTLElBQzNCSyxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLHVCQUF1QixFQUFFRixTQUFTLDZCQUE2QixFQUFFQyxtQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUM5R0csWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSUc7UUFFSixNQUFNQyxpQkFBaUJmLEtBQUtnQixpQkFBaUI7UUFFN0NGLFVBQVVDLGdCQUFnQixHQUFHO1FBRTdCRCxVQUFVLENBQUNBO1FBRVhkLE9BQU9pQixJQUFBQSxxQkFBZSxFQUFDSCxTQUFTbkI7UUFFaEMsTUFBTWMsYUFBYVQsS0FBS0ssU0FBUztRQUVqQ1YsUUFBUXVCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFZCxrQkFBa0IsbUJBQW1CLEVBQUVLLFdBQVcsRUFBRSxDQUFDO1FBRXhGLE9BQU9UO0lBQ1Q7SUFFQSxPQUFPbUIsT0FBTyxjQUFjO0FBQzlCIn0=