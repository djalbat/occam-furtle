"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnonymousProcedureNode;
    }
});
var _procedure = /*#__PURE__*/ _interop_require_default(require("../../node/procedure"));
var _tokenTypes = require("../../tokenTypes");
var _ruleNames = require("../../ruleNames");
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
var AnonymousProcedureNode = /*#__PURE__*/ function(ProcedureNode) {
    _inherits(AnonymousProcedureNode, ProcedureNode);
    function AnonymousProcedureNode() {
        _class_call_check(this, AnonymousProcedureNode);
        return _call_super(this, AnonymousProcedureNode, arguments);
    }
    _create_class(AnonymousProcedureNode, [
        {
            key: "getType",
            value: function getType() {
                var type = null;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, terminalNodeType = terminalNode.getType();
                    if (terminalNodeType === _tokenTypes.TYPE_TOKEN_TYPE) {
                        var content = terminalNode.getContent();
                        type = content; ///
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return type;
            }
        },
        {
            key: "getParametersNode",
            value: function getParametersNode() {
                var ruleName = _ruleNames.PARAMETERS_RULE_NAME, parametersNode = this.getNodeByRuleName(ruleName);
                return parametersNode;
            }
        },
        {
            key: "getReturnBlockNode",
            value: function getReturnBlockNode() {
                var ruleName = _ruleNames.RETURN_BLOCK_RULE_NAME, returnBlockNode = this.getNodeByRuleName(ruleName);
                return returnBlockNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _procedure.default.fromRuleNameChildNodesOpacityAndPrecedence(AnonymousProcedureNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return AnonymousProcedureNode;
}(_procedure.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb2NlZHVyZS9hbm95bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb2NlZHVyZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcHJvY2VkdXJlXCI7XG5cbmltcG9ydCB7IFRZUEVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5pbXBvcnQgeyBQQVJBTUVURVJTX1JVTEVfTkFNRSwgUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5vbnltb3VzUHJvY2VkdXJlTm9kZSBleHRlbmRzIFByb2NlZHVyZU5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZVR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlVHlwZSA9PT0gVFlQRV9UT0tFTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHR5cGUgPSBjb250ZW50OyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQVJBTUVURVJTX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnNOb2RlO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2tOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZXR1cm5CbG9ja05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQcm9jZWR1cmVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVUeXBlIiwiVFlQRV9UT0tFTl9UWVBFIiwiY29udGVudCIsImdldENvbnRlbnQiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsInJ1bGVOYW1lIiwiUEFSQU1FVEVSU19SVUxFX05BTUUiLCJwYXJhbWV0ZXJzTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSIsInJldHVybkJsb2NrTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlByb2NlZHVyZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2dFQUxLOzBCQUVNO3lCQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsT0FBTztnQkFFWCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsZUFBZUYsV0FDZkcsbUJBQW1CRCxhQUFhTCxPQUFPO29CQUU3QyxJQUFJTSxxQkFBcUJDLDJCQUFlLEVBQUU7d0JBQ3hDLElBQU1DLFVBQVVILGFBQWFJLFVBQVU7d0JBRXZDUixPQUFPTyxTQUFVLEdBQUc7b0JBQ3RCO29CQUVBLElBQUlKLFVBQVUsR0FBRzt3QkFDZixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRTlDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssaUNBQXNCLEVBQ2pDQyxrQkFBa0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRS9DLE9BQU9NO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDUCxRQUFRLEVBQUVRLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGtCQUFhLENBQUNKLDBDQUEwQyxDQXBDM0luQix3QkFvQ29LWSxVQUFVUSxZQUFZQyxTQUFTQztZQUFhOzs7V0FwQ2hOdEI7RUFBK0J1QixrQkFBYSJ9