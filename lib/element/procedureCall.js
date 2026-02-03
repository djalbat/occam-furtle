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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
var _ProcedureCall;
var _default = (0, _elements.define)((_ProcedureCall = /*#__PURE__*/ function(Element) {
    _inherits(ProcedureCall, Element);
    function ProcedureCall(context, string, node, reference, terms) {
        _class_call_check(this, ProcedureCall);
        var _this;
        _this = _call_super(this, ProcedureCall, [
            context,
            string,
            node
        ]);
        _this.reference = reference;
        _this.terms = terms;
        return _this;
    }
    _create_class(ProcedureCall, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.reference.getName();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var procedureCallString = this.getString(); ///
                context.trace("Evaluating the '".concat(procedureCallString, "' procedure call..."));
                var name = this.getName(), procedurePresent = context.isProcedurePresentByName(name);
                if (!procedurePresent) {
                    var message = "The '".concat(procedureCallString, " procedure is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var procedure = context.findProcedureByName(name), terms = this.terms.evaluate(context), term = procedure.call(terms, context);
                var termString = term.getString();
                context.debug("...evaluated the '".concat(procedureCallString, "' procedure call as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return ProcedureCall;
}(_wrap_native_super(_element.default)), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVDYWxsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXROYW1lKCk7IH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKTtcblxuICAgIGlmICghcHJvY2VkdXJlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30gcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIHRlcm1zID0gdGhpcy50ZXJtcy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbCBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJ0ZXJtcyIsImdldFJlZmVyZW5jZSIsImdldFRlcm1zIiwiZ2V0TmFtZSIsImV2YWx1YXRlIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwidGVybSIsImNhbGwiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7Ozs4REFMb0I7Z0VBQ0U7d0JBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sa0NBQUM7O2FBQU1DLGNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSztnQ0FEekJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLE9BQU87WUFBSTs7O1lBRTdDQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1IsT0FBTztnQkFDZCxJQUFNUyxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFbERWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLG1CQUFzQyxPQUFwQkYscUJBQW9CO2dCQUVyRCxJQUFNRyxPQUFPLElBQUksQ0FBQ0wsT0FBTyxJQUNuQk0sbUJBQW1CYixRQUFRYyx3QkFBd0IsQ0FBQ0Y7Z0JBRTFELElBQUksQ0FBQ0Msa0JBQWtCO29CQUNyQixJQUFNRSxVQUFVLEFBQUMsUUFBMkIsT0FBcEJOLHFCQUFvQixnQ0FDdENPLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLFlBQVluQixRQUFRb0IsbUJBQW1CLENBQUNSLE9BQ3hDUixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxRQUFRLENBQUNSLFVBQzVCcUIsT0FBT0YsVUFBVUcsSUFBSSxDQUFDbEIsT0FBT0o7Z0JBRW5DLElBQU11QixhQUFhRixLQUFLWCxTQUFTO2dCQUVqQ1YsUUFBUXdCLEtBQUssQ0FBQyxBQUFDLHFCQUErREQsT0FBM0NkLHFCQUFvQix5QkFBa0MsT0FBWGMsWUFBVztnQkFFekYsT0FBT0Y7WUFDVDs7OztxQkExQ2dESSxnQkFBTyxJQTRDdkQsaUNBQU9iLFFBQU8ifQ==