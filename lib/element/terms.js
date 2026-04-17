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
const _string = require("../utilities/string");
const _default = (0, _elements.define)(class Terms extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, array){
        super(context, string, node, breakPoint);
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getLength() {
        const length = this.array.length;
        return length;
    }
    getTerm(index) {
        const term = this.array[index] || null; ///
        return term;
    }
    addTerm(term) {
        this.array.push(term);
    }
    mapTerm(callback) {
        return this.array.map(callback);
    }
    forEachTerm(callback) {
        this.array.forEach(callback);
    }
    evaluate(context) {
        const termsArray = this.mapTerm((term)=>{
            term = term.evaluate(context);
            return term;
        }), termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null, breakPoint = null;
        context = null;
        const terms = new Terms(context, string, node, breakPoint, array);
        return terms;
    }
    static name = "Terms";
    static fromTerm(term, context) {
        const termsArray = [
            term
        ], termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null, breakPoint = null;
        context = null;
        const terms = new Terms(context, string, node, breakPoint, array);
        return terms;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRUZXJtKGluZGV4KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHRlcm0pO1xuICB9XG5cbiAgbWFwVGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFRlcm0oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc0FycmF5ID0gdGhpcy5tYXBUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICB0ZXJtID0gdGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtcyA9IG5ldyBUZXJtcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtc1wiO1xuXG4gIHN0YXRpYyBmcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXNBcnJheSA9IFtcbiAgICAgICAgICAgIHRlcm1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSh0ZXJtc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSB0ZXJtc1N0cmluZywgLy8vXG4gICAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1zIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRUZXJtIiwiaW5kZXgiLCJ0ZXJtIiwiYWRkVGVybSIsInB1c2giLCJtYXBUZXJtIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoVGVybSIsImZvckVhY2giLCJldmFsdWF0ZSIsInRlcm1zQXJyYXkiLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkiLCJ0ZXJtcyIsIm5hbWUiLCJmcm9tVGVybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3dCQUNtQjtNQUUxQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLFlBQVk7UUFDVixNQUFNQyxTQUFTLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxNQUFNO1FBRWhDLE9BQU9BO0lBQ1Q7SUFFQUMsUUFBUUMsS0FBSyxFQUFFO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssTUFBTSxJQUFJLE1BQU8sR0FBRztRQUU1QyxPQUFPQztJQUNUO0lBRUFDLFFBQVFELElBQUksRUFBRTtRQUNaLElBQUksQ0FBQ04sS0FBSyxDQUFDUSxJQUFJLENBQUNGO0lBQ2xCO0lBRUFHLFFBQVFDLFFBQVEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNXLEdBQUcsQ0FBQ0Q7SUFBVztJQUVyREUsWUFBWUYsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDVixLQUFLLENBQUNhLE9BQU8sQ0FBQ0g7SUFBVztJQUV0REksU0FBU2xCLE9BQU8sRUFBRTtRQUNoQixNQUFNbUIsYUFBYSxJQUFJLENBQUNOLE9BQU8sQ0FBQyxDQUFDSDtZQUN6QkEsT0FBT0EsS0FBS1EsUUFBUSxDQUFDbEI7WUFFckIsT0FBT1U7UUFDVCxJQUNBVSxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0YsWUFBWW5CLFVBQ3BEQyxTQUFTbUIsYUFDVGhCLFFBQVFlLFlBQ1JqQixPQUFPLE1BQ1BDLGFBQWE7UUFFbkJILFVBQVU7UUFFVixNQUFNc0IsUUFBUSxJQUFJeEIsTUFBTUUsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFM0QsT0FBT2tCO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFFBQVE7SUFFdEIsT0FBT0MsU0FBU2QsSUFBSSxFQUFFVixPQUFPLEVBQUU7UUFDN0IsTUFBTW1CLGFBQWE7WUFDWFQ7U0FDRCxFQUNEVSxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0YsWUFBWW5CLFVBQ3BEQyxTQUFTbUIsYUFDVGhCLFFBQVFlLFlBQ1JqQixPQUFPLE1BQ1BDLGFBQWE7UUFFbkJILFVBQVU7UUFFVixNQUFNc0IsUUFBUSxJQUFJeEIsTUFBTUUsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFM0QsT0FBT2tCO0lBQ1Q7QUFDRiJ9