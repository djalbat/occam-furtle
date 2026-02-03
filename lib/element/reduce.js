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
var _Reduce;
var _default = (0, _elements.define)((_Reduce = /*#__PURE__*/ function(Element) {
    _inherits(Reduce, Element);
    function Reduce(context, string, node, variable, initialExpression, anonymousProcedure) {
        _class_call_check(this, Reduce);
        var _this;
        _this = _call_super(this, Reduce, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        _this.initialExpression = initialExpression;
        _this.anonymousProcedure = anonymousProcedure;
        return _this;
    }
    _create_class(Reduce, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getInitialExpression",
            value: function getInitialExpression() {
                return this.initialExpression;
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
                var reduceString = this.getString();
                context.trace("Evaluating the '".concat(reduceString, "' reduce..."));
                term = this.variable.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.NODES_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = term.getNodes(), initialExpression = this.initialExpression.evaluate(context);
                term = nodes.reduce(function(currentExpression, node) {
                    var term;
                    var Terms = _elements.default.Terms;
                    term = currentTerm; ///
                    var terms = Terms.fromTerm(term, context);
                    term = (0, _term.termFromNode)(node, context);
                    terms.addTerm(term);
                    term = _this.anonymousProcedure.call(terms, context);
                    return term;
                }, initialExpression);
                var termString1 = term.getString();
                context.trace("...evaluated the '".concat(reduceString, "' reduce as '").concat(termString1, "'."));
                return term;
            }
        }
    ]);
    return Reduce;
}(_wrap_native_super(_element.default)), _define_property(_Reduce, "name", "Reduce"), _Reduce));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5pbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRJbml0aWFsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0ZXJtLmdldE5vZGVzKCksXG4gICAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSB0aGlzLmluaXRpYWxFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdGVybSA9IG5vZGVzLnJlZHVjZSgoY3VycmVudEV4cHJlc3Npb24sIG5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXJtO1xuXG4gICAgICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cztcblxuICAgICAgdGVybSA9IGN1cnJlbnRUZXJtOyAvLy9cblxuICAgICAgY29uc3QgdGVybXMgPSBUZXJtcy5mcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgdGVybXMuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgdGVybSA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdGVybTtcbiAgICB9LCBpbml0aWFsRXhwcmVzc2lvbik7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZHVjZVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVkdWNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsImluaXRpYWxFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsRXhwcmVzc2lvbiIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidGVybSIsInJlZHVjZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwicmVkdWNlIiwiY3VycmVudEV4cHJlc3Npb24iLCJUZXJtcyIsImVsZW1lbnRzIiwiY3VycmVudFRlcm0iLCJ0ZXJtcyIsImZyb21UZXJtIiwidGVybUZyb21Ob2RlIiwiYWRkVGVybSIsImNhbGwiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7OERBUm9CO2dFQUNDO2dFQUNDO3FCQUdLO29CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sMkJBQUM7O2FBQU1DLE9BQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsaUJBQWlCLEVBQUVDLGtCQUFrQjtnQ0FEeEROOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsaUJBQWlCLEdBQUdBO1FBQ3pCLE1BQUtDLGtCQUFrQixHQUFHQTs7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsaUJBQWlCO1lBQy9COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxrQkFBa0I7WUFDaEM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1QsT0FBTzs7Z0JBQ2QsSUFBSVU7Z0JBRUosSUFBTUMsZUFBZSxJQUFJLENBQUNDLFNBQVM7Z0JBRW5DWixRQUFRYSxLQUFLLENBQUMsQUFBQyxtQkFBK0IsT0FBYkYsY0FBYTtnQkFFOUNELE9BQU8sSUFBSSxDQUFDUCxRQUFRLENBQUNNLFFBQVEsQ0FBQ1Q7Z0JBRTlCLElBQU1jLFdBQVdKLEtBQUtLLE9BQU87Z0JBRTdCLElBQUlELGFBQWFFLGlCQUFVLEVBQUU7b0JBQzNCLElBQU1DLGFBQWFQLEtBQUtFLFNBQVMsSUFDM0JNLFVBQVUsQUFBQyxRQUE4QkosT0FBdkJHLFlBQVcsY0FBeUNELE9BQTdCRixVQUFTLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pGRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxRQUFRWixLQUFLYSxRQUFRLElBQ3JCbkIsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNLLFFBQVEsQ0FBQ1Q7Z0JBRTFEVSxPQUFPWSxNQUFNRSxNQUFNLENBQUMsU0FBQ0MsbUJBQW1CdkI7b0JBQ3RDLElBQUlRO29CQUVKLElBQU0sQUFBRWdCLFFBQVVDLGlCQUFRLENBQWxCRDtvQkFFUmhCLE9BQU9rQixhQUFhLEdBQUc7b0JBRXZCLElBQU1DLFFBQVFILE1BQU1JLFFBQVEsQ0FBQ3BCLE1BQU1WO29CQUVuQ1UsT0FBT3FCLElBQUFBLGtCQUFZLEVBQUM3QixNQUFNRjtvQkFFMUI2QixNQUFNRyxPQUFPLENBQUN0QjtvQkFFZEEsT0FBTyxNQUFLTCxrQkFBa0IsQ0FBQzRCLElBQUksQ0FBQ0osT0FBTzdCO29CQUUzQyxPQUFPVTtnQkFDVCxHQUFHTjtnQkFFSCxJQUFNYSxjQUFhUCxLQUFLRSxTQUFTO2dCQUVqQ1osUUFBUWEsS0FBSyxDQUFDLEFBQUMscUJBQWdESSxPQUE1Qk4sY0FBYSxpQkFBMEIsT0FBWE0sYUFBVztnQkFFMUUsT0FBT1A7WUFDVDs7OztxQkFsRXlDd0IsZ0JBQU8sSUFvRWhELDBCQUFPQyxRQUFPIn0=