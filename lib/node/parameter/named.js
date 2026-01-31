"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NamedParamterNode;
    }
});
var _parameter = /*#__PURE__*/ _interop_require_default(require("../../node/parameter"));
var _tokenTypes = require("../../tokenTypes");
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
var NamedParamterNode = /*#__PURE__*/ function(ParamterNode) {
    _inherits(NamedParamterNode, ParamterNode);
    function NamedParamterNode() {
        _class_call_check(this, NamedParamterNode);
        return _call_super(this, NamedParamterNode, arguments);
    }
    _create_class(NamedParamterNode, [
        {
            key: "getAsName",
            value: function getAsName() {
                var asName = null;
                var tokenType = _tokenTypes.NAME_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode, index) {
                    if (index === 3) {
                        var content = terminalNode.getContent();
                        asName = content; //
                        return true;
                    }
                }, tokenType);
                return asName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _parameter.default.fromRuleNameChildNodesOpacityAndPrecedence(NamedParamterNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return NamedParamterNode;
}(_parameter.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcmFtdGVyTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9wYXJhbWV0ZXJcIjtcblxuaW1wb3J0IHsgTkFNRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZWRQYXJhbXRlck5vZGUgZXh0ZW5kcyBQYXJhbXRlck5vZGUge1xuICBnZXRBc05hbWUoKSB7XG4gICAgbGV0IGFzTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOQU1FX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMykge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgICBhc05hbWUgPSBjb250ZW50OyAvL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gYXNOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gUGFyYW10ZXJOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShOYW1lZFBhcmFtdGVyTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTmFtZWRQYXJhbXRlck5vZGUiLCJnZXRBc05hbWUiLCJhc05hbWUiLCJ0b2tlblR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaW5kZXgiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiUGFyYW10ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztnRUFKSTswQkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsU0FBUztnQkFFYixJQUFNQyxZQUFZQywyQkFBZTtnQkFFakMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQyxjQUFjQztvQkFDbkMsSUFBSUEsVUFBVSxHQUFHO3dCQUNmLElBQU1DLFVBQVVGLGFBQWFHLFVBQVU7d0JBRXZDUCxTQUFTTSxTQUFTLEVBQUU7d0JBRXBCLE9BQU87b0JBQ1Q7Z0JBQ0YsR0FBR0w7Z0JBRUgsT0FBT0Q7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msa0JBQVksQ0FBQ0wsMENBQTBDLENBbkIxSVYsbUJBbUI4SlcsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBbkIxTWQ7RUFBMEJlLGtCQUFZIn0=