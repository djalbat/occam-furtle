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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
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
var _NamedParameter;
var _default = (0, _elements.define)((_NamedParameter = /*#__PURE__*/ function(Element) {
    _inherits(NamedParameter, Element);
    function NamedParameter(context, string, node, type, name, alias) {
        _class_call_check(this, NamedParameter);
        var _this;
        _this = _call_super(this, NamedParameter, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.name = name;
        _this.alias = alias;
        return _this;
    }
    _create_class(NamedParameter, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getAlias",
            value: function getAlias() {
                return this.alias;
            }
        },
        {
            key: "isAliased",
            value: function isAliased() {
                var aliased = this.alias !== null;
                return aliased;
            }
        },
        {
            key: "getAliasedName",
            value: function getAliasedName() {
                var aliased = this.isAliased(), aliasedName = aliased ? this.alias : this.name; ///
                return aliasedName;
            }
        },
        {
            key: "matchTerm",
            value: function matchTerm(term, context) {
                var termString = term.getString(), namedParameterString = this.getString(); ///
                context.trace("Matching the '".concat(termString, "' term against the '").concat(namedParameterString, "' named parameter..."));
                var termType = term.getType();
                if (this.type !== termType) {
                    var message = "The '".concat(termString, "' term's '").concat(termType, "' type  and '").concat(namedParameterString, "' named parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(termString, "' term against the '").concat(namedParameterString, "' named parameter."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var namedParameterA = this, namedParameterB = namedParameter; ///
                var namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
                context.trace("Matching the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ]);
    return NamedParameter;
}(_wrap_native_super(_element.default)), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBuYW1lLCBhbGlhcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFsaWFzID0gYWxpYXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGlhcztcbiAgfVxuXG4gIGlzQWxpYXNlZCgpIHtcbiAgICBjb25zdCBhbGlhc2VkID0gKHRoaXMuYWxpYXMgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFsaWFzZWQ7XG4gIH1cblxuICBnZXRBbGlhc2VkTmFtZSgpIHtcbiAgICBjb25zdCBhbGlhc2VkID0gdGhpcy5pc0FsaWFzZWQoKSxcbiAgICAgICAgICBhbGlhc2VkTmFtZSA9IGFsaWFzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaWFzIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTsgLy8vXG5cbiAgICByZXR1cm4gYWxpYXNlZE5hbWU7XG4gIH1cblxuICBtYXRjaFRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlICBhbmQgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5hbWVkUGFyYW1ldGVyIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwibmFtZSIsImFsaWFzIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRBbGlhcyIsImlzQWxpYXNlZCIsImFsaWFzZWQiLCJnZXRBbGlhc2VkTmFtZSIsImFsaWFzZWROYW1lIiwibWF0Y2hUZXJtIiwidGVybSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5zQjt3QkFFQzs4REFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQixXQUFlQSxJQUFBQSxnQkFBTSxtQ0FBQzs7YUFBTUMsZUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7Z0NBRDFCTjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLEtBQUssR0FBR0E7Ozs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFXLElBQUksQ0FBQ0wsS0FBSyxLQUFLO2dCQUVoQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFVBQVUsSUFBSSxDQUFDRCxTQUFTLElBQ3hCRyxjQUFjRixVQUNFLElBQUksQ0FBQ0wsS0FBSyxHQUNSLElBQUksQ0FBQ0QsSUFBSSxFQUFFLEdBQUc7Z0JBRXRDLE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFZCxPQUFPO2dCQUNyQixJQUFNZSxhQUFhRCxLQUFLRSxTQUFTLElBQzNCQyx1QkFBdUIsSUFBSSxDQUFDRCxTQUFTLElBQUssR0FBRztnQkFFbkRoQixRQUFRa0IsS0FBSyxDQUFDLEFBQUMsaUJBQWlERCxPQUFqQ0YsWUFBVyx3QkFBMkMsT0FBckJFLHNCQUFxQjtnQkFFckYsSUFBTUUsV0FBV0wsS0FBS1IsT0FBTztnQkFFN0IsSUFBSSxJQUFJLENBQUNILElBQUksS0FBS2dCLFVBQVU7b0JBQzFCLElBQU1DLFVBQVUsQUFBQyxRQUE4QkQsT0FBdkJKLFlBQVcsY0FBb0NFLE9BQXhCRSxVQUFTLGlCQUEyRCxPQUE1Q0Ysc0JBQXFCLHlCQUFpQyxPQUFWLElBQUksQ0FBQ2QsSUFBSSxFQUFDLHlCQUN2SGtCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBckIsUUFBUXdCLEtBQUssQ0FBQyxBQUFDLG1CQUFtRFAsT0FBakNGLFlBQVcsd0JBQTJDLE9BQXJCRSxzQkFBcUI7WUFDekY7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjLEVBQUUxQixPQUFPO2dCQUN6QyxJQUFJMkI7Z0JBRUosSUFBTUMsa0JBQWtCLElBQUksRUFDdEJDLGtCQUFrQkgsZ0JBQWdCLEdBQUc7Z0JBRTNDLElBQU1JLHdCQUF3QkYsZ0JBQWdCWixTQUFTLElBQ2pEZSx3QkFBd0JGLGdCQUFnQmIsU0FBUztnQkFFdkRoQixRQUFRa0IsS0FBSyxDQUFDLEFBQUMsaUJBQXVFYSxPQUF2REQsdUJBQXNCLG1DQUF1RCxPQUF0QkMsdUJBQXNCO2dCQUU1RyxJQUFNM0IsT0FBT3NCLGVBQWVuQixPQUFPLElBQzdCSixPQUFPdUIsZUFBZXBCLE9BQU87Z0JBRW5DcUIsd0JBQXlCLEFBQUMsSUFBSSxDQUFDdkIsSUFBSSxLQUFLQSxRQUFVLElBQUksQ0FBQ0QsSUFBSSxLQUFLQTtnQkFFaEUsSUFBSXdCLHVCQUF1QjtvQkFDekIzQixRQUFRd0IsS0FBSyxDQUFDLEFBQUMsbUJBQXlFTyxPQUF2REQsdUJBQXNCLG1DQUF1RCxPQUF0QkMsdUJBQXNCO2dCQUNoSDtnQkFFQSxPQUFPSjtZQUNUOzs7O3FCQTNFaURLLGdCQUFPLElBNkV4RCxrQ0FBTzVCLFFBQU8ifQ==