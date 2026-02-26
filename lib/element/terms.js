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
    constructor(context, string, node, array){
        super(context, string, node);
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
        }), termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null;
        context = null;
        const terms = new Terms(context, string, node, array);
        return terms;
    }
    static name = "Terms";
    static fromTerm(term, context) {
        const termsArray = [
            term
        ], termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null;
        context = null;
        const terms = new Terms(context, string, node, array);
        return terms;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLmFycmF5LnB1c2godGVybSk7XG4gIH1cblxuICBtYXBUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVGVybShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zQXJyYXkgPSB0aGlzLm1hcFRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1zXCI7XG5cbiAgc3RhdGljIGZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc0FycmF5ID0gW1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtcyA9IG5ldyBUZXJtcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VGVybSIsImluZGV4IiwidGVybSIsImFkZFRlcm0iLCJwdXNoIiwibWFwVGVybSIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaFRlcm0iLCJmb3JFYWNoIiwiZXZhbHVhdGUiLCJ0ZXJtc0FycmF5IiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5IiwidGVybXMiLCJuYW1lIiwiZnJvbVRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDt3QkFDbUI7TUFFMUMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUU7UUFDeEMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUNWLE1BQU1DLFNBQVMsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE1BQU07UUFFaEMsT0FBT0E7SUFDVDtJQUVBQyxRQUFRQyxLQUFLLEVBQUU7UUFDYixNQUFNQyxPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDSyxNQUFNLElBQUksTUFBTyxHQUFHO1FBRTVDLE9BQU9DO0lBQ1Q7SUFFQUMsUUFBUUQsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDTixLQUFLLENBQUNRLElBQUksQ0FBQ0Y7SUFDbEI7SUFFQUcsUUFBUUMsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csR0FBRyxDQUFDRDtJQUFXO0lBRXJERSxZQUFZRixRQUFRLEVBQUU7UUFBRSxJQUFJLENBQUNWLEtBQUssQ0FBQ2EsT0FBTyxDQUFDSDtJQUFXO0lBRXRESSxTQUFTakIsT0FBTyxFQUFFO1FBQ2hCLE1BQU1rQixhQUFhLElBQUksQ0FBQ04sT0FBTyxDQUFDLENBQUNIO1lBQ3pCQSxPQUFPQSxLQUFLUSxRQUFRLENBQUNqQjtZQUVyQixPQUFPUztRQUNULElBQ0FVLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDRixZQUFZbEIsVUFDcERDLFNBQVNrQixhQUNUaEIsUUFBUWUsWUFDUmhCLE9BQU87UUFFYkYsVUFBVTtRQUVWLE1BQU1xQixRQUFRLElBQUl2QixNQUFNRSxTQUFTQyxRQUFRQyxNQUFNQztRQUUvQyxPQUFPa0I7SUFDVDtJQUVBLE9BQU9DLE9BQU8sUUFBUTtJQUV0QixPQUFPQyxTQUFTZCxJQUFJLEVBQUVULE9BQU8sRUFBRTtRQUM3QixNQUFNa0IsYUFBYTtZQUNYVDtTQUNELEVBQ0RVLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDRixZQUFZbEIsVUFDcERDLFNBQVNrQixhQUNUaEIsUUFBUWUsWUFDUmhCLE9BQU87UUFFYkYsVUFBVTtRQUVWLE1BQU1xQixRQUFRLElBQUl2QixNQUFNRSxTQUFTQyxRQUFRQyxNQUFNQztRQUUvQyxPQUFPa0I7SUFDVDtBQUNGIn0=