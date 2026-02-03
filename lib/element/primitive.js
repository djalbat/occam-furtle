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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBOVU1CRVJfVFlQRSwgQk9PTEVBTl9UWVBFICB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByaW1pdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHByaW1pdGl2ZSA9IHRoaXMsXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVByaW1pdGl2ZShwcmltaXRpdmUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8ocHJpbWl0aXZlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGUgPSBwcmltaXRpdmUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcmltaXRpdmUuZ2V0VmFsdWUoKTtcblxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgTk9ERV9UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBub2RlQiA9IHZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE5PREVTX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSB2YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICAgIGlmIChub2Rlc01hdGNoKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgU1RSSU5HX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmdMaXRlcmFsQSA9IHRoaXMudmFsdWUsIC8vL1xuICAgICAgICAgICAgICAgIHN0cmluZ0xpdGVyYWxCID0gdmFsdWU7ICAvLy9cblxuICAgICAgICAgIGlmIChzdHJpbmdMaXRlcmFsQSA9PT0gc3RyaW5nTGl0ZXJhbEIpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBOVU1CRVJfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG51bWJlckEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBudW1iZXJCID0gdmFsdWU7ICAvLy9cblxuICAgICAgICAgIGlmIChudW1iZXJBID09PSBudW1iZXJCKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQk9PTEVBTl9UWVBFOiB7XG4gICAgICAgICAgY29uc3QgYm9vbGVhbkEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBib29sZWFuQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAoYm9vbGVhbkEgPT09IGJvb2xlYW5CKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByaW1pdGl2ZVwiO1xufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSBpZiAobm9kZUEgPT09IG51bGxOb2RlKSB7XG4gICAgbm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChub2RlQiA9PT0gbnVsbE5vZGUpIHtcbiAgICBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBTWF0Y2hlc05vZGVCID0gbm9kZUEubWF0Y2gobm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQU1hdGNoZXNOb2RlQjsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGNvbnN0IG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlByaW1pdGl2ZSIsInN0cmluZyIsInR5cGUiLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsIlRlcm0iLCJlbGVtZW50cyIsInByaW1pdGl2ZSIsInRlcm0iLCJmcm9tUHJpbWl0aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIk5PREVfVFlQRSIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIk5PREVTX1RZUEUiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIlNUUklOR19UWVBFIiwic3RyaW5nTGl0ZXJhbEEiLCJzdHJpbmdMaXRlcmFsQiIsIk5VTUJFUl9UWVBFIiwibnVtYmVyQSIsIm51bWJlckIiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuQSIsImJvb2xlYW5CIiwibmFtZSIsIm51bGxOb2RlIiwibm9kZUFNYXRjaGVzTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjtnRUFFVjsrREFDQTtxQkFHMEQ7Ozs7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