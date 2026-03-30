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
const _elements = require("../../elements");
const _default = (0, _elements.define)(class VariableAssignment extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, variable, expression){
        super(context, string, node, lineIndex);
        this.variable = variable;
        this.expression = expression;
    }
    getVariable() {
        return this.variable;
    }
    getExpression() {
        return this.expression;
    }
    async evaluate(context) {
        let term;
        const variableAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);
        term = await this.expression.evaluate(context);
        this.variable.assign(term, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${variableAssignmentString}' variable assignment as '${termString}'.`);
        return term;
    }
    static name = "VariableAssignment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgZXhwcmVzc2lvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudC4uLmApO1xuXG4gICAgdGVybSA9IGF3YWl0IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGUuYXNzaWduKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ2YXJpYWJsZSIsImV4cHJlc3Npb24iLCJnZXRWYXJpYWJsZSIsImdldEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsInRlcm0iLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFzc2lnbiIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsdUJBQU87SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBRTtRQUNsRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUEsTUFBTUcsU0FBU1IsT0FBTyxFQUFFO1FBQ3RCLElBQUlTO1FBRUosTUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFdERYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix5QkFBeUIsd0JBQXdCLENBQUM7UUFFbkZELE9BQU8sTUFBTSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0csUUFBUSxDQUFDUjtRQUV0QyxJQUFJLENBQUNJLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDSixNQUFNVDtRQUUzQixNQUFNYyxhQUFhTCxLQUFLRSxTQUFTO1FBRWpDWCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwseUJBQXlCLDBCQUEwQixFQUFFSSxXQUFXLEVBQUUsQ0FBQztRQUV0RyxPQUFPTDtJQUNUO0lBRUEsT0FBT08sT0FBTyxxQkFBcUI7QUFDckMifQ==