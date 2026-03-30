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
    constructor(context, string, node, lineIndex, type, name, term){
        super(context, string, node, lineIndex);
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
        const type = parameter.getType(), name = parameter.getName(), term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, lineIndex = null;
        context = null;
        const variable = new Variable(context, string, node, lineIndex, type, name, term);
        return variable;
    }
    static fromNamedParameter(namedParameter, context) {
        const aliasedName = namedParameter.getAliasedName(), type = namedParameter.getType(), name = aliasedName, term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, lineIndex = null;
        context = null;
        const variable = new Variable(context, string, node, lineIndex, type, name, term);
        return variable;
    }
    static fromTermAndParameter(term, parameter, context) {
        const type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, lineIndex = null;
        context = null;
        const variable = new Variable(context, string, node, lineIndex, type, name, term);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBuYW1lLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1ZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbmVzdGVkID0gdHJ1ZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHRlcm0gPSB2YXJpYWJsZS5nZXRUZXJtKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgYXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhc3NpZ24odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgY29tcGFyZSB0byB0aGUgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdGVybSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbFxuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgbmFtZSwgdGVybSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYWxpYXNlZE5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXRBbGlhc2VkTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IGFsaWFzZWROYW1lLCAvLy9cbiAgICAgICAgICB0ZXJtID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgbmFtZSwgdGVybSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRQYXJhbWV0ZXIodGVybSwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInR5cGUiLCJuYW1lIiwidGVybSIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VGVybSIsImNvbXBhcmVWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvVmFyaWFibGVOYW1lIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmVzdGVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVBhcmFtZXRlciIsInBhcmFtZXRlciIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFsaWFzZWROYW1lIiwiZ2V0QWxpYXNlZE5hbWUiLCJmcm9tVGVybUFuZFBhcmFtZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCO2tFQUVGOzBCQUVDO3dCQUNnQjs7Ozs7O01BRXZDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDOUQsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxvQkFBb0JDLFlBQVksRUFBRTtRQUNoQyxNQUFNQyx5QkFBMEIsSUFBSSxDQUFDUCxJQUFJLEtBQUtNO1FBRTlDLE9BQU9DO0lBQ1Q7SUFFQUMsU0FBU2IsT0FBTyxFQUFFO1FBQ2hCLE1BQU1jLGlCQUFpQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTVDZixRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZ0JB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