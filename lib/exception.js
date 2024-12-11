"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Exception;
    }
});
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
var Exception = /*#__PURE__*/ function() {
    function Exception(message) {
        _class_call_check(this, Exception);
        this.message = message;
    }
    _create_class(Exception, [
        {
            key: "getMessage",
            value: function getMessage() {
                return this.message;
            }
        }
    ], [
        {
            key: "fromMessage",
            value: function fromMessage(message) {
                var exception = new Exception(message);
                return exception;
            }
        }
    ]);
    return Exception;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGNlcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBleGNlcHRpb24gPSBuZXcgRXhjZXB0aW9uKG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiZnJvbU1lc3NhZ2UiLCJleGNlcHRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsT0FBTztnQ0FEQUQ7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFGRUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE9BQU87WUFDckI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUYsT0FBTztnQkFDeEIsSUFBTUcsWUFBWSxJQVZESixVQVVlQztnQkFFaEMsT0FBT0c7WUFDVDs7O1dBYm1CSiJ9