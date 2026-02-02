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
var _elements = require("../../elements");
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
var _ReturnStatement;
var _default = (0, _elements.define)((_ReturnStatement = /*#__PURE__*/ function() {
    function ReturnStatement(string, term) {
        _class_call_check(this, ReturnStatement);
        this.string = string;
        this.term = term;
    }
    _create_class(ReturnStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.term;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var returnStatementString = this.string; ///
                context.trace("Evaluating the '".concat(returnStatementString, "' return statement..."));
                term = this.term.evaluate(context);
                context.debug("...evaluated the '".concat(returnStatementString, "' return statement."));
                return term;
            }
        }
    ]);
    return ReturnStatement;
}(), _define_property(_ReturnStatement, "name", "ReturnStatement"), _ReturnStatement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVyblN0YXRlbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmV0dXJuU3RhdGVtZW50Iiwic3RyaW5nIiwidGVybSIsImdldFN0cmluZyIsImdldEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLG9DQUFDO2FBQU1DLGdCQUNkQyxNQUFNLEVBQUVDLElBQUk7Z0NBREVGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJSjtnQkFFSixJQUFNSyx3QkFBd0IsSUFBSSxDQUFDTixNQUFNLEVBQUcsR0FBRztnQkFFL0NLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUF3QyxPQUF0QkQsdUJBQXNCO2dCQUV2REwsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0csUUFBUSxDQUFDQztnQkFFMUJBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUEwQyxPQUF0QkYsdUJBQXNCO2dCQUV6RCxPQUFPTDtZQUNUOzs7O0tBRUEsbUNBQU9RLFFBQU8ifQ==