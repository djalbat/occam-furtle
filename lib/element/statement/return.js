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
const _elements = require("../../elements");
const _default = (0, _elements.define)(class ReturnStatement extends _occamlanguages.Element {
    constructor(context, string, node, term){
        super(context, string, node);
        this.term = term;
    }
    getExpression() {
        return this.term;
    }
    evaluate(context) {
        let term;
        const returnStatementString = this.getString(); ///
        context.trace(`Evaluating the '${returnStatementString}' return statement...`);
        term = this.term.evaluate(context);
        const termString = term.getString();
        context.debug(`...evaluated the '${returnStatementString}' return statement as '${termString}'.`);
        return term;
    }
    static name = "ReturnStatement";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9JyByZXR1cm4gc3RhdGVtZW50Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwicmV0dXJuU3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx3QkFBd0JDLHVCQUFPO0lBQ3pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLFNBQVNMLE9BQU8sRUFBRTtRQUNoQixJQUFJRztRQUVKLE1BQU1HLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRXBEUCxRQUFRUSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsc0JBQXNCLHFCQUFxQixDQUFDO1FBRTdFSCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxRQUFRLENBQUNMO1FBRTFCLE1BQU1TLGFBQWFOLEtBQUtJLFNBQVM7UUFFakNQLFFBQVFVLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSixzQkFBc0IsdUJBQXVCLEVBQUVHLFdBQVcsRUFBRSxDQUFDO1FBRWhHLE9BQU9OO0lBQ1Q7SUFFQSxPQUFPUSxPQUFPLGtCQUFrQjtBQUNsQyJ9