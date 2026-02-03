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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = require("../elements");
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
var _Step;
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function(Element) {
    _inherits(Step, Element);
    function Step(context, string, node, arrayAssignment, objectAssigment, variablessAssignment) {
        _class_call_check(this, Step);
        var _this;
        _this = _call_super(this, Step, [
            context,
            string,
            node
        ]);
        _this.arrayAssignment = arrayAssignment;
        _this.objectAssigment = objectAssigment;
        _this.variablessAssignment = variablessAssignment;
        return _this;
    }
    _create_class(Step, [
        {
            key: "getArrayAssignment",
            value: function getArrayAssignment() {
                return this.arrayAssignment;
            }
        },
        {
            key: "getObjectAssigment",
            value: function getObjectAssigment() {
                return this.objectAssigment;
            }
        },
        {
            key: "getVariablessAssignment",
            value: function getVariablessAssignment() {
                return this.variablessAssignment;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                if (false) {
                ///
                } else if (this.arrayAssignment !== null) {
                    this.arrayAssignment.evaluate(context);
                } else if (this.objectAssigment !== null) {
                    this.objectAssigment.evaluate(context);
                } else if (this.variablessAssignment !== null) {
                    this.variablessAssignment.evaluate(context);
                }
            }
        }
    ]);
    return Step;
}(_wrap_native_super(_element.default)), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNzQXNzaWdubWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQgPSB2YXJpYWJsZXNzQXNzaWdubWVudDtcbiAgfVxuXG4gIGdldEFycmF5QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RBc3NpZ21lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0QXNzaWdtZW50O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzc0Fzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQ7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXJyYXlBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFycmF5QXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub2JqZWN0QXNzaWdtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9iamVjdEFzc2lnbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzc0Fzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc3NBc3NpZ25tZW50IiwiZ2V0QXJyYXlBc3NpZ25tZW50IiwiZ2V0T2JqZWN0QXNzaWdtZW50IiwiZ2V0VmFyaWFibGVzc0Fzc2lnbm1lbnQiLCJldmFsdWF0ZSIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozs4REFKb0I7d0JBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0seUJBQUM7O2FBQU1DLEtBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0I7Z0NBRC9ETjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxlQUFlLEdBQUdBO1FBQ3ZCLE1BQUtDLGVBQWUsR0FBR0E7UUFDdkIsTUFBS0Msb0JBQW9CLEdBQUdBOzs7OztZQUc5QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxvQkFBb0I7WUFDbEM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1QsT0FBTztnQkFDZCxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDRyxlQUFlLEtBQUssTUFBTTtvQkFDeEMsSUFBSSxDQUFDQSxlQUFlLENBQUNNLFFBQVEsQ0FBQ1Q7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNJLGVBQWUsS0FBSyxNQUFNO29CQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDVDtnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ0ssb0JBQW9CLEtBQUssTUFBTTtvQkFDN0MsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ0ksUUFBUSxDQUFDVDtnQkFDckM7WUFDRjs7OztxQkEvQnVDVSxnQkFBTyxJQWlDOUMsd0JBQU9DLFFBQU8ifQ==