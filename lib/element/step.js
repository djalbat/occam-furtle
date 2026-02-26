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
    constructor(context, string, node, arrayAssignment, objectAssigment, variablessAssignment){
        super(context, string, node);
        this.arrayAssignment = arrayAssignment;
        this.objectAssigment = objectAssigment;
        this.variablessAssignment = variablessAssignment;
    }
    getArrayAssignment() {
        return this.arrayAssignment;
    }
    getObjectAssigment() {
        return this.objectAssigment;
    }
    getVariablessAssignment() {
        return this.variablessAssignment;
    }
    async evaluate(context) {
        if (false) {
        ///
        } else if (this.arrayAssignment !== null) {
            this.arrayAssignment.evaluate(context);
        } else if (this.objectAssigment !== null) {
            this.objectAssigment.evaluate(context);
        } else if (this.variablessAssignment !== null) {
            await this.variablessAssignment.evaluate(context);
        }
    }
    static name = "Step";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNzQXNzaWdubWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQgPSB2YXJpYWJsZXNzQXNzaWdubWVudDtcbiAgfVxuXG4gIGdldEFycmF5QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RBc3NpZ21lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0QXNzaWdtZW50O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzc0Fzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQ7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXJyYXlBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFycmF5QXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub2JqZWN0QXNzaWdtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9iamVjdEFzc2lnbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGF3YWl0IHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNzQXNzaWdubWVudCIsImdldEFycmF5QXNzaWdubWVudCIsImdldE9iamVjdEFzc2lnbWVudCIsImdldFZhcmlhYmxlc3NBc3NpZ25tZW50IiwiZXZhbHVhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CLENBQUU7UUFDekYsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBO0lBQzlCO0lBRUFDLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0gsZUFBZTtJQUM3QjtJQUVBSSxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNILGVBQWU7SUFDN0I7SUFFQUksMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDSCxvQkFBb0I7SUFDbEM7SUFFQSxNQUFNSSxTQUFTVCxPQUFPLEVBQUU7UUFDdEIsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNHLGVBQWUsS0FBSyxNQUFNO1lBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDTSxRQUFRLENBQUNUO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNJLGVBQWUsS0FBSyxNQUFNO1lBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDSyxRQUFRLENBQUNUO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNLLG9CQUFvQixLQUFLLE1BQU07WUFDN0MsTUFBTSxJQUFJLENBQUNBLG9CQUFvQixDQUFDSSxRQUFRLENBQUNUO1FBQzNDO0lBQ0Y7SUFFQSxPQUFPVSxPQUFPLE9BQU87QUFDdkIifQ==