"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrimitiveNode;
    }
});
var _occamlanguages = require("occam-languages");
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _constants = require("../constants");
var _types = require("../types");
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
var PrimitiveNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PrimitiveNode, NonTerminalNode);
    function PrimitiveNode() {
        _class_call_check(this, PrimitiveNode);
        return _call_super(this, PrimitiveNode, arguments);
    }
    _create_class(PrimitiveNode, [
        {
            key: "getType",
            value: function getType() {
                var type;
                var node = this.getNode(), number = this.getNumber(), boolean = this.getBoolean(), stringLiteral = this.getStringLiteral();
                if (false) {
                ///
                } else if (node !== null) {
                    type = _types.NODE_TYPE;
                } else if (number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (stringLiteral !== null) {
                    type = _types.STRING_TYPE;
                }
                return type;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                var value;
                var node = this.getNode(), number = this.getNumber(), boolean = this.getBoolean(), stringLiteral = this.getStringLiteral();
                if (false) {
                ///
                } else if (node !== null) {
                    value = node; ///
                } else if (number !== null) {
                    value = number; ///
                } else if (boolean !== null) {
                    value = boolean; ///
                } else if (stringLiteral !== null) {
                    value = stringLiteral; ///
                }
                return value;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                var node = null;
                var tokenType = _tokenTypes.NULL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.NULL) {
                        node = _nullNode.default;
                        return true;
                    }
                }, tokenType);
                return node;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                var number = null;
                var tokenType = _tokenTypes.NUMBER_TOKEN_TYPE; ///
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        number = Number(content);
                        return true;
                    }
                }, tokenType);
                return number;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                var boolean = null;
                var tokenType = _tokenTypes.BOOLEAN_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        boolean = true;
                        return true;
                    }
                    if (content === _constants.FALSE) {
                        boolean = false;
                        return true;
                    }
                }, tokenType);
                return boolean;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                var stringLiteral = null;
                var tokenType = _tokenTypes.STRING_LITERAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    stringLiteral = content; ///
                    return true;
                }, tokenType);
                return stringLiteral;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PrimitiveNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PrimitiveNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwsIFRSVUUsIEZBTFNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBTVFJJTkdfVFlQRSwgTlVNQkVSX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgTlVMTF9UT0tFTl9UWVBFLCBOVU1CRVJfVE9LRU5fVFlQRSwgQk9PTEVBTl9UT0tFTl9UWVBFLCBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbWl0aXZlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbnVtYmVyID0gdGhpcy5nZXROdW1iZXIoKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5nZXRCb29sZWFuKCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHRoaXMuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKGJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmIChzdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbnVtYmVyID0gdGhpcy5nZXROdW1iZXIoKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5nZXRCb29sZWFuKCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHRoaXMuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gbm9kZTsgLy8vXG4gICAgfSBlbHNlIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gbnVtYmVyOyAvLy9cbiAgICB9IGVsc2UgaWYgKGJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYm9vbGVhbjsgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nTGl0ZXJhbCAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBzdHJpbmdMaXRlcmFsOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOVUxMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBOVUxMKSB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOVU1CRVJfVE9LRU5fVFlQRTsgLy8vXG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBUUlVFKSB7XG4gICAgICAgIG51bWJlciA9IE51bWJlcihjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gQk9PTEVBTl9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gVFJVRSkge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgPT09IEZBTFNFKSB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIGxldCBzdHJpbmdMaXRlcmFsID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHN0cmluZ0xpdGVyYWwgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJpbWl0aXZlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJpbWl0aXZlTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibm9kZSIsImdldE5vZGUiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmdMaXRlcmFsIiwiTk9ERV9UWVBFIiwiTlVNQkVSX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJTVFJJTkdfVFlQRSIsImdldFZhbHVlIiwidmFsdWUiLCJ0b2tlblR5cGUiLCJOVUxMX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJOVUxMIiwibnVsbE5vZGUiLCJOVU1CRVJfVE9LRU5fVFlQRSIsIlRSVUUiLCJOdW1iZXIiLCJCT09MRUFOX1RPS0VOX1RZUEUiLCJGQUxTRSIsIlNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7OEJBUlc7K0RBRVg7eUJBRWE7cUJBQ2dDOzBCQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUUzQyxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUlQLFNBQVMsTUFBTTtvQkFDeEJELE9BQU9TLGdCQUFTO2dCQUNsQixPQUFPLElBQUlOLFdBQVcsTUFBTTtvQkFDMUJILE9BQU9VLGtCQUFXO2dCQUNwQixPQUFPLElBQUlMLFlBQVksTUFBTTtvQkFDM0JMLE9BQU9XLG1CQUFZO2dCQUNyQixPQUFPLElBQUlKLGtCQUFrQixNQUFNO29CQUNqQ1AsT0FBT1ksa0JBQVc7Z0JBQ3BCO2dCQUVBLE9BQU9aO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTWIsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUUzQyxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUlQLFNBQVMsTUFBTTtvQkFDeEJhLFFBQVFiLE1BQU0sR0FBRztnQkFDbkIsT0FBTyxJQUFJRSxXQUFXLE1BQU07b0JBQzFCVyxRQUFRWCxRQUFRLEdBQUc7Z0JBQ3JCLE9BQU8sSUFBSUUsWUFBWSxNQUFNO29CQUMzQlMsUUFBUVQsU0FBVSxHQUFHO2dCQUN2QixPQUFPLElBQUlFLGtCQUFrQixNQUFNO29CQUNqQ08sUUFBUVAsZUFBZ0IsR0FBRztnQkFDN0I7Z0JBRUEsT0FBT087WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxPQUFPO2dCQUVYLElBQU1jLFlBQVlDLDJCQUFlO2dCQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2QyxJQUFJRCxZQUFZRSxlQUFJLEVBQUU7d0JBQ3BCcEIsT0FBT3FCLGlCQUFRO3dCQUVmLE9BQU87b0JBQ1Q7Z0JBQ0YsR0FBR1A7Z0JBRUgsT0FBT2Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxTQUFTO2dCQUViLElBQU1ZLFlBQVlRLDZCQUFpQixFQUFFLEdBQUc7Z0JBRXhDLElBQUksQ0FBQ04sZ0JBQWdCLENBQUMsU0FBQ0M7b0JBQ3JCLElBQU1DLFVBQVVELGFBQWFFLFVBQVU7b0JBRXZDLElBQUlELFlBQVlLLGVBQUksRUFBRTt3QkFDcEJyQixTQUFTc0IsT0FBT047d0JBRWhCLE9BQU87b0JBQ1Q7Z0JBQ0YsR0FBR0o7Z0JBRUgsT0FBT1o7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxVQUFVO2dCQUVkLElBQU1VLFlBQVlXLDhCQUFrQjtnQkFFcEMsSUFBSSxDQUFDVCxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkMsSUFBSUQsWUFBWUssZUFBSSxFQUFFO3dCQUNwQm5CLFVBQVU7d0JBRVYsT0FBTztvQkFDVDtvQkFFQSxJQUFJYyxZQUFZUSxnQkFBSyxFQUFFO3dCQUNyQnRCLFVBQVU7d0JBRVYsT0FBTztvQkFDVDtnQkFDRixHQUFHVTtnQkFFSCxPQUFPVjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELGdCQUFnQjtnQkFFcEIsSUFBTVEsWUFBWWEscUNBQXlCO2dCQUUzQyxJQUFJLENBQUNYLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q2IsZ0JBQWdCWSxTQUFVLEdBQUc7b0JBRTdCLE9BQU87Z0JBQ1QsR0FBR0o7Z0JBRUgsT0FBT1I7WUFDVDs7OztZQUVPc0IsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLCtCQUFlLENBQUNMLDBDQUEwQyxDQTNIN0kvQixlQTJINkpnQyxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0EzSHpNbkM7RUFBc0JvQywrQkFBZSJ9