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
        const procedure = context.findProcedureByProcedureName(procedureName), terms = this.terms.evaluate(context), term = await procedure.call(terms, context), termString = term.getString();
        context.debug(`...evaluated the '${procedureCallString}' procedure call as '${termString}'.`);
        return term;
    }
    static name = "ProcedureCall";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZWZlcmVuY2UsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRQcm9jZWR1cmVOYW1lKCk7IH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLmdldFByb2NlZHVyZU5hbWUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICBpZiAoIXByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9IHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSxcbiAgICAgICAgICB0ZXJtcyA9IHRoaXMudGVybXMuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZUNhbGwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwicmVmZXJlbmNlIiwidGVybXMiLCJnZXRSZWZlcmVuY2UiLCJnZXRUZXJtcyIsImdldFByb2NlZHVyZU5hbWUiLCJldmFsdWF0ZSIsImJyZWFrIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwidGVybSIsImNhbGwiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7a0VBRUY7MEJBRUM7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsdUJBQU87SUFDdkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssQ0FBRTtRQUMvRCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLG1CQUFtQjtRQUFFLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLGdCQUFnQjtJQUFJO0lBRS9ELE1BQU1DLFNBQVNULE9BQU8sRUFBRTtRQUN0QixNQUFNLElBQUksQ0FBQ1UsS0FBSyxDQUFDVjtRQUVqQixNQUFNVyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRFosUUFBUWEsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RSxNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDTixnQkFBZ0IsSUFDckNPLG1CQUFtQmYsUUFBUWdCLGlDQUFpQyxDQUFDRjtRQUVuRSxJQUFJLENBQUNDLGtCQUFrQjtZQUNyQixNQUFNRSxVQUFVLENBQUMsS0FBSyxFQUFFTixvQkFBb0IsMkJBQTJCLENBQUMsRUFDbEVPLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLFlBQVlyQixRQUFRc0IsNEJBQTRCLENBQUNSLGdCQUNqRFQsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ0ksUUFBUSxDQUFDVCxVQUM1QnVCLE9BQU8sTUFBTUYsVUFBVUcsSUFBSSxDQUFDbkIsT0FBT0wsVUFDbkN5QixhQUFhRixLQUFLWCxTQUFTO1FBRWpDWixRQUFRMEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVmLG9CQUFvQixxQkFBcUIsRUFBRWMsV0FBVyxFQUFFLENBQUM7UUFFNUYsT0FBT0Y7SUFDVDtJQUVBLE9BQU9JLE9BQU8sZ0JBQWdCO0FBQ2hDIn0=