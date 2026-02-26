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
    constructor(context, string, node, reference, terms){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFByb2NlZHVyZU5hbWUoKTsgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIGlmICghcHJvY2VkdXJlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30gcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gYXdhaXQgcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVmZXJlbmNlIiwidGVybXMiLCJnZXRSZWZlcmVuY2UiLCJnZXRUZXJtcyIsImdldFByb2NlZHVyZU5hbWUiLCJldmFsdWF0ZSIsImJyZWFrIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwidGVybSIsImNhbGwiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7a0VBRUY7MEJBRUM7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsdUJBQU87SUFDdkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxtQkFBbUI7UUFBRSxPQUFPLElBQUksQ0FBQ0osU0FBUyxDQUFDSSxnQkFBZ0I7SUFBSTtJQUUvRCxNQUFNQyxTQUFTUixPQUFPLEVBQUU7UUFDdEIsTUFBTSxJQUFJLENBQUNTLEtBQUssQ0FBQ1Q7UUFFakIsTUFBTVUsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFbERYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsbUJBQW1CLENBQUM7UUFFekUsTUFBTUcsZ0JBQWdCLElBQUksQ0FBQ04sZ0JBQWdCLElBQ3JDTyxtQkFBbUJkLFFBQVFlLGlDQUFpQyxDQUFDRjtRQUVuRSxJQUFJLENBQUNDLGtCQUFrQjtZQUNyQixNQUFNRSxVQUFVLENBQUMsS0FBSyxFQUFFTixvQkFBb0IsMkJBQTJCLENBQUMsRUFDbEVPLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLFlBQVlwQixRQUFRcUIsNEJBQTRCLENBQUNSLGdCQUNqRFQsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ0ksUUFBUSxDQUFDUixVQUM1QnNCLE9BQU8sTUFBTUYsVUFBVUcsSUFBSSxDQUFDbkIsT0FBT0o7UUFFekMsTUFBTXdCLGFBQWFGLEtBQUtYLFNBQVM7UUFFakNYLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWYsb0JBQW9CLHFCQUFxQixFQUFFYyxXQUFXLEVBQUUsQ0FBQztRQUU1RixPQUFPRjtJQUNUO0lBRUEsT0FBT0ksT0FBTyxnQkFBZ0I7QUFDaEMifQ==