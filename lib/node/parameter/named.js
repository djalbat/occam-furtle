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
            key: "getAliasedName",
            value: function getAliasedName() {
                var aliasedName;
                var aliased = this.isAliased();
                if (aliased) {
                    var alias = this.getAlias();
                    aliasedName = alias; ///
                } else {
                    var name = this.getName();
                    aliasedName = name; ///
                }
                return aliasedName;
            }
        },
        {
            key: "isAliased",
            value: function isAliased() {
                var alias = this.getAlias(), aliased = alias !== null;
                return aliased;
            }
        },
        {
            key: "getAlias",
            value: function getAlias() {
                var alias = null;
                var tokenType = _tokenTypes.NAME_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode, index) {
                    if (index === 3) {
                        var content = terminalNode.getContent();
                        alias = content; //
                        return true;
                    }
                }, tokenType);
                return alias;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcmFtdGVyTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9wYXJhbWV0ZXJcIjtcblxuaW1wb3J0IHsgTkFNRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZWRQYXJhbXRlck5vZGUgZXh0ZW5kcyBQYXJhbXRlck5vZGUge1xuICBnZXRBbGlhc2VkTmFtZSgpIHtcbiAgICBsZXQgYWxpYXNlZE5hbWU7XG5cbiAgICBjb25zdCBhbGlhc2VkID0gdGhpcy5pc0FsaWFzZWQoKTtcblxuICAgIGlmIChhbGlhc2VkKSB7XG4gICAgICBjb25zdCBhbGlhcyA9IHRoaXMuZ2V0QWxpYXMoKTtcblxuICAgICAgYWxpYXNlZE5hbWUgPSBhbGlhczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cbiAgICAgIGFsaWFzZWROYW1lID0gbmFtZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGFsaWFzZWROYW1lO1xuICB9XG5cbiAgaXNBbGlhc2VkKCkge1xuICAgIGNvbnN0IGFsaWFzID0gdGhpcy5nZXRBbGlhcygpLFxuICAgICAgICAgIGFsaWFzZWQgPSAoYWxpYXMgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFsaWFzZWQ7XG4gIH1cblxuICBnZXRBbGlhcygpIHtcbiAgICBsZXQgYWxpYXMgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gTkFNRV9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDMpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgYWxpYXMgPSBjb250ZW50OyAvL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gYWxpYXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQYXJhbXRlck5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKE5hbWVkUGFyYW10ZXJOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOYW1lZFBhcmFtdGVyTm9kZSIsImdldEFsaWFzZWROYW1lIiwiYWxpYXNlZE5hbWUiLCJhbGlhc2VkIiwiaXNBbGlhc2VkIiwiYWxpYXMiLCJnZXRBbGlhcyIsIm5hbWUiLCJnZXROYW1lIiwidG9rZW5UeXBlIiwiTkFNRV9UT0tFTl9UWVBFIiwic29tZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImluZGV4IiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlBhcmFtdGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7Z0VBSkk7MEJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTO2dCQUU5QixJQUFJRCxTQUFTO29CQUNYLElBQU1FLFFBQVEsSUFBSSxDQUFDQyxRQUFRO29CQUUzQkosY0FBY0csT0FBUSxHQUFHO2dCQUMzQixPQUFPO29CQUNMLElBQU1FLE9BQU8sSUFBSSxDQUFDQyxPQUFPO29CQUV6Qk4sY0FBY0ssTUFBTSxHQUFHO2dCQUN6QjtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCSCxVQUFXRSxVQUFVO2dCQUUzQixPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELFFBQVE7Z0JBRVosSUFBTUksWUFBWUMsMkJBQWU7Z0JBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBQ0MsY0FBY0M7b0JBQ25DLElBQUlBLFVBQVUsR0FBRzt3QkFDZixJQUFNQyxVQUFVRixhQUFhRyxVQUFVO3dCQUV2Q1YsUUFBUVMsU0FBUyxFQUFFO3dCQUVuQixPQUFPO29CQUNUO2dCQUNGLEdBQUdMO2dCQUVILE9BQU9KO1lBQ1Q7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLGtCQUFZLENBQUNMLDBDQUEwQyxDQTVDMUloQixtQkE0QzhKaUIsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBNUMxTXBCO0VBQTBCcUIsa0JBQVkifQ==