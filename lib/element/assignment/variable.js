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
    constructor(context, string, node, variable, expression){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIGV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICB0ZXJtID0gYXdhaXQgdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZS5hc3NpZ24odGVybSwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudCBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZUFzc2lnbm1lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlQXNzaWdubWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInZhcmlhYmxlIiwiZXhwcmVzc2lvbiIsImdldFZhcmlhYmxlIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwidGVybSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXNzaWduIiwidGVybVN0cmluZyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyx1QkFBTztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUEsTUFBTUcsU0FBU1AsT0FBTyxFQUFFO1FBQ3RCLElBQUlRO1FBRUosTUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFdERWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix5QkFBeUIsd0JBQXdCLENBQUM7UUFFbkZELE9BQU8sTUFBTSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0csUUFBUSxDQUFDUDtRQUV0QyxJQUFJLENBQUNHLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDSixNQUFNUjtRQUUzQixNQUFNYSxhQUFhTCxLQUFLRSxTQUFTO1FBRWpDVixRQUFRYyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwseUJBQXlCLDBCQUEwQixFQUFFSSxXQUFXLEVBQUUsQ0FBQztRQUV0RyxPQUFPTDtJQUNUO0lBRUEsT0FBT08sT0FBTyxxQkFBcUI7QUFDckMifQ==