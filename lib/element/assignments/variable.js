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
var _element = /*#__PURE__*/ _interop_require_default(require("../../element"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _VariableAssignments;
var _default = (0, _elements.define)((_VariableAssignments = /*#__PURE__*/ function(Element) {
    _inherits(VariableAssignments, Element);
    function VariableAssignments(context, string, node, array) {
        _class_call_check(this, VariableAssignments);
        var _this;
        _this = _call_super(this, VariableAssignments, [
            context,
            string,
            node
        ]);
        _this.array = array;
        return _this;
    }
    _create_class(VariableAssignments, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableAssignmentsString = this.getString(); ///
                context.trace("Evaluating the '".concat(variableAssignmentsString, "' variable assignments..."));
                this.array.forEach(function(variableAssignment) {
                    variableAssignment.evaluate(context);
                });
                context.debug("...evaluated the '".concat(variableAssignmentsString, "' variable assignments."));
            }
        }
    ]);
    return VariableAssignments;
}(_wrap_native_super(_element.default)), _define_property(_VariableAssignments, "name", "VariableAssignments"), _VariableAssignments));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlQXNzaWdubWVudHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy4uLmApO1xuXG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKCh2YXJpYWJsZUFzc2lnbm1lbnQpID0+IHtcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlQXNzaWdubWVudHNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiZ2V0QXJyYXkiLCJldmFsdWF0ZSIsInZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImZvckVhY2giLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozt3QkFKdUI7OERBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEIsV0FBZUEsSUFBQUEsZ0JBQU0sd0NBQUM7O2FBQU1DLG9CQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURkSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdBOzs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0wsT0FBTztnQkFDZCxJQUFNTSw0QkFBNEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFdkRQLFFBQVFRLEtBQUssQ0FBQyxBQUFDLG1CQUE0QyxPQUExQkYsMkJBQTBCO2dCQUUzRCxJQUFJLENBQUNILEtBQUssQ0FBQ00sT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsbUJBQW1CTCxRQUFRLENBQUNMO2dCQUM5QjtnQkFFQUEsUUFBUVcsS0FBSyxDQUFDLEFBQUMscUJBQThDLE9BQTFCTCwyQkFBMEI7WUFDL0Q7Ozs7cUJBckJzRE0sZ0JBQU8sSUF1QjdELHVDQUFPQyxRQUFPIn0=