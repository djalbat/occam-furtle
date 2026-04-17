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
const _default = (0, _elements.define)(class Error extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint){
        super(context, string, node, breakPoint);
    }
    verify(context) {
        const verifies = false, errorString = this.getString(); ///
        context.warning(`The '${errorString}' error cannot be verified.`);
        return verifies;
    }
    static name = "Error";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgZXJyb3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtlcnJvclN0cmluZ30nIGVycm9yIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXJyb3IiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJlcnJvclN0cmluZyIsImdldFN0cmluZyIsIndhcm5pbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDN0MsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQyxNQUFNQztJQUMvQjtJQUVBQyxPQUFPSixPQUFPLEVBQUU7UUFDZCxNQUFNSyxXQUFXLE9BQ1hDLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxQ1AsUUFBUVEsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFRixZQUFZLDJCQUEyQixDQUFDO1FBRWhFLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPSSxPQUFPLFFBQVE7QUFDeEIifQ==