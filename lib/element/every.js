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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _types = require("../types");
var _term = require("../utilities/term");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _Every;
var _default = (0, _elements.define)((_Every = /*#__PURE__*/ function(Element) {
    _inherits(Every, Element);
    function Every(context, string, node, variable, anonymousProcedure) {
        _class_call_check(this, Every);
        var _this;
        _this = _call_super(this, Every, [
            context,
            string,
            node
        ]);
        _this.string = string;
        _this.variable = variable;
        _this.anonymousProcedure = anonymousProcedure;
        return _this;
    }
    _create_class(Every, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var term;
                var everyString = this.getString();
                context.trace("Evaluating the '".concat(everyString, "' every..."));
                term = this.variable.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.NODES_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = term.getNodes(), boolean = nodes.every(function(node) {
                    var term;
                    var Terms = _elements.default.Terms;
                    term = (0, _term.termFromNode)(node, context);
                    var terms = Terms.fromTerm(term, context);
                    term = _this.anonymousProcedure.call(terms, context);
                    var termType = term.getType();
                    if (termType !== _types.BOOLEAN_TYPE) {
                        var termString = term.getString(), message = "The '".concat(termString, "' term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = term.getBoolean();
                    return boolean;
                });
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString1 = term.getString();
                context.trace("...evaluated the '".concat(everyString, "' every as '").concat(termString1, "'."));
                return term;
            }
        }
    ]);
    return Every;
}(_wrap_native_super(_element.default)), _define_property(_Every, "name", "Every"), _Every));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUsIHRlcm1Gcm9tQm9vbGVhbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXZlcnkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgZXZlcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7ZXZlcnlTdHJpbmd9JyBldmVyeS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGVybS5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5ldmVyeSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgICAgIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtcyA9IFRlcm1zLmZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB0ZXJtID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke2V2ZXJ5U3RyaW5nfScgZXZlcnkgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXZlcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkV2ZXJ5IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiZXZlcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJldmVyeSIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtRnJvbU5vZGUiLCJ0ZXJtcyIsImZyb21UZXJtIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7OERBUm9CO2dFQUNDO2dFQUNDO3FCQUdtQjtvQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQjtnQ0FEckNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtELE1BQU0sR0FBR0E7UUFDZCxNQUFLRSxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLGtCQUFrQixHQUFHQTs7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCO1lBQ2hDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNQLE9BQU87O2dCQUNkLElBQUlRO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxTQUFTO2dCQUVsQ1YsUUFBUVcsS0FBSyxDQUFDLEFBQUMsbUJBQThCLE9BQVpGLGFBQVk7Z0JBRTdDRCxPQUFPLElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRLENBQUNQO2dCQUU5QixJQUFNWSxXQUFXSixLQUFLSyxPQUFPO2dCQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO29CQUMzQixJQUFNQyxhQUFhUCxLQUFLRSxTQUFTLElBQzNCTSxVQUFVLEFBQUMsUUFBOEJKLE9BQXZCRyxZQUFXLGNBQXlDRCxPQUE3QkYsVUFBUyxzQkFBK0IsT0FBWEUsaUJBQVUsRUFBQyxPQUNqRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsUUFBUVosS0FBS2EsUUFBUSxJQUNyQkMsVUFBVUYsTUFBTUcsS0FBSyxDQUFDLFNBQUNyQjtvQkFDckIsSUFBSU07b0JBRUosSUFBTSxBQUFFZ0IsUUFBVUMsaUJBQVEsQ0FBbEJEO29CQUVSaEIsT0FBT2tCLElBQUFBLGtCQUFZLEVBQUN4QixNQUFNRjtvQkFFMUIsSUFBTTJCLFFBQVFILE1BQU1JLFFBQVEsQ0FBQ3BCLE1BQU1SO29CQUVuQ1EsT0FBTyxNQUFLSixrQkFBa0IsQ0FBQ3lCLElBQUksQ0FBQ0YsT0FBTzNCO29CQUUzQyxJQUFNWSxXQUFXSixLQUFLSyxPQUFPO29CQUU3QixJQUFJRCxhQUFha0IsbUJBQVksRUFBRTt3QkFDN0IsSUFBTWYsYUFBYVAsS0FBS0UsU0FBUyxJQUMzQk0sVUFBVSxBQUFDLFFBQXNDSixPQUEvQkcsWUFBVyxzQkFBNERlLE9BQXhDbEIsVUFBUyxpQ0FBNEMsT0FBYmtCLG1CQUFZLEVBQUMsT0FDdEdiLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7d0JBRXhDLE1BQU1DO29CQUNSO29CQUVBLElBQU1LLFVBQVVkLEtBQUt1QixVQUFVO29CQUUvQixPQUFPVDtnQkFDVDtnQkFFTmQsT0FBT3dCLElBQUFBLHFCQUFlLEVBQUNWLFNBQVN0QjtnQkFFaEMsSUFBTWUsY0FBYVAsS0FBS0UsU0FBUztnQkFFakNWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLHFCQUE4Q0ksT0FBMUJOLGFBQVksZ0JBQXlCLE9BQVhNLGFBQVc7Z0JBRXhFLE9BQU9QO1lBQ1Q7Ozs7cUJBdEV3Q3lCLGdCQUFPLElBd0UvQyx5QkFBT0MsUUFBTyJ9