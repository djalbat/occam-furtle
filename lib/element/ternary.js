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
    constructor(context, string, node, lineIndex, term, ifExpression, elseExpression){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbjtcbiAgICB0aGlzLmVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRJZkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmlmRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHRlcm5hcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICB0ZXJtID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm5hcnkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJnZXRUZXJtIiwiZ2V0SWZCbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwidGVybmFyeVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiQk9PTEVBTl9UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJib29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUY7MEJBRUM7dUJBQ007Ozs7OztNQUU3QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdCQUFnQkMsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxDQUFFO1FBQ2hGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtJQUN4QjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxZQUFZO0lBQzFCO0lBRUFJLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0gsY0FBYztJQUM1QjtJQUVBLE1BQU1JLFNBQVNWLE9BQU8sRUFBRTtRQUN0QixJQUFJSTtRQUVKLE1BQU1PLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNDWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFNURQLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNNLFFBQVEsQ0FBQ1Y7UUFFMUIsTUFBTWMsV0FBV1YsS0FBS1csT0FBTztRQUU3QixJQUFJRCxhQUFhRSxtQkFBWSxFQUFFO1lBQzdCLE1BQU1DLGFBQWFiLEtBQUtRLFNBQVMsSUFDM0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsa0JBQWtCLEVBQUVILFNBQVMsNkJBQTZCLEVBQUVFLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3pHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJsQixLQUFLbUIsaUJBQWlCLElBQ3ZDQyxVQUFVRixnQkFBZ0IsR0FBRztRQUVuQ2xCLE9BQU9vQixVQUNHLE1BQU0sSUFBSSxDQUFDbkIsWUFBWSxDQUFDSyxRQUFRLENBQUNWLFdBQy9CLE1BQU0sSUFBSSxDQUFDTSxjQUFjLENBQUNJLFFBQVEsQ0FBQ1Y7UUFFL0MsTUFBTWlCLGFBQWFiLEtBQUtRLFNBQVM7UUFFakNaLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWQsY0FBYyxjQUFjLEVBQUVNLFdBQVcsRUFBRSxDQUFDO1FBRS9FLE9BQU9iO0lBQ1Q7SUFFQSxPQUFPc0IsT0FBTyxVQUFVO0FBQzFCIn0=