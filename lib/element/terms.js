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
    constructor(context, string, node, lineIndex, array){
        super(context, string, node, lineIndex);
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
        }), termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null, lineIndex = null;
        context = null;
        const terms = new Terms(context, string, node, lineIndex, array);
        return terms;
    }
    static name = "Terms";
    static fromTerm(term, context) {
        const termsArray = [
            term
        ], termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null, lineIndex = null;
        context = null;
        const terms = new Terms(context, string, node, lineIndex, array);
        return terms;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRUZXJtKGluZGV4KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHRlcm0pO1xuICB9XG5cbiAgbWFwVGVybShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFRlcm0oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc0FycmF5ID0gdGhpcy5tYXBUZXJtKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICB0ZXJtID0gdGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBhcnJheSk7XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybXNcIjtcblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zQXJyYXkgPSBbXG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VGVybSIsImluZGV4IiwidGVybSIsImFkZFRlcm0iLCJwdXNoIiwibWFwVGVybSIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaFRlcm0iLCJmb3JFYWNoIiwiZXZhbHVhdGUiLCJ0ZXJtc0FycmF5IiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5IiwidGVybXMiLCJuYW1lIiwiZnJvbVRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDt3QkFDbUI7TUFFMUMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTTtRQUVoQyxPQUFPQTtJQUNUO0lBRUFDLFFBQVFDLEtBQUssRUFBRTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU0sSUFBSSxNQUFPLEdBQUc7UUFFNUMsT0FBT0M7SUFDVDtJQUVBQyxRQUFRRCxJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNOLEtBQUssQ0FBQ1EsSUFBSSxDQUFDRjtJQUNsQjtJQUVBRyxRQUFRQyxRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxHQUFHLENBQUNEO0lBQVc7SUFFckRFLFlBQVlGLFFBQVEsRUFBRTtRQUFFLElBQUksQ0FBQ1YsS0FBSyxDQUFDYSxPQUFPLENBQUNIO0lBQVc7SUFFdERJLFNBQVNsQixPQUFPLEVBQUU7UUFDaEIsTUFBTW1CLGFBQWEsSUFBSSxDQUFDTixPQUFPLENBQUMsQ0FBQ0g7WUFDekJBLE9BQU9BLEtBQUtRLFFBQVEsQ0FBQ2xCO1lBRXJCLE9BQU9VO1FBQ1QsSUFDQVUsY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNGLFlBQVluQixVQUNwREMsU0FBU21CLGFBQ1RoQixRQUFRZSxZQUNSakIsT0FBTyxNQUNQQyxZQUFZO1FBRWxCSCxVQUFVO1FBRVYsTUFBTXNCLFFBQVEsSUFBSXhCLE1BQU1FLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1FBRTFELE9BQU9rQjtJQUNUO0lBRUEsT0FBT0MsT0FBTyxRQUFRO0lBRXRCLE9BQU9DLFNBQVNkLElBQUksRUFBRVYsT0FBTyxFQUFFO1FBQzdCLE1BQU1tQixhQUFhO1lBQ1hUO1NBQ0QsRUFDRFUsY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNGLFlBQVluQixVQUNwREMsU0FBU21CLGFBQ1RoQixRQUFRZSxZQUNSakIsT0FBTyxNQUNQQyxZQUFZO1FBRWxCSCxVQUFVO1FBRVYsTUFBTXNCLFFBQVEsSUFBSXhCLE1BQU1FLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1FBRTFELE9BQU9rQjtJQUNUO0FBQ0YifQ==