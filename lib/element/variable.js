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
    assign(value, context) {
        const nested = false, valueString = value.getString(), variableName = this.name, variableString = this.getString(), variablePresent = context.isVariablePresentByVariableName(variableName, nested);
        context.trace(`Assigning the '${valueString}' value to the '${variableString}' variable...`);
        if (variablePresent) {
            const message = `The '${variableString}' variable is already present.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const valueType = value.getType(), variableType = this.type;
        if (valueType !== variableType) {
            const message = `The '${variableString} variable's '${variableType}' type does not compare to the value's '${valueType}' type.'`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.value = value;
        const variable = this; ///
        context.addVariable(variable);
        context.debug(`...assigned the '${valueString}' value to the '${variableString}' variable.`);
    }
    static name = "Variable";
    static fromBinding(binding, context) {
        const type = binding.getType(), name = binding.getName(), value = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, value);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvVmFyaWFibGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBuZXN0ZWQgPSB0cnVlLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgYXMgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBhc3NpZ24odmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHRoaXMudHlwZTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IHZhcmlhYmxlVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9IHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlfScgdHlwZSBkb2VzIG5vdCBjb21wYXJlIHRvIHRoZSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUJpbmRpbmcoYmluZGluZywgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBiaW5kaW5nLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gYmluZGluZy5nZXROYW1lKCksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsXG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYWxpYXNlZE5hbWUgPSBuYW1lZEJpbmRpbmcuZ2V0QWxpYXNlZE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRCaW5kaW5nLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gYWxpYXNlZE5hbWUsIC8vL1xuICAgICAgICAgIHRlcm0gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZUFuZFBhcmFtZXRlcih2YWx1ZSwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRWYWx1ZSIsImNvbXBhcmVWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvVmFyaWFibGVOYW1lIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmVzdGVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YWx1ZVN0cmluZyIsImRlYnVnIiwiYXNzaWduIiwidmFsdWVUeXBlIiwidmFyaWFibGVUeXBlIiwiYWRkVmFyaWFibGUiLCJmcm9tQmluZGluZyIsImJpbmRpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZnJvbU5hbWVkQmluZGluZyIsIm5hbWVkQmluZGluZyIsImFsaWFzZWROYW1lIiwiZ2V0QWxpYXNlZE5hbWUiLCJ0ZXJtIiwiZnJvbVZhbHVlQW5kUGFyYW1ldGVyIiwicGFyYW1ldGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUY7MEJBRUM7d0JBQ2dCOzs7Ozs7TUFFdkMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtRQUNoRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLG9CQUFvQkMsWUFBWSxFQUFFO1FBQ2hDLE1BQU1DLHlCQUEwQixJQUFJLENBQUNQLElBQUksS0FBS007UUFFOUMsT0FBT0M7SUFDVDtJQUVBQyxTQUFTYixPQUFPLEVBQUU7UUFDaEIsTUFBTWMsaUJBQWlCLElBQUksQ0FBQ0MsU0FBUyxJ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