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
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Variable extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, type, name, value){
        super(context, string, node, breakPoint);
        this.type = type;
        this.name = name;
        this.value = value;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }
    compareVariableName(variableName) {
        const comparesToVariableName = this.name === variableName;
        return comparesToVariableName;
    }
    evaluate(context) {
        const variableString = this.getString(); ///
        context.trace(`Evaluating the '${variableString}' variable...`);
        const nested = true, variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
        if (!variablePresent) {
            const message = `The '${variableString}' variable is not present.'`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const variable = context.findVariableByVariableName(variableName), value = variable.getValue(), valueString = value.getString();
        context.debug(`...evaluated the '${variableString}' variable as the '${valueString}' value.`);
        return value;
    }
    assign(term, context) {
        const nested = false, termString = term.getString(), variableName = this.name, variableString = this.getString(), variablePresent = context.isVariablePresentByVariableName(variableName, nested);
        context.trace(`Assigning the '${termString}' term to the '${variableString}' variable...`);
        if (variablePresent) {
            const message = `The '${variableString}' variable is already present.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const termType = term.getType(), variableType = this.type;
        if (termType !== variableType) {
            const message = `The '${variableString} variable's '${variableType}' type does not compare to the term's '${termType}' type.'`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.term = term;
        const variable = this; ///
        context.addVariable(variable);
        context.debug(`...assigned the '${termString}' term to the '${variableString}' variable.`);
    }
    static name = "Variable";
    static fromBinding(binding, context) {
        const type = binding.getType(), name = binding.getName(), term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, term);
        return variable;
    }
    static fromNamedBinding(namedBinding, context) {
        const aliasedName = namedBinding.getAliasedName(), type = namedBinding.getType(), name = aliasedName, term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, term);
        return variable;
    }
    static fromValueAndParameter(value, parameter, context) {
        const type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, value);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvVmFyaWFibGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBuZXN0ZWQgPSB0cnVlLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgYXMgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBhc3NpZ24odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgY29tcGFyZSB0byB0aGUgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21CaW5kaW5nKGJpbmRpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gYmluZGluZy5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IGJpbmRpbmcuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm0gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdGVybSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbGlhc2VkTmFtZSA9IG5hbWVkQmluZGluZy5nZXRBbGlhc2VkTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBuYW1lZEJpbmRpbmcuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBhbGlhc2VkTmFtZSwgLy8vXG4gICAgICAgICAgdGVybSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdGVybSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFZhbHVlIiwiY29tcGFyZVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9WYXJpYWJsZU5hbWUiLCJldmFsdWF0ZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJuZXN0ZWQiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhbHVlU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJ0ZXJtIiwidGVybVN0cmluZyIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwiYWRkVmFyaWFibGUiLCJmcm9tQmluZGluZyIsImJpbmRpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZnJvbU5hbWVkQmluZGluZyIsIm5hbWVkQmluZGluZyIsImFsaWFzZWROYW1lIiwiZ2V0QWxpYXNlZE5hbWUiLCJmcm9tVmFsdWVBbmRQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjtrRUFFRjswQkFFQzt3QkFDZ0I7Ozs7OztNQUV2QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxDQUFFO1FBQ2hFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksb0JBQW9CQyxZQUFZLEVBQUU7UUFDaEMsTUFBTUMseUJBQTBCLElBQUksQ0FBQ1AsSUFBSSxLQUFLTTtRQUU5QyxPQUFPQztJQUNUO0lBRUFDLFNBQVNiLE9BQU8sRUFBRTtRQUNoQixNQUFNYyxpQkFBaUIsSUFBSSxDQUFDQyxTQUFTLElBQUks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