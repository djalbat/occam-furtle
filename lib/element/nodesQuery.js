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
var _NodesQuery;
var _default = (0, _elements.define)((_NodesQuery = /*#__PURE__*/ function(Element) {
    _inherits(NodesQuery, Element);
    function NodesQuery(context, string, node, variable, query) {
        _class_call_check(this, NodesQuery);
        var _this;
        _this = _call_super(this, NodesQuery, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        _this.query = query;
        return _this;
    }
    _create_class(NodesQuery, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getQuery",
            value: function getQuery() {
                return this.query;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var nodesQueryString = this.getString(); ///
                context.trace("Evaluating the '".concat(nodesQueryString, "' nodes query..."));
                if (this.query === null) {
                    var message = "Cannot evaluate the '".concat(nodesQueryString, "' nodes query because its expression is malformed."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                term = this.variable.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.NODE_TYPE) {
                    var termString = term.getString(), message1 = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var node;
                var primitiveValue = term.getPrimitiveValue();
                node = primitiveValue; ///
                if (node === null) {
                    var termString1 = term.getString(), message2 = "The '".concat(termString1, "' term's node is null."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var nodes = this.query.execute(node);
                term = (0, _term.termFromNodes)(nodes, context);
                var termString2 = term.getString();
                context.debug("...evaluated the '".concat(nodesQueryString, "' nodes query as '").concat(termString2, "'."));
                return term;
            }
        }
    ]);
    return NodesQuery;
}(_wrap_native_super(_element.default)), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5vZGVzUXVlcnkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5vZGVzUXVlcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICBub2RlID0gcHJpbWl0aXZlVmFsdWU7ICAvLy9cblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZXNRdWVyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTm9kZXNRdWVyeSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsInRlcm0iLCJub2Rlc1F1ZXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ0ZXJtU3RyaW5nIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vZGVzIiwiZXhlY3V0ZSIsInRlcm1Gcm9tTm9kZXMiLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4REFQb0I7Z0VBQ0U7d0JBRUM7cUJBQ0c7b0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUIsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7O2FBQU1DLFdBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsS0FBSztnQ0FEeEJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNQLE9BQU87Z0JBQ2QsSUFBSVE7Z0JBRUosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRS9DVixRQUFRVyxLQUFLLENBQUMsQUFBQyxtQkFBbUMsT0FBakJGLGtCQUFpQjtnQkFFbEQsSUFBSSxJQUFJLENBQUNMLEtBQUssS0FBSyxNQUFNO29CQUN2QixJQUFNUSxVQUFVLEFBQUMsd0JBQXdDLE9BQWpCSCxrQkFBaUIsdURBQ25ESSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQUwsT0FBTyxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUDtnQkFFOUIsSUFBTWdCLFdBQVdSLEtBQUtTLE9BQU87Z0JBRTdCLElBQUlELGFBQWFFLGdCQUFTLEVBQUU7b0JBQzFCLElBQU1DLGFBQWFYLEtBQUtFLFNBQVMsSUFDM0JFLFdBQVUsQUFBQyxRQUE4QkksT0FBdkJHLFlBQVcsY0FBeUNELE9BQTdCRixVQUFTLHNCQUE4QixPQUFWRSxnQkFBUyxFQUFDLE9BQ2hGTCxhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJWDtnQkFFSixJQUFNa0IsaUJBQWlCWixLQUFLYSxpQkFBaUI7Z0JBRTdDbkIsT0FBT2tCLGdCQUFpQixHQUFHO2dCQUUzQixJQUFJbEIsU0FBUyxNQUFNO29CQUNqQixJQUFNaUIsY0FBYVgsS0FBS0UsU0FBUyxJQUMzQkUsV0FBVSxBQUFDLFFBQWtCLE9BQVhPLGFBQVcsMkJBQzdCTixhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNUyxRQUFRLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLE9BQU8sQ0FBQ3JCO2dCQUVqQ00sT0FBT2dCLElBQUFBLG1CQUFhLEVBQUNGLE9BQU90QjtnQkFFNUIsSUFBTW1CLGNBQWFYLEtBQUtFLFNBQVM7Z0JBRWpDVixRQUFReUIsS0FBSyxDQUFDLEFBQUMscUJBQXlETixPQUFyQ1Ysa0JBQWlCLHNCQUErQixPQUFYVSxhQUFXO2dCQUVuRixPQUFPWDtZQUNUOzs7O3FCQWpFNkNrQixnQkFBTyxJQW1FcEQsOEJBQU9DLFFBQU8ifQ==