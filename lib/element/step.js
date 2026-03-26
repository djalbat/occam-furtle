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
const _elements = require("../elements");
const _default = (0, _elements.define)(class Step extends _occamlanguages.Element {
    constructor(context, string, node, arrayAssignment, objectAssigment, variableAssignments){
        super(context, string, node);
        this.arrayAssignment = arrayAssignment;
        this.objectAssigment = objectAssigment;
        this.variableAssignments = variableAssignments;
    }
    getArrayAssignment() {
        return this.arrayAssignment;
    }
    getObjectAssigment() {
        return this.objectAssigment;
    }
    getVariableAssignments() {
        return this.variableAssignments;
    }
    async evaluate(context) {
        if (false) {
        ///
        } else if (this.arrayAssignment !== null) {
            this.arrayAssignment.evaluate(context);
        } else if (this.objectAssigment !== null) {
            this.objectAssigment.evaluate(context);
        } else if (this.variableAssignments !== null) {
            await this.variableAssignments.evaluate(context);
        }
    }
    static name = "Step";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbm1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5hcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnQ7XG4gICAgdGhpcy5vYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ21lbnQ7XG4gICAgdGhpcy52YXJpYWJsZUFzc2lnbm1lbnRzID0gdmFyaWFibGVBc3NpZ25tZW50cztcbiAgfVxuXG4gIGdldEFycmF5QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RBc3NpZ21lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0QXNzaWdtZW50O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVBc3NpZ25tZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZUFzc2lnbm1lbnRzO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLmFycmF5QXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnJheUFzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9iamVjdEFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vYmplY3RBc3NpZ21lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlQXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgIGF3YWl0IHRoaXMudmFyaWFibGVBc3NpZ25tZW50cy5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RlcCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJnZXRBcnJheUFzc2lnbm1lbnQiLCJnZXRPYmplY3RBc3NpZ21lbnQiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzIiwiZXZhbHVhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsbUJBQW1CLENBQUU7UUFDeEYsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO0lBQzdCO0lBRUFDLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0gsZUFBZTtJQUM3QjtJQUVBSSxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNILGVBQWU7SUFDN0I7SUFFQUkseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDSCxtQkFBbUI7SUFDakM7SUFFQSxNQUFNSSxTQUFTVCxPQUFPLEVBQUU7UUFDdEIsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNHLGVBQWUsS0FBSyxNQUFNO1lBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDTSxRQUFRLENBQUNUO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNJLGVBQWUsS0FBSyxNQUFNO1lBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDSyxRQUFRLENBQUNUO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNLLG1CQUFtQixLQUFLLE1BQU07WUFDNUMsTUFBTSxJQUFJLENBQUNBLG1CQUFtQixDQUFDSSxRQUFRLENBQUNUO1FBQzFDO0lBQ0Y7SUFFQSxPQUFPVSxPQUFPLE9BQU87QUFDdkIifQ==