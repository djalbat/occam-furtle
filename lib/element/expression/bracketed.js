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
var _BracketedExpression;
var _default = (0, _elements.define)((_BracketedExpression = /*#__PURE__*/ function() {
    function BracketedExpression(string, expression) {
        _class_call_check(this, BracketedExpression);
        this.string = string;
        this.expression = expression;
    }
    _create_class(BracketedExpression, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.expression.getType();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var bracketedExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(bracketedExpressionString, "' bracketed expression..."));
                term = this.expression.evaluate(context);
                var termString = term.getString();
                context.debug("...evaluated the '".concat(bracketedExpressionString, "' bracketed expression as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return BracketedExpression;
}(), _define_property(_BracketedExpression, "name", "BracketedExpression"), _BracketedExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLmV4cHJlc3Npb24uZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmd9JyBicmFja2V0ZWQgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHticmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nfScgYnJhY2tldGVkIGV4cHJlc3Npb24gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsInN0cmluZyIsImV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRFeHByZXNzaW9uIiwiZ2V0VHlwZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7Ozt3QkFGdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sd0NBQUM7YUFBTUMsb0JBQ2RDLE1BQU0sRUFBRUMsVUFBVTtnQ0FESkY7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csT0FBTztZQUFJOzs7WUFFOUNDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLDRCQUE0QixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUVsRE0sUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQTRDLE9BQTFCRCwyQkFBMEI7Z0JBRTNERCxPQUFPLElBQUksQ0FBQ04sVUFBVSxDQUFDSSxRQUFRLENBQUNDO2dCQUVoQyxJQUFNSSxhQUFhSCxLQUFLTCxTQUFTO2dCQUVqQ0ksUUFBUUssS0FBSyxDQUFDLEFBQUMscUJBQTJFRCxPQUF2REYsMkJBQTBCLCtCQUF3QyxPQUFYRSxZQUFXO2dCQUVyRyxPQUFPSDtZQUNUOzs7O0tBRUEsdUNBQU9LLFFBQU8ifQ==