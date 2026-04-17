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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class ProcedureCall extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, reference, terms){
        super(context, string, node, breakPoint);
        this.reference = reference;
        this.terms = terms;
    }
    getReference() {
        return this.reference;
    }
    getTerms() {
        return this.terms;
    }
    getProcedureName() {
        return this.reference.getProcedureName();
    }
    async evaluate(context) {
        await this.break(context);
        const procedureCallString = this.getString(); ///
        context.trace(`Evaluating the '${procedureCallString}' procedure call...`);
        const procedureName = this.getProcedureName(), procedurePresent = context.isProcedurePresentByProcedureName(procedureName);
        if (!procedurePresent) {
            const message = `The '${procedureCallString} procedure is not present.'`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const procedure = context.findProcedureByProcedureName(procedureName), terms = this.terms.evaluate(context), term = await procedure.call(terms, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${procedureCallString}' procedure call as '${termString}'.`);
        return term;
    }
    static name = "ProcedureCall";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZWZlcmVuY2UsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICBpZiAoIXByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9IHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSxcbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJyZWZlcmVuY2UiLCJ0ZXJtcyIsImdldFJlZmVyZW5jZSIsImdldFRlcm1zIiwiZ2V0UHJvY2VkdXJlTmFtZSIsImV2YWx1YXRlIiwiYnJlYWsiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJ0ZXJtIiwiY2FsbCIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjtrRUFFRjswQkFFQzs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1QkFBTztJQUN2RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxDQUFFO1FBQy9ELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsbUJBQW1CO1FBQUUsT0FBTyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ksZ0JBQWdCO0lBQUk7SUFFL0QsTUFBTUMsU0FBU1QsT0FBTyxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxDQUFDVSxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRWxEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsb0JBQW9CLG1CQUFtQixDQUFDO1FBRXpFLE1BQU1HLGdCQUFnQixJQUFJLENBQUNOLGdCQUFnQixJQUNyQ08sbUJBQW1CZixRQUFRZ0IsaUNBQWlDLENBQUNGO1FBRW5FLElBQUksQ0FBQ0Msa0JBQWtCO1lBQ3JCLE1BQU1FLFVBQVUsQ0FBQyxLQUFLLEVBQUVOLG9CQUFvQiwyQkFBMkIsQ0FBQyxFQUNsRU8sWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsWUFBWXJCLFFBQVFzQiw0QkFBNEIsQ0FBQ1IsZ0JBQ2pEVCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxRQUFRLENBQUNULFVBQzVCdUIsT0FBTyxNQUFNRixVQUFVRyxJQUFJLENBQUNuQixPQUFPTDtRQUV6QyxNQUFNeUIsYUFBYUYsS0FBS1gsU0FBUztRQUVqQ1osUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFZixvQkFBb0IscUJBQXFCLEVBQUVjLFdBQVcsRUFBRSxDQUFDO1FBRTVGLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPSSxPQUFPLGdCQUFnQjtBQUNoQyJ9