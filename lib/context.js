"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Context;
    }
});
var _constants = require("./constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var Context = /*#__PURE__*/ function() {
    function Context(context) {
        _class_call_check(this, Context);
        this.context = context;
    }
    _create_class(Context, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.context.getReleaseContext();
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var level = TRACE_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var level = DEBUG_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var level = INFO_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var level = WARNING_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var level = ERROR_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message) {
                var depth = this.getDepth(), indent = _constants.DOUBLE_SPACE.repeat(depth);
                message = "".concat(indent).concat(message); ///
                var releaseContext = this.getReleaseContext(), filePath = null;
                releaseContext.writeToLog(level, message, filePath);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var context = remainingArguments.pop();
                context = _construct(Class, [
                    context
                ].concat(_to_consumable_array(remainingArguments))); ///
                return context;
            }
        }
    ]);
    return Context;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBMRVZFTFMsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBbIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgV0FSTklOR19MRVZFTCwgRVJST1JfTEVWRUwgXSA9IExFVkVMUztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGVudCA9IERPVUJMRV9TUEFDRS5yZXBlYXQoZGVwdGgpO1xuXG4gICAgbWVzc2FnZSA9IGAke2luZGVudH0ke21lc3NhZ2V9YDsgIC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBudWxsO1xuXG4gICAgcmVsZWFzZUNvbnRleHQud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn0iXSwibmFtZXMiOlsiQ29udGV4dCIsIkxFVkVMUyIsIlRSQUNFX0xFVkVMIiwiREVCVUdfTEVWRUwiLCJJTkZPX0xFVkVMIiwiV0FSTklOR19MRVZFTCIsIkVSUk9SX0xFVkVMIiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIndyaXRlVG9Mb2ciLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJyZXBlYXQiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUE2RUMsMkJBQUFBLGlCQUFNLE1BQTNFQyxjQUFxRUQsWUFBeERFLGNBQXdERixZQUEzQ0csYUFBMkNILFlBQS9CSSxnQkFBK0JKLFlBQWhCSyxjQUFnQkw7QUFFOUQsSUFBQSxBQUFNRCx3QkFBTjthQUFNQSxRQUNQTyxPQUFPO2dDQURBUDtRQUVqQixJQUFJLENBQUNPLE9BQU8sR0FBR0E7O2tCQUZFUDs7WUFLbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxRQUFRLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxRQUFRO2dCQUVqQ0M7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBc0IsT0FBTyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksaUJBQWlCO1lBQUk7OztZQUUvREMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUMsUUFBUVo7Z0JBRWQsSUFBSSxDQUFDYSxVQUFVLENBQUNELE9BQU9EO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1ILE9BQU87Z0JBQ1gsSUFBTUMsUUFBUVg7Z0JBRWQsSUFBSSxDQUFDWSxVQUFVLENBQUNELE9BQU9EO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtKLE9BQU87Z0JBQ1YsSUFBTUMsUUFBUVY7Z0JBRWQsSUFBSSxDQUFDVyxVQUFVLENBQUNELE9BQU9EO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFMLE9BQU87Z0JBQ2IsSUFBTUMsUUFBUVQ7Z0JBRWQsSUFBSSxDQUFDVSxVQUFVLENBQUNELE9BQU9EO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1OLE9BQU87Z0JBQ1gsSUFBTUMsUUFBUVI7Z0JBRWQsSUFBSSxDQUFDUyxVQUFVLENBQUNELE9BQU9EO1lBQ3pCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdELEtBQUssRUFBRUQsT0FBTztnQkFDdkIsSUFBTUgsUUFBUSxJQUFJLENBQUNELFFBQVEsSUFDckJXLFNBQVNDLHVCQUFZLENBQUNDLE1BQU0sQ0FBQ1o7Z0JBRW5DRyxVQUFVLEFBQUMsR0FBV0EsT0FBVE8sUUFBaUIsT0FBUlAsVUFBWSxHQUFHO2dCQUVyQyxJQUFNVSxpQkFBaUIsSUFBSSxDQUFDWixpQkFBaUIsSUFDdkNhLFdBQVc7Z0JBRWpCRCxlQUFlUixVQUFVLENBQUNELE9BQU9ELFNBQVNXO1lBQzVDOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDN0MsSUFBSXBCLFVBQVVvQixtQkFBbUJDLEdBQUc7Z0JBRXBDckIsVUFBVSxXQUFJbUIsT0FBSjtvQkFBVW5CO2lCQUErQixDQUF6QyxPQUFtQixxQkFBR29CLHVCQUFzQixHQUFHO2dCQUV6RCxPQUFPcEI7WUFDVDs7O1dBbkVtQlAifQ==