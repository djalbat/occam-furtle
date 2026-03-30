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
    constructor(context, string, node, lineIndex, reference, terms){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHJlZmVyZW5jZSwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleClcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICBpZiAoIXByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9IHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSxcbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlQ2FsbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInJlZmVyZW5jZSIsInRlcm1zIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0VGVybXMiLCJnZXRQcm9jZWR1cmVOYW1lIiwiZXZhbHVhdGUiLCJicmVhayIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInRlcm0iLCJjYWxsIiwidGVybVN0cmluZyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCO2tFQUVGOzBCQUVDOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxzQkFBc0JDLHVCQUFPO0lBQ3ZELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLENBQUU7UUFDOUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxtQkFBbUI7UUFBRSxPQUFPLElBQUksQ0FBQ0osU0FBUyxDQUFDSSxnQkFBZ0I7SUFBSTtJQUUvRCxNQUFNQyxTQUFTVCxPQUFPLEVBQUU7UUFDdEIsTUFBTSxJQUFJLENBQUNVLEtBQUssQ0FBQ1Y7UUFFakIsTUFBTVcsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFbERaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsbUJBQW1CLENBQUM7UUFFekUsTUFBTUcsZ0JBQWdCLElBQUksQ0FBQ04sZ0JBQWdCLElBQ3JDTyxtQkFBbUJmLFFBQVFnQixpQ0FBaUMsQ0FBQ0Y7UUFFbkUsSUFBSSxDQUFDQyxrQkFBa0I7WUFDckIsTUFBTUUsVUFBVSxDQUFDLEtBQUssRUFBRU4sb0JBQW9CLDJCQUEyQixDQUFDLEVBQ2xFTyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxZQUFZckIsUUFBUXNCLDRCQUE0QixDQUFDUixnQkFDakRULFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNJLFFBQVEsQ0FBQ1QsVUFDNUJ1QixPQUFPLE1BQU1GLFVBQVVHLElBQUksQ0FBQ25CLE9BQU9MO1FBRXpDLE1BQU15QixhQUFhRixLQUFLWCxTQUFTO1FBRWpDWixRQUFRMEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVmLG9CQUFvQixxQkFBcUIsRUFBRWMsV0FBVyxFQUFFLENBQUM7UUFFNUYsT0FBT0Y7SUFDVDtJQUVBLE9BQU9JLE9BQU8sZ0JBQWdCO0FBQ2hDIn0=