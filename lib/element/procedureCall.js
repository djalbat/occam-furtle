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
    constructor(context, string, node, breakPoint, reference, values){
        super(context, string, node, breakPoint);
        this.reference = reference;
        this.values = values;
    }
    getReference() {
        return this.reference;
    }
    getValues() {
        return this.values;
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
        const procedure = context.findProcedureByProcedureName(procedureName), values = this.values.evaluate(context), value = await procedure.call(values, context), valueString = value.getString();
        context.debug(`...evaluated the '${procedureCallString}' procedure call as '${valueString}'.`);
        return value;
    }
    static name = "ProcedureCall";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZWZlcmVuY2UsIHZhbHVlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFByb2NlZHVyZU5hbWUoKTsgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMuZ2V0UHJvY2VkdXJlTmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIGlmICghcHJvY2VkdXJlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30gcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHZhbHVlcyA9IHRoaXMudmFsdWVzLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlID0gYXdhaXQgcHJvY2VkdXJlLmNhbGwodmFsdWVzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwgYXMgJyR7dmFsdWVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInJlZmVyZW5jZSIsInZhbHVlcyIsImdldFJlZmVyZW5jZSIsImdldFZhbHVlcyIsImdldFByb2NlZHVyZU5hbWUiLCJldmFsdWF0ZSIsImJyZWFrIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwidmFsdWUiLCJjYWxsIiwidmFsdWVTdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjtrRUFFRjswQkFFQzs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1QkFBTztJQUN2RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxDQUFFO1FBQ2hFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtJQUNoQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRixNQUFNO0lBQ3BCO0lBRUFHLG1CQUFtQjtRQUFFLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLGdCQUFnQjtJQUFJO0lBRS9ELE1BQU1DLFNBQVNULE9BQU8sRUFBRTtRQUN0QixNQUFNLElBQUksQ0FBQ1UsS0FBSyxDQUFDVjtRQUVqQixNQUFNVyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVsRFosUUFBUWEsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RSxNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDTixnQkFBZ0IsSUFDckNPLG1CQUFtQmYsUUFBUWdCLGlDQUFpQyxDQUFDRjtRQUVuRSxJQUFJLENBQUNDLGtCQUFrQjtZQUNyQixNQUFNRSxVQUFVLENBQUMsS0FBSyxFQUFFTixvQkFBb0IsMkJBQTJCLENBQUMsRUFDbEVPLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLFlBQVlyQixRQUFRc0IsNEJBQTRCLENBQUNSLGdCQUNqRFQsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0ksUUFBUSxDQUFDVCxVQUM5QnVCLFFBQVEsTUFBTUYsVUFBVUcsSUFBSSxDQUFDbkIsUUFBUUwsVUFDckN5QixjQUFjRixNQUFNWCxTQUFTO1FBRW5DWixRQUFRMEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVmLG9CQUFvQixxQkFBcUIsRUFBRWMsWUFBWSxFQUFFLENBQUM7UUFFN0YsT0FBT0Y7SUFDVDtJQUVBLE9BQU9JLE9BQU8sZ0JBQWdCO0FBQ2hDIn0=