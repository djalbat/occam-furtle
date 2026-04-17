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
    constructor(context, string, node, breakPoint, type, label, parameters, returnBlock){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5sYWJlbC5nZXROYW1lKCk7IH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnJldHVybkJsb2NrLmdldFJldHVyblN0YXRlbWVudCgpOyB9XG5cbiAgY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTsgfVxuXG4gIGFzeW5jIGNhbGwodGVybXMsIGNvbnRleHQpIHtcbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuY29tcGFyZVRlcm1zKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnModGVybXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVwiO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVGVybXNBbmRQYXJhbWV0ZXJzKHRlcm1zLCBwYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gIHRlcm1zLmZvckVhY2hUZXJtKCh0ZXJtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyKGluZGV4KTtcblxuICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybUFuZFBhcmFtZXRlcih0ZXJtLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnMiLCJkZWZpbmUiLCJQcm9jZWR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0VHlwZSIsImdldExhYmVsIiwiZ2V0UGFyYW1ldGVycyIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsImdldE5hbWUiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJjb21wYXJlUHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJjYWxsIiwidGVybXMiLCJicmVhayIsInByb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29tcGFyZVRlcm1zIiwidmFyaWFibGVzIiwidGVybSIsImV2YWx1YXRlIiwidGVybVR5cGUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJuYW1lIiwiZm9yRWFjaFRlcm0iLCJpbmRleCIsInBhcmFtZXRlciIsImdldFBhcmFtZXRlciIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJ2YXJpYWJsZSIsImZyb21UZXJtQW5kUGFyYW1ldGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBVUE7ZUFBQTs7UUFvRWdCQTtlQUFBQTs7O2dDQTVFUTtrRUFFSDtrRUFDQzt1QkFHTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFN0IsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ25GLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSixLQUFLO0lBQ25CO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDSixXQUFXO0lBQ3pCO0lBRUFLLFlBQVk7UUFDVixNQUFNQyxrQkFBbUIsSUFBSSxDQUFDVCxJQUFJLEtBQUtVLG1CQUFZLEVBQzdDQyxVQUFVRixpQkFBa0IsR0FBRztRQUVyQyxPQUFPRTtJQUNUO0lBRUFDLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQ1gsS0FBSyxDQUFDVyxPQUFPO0lBQUk7SUFFekNDLHFCQUFxQjtRQUFFLE9BQU8sSUFBSSxDQUFDVixXQUFXLENBQUNVLGtCQUFrQjtJQUFJO0lBRXJFQyxxQkFBcUJDLGFBQWEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDZCxLQUFLLENBQUNhLG9CQUFvQixDQUFDQztJQUFnQjtJQUU3RixNQUFNQyxLQUFLQyxLQUFLLEVBQUVyQixPQUFPLEVBQUU7UUFDekIsTUFBTSxJQUFJLENBQUNzQixLQUFLLENBQUN0QjtRQUVqQixNQUFNdUIsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUN4QixRQUFReUIsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFRixnQkFBZ0IsY0FBYyxDQUFDO1FBRTdELElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQ0wsT0FBT3JCO1FBRXBDLE1BQU0yQixZQUFZL0IsZ0NBQWdDeUIsT0FBTyxJQUFJLENBQUNmLFVBQVUsRUFBRU4sVUFDcEU0QixPQUFPLE1BQU0sSUFBSSxDQUFDckIsV0FBVyxDQUFDc0IsUUFBUSxDQUFDRixXQUFXM0IsVUFDbEQ4QixXQUFXRixLQUFLcEIsT0FBTztRQUU3QixJQUFJLElBQUksQ0FBQ0osSUFBSSxLQUFLMEIsVUFBVTtZQUMxQixNQUFNQyxhQUFhSCxLQUFLSixTQUFTLElBQzNCUSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUQsU0FBUyw0QkFBNEIsRUFBRVAsZ0JBQWdCLGVBQWUsRUFBRSxJQUFJLENBQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ25JNkIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFqQyxRQUFRb0MsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFYixnQkFBZ0IsWUFBWSxDQUFDO1FBRTdELE9BQU9LO0lBQ1Q7SUFFQSxPQUFPUyxPQUFPLFlBQVk7QUFDNUI7QUFFTyxTQUFTekMsZ0NBQWdDeUIsS0FBSyxFQUFFZixVQUFVLEVBQUVOLE9BQU87SUFDeEUsTUFBTTJCLFlBQVksRUFBRTtJQUVwQk4sTUFBTWlCLFdBQVcsQ0FBQyxDQUFDVixNQUFNVztRQUN2QixNQUFNQyxZQUFZbEMsV0FBV21DLFlBQVksQ0FBQ0Y7UUFFMUMsSUFBSUMsY0FBYyxNQUFNO1lBQ3RCLE1BQU0sRUFBRUUsUUFBUSxFQUFFLEdBQUdDLGlCQUFRLEVBQ3ZCQyxXQUFXRixTQUFTRyxvQkFBb0IsQ0FBQ2pCLE1BQU1ZLFdBQVd4QztZQUVoRTJCLFVBQVVtQixJQUFJLENBQUNGO1FBQ2pCO0lBQ0Y7SUFFQSxPQUFPakI7QUFDVCJ9