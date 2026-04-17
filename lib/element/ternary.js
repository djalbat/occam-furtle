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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Ternary extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, term, ifExpression, elseExpression){
        super(context, string, node, breakPoint);
        this.term = term;
        this.ifExpression = ifExpression;
        this.elseExpression = elseExpression;
    }
    getTerm() {
        return this.term;
    }
    getIfBlock() {
        return this.ifExpression;
    }
    getElseBlock() {
        return this.elseExpression;
    }
    async evaluate(context) {
        let term;
        const ternaryString = this.getString(); ///
        context.trace(`Evaluating the '${ternaryString}' ternary...`);
        term = this.term.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.BOOLEAN_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's type is '${termType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), boolean = primitiveValue; ///
        term = boolean ? await this.ifExpression.evaluate(context) : await this.elseExpression.evaluate(context);
        const termString = term.getString();
        context.debug(`...evaluated the '${ternaryString}' ternary as '${termString}'.`);
        return term;
    }
    static name = "Ternary";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbjtcbiAgICB0aGlzLmVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRJZkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmlmRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHRlcm5hcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICB0ZXJtID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm5hcnkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGVybSIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwiZ2V0VGVybSIsImdldElmQmxvY2siLCJnZXRFbHNlQmxvY2siLCJldmFsdWF0ZSIsInRlcm5hcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwiYm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCO2tFQUVGOzBCQUVDO3VCQUNNOzs7Ozs7TUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQkFBZ0JDLHVCQUFPO0lBQ2pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsQ0FBRTtRQUNqRixLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7SUFDeEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0gsWUFBWTtJQUMxQjtJQUVBSSxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNILGNBQWM7SUFDNUI7SUFFQSxNQUFNSSxTQUFTVixPQUFPLEVBQUU7UUFDdEIsSUFBSUk7UUFFSixNQUFNTyxnQkFBZ0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUUzQ1osUUFBUWEsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGNBQWMsWUFBWSxDQUFDO1FBRTVEUCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxRQUFRLENBQUNWO1FBRTFCLE1BQU1jLFdBQVdWLEtBQUtXLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsbUJBQVksRUFBRTtZQUM3QixNQUFNQyxhQUFhYixLQUFLUSxTQUFTLElBQzNCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLGtCQUFrQixFQUFFSCxTQUFTLDZCQUE2QixFQUFFRSxtQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUN6R0csWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsaUJBQWlCbEIsS0FBS21CLGlCQUFpQixJQUN2Q0MsVUFBVUYsZ0JBQWdCLEdBQUc7UUFFbkNsQixPQUFPb0IsVUFDRyxNQUFNLElBQUksQ0FBQ25CLFlBQVksQ0FBQ0ssUUFBUSxDQUFDVixXQUMvQixNQUFNLElBQUksQ0FBQ00sY0FBYyxDQUFDSSxRQUFRLENBQUNWO1FBRS9DLE1BQU1pQixhQUFhYixLQUFLUSxTQUFTO1FBRWpDWixRQUFReUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVkLGNBQWMsY0FBYyxFQUFFTSxXQUFXLEVBQUUsQ0FBQztRQUUvRSxPQUFPYjtJQUNUO0lBRUEsT0FBT3NCLE9BQU8sVUFBVTtBQUMxQiJ9