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
    constructor(conterxt, string, node){
        super(context, string, node);
    }
    verify(context1) {
        const verifies = false, errorString = this.getString(); ///
        context1.warning(`The '${errorString}' error cannot be verified.`);
        return verifies;
    }
    static name = "Error";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlcnh0LCBzdHJpbmcsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgZXJyb3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtlcnJvclN0cmluZ30nIGVycm9yIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXJyb3IiLCJFbGVtZW50IiwiY29udGVyeHQiLCJzdHJpbmciLCJub2RlIiwiY29udGV4dCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJnZXRTdHJpbmciLCJ3YXJuaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksQ0FBRTtRQUNsQyxLQUFLLENBQUNDLFNBQVNGLFFBQVFDO0lBQ3pCO0lBRUFFLE9BQU9ELFFBQU8sRUFBRTtRQUNkLE1BQU1FLFdBQVcsT0FDWEMsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFDSixTQUFRSyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUVGLFlBQVksMkJBQTJCLENBQUM7UUFFaEUsT0FBT0Q7SUFDVDtJQUVBLE9BQU9JLE9BQU8sUUFBUTtBQUN4QiJ9