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
    async callNominally(nodes, context) {
        await this.break(context);
        const procedureString = this.getString(); ///
        context.trace(`Calling the '${procedureString}' procedure nominally...`);
        const terms = (0, _terms.termsFromNodes)(nodes, context), term = await this.call(terms, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZUJvb2xlYW5UeXBlID0gKHRoaXMudHlwZSA9PT0gQk9PTEVBTl9UWVBFKSxcbiAgICAgICAgICBib29sZWFuID0gdHlwZUJvb2xlYW5UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLmxhYmVsLmdldE5hbWUoKTsgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2suZ2V0UmV0dXJuU3RhdGVtZW50KCk7IH1cblxuICBjb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7IHJldHVybiB0aGlzLmxhYmVsLmNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpOyB9XG5cbiAgYXN5bmMgY2FsbCh0ZXJtcywgY29udGV4dCkge1xuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5jb21wYXJlVGVybXModGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyh0ZXJtcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB0ZXJtVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhc3luYyBjYWxsTm9taW5hbGx5KG5vZGVzLCBjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSBub21pbmFsbHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gdGVybXNGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgbm9taW5hbGx5LmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnModGVybXMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgdGVybXMuZm9yRWFjaFRlcm0oKHRlcm0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5nZXRQYXJhbWV0ZXIoaW5kZXgpO1xuXG4gICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtQW5kUGFyYW1ldGVyKHRlcm0sIHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyIsImRlZmluZSIsIlByb2NlZHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwiZ2V0TmFtZSIsImdldFJldHVyblN0YXRlbWVudCIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsImNhbGwiLCJ0ZXJtcyIsImJyZWFrIiwicHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21wYXJlVGVybXMiLCJ2YXJpYWJsZXMiLCJ0ZXJtIiwiZXZhbHVhdGUiLCJ0ZXJtVHlwZSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImNhbGxOb21pbmFsbHkiLCJub2RlcyIsInRlcm1zRnJvbU5vZGVzIiwibmFtZSIsImZvckVhY2hUZXJtIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwidmFyaWFibGUiLCJmcm9tVGVybUFuZFBhcmFtZXRlciIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVdBO2VBQUE7O1FBbUZnQkE7ZUFBQUE7OztnQ0E1RlE7a0VBRUg7a0VBQ0M7dUJBR087dUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRS9CLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsQ0FBRTtRQUNuRixLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0osS0FBSztJQUNuQjtJQUVBSyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0osVUFBVTtJQUN4QjtJQUVBSyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0osV0FBVztJQUN6QjtJQUVBSyxZQUFZO1FBQ1YsTUFBTUMsa0JBQW1CLElBQUksQ0FBQ1QsSUFBSSxLQUFLVSxtQkFBWSxFQUM3Q0MsVUFBVUYsaUJBQWtCLEdBQUc7UUFFckMsT0FBT0U7SUFDVDtJQUVBQyxVQUFVO1FBQUUsT0FBTyxJQUFJLENBQUNYLEtBQUssQ0FBQ1csT0FBTztJQUFJO0lBRXpDQyxxQkFBcUI7UUFBRSxPQUFPLElBQUksQ0FBQ1YsV0FBVyxDQUFDVSxrQkFBa0I7SUFBSTtJQUVyRUMscUJBQXFCQyxhQUFhLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ2QsS0FBSyxDQUFDYSxvQkFBb0IsQ0FBQ0M7SUFBZ0I7SUFFN0YsTUFBTUMsS0FBS0MsS0FBSyxFQUFFckIsT0FBTyxFQUFFO1FBQ3pCLE1BQU0sSUFBSSxDQUFDc0IsS0FBSyxDQUFDdEI7UUFFakIsTUFBTXVCLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUU3RCxJQUFJLENBQUNqQixVQUFVLENBQUNvQixZQUFZLENBQUNMLE9BQU9yQjtRQUVwQyxNQUFNMkIsWUFBWS9CLGdDQUFnQ3lCLE9BQU8sSUFBSSxDQUFDZixVQUFVLEVBQUVOLFVBQ3BFNEIsT0FBTyxNQUFNLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQ3NCLFFBQVEsQ0FBQ0YsV0FBVzNCLFVBQ2xEOEIsV0FBV0YsS0FBS3BCLE9BQU87UUFFN0IsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBSzBCLFVBQVU7WUFDMUIsTUFBTUMsYUFBYUgsS0FBS0osU0FBUyxJQUMzQlEsVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxVQUFVLEVBQUVELFNBQVMsNEJBQTRCLEVBQUVQLGdCQUFnQixlQUFlLEVBQUUsSUFBSSxDQUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNuSTZCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBakMsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRWIsZ0JBQWdCLFlBQVksQ0FBQztRQUU3RCxPQUFPSztJQUNUO0lBRUEsTUFBTVMsY0FBY0MsS0FBSyxFQUFFdEMsT0FBTyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxDQUFDc0IsS0FBSyxDQUFDdEI7UUFFakIsTUFBTXVCLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRUYsZ0JBQWdCLHdCQUF3QixDQUFDO1FBRXZFLE1BQU1GLFFBQVFrQixJQUFBQSxxQkFBYyxFQUFDRCxPQUFPdEMsVUFDOUI0QixPQUFPLE1BQU0sSUFBSSxDQUFDUixJQUFJLENBQUNDLE9BQU9yQjtRQUVwQ0EsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRWIsZ0JBQWdCLHNCQUFzQixDQUFDO1FBRXZFLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPWSxPQUFPLFlBQVk7QUFDNUI7QUFFTyxTQUFTNUMsZ0NBQWdDeUIsS0FBSyxFQUFFZixVQUFVLEVBQUVOLE9BQU87SUFDeEUsTUFBTTJCLFlBQVksRUFBRTtJQUVwQk4sTUFBTW9CLFdBQVcsQ0FBQyxDQUFDYixNQUFNYztRQUN2QixNQUFNQyxZQUFZckMsV0FBV3NDLFlBQVksQ0FBQ0Y7UUFFMUMsSUFBSUMsY0FBYyxNQUFNO1lBQ3RCLE1BQU0sRUFBRUUsUUFBUSxFQUFFLEdBQUdDLGlCQUFRLEVBQ3ZCQyxXQUFXRixTQUFTRyxvQkFBb0IsQ0FBQ3BCLE1BQU1lLFdBQVczQztZQUVoRTJCLFVBQVVzQixJQUFJLENBQUNGO1FBQ2pCO0lBQ0Y7SUFFQSxPQUFPcEI7QUFDVCJ9