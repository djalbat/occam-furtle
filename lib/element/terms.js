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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _string = require("../utilities/string");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
        const valuesArray = this.mapTerm((term)=>{
            const value = term.evaluate(context);
            return value;
        }), valuesString = (0, _string.valuesStringFromValuesArray)(valuesArray, context), string = valuesString, array = valuesArray, node = null, breakPoint = null;
        context = null;
        const { Values } = _elements.default, values = new Values(context, string, node, breakPoint, array);
        return values;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSwgdmFsdWVzU3RyaW5nRnJvbVZhbHVlc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1zIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VGVybShpbmRleCkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIHRoaXMuYXJyYXkucHVzaCh0ZXJtKTtcbiAgfVxuXG4gIG1hcFRlcm0oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hUZXJtKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzQXJyYXkgPSB0aGlzLm1hcFRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlc1N0cmluZyA9IHZhbHVlc1N0cmluZ0Zyb21WYWx1ZXNBcnJheSh2YWx1ZXNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdmFsdWVzU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHZhbHVlc0FycmF5LCAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgeyBWYWx1ZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1zXCI7XG5cbiAgc3RhdGljIGZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc0FycmF5ID0gW1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtcyA9IG5ldyBUZXJtcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFRlcm0iLCJpbmRleCIsInRlcm0iLCJhZGRUZXJtIiwicHVzaCIsIm1hcFRlcm0iLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hUZXJtIiwiZm9yRWFjaCIsImV2YWx1YXRlIiwidmFsdWVzQXJyYXkiLCJ2YWx1ZSIsInZhbHVlc1N0cmluZyIsInZhbHVlc1N0cmluZ0Zyb21WYWx1ZXNBcnJheSIsIlZhbHVlcyIsImVsZW1lbnRzIiwidmFsdWVzIiwibmFtZSIsImZyb21UZXJtIiwidGVybXNBcnJheSIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSIsInRlcm1zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUg7d0JBR2tEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFdkUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssQ0FBRTtRQUNwRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTTtRQUVoQyxPQUFPQTtJQUNUO0lBRUFDLFFBQVFDLEtBQUssRUFBRTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU0sSUFBSSxNQUFPLEdBQUc7UUFFNUMsT0FBT0M7SUFDVDtJQUVBQyxRQUFRRCxJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNOLEtBQUssQ0FBQ1EsSUFBSSxDQUFDRjtJQUNsQjtJQUVBRyxRQUFRQyxRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxHQUFHLENBQUNEO0lBQVc7SUFFckRFLFlBQVlGLFFBQVEsRUFBRTtRQUFFLElBQUksQ0FBQ1YsS0FBSyxDQUFDYSxPQUFPLENBQUNIO0lBQVc7SUFFdERJLFNBQVNsQixPQUFPLEVBQUU7UUFDaEIsTUFBTW1CLGNBQWMsSUFBSSxDQUFDTixPQUFPLENBQUMsQ0FBQ0g7WUFDMUIsTUFBTVUsUUFBUVYsS0FBS1EsUUFBUSxDQUFDbEI7WUFFNUIsT0FBT29CO1FBQ1QsSUFDQUMsZUFBZUMsSUFBQUEsbUNBQTJCLEVBQUNILGFBQWFuQixVQUN4REMsU0FBU29CLGNBQ1RqQixRQUFRZSxhQUNSakIsT0FBTyxNQUNQQyxhQUFhO1FBRW5CSCxVQUFVO1FBRVYsTUFBTSxFQUFFdUIsTUFBTSxFQUFFLEdBQUdDLGlCQUFRLEVBQ3JCQyxTQUFTLElBQUlGLE9BQU92QixTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQztRQUU3RCxPQUFPcUI7SUFDVDtJQUVBLE9BQU9DLE9BQU8sUUFBUTtJQUV0QixPQUFPQyxTQUFTakIsSUFBSSxFQUFFVixPQUFPLEVBQUU7UUFDN0IsTUFBTTRCLGFBQWE7WUFDWGxCO1NBQ0QsRUFDRG1CLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDRixZQUFZNUIsVUFDcERDLFNBQVM0QixhQUNUekIsUUFBUXdCLFlBQ1IxQixPQUFPLE1BQ1BDLGFBQWE7UUFFbkJILFVBQVU7UUFFVixNQUFNK0IsUUFBUSxJQUFJakMsTUFBTUUsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFM0QsT0FBTzJCO0lBQ1Q7QUFDRiJ9