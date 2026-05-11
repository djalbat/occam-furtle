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
const _types = require("../types");
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
                case _types.NOMINAL_VALUE_TYPE:
                    {
                        const nominalValueA = this.value, nomimalValueB = value, matches = nominalValueA.match(nomimalValueB);
                        if (matches) {
                            equalTo = true;
                        }
                        break;
                    }
                case _types.NOMINAL_VALUES_TYPE:
                    {
                        const nominalValuesA = this.value, nominalValuesB = value, matches = match(nominalValuesA, nominalValuesB, (nominalValueA, nomimalValueB)=>{
                            const matches = nominalValueA.match(nomimalValueB);
                            if (matches) {
                                return true;
                            }
                        });
                        if (matches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgU1RSSU5HX1RZUEUsIE5VTUJFUl9UWVBFLCBCT09MRUFOX1RZUEUsIE5PTUlOQUxfVkFMVUVfVFlQRSwgTk9NSU5BTF9WQUxVRVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByaW1pdGl2ZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHZhbHVlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBwcmltaXRpdmUgPSB0aGlzLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByaW1pdGl2ZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlID0gcHJpbWl0aXZlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJpbWl0aXZlLmdldFZhbHVlKCk7XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFNUUklOR19UWVBFOiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nTGl0ZXJhbEEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBzdHJpbmdMaXRlcmFsQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAoc3RyaW5nTGl0ZXJhbEEgPT09IHN0cmluZ0xpdGVyYWxCKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTlVNQkVSX1RZUEU6IHtcbiAgICAgICAgICBjb25zdCBudW1iZXJBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbnVtYmVyQiA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgICBpZiAobnVtYmVyQSA9PT0gbnVtYmVyQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEJPT0xFQU5fVFlQRToge1xuICAgICAgICAgIGNvbnN0IGJvb2xlYW5BID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgYm9vbGVhbkIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgICAgaWYgKGJvb2xlYW5BID09PSBib29sZWFuQikge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE5PTUlOQUxfVkFMVUVfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG5vbWluYWxWYWx1ZUEgPSB0aGlzLnZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICBub21pbWFsVmFsdWVCID0gdmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbm9taW5hbFZhbHVlQS5tYXRjaChub21pbWFsVmFsdWVCKTtcblxuICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTk9NSU5BTF9WQUxVRVNfVFlQRToge1xuICAgICAgICAgIGNvbnN0IG5vbWluYWxWYWx1ZXNBID0gdGhpcy52YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9taW5hbFZhbHVlc0IgPSB2YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaChub21pbmFsVmFsdWVzQSwgbm9taW5hbFZhbHVlc0IsIChub21pbmFsVmFsdWVBLCBub21pbWFsVmFsdWVCKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbm9taW5hbFZhbHVlQS5tYXRjaChub21pbWFsVmFsdWVCKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByaW1pdGl2ZVwiO1xufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlByaW1pdGl2ZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0eXBlIiwidmFsdWUiLCJnZXRUeXBlIiwiZ2V0VmFsdWUiLCJldmFsdWF0ZSIsIlRlcm0iLCJlbGVtZW50cyIsInByaW1pdGl2ZSIsInRlcm0iLCJmcm9tUHJpbWl0aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIlNUUklOR19UWVBFIiwic3RyaW5nTGl0ZXJhbEEiLCJzdHJpbmdMaXRlcmFsQiIsIk5VTUJFUl9UWVBFIiwibnVtYmVyQSIsIm51bWJlckIiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuQSIsImJvb2xlYW5CIiwiTk9NSU5BTF9WQUxVRV9UWVBFIiwibm9taW5hbFZhbHVlQSIsIm5vbWltYWxWYWx1ZUIiLCJtYXRjaGVzIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsIm5vbWluYWxWYWx1ZXNBIiwibm9taW5hbFZhbHVlc0IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MkJBQ087a0VBRVY7dUJBRzJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEcsTUFBTSxFQUFFQSxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFaEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUU7UUFDMUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixNQUFNLEVBQUVTLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsWUFBWSxJQUFJLEVBQ2hCQyxPQUFPSCxLQUFLSSxhQUFhLENBQUNGLFdBQVdYO1FBRTNDLE9BQU9ZO0lBQ1Q7SUFFQUUsVUFBVUgsU0FBUyxFQUFFO1FBQ25CLElBQUlJLFVBQVU7UUFFZCxNQUFNWCxPQUFPTyxVQUFVTCxPQUFPO1FBRTlCLElBQUksSUFBSSxDQUFDRixJQUFJLEtBQUtBLE1BQU07WUFDdEIsTUFBTUMsUUFBUU0sVUFBVUosUUFBUTtZQUVoQyxPQUFRSDtnQkFDTixLQUFLWSxrQkFBVztvQkFBRTt3QkFDaEIsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ1osS0FBSyxFQUMzQmEsaUJBQWlCYixPQUFRLEdBQUc7d0JBRWxDLElBQUlZLG1CQUFtQkMsZ0JBQWdCOzRCQUNyQ0gsVUFBVTt3QkFDWjt3QkFFQTtvQkFDRjtnQkFFQSxLQUFLSSxrQkFBVztvQkFBRTt3QkFDaEIsTUFBTUMsVUFBVSxJQUFJLENBQUNmLEtBQUssRUFDcEJnQixVQUFVaEIsT0FBUSxHQUFHO3dCQUUzQixJQUFJZSxZQUFZQyxTQUFTOzRCQUN2Qk4sVUFBVTt3QkFDWjt3QkFFQTtvQkFDRjtnQkFFQSxLQUFLTyxtQkFBWTtvQkFBRTt3QkFDakIsTUFBTUMsV0FBVyxJQUFJLENBQUNsQixLQUFLLEVBQ3JCbUIsV0FBV25CLE9BQVEsR0FBRzt3QkFFNUIsSUFBSWtCLGFBQWFDLFVBQVU7NEJBQ3pCVCxVQUFVO3dCQUNaO3dCQUVBO29CQUNGO2dCQUVBLEtBQUtVLHlCQUFrQjtvQkFBRTt3QkFDdkIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ3JCLEtBQUssRUFDMUJzQixnQkFBZ0J0QixPQUNoQnVCLFVBQVVGLGNBQWMvQixLQUFLLENBQUNnQzt3QkFFcEMsSUFBSUMsU0FBUzs0QkFDWGIsVUFBVTt3QkFDWjt3QkFFQTtvQkFDRjtnQkFFQSxLQUFLYywwQkFBbUI7b0JBQUU7d0JBQ3hCLE1BQU1DLGlCQUFpQixJQUFJLENBQUN6QixLQUFLLEVBQzNCMEIsaUJBQWlCMUIsT0FDakJ1QixVQUFVakMsTUFBTW1DLGdCQUFnQkMsZ0JBQWdCLENBQUNMLGVBQWVDOzRCQUM5RCxNQUFNQyxVQUFVRixjQUFjL0IsS0FBSyxDQUFDZ0M7NEJBRXBDLElBQUlDLFNBQVM7Z0NBQ1gsT0FBTzs0QkFDVDt3QkFDRjt3QkFFTixJQUFJQSxTQUFTOzRCQUNYYixVQUFVO3dCQUNaO3dCQUVBO29CQUNGO1lBRUY7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPaUIsT0FBTyxZQUFZO0FBQzVCIn0=