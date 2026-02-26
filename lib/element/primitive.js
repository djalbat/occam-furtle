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
const _occamlanguages = require("occam-languages");
const _necessary = require("necessary");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
const _types = require("../types");
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
const { match } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Primitive extends _occamlanguages.Element {
    constructor(context, string, node, type, value){
        super(context, string, node);
        this.type = type;
        this.value = value;
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
    evaluate(context) {
        const { Term } = _elements.default, primitive = this, term = Term.fromPrimitive(primitive, context);
        return term;
    }
    isEqualTo(primitive) {
        let equalTo = false;
        const type = primitive.getType();
        if (this.type === type) {
            const value = primitive.getValue();
            switch(type){
                case _types.NODE_TYPE:
                    {
                        const nodeA = this.value, nodeB = value, nodeMatches = matchNode(nodeA, nodeB);
                        if (nodeMatches) {
                            equalTo = true;
                        }
                        break;
                    }
                case _types.NODES_TYPE:
                    {
                        const nodesA = this.value, nodesB = value, nodesMatch = matchNodes(nodesA, nodesB);
                        if (nodesMatch) {
                            equalTo = true;
                        }
                        break;
                    }
                case _types.STRING_TYPE:
                    {
                        const stringLiteralA = this.value, stringLiteralB = value; ///
                        if (stringLiteralA === stringLiteralB) {
                            equalTo = true;
                        }
                        break;
                    }
                case _types.NUMBER_TYPE:
                    {
                        const numberA = this.value, numberB = value; ///
                        if (numberA === numberB) {
                            equalTo = true;
                        }
                        break;
                    }
                case _types.BOOLEAN_TYPE:
                    {
                        const booleanA = this.value, booleanB = value; ///
                        if (booleanA === booleanB) {
                            equalTo = true;
                        }
                        break;
                    }
            }
        }
        return equalTo;
    }
    static name = "Primitive";
});
function matchNode(nodeA, nodeB) {
    let nodeMatches;
    if (nodeA === _nullNode.default || nodeB === _nullNode.default) {
        nodeMatches = nodeA === nodeB;
    } else if (nodeA === _nullNode.default) {
        nodeMatches = false;
    } else if (nodeB === _nullNode.default) {
        nodeMatches = false;
    } else {
        const nodeAMatchesNodeB = nodeA.match(nodeB);
        nodeMatches = nodeAMatchesNodeB; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    const nodesMatch = match(nodesA, nodesB, (nodeA, nodeB)=>{
        const nodeMatches = matchNode(nodeA, nodeB);
        if (nodeMatches) {
            return true;
        }
    });
    return nodesMatch;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgTlVNQkVSX1RZUEUsIEJPT0xFQU5fVFlQRSAgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcmltaXRpdmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YWx1ZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcmltaXRpdmUgPSB0aGlzLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByaW1pdGl2ZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlID0gcHJpbWl0aXZlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJpbWl0aXZlLmdldFZhbHVlKCk7XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIE5PREVfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9kZUIgPSB2YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBOT0RFU19UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgbm9kZXNBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNCID0gdmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgICBpZiAobm9kZXNNYXRjaCkge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFNUUklOR19UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nTGl0ZXJhbEEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBzdHJpbmdMaXRlcmFsQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAoc3RyaW5nTGl0ZXJhbEEgPT09IHN0cmluZ0xpdGVyYWxCKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTlVNQkVSX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBudW1iZXJBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbnVtYmVyQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAobnVtYmVyQSA9PT0gbnVtYmVyQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEJPT0xFQU5fVFlQRToge1xuICAgICAgICAgIGNvbnN0IGJvb2xlYW5BID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgYm9vbGVhbkIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgICAgaWYgKGJvb2xlYW5BID09PSBib29sZWFuQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmltaXRpdmVcIjtcbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKSB7XG4gIGxldCBub2RlTWF0Y2hlcztcblxuICBpZiAoKG5vZGVBID09PSBudWxsTm9kZSkgfHwgKG5vZGVCID09PSBudWxsTm9kZSkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2UgaWYgKG5vZGVBID09PSBudWxsTm9kZSkge1xuICAgIG5vZGVNYXRjaGVzID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobm9kZUIgPT09IG51bGxOb2RlKSB7XG4gICAgbm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQU1hdGNoZXNOb2RlQiA9IG5vZGVBLm1hdGNoKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFNYXRjaGVzTm9kZUI7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBjb25zdCBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJQcmltaXRpdmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwidmFsdWUiLCJnZXRUeXBlIiwiZ2V0VmFsdWUiLCJldmFsdWF0ZSIsIlRlcm0iLCJlbGVtZW50cyIsInByaW1pdGl2ZSIsInRlcm0iLCJmcm9tUHJpbWl0aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIk5PREVfVFlQRSIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIk5PREVTX1RZUEUiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIlNUUklOR19UWVBFIiwic3RyaW5nTGl0ZXJhbEEiLCJzdHJpbmdMaXRlcmFsQiIsIk5VTUJFUl9UWVBFIiwibnVtYmVyQSIsIm51bWJlckIiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuQSIsImJvb2xlYW5CIiwibmFtZSIsIm51bGxOb2RlIiwibm9kZUFNYXRjaGVzTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytC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