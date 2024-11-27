"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarPatternView;
    }
});
var _index = require("../../index");
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var CustomGrammarPatternView = /*#__PURE__*/ function(View) {
    _inherits(CustomGrammarPatternView, View);
    function CustomGrammarPatternView() {
        _class_call_check(this, CustomGrammarPatternView);
        return _call_super(this, CustomGrammarPatternView, arguments);
    }
    return CustomGrammarPatternView;
}(_view.default);
_define_property(CustomGrammarPatternView, "Lexer", _index.CustomGrammarPatternLexer);
_define_property(CustomGrammarPatternView, "Parser", _index.CustomGrammarPatternParser);
_define_property(CustomGrammarPatternView, "readOnly", false);
_define_property(CustomGrammarPatternView, "initialContent", "<=|>=|<|>|\\+|\\-|×|÷");
_define_property(CustomGrammarPatternView, "defaultProperties", {
    className: "custom-grammar-pattern"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvY3VzdG9tR3JhbW1hclBhdHRlcm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXIsIEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hclBhdHRlcm5WaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBMZXhlciA9IEN1c3RvbUdyYW1tYXJQYXR0ZXJuTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEN1c3RvbUdyYW1tYXJQYXR0ZXJuUGFyc2VyO1xuXG4gIHN0YXRpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiPD18Pj18PHw+fFxcXFwrfFxcXFwtfMOXfMO3XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjdXN0b20tZ3JhbW1hci1wYXR0ZXJuXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyUGF0dGVyblZpZXciLCJWaWV3IiwiTGV4ZXIiLCJDdXN0b21HcmFtbWFyUGF0dGVybkxleGVyIiwiUGFyc2VyIiwiQ3VzdG9tR3JhbW1hclBhdHRlcm5QYXJzZXIiLCJyZWFkT25seSIsImluaXRpYWxDb250ZW50IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUppRDsyREFFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztXQUFBQTtFQUFpQ0MsYUFBSTtBQUN4RCxpQkFEbUJELDBCQUNaRSxTQUFRQyxnQ0FBeUI7QUFFeEMsaUJBSG1CSCwwQkFHWkksVUFBU0MsaUNBQTBCO0FBRTFDLGlCQUxtQkwsMEJBS1pNLFlBQVc7QUFFbEIsaUJBUG1CTiwwQkFPWk8sa0JBQWlCO0FBRXhCLGlCQVRtQlAsMEJBU1pRLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=