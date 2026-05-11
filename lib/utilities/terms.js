"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "termsFromNominalValues", {
    enumerable: true,
    get: function() {
        return termsFromNominalValues;
    }
});
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _term = require("../utilities/term");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termsFromNominalValues(nominalValues) {
    const { Terms } = _elements.default, termsArray = termsArrayFromNominalValues(nominalValues), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null, breakPoint = null, context = null, terms = new Terms(context, string, node, breakPoint, array);
    return terms;
}
function termsArrayFromNominalValues(nominalValues) {
    const termsArray = nominalValues.map((nominalValue)=>{
        const term = (0, _term.termFromNominalValue)(nominalValue);
        return term;
    });
    return termsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21Ob21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tTm9taW5hbFZhbHVlcyhub21pbmFsVmFsdWVzKSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21Ob21pbmFsVmFsdWVzKG5vbWluYWxWYWx1ZXMpLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICAgIHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZnVuY3Rpb24gdGVybXNBcnJheUZyb21Ob21pbmFsVmFsdWVzKG5vbWluYWxWYWx1ZXMpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IG5vbWluYWxWYWx1ZXMubWFwKChub21pbmFsVmFsdWUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21Ob21pbmFsVmFsdWUobm9taW5hbFZhbHVlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtc0Zyb21Ob21pbmFsVmFsdWVzIiwibm9taW5hbFZhbHVlcyIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtc0FycmF5IiwidGVybXNBcnJheUZyb21Ob21pbmFsVmFsdWVzIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5Iiwic3RyaW5nIiwiYXJyYXkiLCJub2RlIiwiYnJlYWtQb2ludCIsImNvbnRleHQiLCJ0ZXJtcyIsIm1hcCIsIm5vbWluYWxWYWx1ZSIsInRlcm0iLCJ0ZXJtRnJvbU5vbWluYWxWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT2dCQTs7O2VBQUFBOzs7aUVBTEs7c0JBRWdCO3dCQUNLOzs7Ozs7QUFFbkMsU0FBU0EsdUJBQXVCQyxhQUFhO0lBQ2xELE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxhQUFhQyw0QkFBNEJKLGdCQUN6Q0ssY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNILGFBQ3hDSSxTQUFTRixhQUNURyxRQUFRTCxZQUNSTSxPQUFPLE1BQ1BDLGFBQWEsTUFDYkMsVUFBVSxNQUNWQyxRQUFRLElBQUlYLE1BQU1VLFNBQVNKLFFBQVFFLE1BQU1DLFlBQVlGO0lBRTNELE9BQU9JO0FBQ1Q7QUFFQSxTQUFTUiw0QkFBNEJKLGFBQWE7SUFDaEQsTUFBTUcsYUFBYUgsY0FBY2EsR0FBRyxDQUFDLENBQUNDO1FBQ3BDLE1BQU1DLE9BQU9DLElBQUFBLDBCQUFvQixFQUFDRjtRQUVsQyxPQUFPQztJQUNUO0lBRUEsT0FBT1o7QUFDVCJ9