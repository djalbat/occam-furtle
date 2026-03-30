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
    constructor(context, string, node, lineIndex, arrayAssignment, objectAssigment, variableAssignments){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlQXNzaWdubWVudHMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleClcblxuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMudmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHM7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVBc3NpZ25tZW50cztcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JqZWN0QXNzaWdtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZUFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhcmlhYmxlQXNzaWdubWVudHMuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwiZ2V0QXJyYXlBc3NpZ25tZW50IiwiZ2V0T2JqZWN0QXNzaWdtZW50IiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50cyIsImV2YWx1YXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsbUJBQW1CLENBQUU7UUFDbkcsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO0lBQzdCO0lBRUFDLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0gsZUFBZTtJQUM3QjtJQUVBSSxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNILGVBQWU7SUFDN0I7SUFFQUkseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDSCxtQkFBbUI7SUFDakM7SUFFQSxNQUFNSSxTQUFTVixPQUFPLEVBQUU7UUFDdEIsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNJLGVBQWUsS0FBSyxNQUFNO1lBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDTSxRQUFRLENBQUNWO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNLLGVBQWUsS0FBSyxNQUFNO1lBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDSyxRQUFRLENBQUNWO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNNLG1CQUFtQixLQUFLLE1BQU07WUFDNUMsTUFBTSxJQUFJLENBQUNBLG1CQUFtQixDQUFDSSxRQUFRLENBQUNWO1FBQzFDO0lBQ0Y7SUFFQSxPQUFPVyxPQUFPLE9BQU87QUFDdkIifQ==