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
const _default = (0, _elements.define)(class BracketedTerm extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, term){
        super(context, string, node, breakPoint);
        this.term = term;
    }
    getTerm() {
        return this.term;
    }
    getType() {
        return this.term.getType();
    }
    evaluate(context) {
        let value;
        const bracketedTermString = this.getString(); ///
        context.trace(`Evaluating the '${bracketedTermString}' bracketed term...`);
        value = this.term.evaluate(context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${bracketedTermString}' bracketed term as '${valueString}'.`);
        return value;
    }
    static name = "BracketedTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBicmFja2V0ZWRUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHticmFja2V0ZWRUZXJtU3RyaW5nfScgYnJhY2tldGVkIHRlcm0uLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkVGVybVN0cmluZ30nIGJyYWNrZXRlZCB0ZXJtIGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQnJhY2tldGVkVGVybSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImdldFR5cGUiLCJldmFsdWF0ZSIsInZhbHVlIiwiYnJhY2tldGVkVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsdWVTdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHNCQUFzQkMsdUJBQU87SUFDdkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsVUFBVTtRQUFFLE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUNFLE9BQU87SUFBSTtJQUV4Q0MsU0FBU1AsT0FBTyxFQUFFO1FBQ2hCLElBQUlRO1FBRUosTUFBTUMsc0JBQXNCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFakRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixvQkFBb0IsbUJBQW1CLENBQUM7UUFFekVELFFBQVEsSUFBSSxDQUFDSixJQUFJLENBQUNHLFFBQVEsQ0FBQ1A7UUFFM0IsTUFBTVksY0FBY0osTUFBTUUsU0FBUztRQUVuQ1YsUUFBUWEsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLG9CQUFvQixxQkFBcUIsRUFBRUcsWUFBWSxFQUFFLENBQUM7UUFFN0YsT0FBT0o7SUFDVDtJQUVBLE9BQU9NLE9BQU8sZ0JBQWdCO0FBQ2hDIn0=