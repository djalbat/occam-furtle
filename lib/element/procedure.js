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
const _terms = require("../utilities/terms");
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
    async callNominally(nominalValues) {
        const context = this.getContext();
        await this.break(context);
        const procedureString = this.getString(); ///
        context.trace(`Calling the '${procedureString}' procedure nominally...`);
        const terms = (0, _terms.termsFromNominalValues)(nominalValues), term = await this.call(terms, context);
        context.debug(`...called the '${procedureString}' procedure nominally.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21Ob21pbmFsVmFsdWVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubGFiZWwuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0UmV0dXJuU3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5yZXR1cm5CbG9jay5nZXRSZXR1cm5TdGF0ZW1lbnQoKTsgfVxuXG4gIGNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7IH1cblxuICBhc3luYyBjYWxsKHRlcm1zLCBjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS4uLmApO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmNvbXBhcmVUZXJtcyh0ZXJtcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybXNBbmRQYXJhbWV0ZXJzKHRlcm1zLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHRlcm1UeXBlKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZS5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGFzeW5jIGNhbGxOb21pbmFsbHkobm9taW5hbFZhbHVlcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgbm9taW5hbGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbU5vbWluYWxWYWx1ZXMobm9taW5hbFZhbHVlcyksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSBub21pbmFsbHkuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyh0ZXJtcywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICB0ZXJtcy5mb3JFYWNoVGVybSgodGVybSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1BbmRQYXJhbWV0ZXIodGVybSwgcGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNGcm9tVGVybXNBbmRQYXJhbWV0ZXJzIiwiZGVmaW5lIiwiUHJvY2VkdXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJsYWJlbCIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImlzQm9vbGVhbiIsInR5cGVCb29sZWFuVHlwZSIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW4iLCJnZXROYW1lIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwiY2FsbCIsInRlcm1zIiwiYnJlYWsiLCJwcm9jZWR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbXBhcmVUZXJtcyIsInZhcmlhYmxlcyIsInRlcm0iLCJldmFsdWF0ZSIsInRlcm1UeXBlIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiY2FsbE5vbWluYWxseSIsIm5vbWluYWxWYWx1ZXMiLCJnZXRDb250ZXh0IiwidGVybXNGcm9tTm9taW5hbFZhbHVlcyIsIm5hbWUiLCJmb3JFYWNoVGVybSIsImluZGV4IiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsInZhcmlhYmxlIiwiZnJvbVRlcm1BbmRQYXJhbWV0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFXQTtlQUFBOztRQXFGZ0JBO2VBQUFBOzs7Z0NBOUZRO2tFQUVIO2tFQUNDO3VCQUdPO3VCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUV2QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDbkYsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNKLEtBQUs7SUFDbkI7SUFFQUssZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNKLFdBQVc7SUFDekI7SUFFQUssWUFBWTtRQUNWLE1BQU1DLGtCQUFtQixJQUFJLENBQUNULElBQUksS0FBS1UsbUJBQVksRUFDN0NDLFVBQVVGLGlCQUFrQixHQUFHO1FBRXJDLE9BQU9FO0lBQ1Q7SUFFQUMsVUFB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