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
const _types = require("../types");
const _values = require("../utilities/values");
const _parameters = require("../utilities/parameters");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
        const variables = (0, _parameters.variablesFromValuesAndParameters)(values, this.parameters, context), value = await this.returnBlock.evaluate(variables, context), valueType = value.getType();
        if (this.type !== valueType) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type is not equal to the '${procedureString}' procedure's '${this.type}' type.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...called the '${procedureString}' procedure.`);
        return value;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZXNGcm9tTm9taW5hbFZhbHVlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsdWVzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyYW1ldGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubGFiZWwuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0UmV0dXJuU3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5yZXR1cm5CbG9jay5nZXRSZXR1cm5TdGF0ZW1lbnQoKTsgfVxuXG4gIGNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7IH1cblxuICBhc3luYyBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5jb21wYXJlVmFsdWVzKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyh2YWx1ZXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGFzeW5jIGNhbGxOb21pbmFsbHkobm9taW5hbFZhbHVlcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgbm9taW5hbGx5Li4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZXNGcm9tTm9taW5hbFZhbHVlcyhub21pbmFsVmFsdWVzKSxcbiAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSBub21pbmFsbHkuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwiZ2V0TmFtZSIsImdldFJldHVyblN0YXRlbWVudCIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsImNhbGwiLCJ2YWx1ZXMiLCJicmVhayIsInByb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29tcGFyZVZhbHVlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwidmFsdWUiLCJldmFsdWF0ZSIsInZhbHVlVHlwZSIsInZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJjYWxsTm9taW5hbGx5Iiwibm9taW5hbFZhbHVlcyIsImdldENvbnRleHQiLCJ2YWx1ZXNGcm9tTm9taW5hbFZhbHVlcyIsInRlcm0iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7a0VBRUY7MEJBRUM7dUJBQ007d0JBQ1c7NEJBQ1M7Ozs7OztNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDbkYsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUks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