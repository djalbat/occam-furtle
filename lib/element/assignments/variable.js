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
const { asyncForEach } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class VariableAssignments extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, array){
        super(context, string, node, breakPoint);
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    async evaluate(context) {
        await this.break(context);
        const variableAssignmentsString = this.getString(); ///
        context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);
        await asyncForEach(this.array, async (variableAssignment)=>{
            await variableAssignment.evaluate(context);
        });
        context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);
    }
    static name = "VariableAssignments";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGFzeW5jRm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudHMuLi5gKTtcblxuICAgIGF3YWl0IGFzeW5jRm9yRWFjaCh0aGlzLmFycmF5LCBhc3luYyAodmFyaWFibGVBc3NpZ25tZW50KSA9PiB7XG4gICAgICBhd2FpdCB2YXJpYWJsZUFzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZUFzc2lnbm1lbnRzXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0ZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImFycmF5IiwiZ2V0QXJyYXkiLCJldmFsdWF0ZSIsImJyZWFrIiwidmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOK0M7MEJBRXhCO0FBRXZCLE1BQU0sRUFBRUEsWUFBWSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU5QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDRCQUE0QkMsdUJBQU87SUFDN0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLENBQUU7UUFDcEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQSxNQUFNRSxTQUFTTixPQUFPLEVBQUU7UUFDdEIsTUFBTSxJQUFJLENBQUNPLEtBQUssQ0FBQ1A7UUFFakIsTUFBTVEsNEJBQTRCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFdkRULFFBQVFVLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRiwwQkFBMEIseUJBQXlCLENBQUM7UUFFckYsTUFBTWIsYUFBYSxJQUFJLENBQUNTLEtBQUssRUFBRSxPQUFPTztZQUNwQyxNQUFNQSxtQkFBbUJMLFFBQVEsQ0FBQ047UUFDcEM7UUFFQUEsUUFBUVksS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLDBCQUEwQix1QkFBdUIsQ0FBQztJQUN2RjtJQUVBLE9BQU9LLE9BQU8sc0JBQXNCO0FBQ3RDIn0=