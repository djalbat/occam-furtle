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
var _occamlanguages = require("occam-languages");
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
var _term = require("../../utilities/term");
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
var _ComparisonTerm;
var _default = (0, _elements.define)((_ComparisonTerm = /*#__PURE__*/ function(Element) {
    _inherits(ComparisonTerm, Element);
    function ComparisonTerm(context, string, node, negated, leftTerm, rightTerm) {
        _class_call_check(this, ComparisonTerm);
        var _this;
        _this = _call_super(this, ComparisonTerm, [
            context,
            string,
            node
        ]);
        _this.negated = negated;
        _this.leftTerm = leftTerm;
        _this.rightTerm = rightTerm;
        return _this;
    }
    _create_class(ComparisonTerm, [
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
            }
        },
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var comparisonTermString = this.getString(); ///
                context.trace("Evaluating the '".concat(comparisonTermString, "' comparison term..."));
                var leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== rightTermType) {
                    var leftTermString = leftTerm.getString(), rightTermString = rightTerm.getString(), message = "The '".concat(leftTermString, "' left term's type is '").concat(leftTermType, "' whereas the '").concat(rightTermString, "' right term's type is '").concat(rightTermType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);
                var boolean = leftTermEqualToRightTerm; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString = term.getString();
                context.debug("...evaluated the '".concat(comparisonTermString, "' comparison term as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return ComparisonTerm;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_ComparisonTerm, "name", "ComparisonTerm"), _ComparisonTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21wYXJpc29uVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgY29tcGFyaXNvblRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbXBhcmlzb25UZXJtU3RyaW5nfScgY29tcGFyaXNvbiB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZSAhPT0gcmlnaHRUZXJtVHlwZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVyZWFzIHRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRUZXJtRXF1YWxUb1JpZ2h0VGVybSA9IGxlZnRUZXJtLmlzRXF1YWxUbyhyaWdodFRlcm0pO1xuXG4gICAgbGV0IGJvb2xlYW4gPSBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm07IC8vL1xuXG4gICAgaWYgKHRoaXMubmVnYXRlZCkge1xuICAgICAgYm9vbGVhbiA9ICFib29sZWFuOyAvLy9cbiAgICB9XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2NvbXBhcmlzb25UZXJtU3RyaW5nfScgY29tcGFyaXNvbiB0ZXJtIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBhcmlzb25UZXJtXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21wYXJpc29uVGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmVnYXRlZCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiaXNOZWdhdGVkIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJldmFsdWF0ZSIsInRlcm0iLCJjb21wYXJpc29uVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1UeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRUZXJtRXF1YWxUb1JpZ2h0VGVybSIsImlzRXF1YWxUbyIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OEJBUHdCO2dFQUVGO3dCQUVDO29CQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFNLG1DQUFDOzthQUFNQyxlQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEckNOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLE9BQU8sR0FBR0E7UUFDZixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1QsT0FBTztnQkFDZCxJQUFJVTtnQkFFSixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFbERaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLG1CQUF1QyxPQUFyQkYsc0JBQXFCO2dCQUV0RCxJQUFNUCxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDSyxRQUFRLENBQUNULFVBQ2xDSyxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDSSxRQUFRLENBQUNULFVBQ3BDYyxlQUFlVixTQUFTVyxPQUFPLElBQy9CQyxnQkFBZ0JYLFVBQVVVLE9BQU87Z0JBRXZDLElBQUlELGlCQUFpQkUsZUFBZTtvQkFDbEMsSUFBTUMsaUJBQWlCYixTQUFTUSxTQUFTLElBQ25DTSxrQkFBa0JiLFVBQVVPLFNBQVMsSUFDckNPLFVBQVUsQUFBQyxRQUErQ0wsT0FBeENHLGdCQUFlLDJCQUF1REMsT0FBOUJKLGNBQWEsbUJBQTJERSxPQUExQ0UsaUJBQWdCLDRCQUF3QyxPQUFkRixlQUFjLE9BQ2hKSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRywyQkFBMkJuQixTQUFTb0IsU0FBUyxDQUFDbkI7Z0JBRXBELElBQUlvQixVQUFVRiwwQkFBMEIsR0FBRztnQkFFM0MsSUFBSSxJQUFJLENBQUNwQixPQUFPLEVBQUU7b0JBQ2hCc0IsVUFBVSxDQUFDQSxTQUFTLEdBQUc7Z0JBQ3pCO2dCQUVBZixPQUFPZ0IsSUFBQUEscUJBQWUsRUFBQ0QsU0FBU3pCO2dCQUVoQyxJQUFNMkIsYUFBYWpCLEtBQUtFLFNBQVM7Z0JBRWpDWixRQUFRNEIsS0FBSyxDQUFDLEFBQUMscUJBQWlFRCxPQUE3Q2hCLHNCQUFxQiwwQkFBbUMsT0FBWGdCLFlBQVc7Z0JBRTNGLE9BQU9qQjtZQUNUOzs7O3FCQXpEaURtQix1QkFBTyxJQTJEeEQsa0NBQU9DLFFBQU8ifQ==