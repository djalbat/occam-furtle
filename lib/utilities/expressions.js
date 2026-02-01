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
    get default () {
        return _default;
    },
    get expressionsFromNodes () {
        return expressionsFromNodes;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _element = require("../utilities/element");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function expressionsFromNodes(nodes, context) {
    var Expressions = _elements.default.Expressions, expressionsArray = (0, _element.expressionsArrayFromNodes)(nodes, context), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
var _default = {
    expressionsFromNodes: expressionsFromNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZXhwcmVzc2lvbnNBcnJheUZyb21Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbnNBcnJheSA9IGV4cHJlc3Npb25zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkoZXhwcmVzc2lvbnNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBleHByZXNzaW9uc0FycmF5LCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV4cHJlc3Npb25zRnJvbU5vZGVzXG59O1xuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25zRnJvbU5vZGVzIiwibm9kZXMiLCJjb250ZXh0IiwiRXhwcmVzc2lvbnMiLCJlbGVtZW50cyIsImV4cHJlc3Npb25zQXJyYXkiLCJleHByZXNzaW9uc0FycmF5RnJvbU5vZGVzIiwiZXhwcmVzc2lvbnNTdHJpbmciLCJleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5Iiwic3RyaW5nIiwiYXJyYXkiLCJleHByZXNzaW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBa0JBO2VBQUE7O1FBWGdCQTtlQUFBQTs7OytEQUxLO3VCQUVxQjtzQkFDWTs7Ozs7O0FBRS9DLFNBQVNBLHFCQUFxQkMsS0FBSyxFQUFFQyxPQUFPO0lBQ2pELElBQU0sQUFBRUMsY0FBZ0JDLGlCQUFRLENBQXhCRCxhQUNGRSxtQkFBbUJDLElBQUFBLGtDQUF5QixFQUFDTCxPQUFPQyxVQUNwREssb0JBQW9CQyxJQUFBQSw2Q0FBcUMsRUFBQ0gsbUJBQzFESSxTQUFTRixtQkFDVEcsUUFBUUwsa0JBQ1JNLGNBQWMsSUFBSVIsWUFBWU0sUUFBUUM7SUFFNUMsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYlgsc0JBQUFBO0FBQ0YifQ==