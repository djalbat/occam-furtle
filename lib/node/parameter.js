"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParamterNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _tokenTypes = require("../tokenTypes");
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
var ParamterNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ParamterNode, NonTerminalNode);
    function ParamterNode() {
        _class_call_check(this, ParamterNode);
        return _call_super(this, ParamterNode, arguments);
    }
    _create_class(ParamterNode, [
        {
            key: "getName",
            value: function getName() {
                var name = null;
                var tokenType = _tokenTypes.NAME_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    name = content; //
                    return true;
                }, tokenType);
                return name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type = null;
                var tokenType = _tokenTypes.TYPE_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    type = content; //
                    return true;
                }, tokenType);
                return type;
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
                    Class = ParamterNode;
                }
                var parameterNode = _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
                return parameterNode;
            }
        }
    ]);
    return ParamterNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IFRZUEVfVE9LRU5fVFlQRSwgTkFNRV9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW10ZXJOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBsZXQgbmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOQU1FX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIG5hbWUgPSBjb250ZW50OyAvL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFRZUEVfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgdHlwZSA9IGNvbnRlbnQ7IC8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBQYXJhbXRlck5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1ldGVyTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFyYW10ZXJOb2RlIiwiZ2V0TmFtZSIsIm5hbWUiLCJ0b2tlblR5cGUiLCJOQU1FX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJnZXRUeXBlIiwidHlwZSIsIlRZUEVfVE9LRU5fVFlQRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJ1bmRlZmluZWQiLCJwYXJhbWV0ZXJOb2RlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzswQkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE9BQU87Z0JBRVgsSUFBTUMsWUFBWUMsMkJBQWU7Z0JBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBQ0M7b0JBQ3JCLElBQU1DLFVBQVVELGFBQWFFLFVBQVU7b0JBRXZDTixPQUFPSyxTQUFTLEVBQUU7b0JBRWxCLE9BQU87Z0JBQ1QsR0FBR0o7Z0JBRUgsT0FBT0Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU1QLFlBQVlRLDJCQUFlO2dCQUVqQyxJQUFJLENBQUNOLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q0UsT0FBT0gsU0FBUyxFQUFFO29CQUVsQixPQUFPO2dCQUNULEdBQUdKO2dCQUVILE9BQU9PO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQ2hHLElBQUlBLGVBQWVDLFdBQVc7b0JBQzVCRCxhQUFhRCxTQUFTLEdBQUc7b0JBRXpCQSxVQUFVRCxZQUFZLEdBQUc7b0JBRXpCQSxhQUFhRCxVQUFXLEdBQUc7b0JBRTNCQSxXQUFXRCxPQUFPLEdBQUc7b0JBRXJCQSxRQTNDZWI7Z0JBNENqQjtnQkFFQSxJQUFNbUIsZ0JBQWdCQyx3QkFBZSxDQUFDUiwwQ0FBMEMsQ0FBQ0MsT0FBT0MsVUFBVUMsWUFBWUMsU0FBU0M7Z0JBRXZILE9BQU9FO1lBQ1Q7OztXQWpEbUJuQjtFQUFxQm9CLHdCQUFlIn0=