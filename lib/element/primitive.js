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
    constructor(context, string, node, breakPoint, type, value){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgTlVNQkVSX1RZUEUsIEJPT0xFQU5fVFlQRSAgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcmltaXRpdmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB2YWx1ZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJpbWl0aXZlID0gdGhpcyxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tUHJpbWl0aXZlKHByaW1pdGl2ZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhwcmltaXRpdmUpIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZSA9IHByaW1pdGl2ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSB0eXBlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZS5nZXRWYWx1ZSgpO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBOT0RFX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMudmFsdWUsIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVCID0gdmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTk9ERVNfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMudmFsdWUsIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVzQiA9IHZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgICAgaWYgKG5vZGVzTWF0Y2gpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBTVFJJTkdfVFlQRToge1xuICAgICAgICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbEIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgICAgaWYgKHN0cmluZ0xpdGVyYWxBID09PSBzdHJpbmdMaXRlcmFsQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE5VTUJFUl9UWVBFOiB7XG4gICAgICAgICAgY29uc3QgbnVtYmVyQSA9IHRoaXMudmFsdWUsIC8vL1xuICAgICAgICAgICAgICAgIG51bWJlckIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgICAgaWYgKG51bWJlckEgPT09IG51bWJlckIpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBCT09MRUFOX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBib29sZWFuQSA9IHRoaXMudmFsdWUsIC8vL1xuICAgICAgICAgICAgICAgIGJvb2xlYW5CID0gdmFsdWU7ICAvLy9cblxuICAgICAgICAgIGlmIChib29sZWFuQSA9PT0gYm9vbGVhbkIpIHtcbiAgICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJpbWl0aXZlXCI7XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIGlmIChub2RlQSA9PT0gbnVsbE5vZGUpIHtcbiAgICBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKG5vZGVCID09PSBudWxsTm9kZSkge1xuICAgIG5vZGVNYXRjaGVzID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFNYXRjaGVzTm9kZUIgPSBub2RlQS5tYXRjaChub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBTWF0Y2hlc05vZGVCOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgY29uc3Qgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJpbWl0aXZlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJ2YWx1ZSIsImdldFR5cGUiLCJnZXRWYWx1ZSIsImV2YWx1YXRlIiwiVGVybSIsImVsZW1lbnRzIiwicHJpbWl0aXZlIiwidGVybSIsImZyb21QcmltaXRpdmUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiTk9ERV9UWVBFIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiTk9ERVNfVFlQRSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiU1RSSU5HX1RZUEUiLCJzdHJpbmdMaXRlcmFsQSIsInN0cmluZ0xpdGVyYWxCIiwiTlVNQkVSX1RZUEUiLCJudW1iZXJBIiwibnVtYmVyQiIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW5BIiwiYm9vbGVhbkIiLCJuYW1lIiwibnVsbE5vZGUiLCJub2RlQU1hdGNoZXNOb2RlQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzJCQUNPO2tFQUVWO2lFQUNBO3VCQUcwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0UsTUFBTSxFQUFFQSxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFaEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUU7UUFDMUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixNQUFNLEVBQUVTLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsWUFBWSxJQUFJLEVBQ2hCQyxPQUFPSCxLQUFLSSxhQUFhLENBQUNGLFdBQVdYO1FBRTNDLE9BQU9ZO0lBQ1Q7SUFFQUUsVUFBVUgsU0FBUyxFQUFFO1FBQ25CLElBQUlJLFVBQVU7UUFFZCxNQUFNWCxPQUFPTyxVQUFVTCxPQUFPO1FBRTlCLElBQUksSUFBSSxDQUFDRixJQUFJLEtBQUtBLE1BQU07WUFDdEIsTUFBTUMsUUFBUU0sVUFBVUosUUFBUTtZQUVoQyxPQUFRSDtnQkFDTixLQUFLWSxnQkFBUztvQkFBRTt3QkFDZCxNQUFNQyxRQUFRLElBQUksQ0FBQ1osS0FBSyxFQUNsQmEsUUFBUWIsT0FDUmMsY0FBY0MsVUFBVUgsT0FBT0M7d0JBRXJDLElBQUlDLGFBQWE7NEJBQ2ZKLFVBQVU7d0JBQ1o7d0JBRUE7b0JBQ0Y7Z0JBRUEsS0FBS00saUJBQVU7b0JBQUU7d0JBQ2YsTUFBTUMsU0FBUyxJQUFJLENBQUNqQixLQUFLLEVBQ25Ca0IsU0FBU2xCLE9BQ1RtQixhQUFhQyxXQUFXSCxRQUFRQzt3QkFFdEMsSUFBSUMsWUFBWTs0QkFDZFQsVUFBVTt3QkFDWjt3QkFFQTtvQkFDRjtnQkFFQSxLQUFLVyxrQkFBVztvQkFBRTt3QkFDaEIsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ3RCLEtBQUssRUFDM0J1QixpQkFBaUJ2QixPQUFRLEdBQUc7d0JBRWxDLElBQUlzQixtQkFBbUJDLGdCQUFnQjs0QkFDckNiLFVBQVU7d0JBQ1o7d0JBRUE7b0JBQ0Y7Z0JBRUEsS0FBS2Msa0JBQVc7b0JBQUU7d0JBQ2hCLE1BQU1DLFVBQVUsSUFBSSxDQUFDekIsS0FBSyxFQUNwQjBCLFVBQVUxQixPQUFRLEdBQUc7d0JBRTNCLElBQUl5QixZQUFZQyxTQUFTOzRCQUN2QmhCLFVBQVU7d0JBQ1o7d0JBRUE7b0JBQ0Y7Z0JBRUEsS0FBS2lCLG1CQUFZO29CQUFFO3dCQUNqQixNQUFNQyxXQUFXLElBQUksQ0FBQzVCLEtBQUssRUFDckI2QixXQUFXN0IsT0FBUSxHQUFHO3dCQUU1QixJQUFJNEIsYUFBYUMsVUFBVTs0QkFDekJuQixVQUFVO3dCQUNaO3dCQUVBO29CQUNGO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPb0IsT0FBTyxZQUFZO0FBQzVCO0FBRUEsU0FBU2YsVUFBVUgsS0FBSyxFQUFFQyxLQUFLO0lBQzdCLElBQUlDO0lBRUosSUFBSSxBQUFDRixVQUFVbUIsaUJBQVEsSUFBTWxCLFVBQVVrQixpQkFBUSxFQUFHO1FBQ2hEakIsY0FBZUYsVUFBVUM7SUFDM0IsT0FBTyxJQUFJRCxVQUFVbUIsaUJBQVEsRUFBRTtRQUM3QmpCLGNBQWM7SUFDaEIsT0FBTyxJQUFJRCxVQUFVa0IsaUJBQVEsRUFBRTtRQUM3QmpCLGNBQWM7SUFDaEIsT0FBTztRQUNMLE1BQU1rQixvQkFBb0JwQixNQUFNdEIsS0FBSyxDQUFDdUI7UUFFdENDLGNBQWNrQixtQkFBb0IsR0FBRztJQUN2QztJQUVBLE9BQU9sQjtBQUNUO0FBRUEsU0FBU00sV0FBV0gsTUFBTSxFQUFFQyxNQUFNO0lBQ2hDLE1BQU1DLGFBQWE3QixNQUFNMkIsUUFBUUMsUUFBUSxDQUFDTixPQUFPQztRQUMvQyxNQUFNQyxjQUFjQyxVQUFVSCxPQUFPQztRQUVyQyxJQUFJQyxhQUFhO1lBQ2YsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSztBQUNUIn0=