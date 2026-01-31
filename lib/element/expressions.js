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
var _elements = require("../elements");
var _string = require("../utilities/string");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _Expressions;
var _default = (0, _elements.define)((_Expressions = /*#__PURE__*/ function() {
    function Expressions(string, array) {
        _class_call_check(this, Expressions);
        this.string = string;
        this.array = array;
    }
    _create_class(Expressions, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getExpression",
            value: function getExpression(index) {
                var expression = this.array[index] || null; ///
                return expression;
            }
        },
        {
            key: "addExpression",
            value: function addExpression(expression) {
                this.array.push(expression);
            }
        },
        {
            key: "mapExpression",
            value: function mapExpression(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachExpression",
            value: function forEachExpression(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expressionsArray = this.mapExpression(function(expression) {
                    expression = expression.evaluate(context);
                    return expression;
                }), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray, context), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
                return expressions;
            }
        }
    ]);
    return Expressions;
}(), _define_property(_Expressions, "name", "Expressions"), _Expressions));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbnMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oaW5kZXgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBhZGRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZXhwcmVzc2lvbik7XG4gIH1cblxuICBtYXBFeHByZXNzaW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXhwcmVzc2lvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25zQXJyYXkgPSB0aGlzLm1hcEV4cHJlc3Npb24oKGV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkoZXhwcmVzc2lvbnNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmcsIC8vL1xuICAgICAgICAgIGFycmF5ID0gZXhwcmVzc2lvbnNBcnJheSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXhwcmVzc2lvbnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkV4cHJlc3Npb25zIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEV4cHJlc3Npb24iLCJpbmRleCIsImV4cHJlc3Npb24iLCJhZGRFeHByZXNzaW9uIiwicHVzaCIsIm1hcEV4cHJlc3Npb24iLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hFeHByZXNzaW9uIiwiZm9yRWFjaCIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb25zQXJyYXkiLCJleHByZXNzaW9uc1N0cmluZyIsImV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkiLCJleHByZXNzaW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBQTs7O3dCQUh1QjtzQkFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEQsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7YUFBTUMsWUFDZEMsTUFBTSxFQUFFQyxLQUFLO2dDQURDRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSixLQUFLLENBQUNJLE1BQU07Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsS0FBSztnQkFDakIsSUFBTUMsYUFBYSxJQUFJLENBQUNQLEtBQUssQ0FBQ00sTUFBTSxJQUFJLE1BQU8sR0FBRztnQkFFbEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRCxVQUFVO2dCQUN0QixJQUFJLENBQUNQLEtBQUssQ0FBQ1MsSUFBSSxDQUFDRjtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLEdBQUcsQ0FBQ0Q7WUFBVzs7O1lBRTNERSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCRixRQUFRO2dCQUFJLElBQUksQ0FBQ1gsS0FBSyxDQUFDYyxPQUFPLENBQUNIO1lBQVc7OztZQUU1REksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1AsYUFBYSxDQUFDLFNBQUNIO29CQUNyQ0EsYUFBYUEsV0FBV1EsUUFBUSxDQUFDQztvQkFFakMsT0FBT1Q7Z0JBQ1QsSUFDQVcsb0JBQW9CQyxJQUFBQSw2Q0FBcUMsRUFBQ0Ysa0JBQWtCRCxVQUM1RWpCLFNBQVNtQixtQkFDVGxCLFFBQVFpQixrQkFDUkcsY0FBYyxJQUFJdEIsWUFBWUMsUUFBUUM7Z0JBRTVDLE9BQU9vQjtZQUNUOzs7O0tBRUEsK0JBQU9DLFFBQU8ifQ==