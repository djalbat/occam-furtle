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
    get variablesFromValuesAndParameters () {
        return variablesFromValuesAndParameters;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _types = require("../types");
const _values = require("../utilities/values");
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
    async call(values, context) {
        await this.break(context);
        const procedureString = this.getString(); ///
        context.trace(`Calling the '${procedureString}' procedure...`);
        this.parameters.compareValues(values, context);
        const variables = variablesFromValuesAndParameters(values, this.parameters, context), term = await this.returnBlock.evaluate(variables, context), termType = term.getType();
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
        const values = (0, _values.valuesFromNominalValues)(nominalValues), term = await this.call(values, context);
        context.debug(`...called the '${procedureString}' procedure nominally.`);
        return term;
    }
    static name = "Procedure";
});
function variablesFromValuesAndParameters(values, parameters, context) {
    const variables = [];
    values.forEachValue((value, index)=>{
        const parameter = parameters.getParameter(index);
        if (parameter !== null) {
            const { Variable } = _elements.default, variable = Variable.fromValueAndParameter(value, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZXNGcm9tTm9taW5hbFZhbHVlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsdWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5sYWJlbC5nZXROYW1lKCk7IH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLnJldHVybkJsb2NrLmdldFJldHVyblN0YXRlbWVudCgpOyB9XG5cbiAgY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTsgfVxuXG4gIGFzeW5jIGNhbGwodmFsdWVzLCBjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS4uLmApO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmNvbXBhcmVWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB0ZXJtVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhc3luYyBjYWxsTm9taW5hbGx5KG5vbWluYWxWYWx1ZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlIG5vbWluYWxseS4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVzID0gdmFsdWVzRnJvbU5vbWluYWxWYWx1ZXMobm9taW5hbFZhbHVlcyksXG4gICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgbm9taW5hbGx5LmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICB2YWx1ZXMuZm9yRWFjaFZhbHVlKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwiZGVmaW5lIiwiUHJvY2VkdXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJsYWJlbCIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImlzQm9vbGVhbiIsInR5cGVCb29sZWFuVHlwZSIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW4iLCJnZXROYW1lIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwiY2FsbCIsInZhbHVlcyIsImJyZWFrIiwicHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21wYXJlVmFsdWVzIiwidmFyaWFibGVzIiwidGVybSIsImV2YWx1YXRlIiwidGVybVR5cGUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJjYWxsTm9taW5hbGx5Iiwibm9taW5hbFZhbHVlcyIsImdldENvbnRleHQiLCJ2YWx1ZXNGcm9tTm9taW5hbFZhbHVlcyIsIm5hbWUiLCJmb3JFYWNoVmFsdWUiLCJ2YWx1ZSIsImluZGV4IiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsInZhcmlhYmxlIiwiZnJvbVZhbHVlQW5kUGFyYW1ldGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBV0E7ZUFBQTs7UUFxRmdCQTtlQUFBQTs7O2dDQTlGUTtrRUFFSDtrRUFDQzt1QkFHTzt3QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFeEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ25GLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSixLQUFLO0lBQ25CO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDSixXQUFXO0lBQ3pCO0lBRUFLLFlBQVk7UUFDVixNQUFNQyxrQkFBbUIsSUFBSSxDQUFDVCxJQUFJLEtBQUtVLG1CQUFZLEVBQzdDQyxVQUFVRixpQkFBa0IsR0FBRztRQUVyQyxPQUFPRTtJQUNUO0lBRUFDLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQ1gsS0FBSyxDQUFDVyxPQUFPO0lBQUk7SUFFekNDLHFCQUFxQjtRQUFFLE9BQU8sSUFBSSxDQUFDVixXQUFXLENBQUNVLGtCQUFrQjtJQUFJO0lBRXJFQyxxQkFBcUJDLGFBQWEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDZCxLQUFLLENBQUNhLG9CQUFvQixDQUFDQztJQUFnQjtJQUU3RixNQUFNQyxLQUFLQyxNQUFNLEVBQUVyQixPQUFPLEVBQUU7UUFDMUIsTUFBTSxJQUFJLENBQUNzQixLQUFLLENBQUN0QjtRQUVqQixNQUFNdUIsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUN4QixRQUFReUIsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFRixnQkFBZ0IsY0FBYyxDQUFDO1FBRTdELElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ29CLGFBQWEsQ0FBQ0wsUUFBUXJCO1FBRXRDLE1BQU0yQixZQUFZL0IsaUNBQWlDeUIsUUFBUSxJQUFJLENBQUNmLFVBQVUsRUFBRU4sVUFDdEU0QixPQUFPLE1BQU0sSUFBSSxDQUFDckIsV0FBVyxDQUFDc0IsUUFBUSxDQUFDRixXQUFXM0IsVUFDbEQ4QixXQUFXRixLQUFLcEIsT0FBTztRQUU3QixJQUFJLElBQUksQ0FBQ0osSUFBSSxLQUFLMEIsVUFBVTtZQUMxQixNQUFNQyxhQUFhSCxLQUFLSixTQUFTLElBQzNCUSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUQsU0FBUyw0QkFBNEIsRUFBRVAsZ0JBQWdCLGVBQWUsRUFBRSxJQUFJLENBQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ25JNkIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFqQyxRQUFRb0MsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFYixnQkFBZ0IsWUFBWSxDQUFDO1FBRTdELE9BQU9LO0lBQ1Q7SUFFQSxNQUFNUyxjQUFjQyxhQUFhLEVBQUU7UUFDakMsTUFBTXRDLFVBQVUsSUFBSSxDQUFDdUMsVUFBVTtRQUUvQixNQUFNLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ3RCO1FBRWpCLE1BQU11QixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q3hCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUVGLGdCQUFnQix3QkFBd0IsQ0FBQztRQUV2RSxNQUFNRixTQUFTbUIsSUFBQUEsK0JBQXVCLEVBQUNGLGdCQUNqQ1YsT0FBTyxNQUFNLElBQUksQ0FBQ1IsSUFBSSxDQUFDQyxRQUFRckI7UUFFckNBLFFBQVFvQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUViLGdCQUFnQixzQkFBc0IsQ0FBQztRQUV2RSxPQUFPSztJQUNUO0lBRUEsT0FBT2EsT0FBTyxZQUFZO0FBQzVCO0FBRU8sU0FBUzdDLGlDQUFpQ3lCLE1BQU0sRUFBRWYsVUFBVSxFQUFFTixPQUFPO0lBQzFFLE1BQU0yQixZQUFZLEVBQUU7SUFFcEJOLE9BQU9xQixZQUFZLENBQUMsQ0FBQ0MsT0FBT0M7UUFDMUIsTUFBTUMsWUFBWXZDLFdBQVd3QyxZQUFZLENBQUNGO1FBRTFDLElBQUlDLGNBQWMsTUFBTTtZQUN0QixNQUFNLEVBQUVFLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QkMsV0FBV0YsU0FBU0cscUJBQXFCLENBQUNQLE9BQU9FLFdBQVc3QztZQUVsRTJCLFVBQVV3QixJQUFJLENBQUNGO1FBQ2pCO0lBQ0Y7SUFFQSxPQUFPdEI7QUFDVCJ9