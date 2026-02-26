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
    constructor(context, string, node, type, name, term){
        super(context, string, node);
        this.type = type;
        this.name = name;
        this.term = term;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    getTerm() {
        return this.term;
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
        const variable = context.findVariableByVariableName(variableName), term = variable.getTerm(), termString = term.getString();
        context.debug(`...evaluated the '${variableString}' variable as the '${termString}' term.`);
        return term;
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
    static fromParameter(parameter, context) {
        const type = parameter.getType(), name = parameter.getName(), term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null;
        context = null;
        const variable = new Variable(context, string, node, type, name, term);
        return variable;
    }
    static fromNamedParameter(namedParameter, context) {
        const aliasedName = namedParameter.getAliasedName(), type = namedParameter.getType(), name = aliasedName, term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null;
        context = null;
        const variable = new Variable(context, string, node, type, name, term);
        return variable;
    }
    static fromTermAndParameter(term, parameter, context) {
        const type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null;
        context = null;
        const variable = new Variable(context, string, node, type, name, term);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbmFtZSwgdGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvVmFyaWFibGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBuZXN0ZWQgPSB0cnVlLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdGVybSA9IHZhcmlhYmxlLmdldFRlcm0oKSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGFzc2lnbih0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25pbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IHZhcmlhYmxlVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9IHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlfScgdHlwZSBkb2VzIG5vdCBjb21wYXJlIHRvIHRoZSB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlLidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVBhcmFtZXRlcihwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBuYW1lLCB0ZXJtKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbGlhc2VkTmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldEFsaWFzZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gYWxpYXNlZE5hbWUsIC8vL1xuICAgICAgICAgIHRlcm0gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kUGFyYW1ldGVyKHRlcm0sIHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJuYW1lIiwidGVybSIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VGVybSIsImNvbXBhcmVWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvVmFyaWFibGVOYW1lIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmVzdGVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVBhcmFtZXRlciIsInBhcmFtZXRlciIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFsaWFzZWROYW1lIiwiZ2V0QWxpYXNlZE5hbWUiLCJmcm9tVGVybUFuZFBhcmFtZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCO2tFQUVGOzBCQUVDO3dCQUNnQjs7Ozs7O01BRXZDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ25ELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksb0JBQW9CQyxZQUFZLEVBQUU7UUFDaEMsTUFBTUMseUJBQTBCLElBQUksQ0FBQ1AsSUFBSSxLQUFLTTtRQUU5QyxPQUFPQztJQUNUO0lBRUFDLFNBQVNaLE9BQU8sRUFBRTtRQUNoQixNQUFNYSxpQkFBaUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU1Q2QsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGVBQWUsYUFBYSxDQUFDO1FBRTlELE1BQU1HLFNBQVMsTUFDVE4sZUFBZSxJQUFJLENBQUNOLElBQUksRUFDeEJhLGtCQUFrQmpCLFFBQVFrQiwrQkFBK0IsQ0FBQ1IsY0FBY007UUFFOUUsSUFBSSxDQUFDQyxpQkFBaUI7WUFDcEIsTUFBTUUsVUFBVSxDQUFDLEtBQUssRUFBRU4sZUFB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