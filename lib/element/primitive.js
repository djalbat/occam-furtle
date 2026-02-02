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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _types = require("../types");
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
var _Primitive;
var match = _necessary.arrayUtilities.match;
var _default = (0, _elements.define)((_Primitive = /*#__PURE__*/ function() {
    function Primitive(string, type, value) {
        _class_call_check(this, Primitive);
        this.string = string;
        this.type = type;
        this.value = value;
    }
    _create_class(Primitive, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
            key: "getNode",
            value: function getNode() {
                var node = null;
                if (this.type === _types.NODE_TYPE) {
                    node = this.value; ///
                }
                return node;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                var nodes = null;
                if (this.type === _types.NODES_TYPE) {
                    nodes = this.value; ///
                }
                return nodes;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                var number = null;
                if (this.type === _types.NUMBER_TYPE) {
                    number = this.value; ///
                }
                return number;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                var boolean = null;
                if (this.type === _types.BOOLEAN_TYPE) {
                    boolean = this.value; ///
                }
                return boolean;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                var stringLiteral = null;
                if (this.type === _types.STRING_TYPE) {
                    stringLiteral = this.value; ///
                }
                return stringLiteral;
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
}(), _define_property(_Primitive, "name", "Primitive"), _Primitive));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBOVU1CRVJfVFlQRSwgQk9PTEVBTl9UWVBFICB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByaW1pdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gTk9ERV9UWVBFKSB7XG4gICAgICBub2RlID0gdGhpcy52YWx1ZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IE5PREVTX1RZUEUpIHtcbiAgICAgIG5vZGVzID0gdGhpcy52YWx1ZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIGxldCBudW1iZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gTlVNQkVSX1RZUEUpIHtcbiAgICAgIG51bWJlciA9IHRoaXMudmFsdWU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICBsZXQgYm9vbGVhbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGJvb2xlYW4gPSB0aGlzLnZhbHVlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7XG4gICAgbGV0IHN0cmluZ0xpdGVyYWwgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIHN0cmluZ0xpdGVyYWwgPSB0aGlzLnZhbHVlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByaW1pdGl2ZSA9IHRoaXMsXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVByaW1pdGl2ZShwcmltaXRpdmUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8ocHJpbWl0aXZlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGUgPSBwcmltaXRpdmUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcmltaXRpdmUuZ2V0VmFsdWUoKTtcblxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgTk9ERV9UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBub2RlQiA9IHZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE5PREVTX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSB2YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICAgIGlmIChub2Rlc01hdGNoKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgU1RSSU5HX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmdMaXRlcmFsQSA9IHRoaXMudmFsdWUsIC8vL1xuICAgICAgICAgICAgICAgIHN0cmluZ0xpdGVyYWxCID0gdmFsdWU7ICAvLy9cblxuICAgICAgICAgIGlmIChzdHJpbmdMaXRlcmFsQSA9PT0gc3RyaW5nTGl0ZXJhbEIpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBOVU1CRVJfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG51bWJlckEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBudW1iZXJCID0gdmFsdWU7ICAvLy9cblxuICAgICAgICAgIGlmIChudW1iZXJBID09PSBudW1iZXJCKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQk9PTEVBTl9UWVBFOiB7XG4gICAgICAgICAgY29uc3QgYm9vbGVhbkEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBib29sZWFuQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAoYm9vbGVhbkEgPT09IGJvb2xlYW5CKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByaW1pdGl2ZVwiO1xufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSBpZiAobm9kZUEgPT09IG51bGxOb2RlKSB7XG4gICAgbm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChub2RlQiA9PT0gbnVsbE5vZGUpIHtcbiAgICBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBTWF0Y2hlc05vZGVCID0gbm9kZUEubWF0Y2gobm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQU1hdGNoZXNOb2RlQjsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGNvbnN0IG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlByaW1pdGl2ZSIsInN0cmluZyIsInR5cGUiLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRWYWx1ZSIsImdldE5vZGUiLCJub2RlIiwiTk9ERV9UWVBFIiwiZ2V0Tm9kZXMiLCJub2RlcyIsIk5PREVTX1RZUEUiLCJnZXROdW1iZXIiLCJudW1iZXIiLCJOVU1CRVJfVFlQRSIsImdldEJvb2xlYW4iLCJib29sZWFuIiwiQk9PTEVBTl9UWVBFIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInN0cmluZ0xpdGVyYWwiLCJTVFJJTkdfVFlQRSIsImV2YWx1YXRlIiwiY29udGV4dCIsIlRlcm0iLCJlbGVtZW50cyIsInByaW1pdGl2ZSIsInRlcm0iLCJmcm9tUHJpbWl0aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwic3RyaW5nTGl0ZXJhbEEiLCJzdHJpbmdMaXRlcmFsQiIsIm51bWJlckEiLCJudW1iZXJCIiwiYm9vbGVhbkEiLCJib29sZWFuQiIsIm5hbWUiLCJudWxsTm9kZSIsIm5vZGVBTWF0Y2hlc05vZGVCIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7Z0VBRVY7K0RBQ0E7cUJBRzBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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