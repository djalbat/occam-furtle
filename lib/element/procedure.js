"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get variablesFromTermsAndParameters () {
        return variablesFromTermsAndParameters;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _types = require("../types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const _default = (0, _elements.define)(class Procedure extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, type, label, parameters, returnBlock){
        super(context, string, node, lineIndex);
        this.type = type;
        this.label = label;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    getType() {
        return this.type;
    }
    getLabel() {
        return this.label;
    }
    getParameters() {
        return this.parameters;
    }
    getReturnBlock() {
        return this.returnBlock;
    }
    isBoolean() {
        const typeBooleanType = this.type === _types.BOOLEAN_TYPE, boolean = typeBooleanType; ///
        return boolean;
    }
    getName() {
        return this.label.getName();
    }
    getReturnStatement() {
        return this.returnBlock.getReturnStatement();
    }
    compareProcedureName(procedureName) {
        return this.label.compareProcedureName(procedureName);
    }
    async call(terms, context) {
        await this.break(context);
        const procedureString = this.getString(); ///
        context.trace(`Calling the '${procedureString}' procedure...`);
        this.parameters.compareTerms(terms, context);
        const variables = variablesFromTermsAndParameters(terms, this.parameters, context), term = await this.returnBlock.evaluate(variables, context), termType = term.getType();
        if (this.type !== termType) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type is not equal to the '${procedureString}' procedure's '${this.type}' type.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...called the '${procedureString}' procedure.`);
        return term;
    }
    static name = "Procedure";
});
function variablesFromTermsAndParameters(terms, parameters, context) {
    const variables = [];
    terms.forEachTerm((term, index)=>{
        const parameter = parameters.getParameter(index);
        if (parameter !== null) {
            const { Variable } = _elements.default, variable = Variable.fromTermAndParameter(term, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5sYWJlbC5nZXROYW1lKCk7IH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnJldHVybkJsb2NrLmdldFJldHVyblN0YXRlbWVudCgpOyB9XG5cbiAgY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTsgfVxuXG4gIGFzeW5jIGNhbGwodGVybXMsIGNvbnRleHQpIHtcbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuY29tcGFyZVRlcm1zKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnModGVybXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVwiO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVGVybXNBbmRQYXJhbWV0ZXJzKHRlcm1zLCBwYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gIHRlcm1zLmZvckVhY2hUZXJtKCh0ZXJtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyKGluZGV4KTtcblxuICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybUFuZFBhcmFtZXRlcih0ZXJtLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnMiLCJkZWZpbmUiLCJQcm9jZWR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwiZ2V0TmFtZSIsImdldFJldHVyblN0YXRlbWVudCIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsImNhbGwiLCJ0ZXJtcyIsImJyZWFrIiwicHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21wYXJlVGVybXMiLCJ2YXJpYWJsZXMiLCJ0ZXJtIiwiZXZhbHVhdGUiLCJ0ZXJtVHlwZSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm5hbWUiLCJmb3JFYWNoVGVybSIsImluZGV4IiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsInZhcmlhYmxlIiwiZnJvbVRlcm1BbmRQYXJhbWV0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVQTtlQUFBOztRQW9FZ0JBO2VBQUFBOzs7Z0NBNUVRO2tFQUVIO2tFQUNDO3VCQUdPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU3QixXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDbEYsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNKLEtBQUs7SUFDbkI7SUFFQUssZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNKLFdBQVc7SUFDekI7SUFFQUssWUFBWTtRQUNWLE1BQU1DLGtCQUFtQixJQUFJLENBQUNULElBQUksS0FBS1UsbUJBQVksRUFDN0NDLFVBQVVGLGlCQUFrQixHQUFHO1FBRXJDLE9BQU9FO0lBQ1Q7SUFFQUMsVUFBVTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNXLE9BQU87SUFBSTtJQUV6Q0MscUJBQXFCO1FBQUUsT0FBTyxJQUFJLENBQUNWLFdBQVcsQ0FBQ1Usa0JBQWtCO0lBQUk7SUFFckVDLHFCQUFxQkMsYUFBYSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNkLEtBQUssQ0FBQ2Esb0JBQW9CLENBQUNDO0lBQWdCO0lBRTdGLE1BQU1DLEtBQUtDLEtBQUssRUFBRXJCLE9BQU8sRUFBRTtRQUN6QixNQUFNLElBQUksQ0FBQ3NCLEtBQUssQ0FBQ3RCO1FBRWpCLE1BQU11QixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q3hCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUVGLGdCQUFnQixjQUFjLENBQUM7UUFFN0QsSUFBSSxDQUFDakIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDTCxPQUFPckI7UUFFcEMsTUFBTTJCLFlBQVkvQixnQ0FBZ0N5QixPQUFPLElBQUksQ0FBQ2YsVUFBVSxFQUFFTixVQUNwRTRCLE9BQU8sTUFBTSxJQUFJLENBQUNyQixXQUFXLENBQUNzQixRQUFRLENBQUNGLFdBQVczQixVQUNsRDhCLFdBQVdGLEtBQUtwQixPQUFPO1FBRTdCLElBQUksSUFBSSxDQUFDSixJQUFJLEtBQUswQixVQUFVO1lBQzFCLE1BQU1DLGFBQWFILEtBQUtKLFNBQVMsSUFDM0JRLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFRCxTQUFTLDRCQUE0QixFQUFFUCxnQkFBZ0IsZUFBZSxFQUFFLElBQUksQ0FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDbkk2QixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQWpDLFFBQVFvQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUViLGdCQUFnQixZQUFZLENBQUM7UUFFN0QsT0FBT0s7SUFDVDtJQUVBLE9BQU9TLE9BQU8sWUFBWTtBQUM1QjtBQUVPLFNBQVN6QyxnQ0FBZ0N5QixLQUFLLEVBQUVmLFVBQVUsRUFBRU4sT0FBTztJQUN4RSxNQUFNMkIsWUFBWSxFQUFFO0lBRXBCTixNQUFNaUIsV0FBVyxDQUFDLENBQUNWLE1BQU1XO1FBQ3ZCLE1BQU1DLFlBQVlsQyxXQUFXbUMsWUFBWSxDQUFDRjtRQUUxQyxJQUFJQyxjQUFjLE1BQU07WUFDdEIsTUFBTSxFQUFFRSxRQUFRLEVBQUUsR0FBR0MsaUJBQVEsRUFDdkJDLFdBQVdGLFNBQVNHLG9CQUFvQixDQUFDakIsTUFBTVksV0FBV3hDO1lBRWhFMkIsVUFBVW1CLElBQUksQ0FBQ0Y7UUFDakI7SUFDRjtJQUVBLE9BQU9qQjtBQUNUIn0=