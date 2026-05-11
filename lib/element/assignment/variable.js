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
    constructor(context, string, node, breakPoint, variable, expression){
        super(context, string, node, breakPoint);
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
        let value;
        const variableAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);
        value = await this.expression.evaluate(context);
        this.variable.assign(value, context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${variableAssignmentString}' variable assignment as '${valueString}'.`);
        return value;
    }
    static name = "VariableAssignment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIHZhbHVlID0gYXdhaXQgdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZS5hc3NpZ24odmFsdWUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudCBhcyAnJHt2YWx1ZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlQXNzaWdubWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGVBc3NpZ25tZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwiZXhwcmVzc2lvbiIsImdldFZhcmlhYmxlIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwidmFsdWUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFzc2lnbiIsInZhbHVlU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLHVCQUFPO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUU7UUFDbkUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBLE1BQU1HLFNBQVNSLE9BQU8sRUFBRTtRQUN0QixJQUFJUztRQUVKLE1BQU1DLDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXREWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYseUJBQXlCLHdCQUF3QixDQUFDO1FBRW5GRCxRQUFRLE1BQU0sSUFBSSxDQUFDSixVQUFVLENBQUNHLFFBQVEsQ0FBQ1I7UUFFdkMsSUFBSSxDQUFDSSxRQUFRLENBQUNTLE1BQU0sQ0FBQ0osT0FBT1Q7UUFFNUIsTUFBTWMsY0FBY0wsTUFBTUUsU0FBUztRQUVuQ1gsUUFBUWUsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLHlCQUF5QiwwQkFBMEIsRUFBRUksWUFBWSxFQUFFLENBQUM7UUFFdkcsT0FBT0w7SUFDVDtJQUVBLE9BQU9PLE9BQU8scUJBQXFCO0FBQ3JDIn0=