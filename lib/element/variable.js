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
    constructor(context, string, node, breakPoint, type, name, term){
        super(context, string, node, breakPoint);
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
        const type = parameter.getType(), name = parameter.getName(), term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, term);
        return variable;
    }
    static fromNamedParameter(namedParameter, context) {
        const aliasedName = namedParameter.getAliasedName(), type = namedParameter.getType(), name = aliasedName, term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, term);
        return variable;
    }
    static fromTermAndParameter(term, parameter, context) {
        const type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null, breakPoint = null;
        context = null;
        const variable = new Variable(context, string, node, breakPoint, type, name, term);
        return variable;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1ZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbmVzdGVkID0gdHJ1ZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHRlcm0gPSB2YXJpYWJsZS5nZXRUZXJtKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgYXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhc3NpZ24odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgY29tcGFyZSB0byB0aGUgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdGVybSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYnJlYWtQb2ludCA9IG51bGxcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCB0ZXJtKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbGlhc2VkTmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldEFsaWFzZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gYWxpYXNlZE5hbWUsIC8vL1xuICAgICAgICAgIHRlcm0gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kUGFyYW1ldGVyKHRlcm0sIHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0eXBlIiwibmFtZSIsInRlcm0iLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm0iLCJjb21wYXJlVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb1ZhcmlhYmxlTmFtZSIsImV2YWx1YXRlIiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5lc3RlZCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidGVybVN0cmluZyIsImRlYnVnIiwiYXNzaWduIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJhZGRWYXJpYWJsZSIsImZyb21QYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJhbGlhc2VkTmFtZSIsImdldEFsaWFzZWROYW1lIiwiZnJvbVRlcm1BbmRQYXJhbWV0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjtrRUFFRjswQkFFQzt3QkFDZ0I7Ozs7OztNQUV2QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQy9ELEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksb0JBQW9CQyxZQUFZLEVBQUU7UUFDaEMsTUFBTUMseUJBQTBCLElBQUksQ0FBQ1AsSUFBSSxLQUFLTTtRQUU5QyxPQUFPQztJQUNUO0lBRUFDLFNBQVNiLE9BQU8sRUFBRTtRQUNoQixNQUFNYyxpQkFBaUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU1Q2YsUUFBUWdCLEtBQUssQ0FB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