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
        let value;
        const ternaryString = this.getString(); ///
        context.trace(`Evaluating the '${ternaryString}' ternary...`);
        value = this.term.evaluate(context);
        const valueType = value.getType();
        if (valueType !== _types.BOOLEAN_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = value.getPrimitiveValue(), boolean = primitiveValue; ///
        value = boolean ? await this.ifExpression.evaluate(context) : await this.elseExpression.evaluate(context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${ternaryString}' ternary as '${valueString}'.`);
        return value;
    }
    static name = "Ternary";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbjtcbiAgICB0aGlzLmVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRJZkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmlmRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB0ZXJuYXJ5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgdHlwZSBpcyAnJHt2YWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgIHZhbHVlID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkgYXMgJyR7dmFsdWVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJuYXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJuYXJ5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsImdldFRlcm0iLCJnZXRJZkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsInRlcm5hcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJCT09MRUFOX1RZUEUiLCJ2YWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJib29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUY7MEJBRUM7dUJBQ007Ozs7OztNQUU3QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdCQUFnQkMsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxDQUFFO1FBQ2pGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtJQUN4QjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxZQUFZO0lBQzFCO0lBRUFJLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0gsY0FBYztJQUM1QjtJQUVBLE1BQU1JLFNBQVNWLE9BQU8sRUFBRTtRQUN0QixJQUFJVztRQUVKLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNDYixRQUFRYyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFNURELFFBQVEsSUFBSSxDQUFDUCxJQUFJLENBQUNNLFFBQVEsQ0FBQ1Y7UUFFM0IsTUFBTWUsWUFBWUosTUFBTUssT0FBTztRQUUvQixJQUFJRCxjQUFjRSxtQkFBWSxFQUFFO1lBQzlCLE1BQU1DLGNBQWNQLE1BQU1FLFNBQVMsSUFDN0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFlBQVksbUJBQW1CLEVBQUVILFVBQVUsNkJBQTZCLEVBQUVFLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQzVHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJaLE1BQU1hLGlCQUFpQixJQUN4Q0MsVUFBVUYsZ0JBQWdCLEdBQUc7UUFFbkNaLFFBQVFjLFVBQ0UsTUFBTSxJQUFJLENBQUNwQixZQUFZLENBQUNLLFFBQVEsQ0FBQ1YsV0FDL0IsTUFBTSxJQUFJLENBQUNNLGNBQWMsQ0FBQ0ksUUFBUSxDQUFDVjtRQUUvQyxNQUFNa0IsY0FBY1AsTUFBTUUsU0FBUztRQUVuQ2IsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFZCxjQUFjLGNBQWMsRUFBRU0sWUFBWSxFQUFFLENBQUM7UUFFaEYsT0FBT1A7SUFDVDtJQUVBLE9BQU9nQixPQUFPLFVBQVU7QUFDMUIifQ==