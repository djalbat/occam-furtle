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
    constructor(context, string, node, array){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGFzeW5jRm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNGb3JFYWNoKHRoaXMuYXJyYXksIGFzeW5jICh2YXJpYWJsZUFzc2lnbm1lbnQpID0+IHtcbiAgICAgIGF3YWl0IHZhcmlhYmxlQXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlQXNzaWdubWVudHNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImdldEFycmF5IiwiZXZhbHVhdGUiLCJicmVhayIsInZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlQXNzaWdubWVudCIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTitDOzBCQUV4QjtBQUV2QixNQUFNLEVBQUVBLFlBQVksRUFBRSxHQUFHQyxxQ0FBcUI7TUFFOUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw0QkFBNEJDLHVCQUFPO0lBQzdELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtRQUN4QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBLE1BQU1FLFNBQVNMLE9BQU8sRUFBRTtRQUN0QixNQUFNLElBQUksQ0FBQ00sS0FBSyxDQUFDTjtRQUVqQixNQUFNTyw0QkFBNEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV2RFIsUUFBUVMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLDBCQUEwQix5QkFBeUIsQ0FBQztRQUVyRixNQUFNWixhQUFhLElBQUksQ0FBQ1EsS0FBSyxFQUFFLE9BQU9PO1lBQ3BDLE1BQU1BLG1CQUFtQkwsUUFBUSxDQUFDTDtRQUNwQztRQUVBQSxRQUFRVyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosMEJBQTBCLHVCQUF1QixDQUFDO0lBQ3ZGO0lBRUEsT0FBT0ssT0FBTyxzQkFBc0I7QUFDdEMifQ==