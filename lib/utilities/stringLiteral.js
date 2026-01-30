"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "stringFromStringLiteral", {
    enumerable: true,
    get: function() {
        return stringFromStringLiteral;
    }
});
var _constants = require("../constants");
function stringFromStringLiteral(stringLiteral) {
    var string = stringLiteral.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCkge1xuICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsic3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsIiwic3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRmE7QUFFdEIsU0FBU0Esd0JBQXdCQyxhQUFhO0lBQ25ELElBQU1DLFNBQVNELGNBQWNFLE9BQU8sQ0FBQyxZQUFZQyx1QkFBWTtJQUU3RCxPQUFPRjtBQUNUIn0=