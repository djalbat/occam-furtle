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
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _types = require("../types");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _Primitive;
var match = _necessary.arrayUtilities.match;
var _default = (0, _elements.define)((_Primitive = /*#__PURE__*/ function(Element) {
    _inherits(Primitive, Element);
    function Primitive(context, string, node, type, value) {
        _class_call_check(this, Primitive);
        var _this;
        _this = _call_super(this, Primitive, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.value = value;
        return _this;
    }
    _create_class(Primitive, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var Term = _elements.default.Term, primitive = this, term = Term.fromPrimitive(primitive, context);
                return term;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(primitive) {
                var equalTo = false;
                var type = primitive.getType();
                if (this.type === type) {
                    var value = primitive.getValue();
                    switch(type){
                        case _types.NODE_TYPE:
                            {
                                var nodeA = this.value, nodeB = value, nodeMatches = matchNode(nodeA, nodeB);
                                if (nodeMatches) {
                                    equalTo = true;
                                }
                                break;
                            }
                        case _types.NODES_TYPE:
                            {
                                var nodesA = this.value, nodesB = value, nodesMatch = matchNodes(nodesA, nodesB);
                                if (nodesMatch) {
                                    equalTo = true;
                                }
                                break;
                            }
                        case _types.STRING_TYPE:
                            {
                                var stringLiteralA = this.value, stringLiteralB = value; ///
                                if (stringLiteralA === stringLiteralB) {
                                    equalTo = true;
                                }
                                break;
                            }
                        case _types.NUMBER_TYPE:
                            {
                                var numberA = this.value, numberB = value; ///
                                if (numberA === numberB) {
                                    equalTo = true;
                                }
                                break;
                            }
                        case _types.BOOLEAN_TYPE:
                            {
                                var booleanA = this.value, booleanB = value; ///
                                if (booleanA === booleanB) {
                                    equalTo = true;
                                }
                                break;
                            }
                    }
                }
                return equalTo;
            }
        }
    ]);
    return Primitive;
}(_wrap_native_super(_element.default)), _define_property(_Primitive, "name", "Primitive"), _Primitive));
function matchNode(nodeA, nodeB) {
    var nodeMatches;
    if (nodeA === _nullNode.default || nodeB === _nullNode.default) {
        nodeMatches = nodeA === nodeB;
    } else if (nodeA === _nullNode.default) {
        nodeMatches = false;
    } else if (nodeB === _nullNode.default) {
        nodeMatches = false;
    } else {
        var nodeAMatchesNodeB = nodeA.match(nodeB);
        nodeMatches = nodeAMatchesNodeB; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    var nodesMatch = match(nodesA, nodesB, function(nodeA, nodeB) {
        var nodeMatches = matchNode(nodeA, nodeB);
        if (nodeMatches) {
            return true;
        }
    });
    return nodesMatch;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgTlVNQkVSX1RZUEUsIEJPT0xFQU5fVFlQRSAgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcmltaXRpdmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YWx1ZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcmltaXRpdmUgPSB0aGlzLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByaW1pdGl2ZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlID0gcHJpbWl0aXZlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJpbWl0aXZlLmdldFZhbHVlKCk7XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIE5PREVfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9kZUIgPSB2YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBOT0RFU19UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgbm9kZXNBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNCID0gdmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgICBpZiAobm9kZXNNYXRjaCkge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFNUUklOR19UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nTGl0ZXJhbEEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBzdHJpbmdMaXRlcmFsQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAoc3RyaW5nTGl0ZXJhbEEgPT09IHN0cmluZ0xpdGVyYWxCKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTlVNQkVSX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBudW1iZXJBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbnVtYmVyQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAobnVtYmVyQSA9PT0gbnVtYmVyQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEJPT0xFQU5fVFlQRToge1xuICAgICAgICAgIGNvbnN0IGJvb2xlYW5BID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgYm9vbGVhbkIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgICAgaWYgKGJvb2xlYW5BID09PSBib29sZWFuQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmltaXRpdmVcIjtcbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKSB7XG4gIGxldCBub2RlTWF0Y2hlcztcblxuICBpZiAoKG5vZGVBID09PSBudWxsTm9kZSkgfHwgKG5vZGVCID09PSBudWxsTm9kZSkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2UgaWYgKG5vZGVBID09PSBudWxsTm9kZSkge1xuICAgIG5vZGVNYXRjaGVzID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobm9kZUIgPT09IG51bGxOb2RlKSB7XG4gICAgbm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQU1hdGNoZXNOb2RlQiA9IG5vZGVBLm1hdGNoKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFNYXRjaGVzTm9kZUI7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBjb25zdCBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJQcmltaXRpdmUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJ2YWx1ZSIsImdldFR5cGUiLCJnZXRWYWx1ZSIsImV2YWx1YXRlIiwiVGVybSIsImVsZW1lbnRzIiwicHJpbWl0aXZlIiwidGVybSIsImZyb21QcmltaXRpdmUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiTk9ERV9UWVBFIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiTk9ERVNfVFlQRSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiU1RSSU5HX1RZUEUiLCJzdHJpbmdMaXRlcmFsQSIsInN0cmluZ0xpdGVyYWxCIiwiTlVNQkVSX1RZUEUiLCJudW1iZXJBIiwibnVtYmVyQiIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW5BIiwiYm9vbGVhbkIiLCJFbGVtZW50IiwibmFtZSIsIm51bGxOb2RlIiwibm9kZUFNYXRjaGVzTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFB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