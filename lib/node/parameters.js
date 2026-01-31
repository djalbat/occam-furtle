"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParamtersNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _ruleNames = require("../ruleNames");
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
var ParamtersNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ParamtersNode, NonTerminalNode);
    function ParamtersNode() {
        _class_call_check(this, ParamtersNode);
        return _call_super(this, ParamtersNode, arguments);
    }
    _create_class(ParamtersNode, [
        {
            key: "getParameterNodes",
            value: function getParameterNodes() {
                var ruleName = _ruleNames.PARAMETER_RULE_NAME, parameterNodes = this.getNodesByRuleName(ruleName);
                return parameterNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                if (precedence === undefined) {
                    precedence = opacity; ///
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = ParamtersNode;
                }
                var parametersNode = _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
                return parametersNode;
            }
        }
    ]);
    return ParamtersNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBQQVJBTUVURVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbXRlcnNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UGFyYW1ldGVyTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJBTUVURVJfUlVMRV9OQU1FLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gb3BhY2l0eTsgLy8vXG5cbiAgICAgIG9wYWNpdHkgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFBhcmFtdGVyc05vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyc05vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJhbXRlcnNOb2RlIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJydWxlTmFtZSIsIlBBUkFNRVRFUl9SVUxFX05BTUUiLCJwYXJhbWV0ZXJOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwicGFyYW1ldGVyc05vZGUiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NFQUpPO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw4QkFBbUIsRUFDOUJDLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtnQkFFL0MsT0FBT0U7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRUwsUUFBUSxFQUFFTSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFDaEcsSUFBSUEsZUFBZUMsV0FBVztvQkFDNUJELGFBQWFELFNBQVMsR0FBRztvQkFFekJBLFVBQVVELFlBQVksR0FBRztvQkFFekJBLGFBQWFOLFVBQVcsR0FBRztvQkFFM0JBLFdBQVdLLE9BQU8sR0FBRztvQkFFckJBLFFBbEJlUDtnQkFtQmpCO2dCQUVBLElBQU1ZLGlCQUFpQkMsd0JBQWUsQ0FBQ1AsMENBQTBDLENBQUNDLE9BQU9MLFVBQVVNLFlBQVlDLFNBQVNDO2dCQUV4SCxPQUFPRTtZQUNUOzs7V0F4Qm1CWjtFQUFzQmEsd0JBQWUifQ==