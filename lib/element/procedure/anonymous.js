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
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _elements = require("../../elements");
const _procedure = require("../procedure");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class AnonymousProcedure extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, type, parameters, returnBlock){
        super(context, string, node, lineIndex);
        this.type = type;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    getType() {
        return this.type;
    }
    getParameters() {
        return this.parameters;
    }
    getReturnBlock() {
        return this.returnBlock;
    }
    async call(terms, context) {
        const anonymousProcedureString = this.getString(); ///
        context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);
        this.parameters.compareTerms(terms, context);
        const variables = (0, _procedure.variablesFromTermsAndParameters)(terms, this.parameters, context), term = await this.returnBlock.evaluate(variables, context), termType = term.getType();
        if (this.type !== termType) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type is not equal to the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);
        return term;
    }
    static name = "AnonymousProcedure";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vcHJvY2VkdXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBhc3luYyBjYWxsKHRlcm1zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuY29tcGFyZVRlcm1zKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnModGVybXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZS5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0VHlwZSIsImdldFBhcmFtZXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImNhbGwiLCJ0ZXJtcyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29tcGFyZVRlcm1zIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyIsInRlcm0iLCJldmFsdWF0ZSIsInRlcm1UeXBlIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCO2tFQUVGOzBCQUVDOzJCQUN5Qjs7Ozs7O01BRWhELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyx1QkFBTztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDM0UsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBLE1BQU1JLEtBQUtDLEtBQUssRUFBRVgsT0FBTyxFQUFFO1FBQ3pCLE1BQU1ZLDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXREYixRQUFRYyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUVGLHlCQUF5Qix3QkFBd0IsQ0FBQztRQUVoRixJQUFJLENBQUNQLFVBQVUsQ0FBQ1UsWUFBWSxDQUFDSixPQUFPWDtRQUVwQyxNQUFNZ0IsWUFBWUMsSUFBQUEsMENBQStCLEVBQUNOLE9BQU8sSUFBSSxDQUFDTixVQUFVLEVBQUVMLFVBQ3BFa0IsT0FBTyxNQUFNLElBQUksQ0FBQ1osV0FBVyxDQUFDYSxRQUFRLENBQUNILFdBQVdoQixVQUNsRG9CLFdBQVdGLEtBQUtYLE9BQU87UUFFN0IsSUFBSSxJQUFJLENBQUNILElBQUksS0FBS2dCLFVBQVU7WUFDMUIsTUFBTUMsYUFBYUgsS0FBS0wsU0FBUyxJQUMzQlMsVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxVQUFVLEVBQUVELFNBQVMsNEJBQTRCLEVBQUVSLHlCQUF5Qix5QkFBeUIsRUFBRSxJQUFJLENBQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDdEptQixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQXZCLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVkLHlCQUF5QixzQkFBc0IsQ0FBQztRQUVoRixPQUFPTTtJQUNUO0lBRUEsT0FBT1MsT0FBTyxxQkFBcUI7QUFDckMifQ==