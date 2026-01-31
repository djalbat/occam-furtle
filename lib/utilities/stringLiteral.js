"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get stringFromStringLiteral () {
        return stringFromStringLiteral;
    },
    get stringLiteralFromString () {
        return stringLiteralFromString;
    }
});
var _constants = require("../constants");
function stringFromStringLiteral(stringLiteral) {
    var string = stringLiteral.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
    return string;
}
function stringLiteralFromString(string) {
    var stringLiteral = '"'.concat(string, '"');
    return stringLiteral;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCkge1xuICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IGBcIiR7c3RyaW5nfVwiYDtcblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsInN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nIiwic3RyaW5nTGl0ZXJhbCIsInN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUlnQkE7ZUFBQUE7O1FBTUFDO2VBQUFBOzs7eUJBUmE7QUFFdEIsU0FBU0Qsd0JBQXdCRSxhQUFhO0lBQ25ELElBQU1DLFNBQVNELGNBQWNFLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtJQUU3RCxPQUFPRjtBQUNUO0FBRU8sU0FBU0Ysd0JBQXdCRSxNQUFNO0lBQzVDLElBQU1ELGdCQUFnQixBQUFDLElBQVUsT0FBUEMsUUFBTztJQUVqQyxPQUFPRDtBQUNUIn0=