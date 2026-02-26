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
    constructor(context, string, node, term, ifExpression, elseExpression){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuaWZFeHByZXNzaW9uID0gaWZFeHByZXNzaW9uO1xuICAgIHRoaXMuZWxzZUV4cHJlc3Npb24gPSBlbHNlRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkuLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB0eXBlIGlzICcke3Rlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgIHRlcm0gPSBib29sZWFuID9cbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5pZkV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCkgOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZWxzZUV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybmFyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybmFyeSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsImdldFRlcm0iLCJnZXRJZkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJ0ZXJuYXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJCT09MRUFOX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsImJvb2xlYW4iLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjtrRUFFRjswQkFFQzt1QkFDTTs7Ozs7O01BRTdCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxDQUFFO1FBQ3JFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtJQUN4QjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxZQUFZO0lBQzFCO0lBRUFJLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0gsY0FBYztJQUM1QjtJQUVBLE1BQU1JLFNBQVNULE9BQU8sRUFBRTtRQUN0QixJQUFJRztRQUVKLE1BQU1PLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNDWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFNURQLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNNLFFBQVEsQ0FBQ1Q7UUFFMUIsTUFBTWEsV0FBV1YsS0FBS1csT0FBTztRQUU3QixJQUFJRCxhQUFhRSxtQkFBWSxFQUFFO1lBQzdCLE1BQU1DLGFBQWFiLEtBQUtRLFNBQVMsSUFDM0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsa0JBQWtCLEVBQUVILFNBQVMsNkJBQTZCLEVBQUVFLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3pHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJsQixLQUFLbUIsaUJBQWlCLElBQ3ZDQyxVQUFVRixnQkFBZ0IsR0FBRztRQUVuQ2xCLE9BQU9vQixVQUNHLE1BQU0sSUFBSSxDQUFDbkIsWUFBWSxDQUFDSyxRQUFRLENBQUNULFdBQy9CLE1BQU0sSUFBSSxDQUFDSyxjQUFjLENBQUNJLFFBQVEsQ0FBQ1Q7UUFFL0MsTUFBTWdCLGFBQWFiLEtBQUtRLFNBQVM7UUFFakNYLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWQsY0FBYyxjQUFjLEVBQUVNLFdBQVcsRUFBRSxDQUFDO1FBRS9FLE9BQU9iO0lBQ1Q7SUFFQSxPQUFPc0IsT0FBTyxVQUFVO0FBQzFCIn0=