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
    constructor(context, string, node, type, label, parameters, returnBlock){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZUJvb2xlYW5UeXBlID0gKHRoaXMudHlwZSA9PT0gQk9PTEVBTl9UWVBFKSxcbiAgICAgICAgICBib29sZWFuID0gdHlwZUJvb2xlYW5UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLmxhYmVsLmdldE5hbWUoKTsgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2suZ2V0UmV0dXJuU3RhdGVtZW50KCk7IH1cblxuICBjb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7IHJldHVybiB0aGlzLmxhYmVsLmNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpOyB9XG5cbiAgYXN5bmMgY2FsbCh0ZXJtcywgY29udGV4dCkge1xuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5jb21wYXJlVGVybXModGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyh0ZXJtcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB0ZXJtVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnModGVybXMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgdGVybXMuZm9yRWFjaFRlcm0oKHRlcm0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5nZXRQYXJhbWV0ZXIoaW5kZXgpO1xuXG4gICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtQW5kUGFyYW1ldGVyKHRlcm0sIHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyIsImRlZmluZSIsIlByb2NlZHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJsYWJlbCIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImlzQm9vbGVhbiIsInR5cGVCb29sZWFuVHlwZSIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW4iLCJnZXROYW1lIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwiY2FsbCIsInRlcm1zIiwiYnJlYWsiLCJwcm9jZWR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbXBhcmVUZXJtcyIsInZhcmlhYmxlcyIsInRlcm0iLCJldmFsdWF0ZSIsInRlcm1UeXBlIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwibmFtZSIsImZvckVhY2hUZXJtIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwidmFyaWFibGUiLCJmcm9tVGVybUFuZFBhcmFtZXRlciIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVBO2VBQUE7O1FBb0VnQkE7ZUFBQUE7OztnQ0E1RVE7a0VBRUg7a0VBQ0M7dUJBR087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRTdCLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDdkUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNKLEtBQUs7SUFDbkI7SUFFQUssZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNKLFdBQVc7SUFDekI7SUFFQUssWUFBWTtRQUNWLE1BQU1DLGtCQUFtQixJQUFJLENBQUNULElBQUksS0FBS1UsbUJBQVksRUFDN0NDLFVBQVVGLGlCQUFrQixHQUFHO1FBRXJDLE9BQU9FO0lBQ1Q7SUFFQUMsVUFBVTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNXLE9BQU87SUFBSTtJQUV6Q0MscUJBQXFCO1FBQUUsT0FBTyxJQUFJLENBQUNWLFdBQVcsQ0FBQ1Usa0JBQWtCO0lBQUk7SUFFckVDLHFCQUFxQkMsYUFBYSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNkLEtBQUssQ0FBQ2Esb0JBQW9CLENBQUNDO0lBQWdCO0lBRTdGLE1BQU1DLEtBQUtDLEtBQUssRUFBRXBCLE9BQU8sRUFBRTtRQUN6QixNQUFNLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ3JCO1FBRWpCLE1BQU1zQixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q3ZCLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUVGLGdCQUFnQixjQUFjLENBQUM7UUFFN0QsSUFBSSxDQUFDakIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDTCxPQUFPcEI7UUFFcEMsTUFBTTBCLFlBQVk5QixnQ0FBZ0N3QixPQUFPLElBQUksQ0FBQ2YsVUFBVSxFQUFFTCxVQUNwRTJCLE9BQU8sTUFBTSxJQUFJLENBQUNyQixXQUFXLENBQUNzQixRQUFRLENBQUNGLFdBQVcxQixVQUNsRDZCLFdBQVdGLEtBQUtwQixPQUFPO1FBRTdCLElBQUksSUFBSSxDQUFDSixJQUFJLEtBQUswQixVQUFVO1lBQzFCLE1BQU1DLGFBQWFILEtBQUtKLFNBQVMsSUFDM0JRLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFRCxTQUFTLDRCQUE0QixFQUFFUCxnQkFBZ0IsZUFBZSxFQUFFLElBQUksQ0FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDbkk2QixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQWhDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUViLGdCQUFnQixZQUFZLENBQUM7UUFFN0QsT0FBT0s7SUFDVDtJQUVBLE9BQU9TLE9BQU8sWUFBWTtBQUM1QjtBQUVPLFNBQVN4QyxnQ0FBZ0N3QixLQUFLLEVBQUVmLFVBQVUsRUFBRUwsT0FBTztJQUN4RSxNQUFNMEIsWUFBWSxFQUFFO0lBRXBCTixNQUFNaUIsV0FBVyxDQUFDLENBQUNWLE1BQU1XO1FBQ3ZCLE1BQU1DLFlBQVlsQyxXQUFXbUMsWUFBWSxDQUFDRjtRQUUxQyxJQUFJQyxjQUFjLE1BQU07WUFDdEIsTUFBTSxFQUFFRSxRQUFRLEVBQUUsR0FBR0MsaUJBQVEsRUFDdkJDLFdBQVdGLFNBQVNHLG9CQUFvQixDQUFDakIsTUFBTVksV0FBV3ZDO1lBRWhFMEIsVUFBVW1CLElBQUksQ0FBQ0Y7UUFDakI7SUFDRjtJQUVBLE9BQU9qQjtBQUNUIn0=