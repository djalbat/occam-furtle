"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockContext;
    }
});
const _occamlanguages = require("occam-languages");
const _necessary = require("necessary");
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { push } = _necessary.arrayUtilities;
class BlockContext extends _occamlanguages.Context {
    constructor(context, variables){
        super(context);
        this.variables = variables;
    }
    getVariables(nested = true) {
        const variables = [];
        push(variables, this.variables);
        if (nested) {
            const context = this.getContext(), contextVariables = context.getVariables();
            push(variables, contextVariables);
        }
        return variables;
    }
    addVariable(variable) {
        const nested = false, variableName = variable.getName(), variableString = variable.getString(), variablePresent = this.isVariablePresentByVariableName(variableName, nested);
        if (variablePresent) {
            const message = `The '${variableString}' variable is already present.'`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const context = this; ///
        context.trace(`Added the '${variableString}' variable to the context.`);
        this.variables.push(variable);
    }
    findProcedureByProcedureName(procedureName) {
        const context = this.getContext(), procedure = context.findProcedureByProcedureName(procedureName);
        return procedure;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const context = this.getContext(), procedurePresent = context.isProcedurePresentByProcedureName(procedureName);
        return procedurePresent;
    }
    findVariableByVariableName(variableName, nested = true) {
        const variables = this.getVariables(nested), variable = variables.find((variable)=>{
            const variableComparesToVariableName = variable.compareVariableName(variableName);
            if (variableComparesToVariableName) {
                return true;
            }
        }) || null;
        return variable;
    }
    isVariablePresentByVariableName(variableName, nested = true) {
        const variable = this.findVariableByVariableName(variableName, nested), variablePresent = variable !== null;
        return variablePresent;
    }
    static fromVariables(variables, context) {
        const blockContext = _occamlanguages.Context.fromNothing(BlockContext, variables, context);
        return blockContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgY29udGV4dFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQ29udGV4dC5mcm9tTm90aGluZyhCbG9ja0NvbnRleHQsIHZhcmlhYmxlcywgY29udGV4dClcblxuICAgIHJldHVybiBibG9ja0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0NvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJjb250ZXh0VmFyaWFibGVzIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0cmFjZSIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZCIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlTmFtZSIsImNvbXBhcmVWYXJpYWJsZU5hbWUiLCJmcm9tVmFyaWFibGVzIiwiYmxvY2tDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7Z0NBUEc7MkJBQ087a0VBRVQ7Ozs7OztBQUV0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyx5QkFBYztBQUVoQixNQUFNRixxQkFBcUJHLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsU0FBUyxDQUFFO1FBQzlCLEtBQUssQ0FBQ0Q7UUFFTixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsYUFBYUMsU0FBUyxJQUFJLEVBQUU7UUFDMUIsTUFBTUYsWUFBWSxFQUFFO1FBRXBCSixLQUFLSSxXQUFXLElBQUksQ0FBQ0EsU0FBUztRQUU5QixJQUFJRSxRQUFRO1lBQ1YsTUFBTUgsVUFBVSxJQUFJLENBQUNJLFVBQVUsSUFDekJDLG1CQUFtQkwsUUFBUUUsWUFBWTtZQUU3Q0wsS0FBS0ksV0FBV0k7UUFDbEI7UUFFQSxPQUFPSjtJQUNUO0lBRUFLLFlBQVlDLFFBQVEsRUFBRTtRQUNwQixNQUFNSixTQUFTLE9BQ1RLLGVBQWVELFNBQVNFLE9BQU8sSUFDL0JDLGlCQUFpQkgsU0FBU0ksU0FBUyxJQUNuQ0Msa0JBQWtCLElBQUksQ0FBQ0MsK0JBQStCLENBQUNMLGNBQWNMO1FBRTNFLElBQUlTLGlCQUFpQjtZQUNuQixNQUFNRSxVQUFVLENBQUMsS0FBSyxFQUFFSixlQUFlLCtCQUErQixDQUFDLEVBQ2pFSyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNZixVQUFVLElBQUksRUFBRSxHQUFHO1FBRXpCQSxRQUFRa0IsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFUixlQUFlLDBCQUEwQixDQUFDO1FBRXRFLElBQUksQ0FBQ1QsU0FBUyxDQUFDSixJQUFJLENBQUNVO0lBQ3RCO0lBRUFZLDZCQUE2QkMsYUFBYSxFQUFFO1FBQzFDLE1BQU1wQixVQUFVLElBQUksQ0FBQ0ksVUFBVSxJQUN6QmlCLFlBQVlyQixRQUFRbUIsNEJBQTRCLENBQUNDO1FBRXZELE9BQU9DO0lBQ1Q7SUFFQUMsa0NBQWtDRixhQUFhLEVBQUU7UUFDL0MsTUFBTXBCLFVBQVUsSUFBSSxDQUFDSSxVQUFVLElBQ3pCbUIsbUJBQW1CdkIsUUFBUXNCLGlDQUFpQyxDQUFDRjtRQUVuRSxPQUFPRztJQUNUO0lBRUFDLDJCQUEyQmhCLFlBQVksRUFBRUwsU0FBUyxJQUFJLEVBQUU7UUFDdEQsTUFBTUYsWUFBWSxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsU0FDOUJJLFdBQVdOLFVBQVV3QixJQUFJLENBQUMsQ0FBQ2xCO1lBQ3pCLE1BQU1tQixpQ0FBaUNuQixTQUFTb0IsbUJBQW1CLENBQUNuQjtZQUVwRSxJQUFJa0IsZ0NBQWdDO2dCQUNsQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT25CO0lBQ1Q7SUFFQU0sZ0NBQWdDTCxZQUFZLEVBQUVMLFNBQVMsSUFBSSxFQUFFO1FBQzNELE1BQU1JLFdBQVcsSUFBSSxDQUFDaUIsMEJBQTBCLENBQUNoQixjQUFjTCxTQUN6RFMsa0JBQW1CTCxhQUFhO1FBRXRDLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPZ0IsY0FBYzNCLFNBQVMsRUFBRUQsT0FBTyxFQUFFO1FBQ3ZDLE1BQU02QixlQUFlOUIsdUJBQU8sQ0FBQytCLFdBQVcsQ0FBQ2xDLGNBQWNLLFdBQVdEO1FBRWxFLE9BQU82QjtJQUNUO0FBQ0YifQ==