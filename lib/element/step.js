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
    constructor(context, string, node, breakPoint, arrayAssignment, objectAssigment, variableAssignments){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbm1lbnRzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMudmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHM7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVBc3NpZ25tZW50cztcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JqZWN0QXNzaWdtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZUFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhcmlhYmxlQXNzaWdubWVudHMuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50cyIsImdldEFycmF5QXNzaWdubWVudCIsImdldE9iamVjdEFzc2lnbWVudCIsImdldFZhcmlhYmxlQXNzaWdubWVudHMiLCJldmFsdWF0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLG1CQUFtQixDQUFFO1FBQ3BHLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLG1CQUFtQixHQUFHQTtJQUM3QjtJQUVBQyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNILGVBQWU7SUFDN0I7SUFFQUkscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDSCxlQUFlO0lBQzdCO0lBRUFJLHlCQUF5QjtRQUN2QixPQUFPLElBQUksQ0FBQ0gsbUJBQW1CO0lBQ2pDO0lBRUEsTUFBTUksU0FBU1YsT0FBTyxFQUFFO1FBQ3RCLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUksSUFBSSxDQUFDSSxlQUFlLEtBQUssTUFBTTtZQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ00sUUFBUSxDQUFDVjtRQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDSyxlQUFlLEtBQUssTUFBTTtZQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDVjtRQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDTSxtQkFBbUIsS0FBSyxNQUFNO1lBQzVDLE1BQU0sSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ0ksUUFBUSxDQUFDVjtRQUMxQztJQUNGO0lBRUEsT0FBT1csT0FBTyxPQUFPO0FBQ3ZCIn0=