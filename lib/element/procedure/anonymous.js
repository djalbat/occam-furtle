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
    constructor(context, string, node, type, parameters, returnBlock){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vcHJvY2VkdXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGFzeW5jIGNhbGwodGVybXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5jb21wYXJlVGVybXModGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyh0ZXJtcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB0ZXJtVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBbm9ueW1vdXNQcm9jZWR1cmVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFub255bW91c1Byb2NlZHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRUeXBlIiwiZ2V0UGFyYW1ldGVycyIsImdldFJldHVybkJsb2NrIiwiY2FsbCIsInRlcm1zIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21wYXJlVGVybXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybXNBbmRQYXJhbWV0ZXJzIiwidGVybSIsImV2YWx1YXRlIiwidGVybVR5cGUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUY7MEJBRUM7MkJBQ3lCOzs7Ozs7TUFFaEQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLHVCQUFPO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDaEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtJQUN4QjtJQUVBSSxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBLE1BQU1JLEtBQUtDLEtBQUssRUFBRVYsT0FBTyxFQUFFO1FBQ3pCLE1BQU1XLDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXREWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUVGLHlCQUF5Qix3QkFBd0IsQ0FBQztRQUVoRixJQUFJLENBQUNQLFVBQVUsQ0FBQ1UsWUFBWSxDQUFDSixPQUFPVjtRQUVwQyxNQUFNZSxZQUFZQyxJQUFBQSwwQ0FBK0IsRUFBQ04sT0FBTyxJQUFJLENBQUNOLFVBQVUsRUFBRUosVUFDcEVpQixPQUFPLE1BQU0sSUFBSSxDQUFDWixXQUFXLENBQUNhLFFBQVEsQ0FBQ0gsV0FBV2YsVUFDbERtQixXQUFXRixLQUFLWCxPQUFPO1FBRTdCLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtnQixVQUFVO1lBQzFCLE1BQU1DLGFBQWFILEtBQUtMLFNBQVMsSUFDM0JTLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFRCxTQUFTLDRCQUE0QixFQUFFUix5QkFBeUIseUJBQXlCLEVBQUUsSUFBSSxDQUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3RKbUIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUF0QixRQUFReUIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFZCx5QkFBeUIsc0JBQXNCLENBQUM7UUFFaEYsT0FBT007SUFDVDtJQUVBLE9BQU9TLE9BQU8scUJBQXFCO0FBQ3JDIn0=