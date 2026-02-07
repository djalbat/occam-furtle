"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FurtleFile;
    }
});
var _occammodel = require("occam-model");
var _furtle = /*#__PURE__*/ _interop_require_default(require("../context/file/furtle"));
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
var FurtleFile = /*#__PURE__*/ function(File) {
    _inherits(FurtleFile, File);
    function FurtleFile() {
        _class_call_check(this, FurtleFile);
        return _call_super(this, FurtleFile, arguments);
    }
    _create_class(FurtleFile, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                var FileContext = _furtle.default; ///
                return FileContext;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                return _occammodel.File.fromJSON(FurtleFile, json);
            }
        },
        {
            key: "fromDocument",
            value: function fromDocument(document) {
                return _occammodel.File.fromDocument(FurtleFile, document);
            }
        },
        {
            key: "fromPathContentAndReleased",
            value: function fromPathContentAndReleased(path, content, released) {
                return _occammodel.File.fromPathContentAndReleased(FurtleFile, path, content, released);
            }
        }
    ]);
    return FurtleFile;
}(_wrap_native_super(_occammodel.File));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWxlL2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZSB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuXG5pbXBvcnQgRnVydGxlRmlsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZmlsZS9mdXJ0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVydGxlRmlsZSBleHRlbmRzIEZpbGUge1xuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gRmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikgeyByZXR1cm4gRmlsZS5mcm9tSlNPTihGdXJ0bGVGaWxlLCBqc29uKTsgfVxuXG4gIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jdW1lbnQpIHsgcmV0dXJuIEZpbGUuZnJvbURvY3VtZW50KEZ1cnRsZUZpbGUsIGRvY3VtZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZChwYXRoLCBjb250ZW50LCByZWxlYXNlZCkgeyByZXR1cm4gRmlsZS5mcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZChGdXJ0bGVGaWxlLCBwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVGaWxlIiwiZ2V0RmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsIkZ1cnRsZUZpbGVDb250ZXh0IiwiZnJvbUpTT04iLCJqc29uIiwiRmlsZSIsImZyb21Eb2N1bWVudCIsImRvY3VtZW50IiwiZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQiLCJwYXRoIiwiY29udGVudCIsInJlbGVhc2VkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzswQkFKQTs2REFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBY0MsZUFBaUIsRUFBRyxHQUFHO2dCQUUzQyxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUk7Z0JBQUksT0FBT0MsZ0JBQUksQ0FBQ0YsUUFBUSxDQVB6QkosWUFPc0NLO1lBQU87OztZQUV6REUsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUTtnQkFBSSxPQUFPRixnQkFBSSxDQUFDQyxZQUFZLENBVHJDUCxZQVNrRFE7WUFBVzs7O1lBRXpFQyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dCQUFJLE9BQU9OLGdCQUFJLENBQUNHLDBCQUEwQixDQVhoRlQsWUFXNkZVLE1BQU1DLFNBQVNDO1lBQVc7OztXQVh2SFo7cUJBQW1CTSxnQkFBSSJ9