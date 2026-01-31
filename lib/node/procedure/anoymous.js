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
                var type;
                var tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    type = content; ///
                }, tokenType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb2NlZHVyZS9hbm95bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb2NlZHVyZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcHJvY2VkdXJlXCI7XG5cbmltcG9ydCB7IFRZUEVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5pbXBvcnQgeyBQQVJBTUVURVJTX1JVTEVfTkFNRSwgUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5vbnltb3VzUHJvY2VkdXJlTm9kZSBleHRlbmRzIFByb2NlZHVyZU5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gVFlQRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICB0eXBlID0gY29udGVudDsgIC8vL1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnNOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSQU1FVEVSU19SVUxFX05BTUUsXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTm9kZTtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFVFVSTl9CTE9DS19SVUxFX05BTUUsXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2tOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gUHJvY2VkdXJlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwidG9rZW5UeXBlIiwiVFlQRV9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJydWxlTmFtZSIsIlBBUkFNRVRFUlNfUlVMRV9OQU1FIiwicGFyYW1ldGVyc05vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFJldHVybkJsb2NrTm9kZSIsIlJFVFVSTl9CTE9DS19SVUxFX05BTUUiLCJyZXR1cm5CbG9ja05vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJQcm9jZWR1cmVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztnRUFMSzswQkFFTTt5QkFDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFlBQVlDLDJCQUFlO2dCQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q04sT0FBT0ssU0FBVSxHQUFHO2dCQUN0QixHQUFHSjtnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU5QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLGlDQUFzQixFQUNqQ0Msa0JBQWtCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUUvQyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1AsUUFBUSxFQUFFUSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxrQkFBYSxDQUFDSiwwQ0FBMEMsQ0E3QjNJakIsd0JBNkJvS1UsVUFBVVEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBN0JoTnBCO0VBQStCcUIsa0JBQWEifQ==