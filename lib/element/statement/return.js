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
    function ReturnStatement(string, primitive) {
        _class_call_check(this, ReturnStatement);
        this.string = string;
        this.primitive = primitive;
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
                return this.primitive;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var primitive;
                var returnStatementString = this.string; ///
                context.trace("Evaluating the '".concat(returnStatementString, "' return statement..."));
                primitive = this.primitive; ///
                context.debug("...evaluated the '".concat(returnStatementString, "' return statement."));
                return primitive;
            }
        }
    ]);
    return ReturnStatement;
}(), _define_property(_ReturnStatement, "name", "ReturnStatement"), _ReturnStatement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwcmltaXRpdmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcHJpbWl0aXZlO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHByaW1pdGl2ZSA9IHRoaXMucHJpbWl0aXZlOyAvLy9cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC5gKTtcblxuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJzdHJpbmciLCJwcmltaXRpdmUiLCJnZXRTdHJpbmciLCJnZXRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwicmV0dXJuU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxvQ0FBQzthQUFNQyxnQkFDZEMsTUFBTSxFQUFFQyxTQUFTO2dDQURIRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlKO2dCQUVKLElBQU1LLHdCQUF3QixJQUFJLENBQUNOLE1BQU0sRUFBRyxHQUFHO2dCQUUvQ0ssUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXdDLE9BQXRCRCx1QkFBc0I7Z0JBRXZETCxZQUFZLElBQUksQ0FBQ0EsU0FBUyxFQUFFLEdBQUc7Z0JBRS9CSSxRQUFRRyxLQUFLLENBQUMsQUFBQyxxQkFBMEMsT0FBdEJGLHVCQUFzQjtnQkFFekQsT0FBT0w7WUFDVDs7OztLQUVBLG1DQUFPUSxRQUFPIn0=