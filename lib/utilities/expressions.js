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
    get expressionsFromExpression () {
        return expressionsFromExpression;
    },
    get expressionsFromNodes () {
        return expressionsFromNodes;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _expression = require("../utilities/expression");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function expressionsFromNodes(nodes, context) {
    var Expressions = _elements.default.Expressions, expressionsArray = expressionsArrayFromNodes(nodes, context), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function expressionsFromExpression(expression, context) {
    var Expressions = _elements.default.Expressions, expressionsArray = [
        expression
    ], expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
var _default = {
    expressionsFromNodes: expressionsFromNodes,
    expressionsFromExpression: expressionsFromExpression
};
function expressionsArrayFromNodes(nodes, context) {
    var expressionsArray = nodes.map(function(node) {
        var expression = (0, _expression.expressionFromNode)(node, context);
        return expression;
    });
    return expressionsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZXhwcmVzc2lvbkZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9leHByZXNzaW9uXCI7XG5pbXBvcnQgeyBleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbnNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShleHByZXNzaW9uc0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25zQXJyYXksIC8vL1xuICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBbXG4gICAgICAgICAgZXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkoZXhwcmVzc2lvbnNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBleHByZXNzaW9uc0FycmF5LCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV4cHJlc3Npb25zRnJvbU5vZGVzLFxuICBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uXG59O1xuXG5mdW5jdGlvbiBleHByZXNzaW9uc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zQXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnNBcnJheTtcbn1cblxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb24iLCJleHByZXNzaW9uc0Zyb21Ob2RlcyIsIm5vZGVzIiwiY29udGV4dCIsIkV4cHJlc3Npb25zIiwiZWxlbWVudHMiLCJleHByZXNzaW9uc0FycmF5IiwiZXhwcmVzc2lvbnNBcnJheUZyb21Ob2RlcyIsImV4cHJlc3Npb25zU3RyaW5nIiwiZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheSIsInN0cmluZyIsImFycmF5IiwiZXhwcmVzc2lvbnMiLCJleHByZXNzaW9uIiwibWFwIiwibm9kZSIsImV4cHJlc3Npb25Gcm9tTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0JBO2VBQUE7O1FBYmdCQTtlQUFBQTs7UUFYQUM7ZUFBQUE7OzsrREFMSzswQkFFYztzQkFDbUI7Ozs7OztBQUUvQyxTQUFTQSxxQkFBcUJDLEtBQUssRUFBRUMsT0FBTztJQUNqRCxJQUFNLEFBQUVDLGNBQWdCQyxpQkFBUSxDQUF4QkQsYUFDRkUsbUJBQW1CQywwQkFBMEJMLE9BQU9DLFVBQ3BESyxvQkFBb0JDLElBQUFBLDZDQUFxQyxFQUFDSCxtQkFDMURJLFNBQVNGLG1CQUNURyxRQUFRTCxrQkFDUk0sY0FBYyxJQUFJUixZQUFZTSxRQUFRQztJQUU1QyxPQUFPQztBQUNUO0FBRU8sU0FBU1osMEJBQTBCYSxVQUFVLEVBQUVWLE9BQU87SUFDM0QsSUFBTSxBQUFFQyxjQUFnQkMsaUJBQVEsQ0FBeEJELGFBQ0ZFLG1CQUFtQjtRQUNqQk87S0FDRCxFQUNETCxvQkFBb0JDLElBQUFBLDZDQUFxQyxFQUFDSCxtQkFDMURJLFNBQVNGLG1CQUNURyxRQUFRTCxrQkFDUk0sY0FBYyxJQUFJUixZQUFZTSxRQUFRQztJQUU1QyxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiWCxzQkFBQUE7SUFDQUQsMkJBQUFBO0FBQ0Y7QUFFQSxTQUFTTywwQkFBMEJMLEtBQUssRUFBRUMsT0FBTztJQUMvQyxJQUFNRyxtQkFBbUJKLE1BQU1ZLEdBQUcsQ0FBQyxTQUFDQztRQUNsQyxJQUFNRixhQUFhRyxJQUFBQSw4QkFBa0IsRUFBQ0QsTUFBTVo7UUFFNUMsT0FBT1U7SUFDVDtJQUVBLE9BQU9QO0FBQ1QifQ==