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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _types = require("../types");
const _value = require("../utilities/value");
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
const { asyncSome } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Some extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, anonymousProcedure){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    getVariable() {
        return this.variable;
    }
    getAnonymousProcedure() {
        return this.anonymousProcedure;
    }
    async evaluate(context) {
        let value;
        await this.break(context);
        const someString = this.getString();
        context.trace(`Evaluating the '${someString}' some...`);
        value = this.variable.evaluate(context);
        const valueType = value.getType();
        if (valueType !== _types.NOMINAL_VALUES_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = value.getPrimitiveValue(), nominalValues = primitiveValue, boolean = await asyncSome(nominalValues, async (nominalValue)=>{
            let value;
            value = (0, _value.valueFromNominalValue)(nominalValue);
            const { Values } = _elements.default, values = Values.fromTerm(value, context);
            value = await this.anonymousProcedure.call(values, context);
            const valueType = value.getType();
            if (valueType !== _types.BOOLEAN_TYPE) {
                const valueString = value.getString(), message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
                throw exception;
            }
            const primitiveValue = value.getPrimitiveValue(), boolean = primitiveValue; ///
            return boolean;
        });
        value = (0, _value.valueFromBoolean)(boolean, context);
        const valueString = value.getString();
        context.trace(`...evaluated the '${someString}' some as '${valueString}'.`);
        return value;
    }
    static name = "Some";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFLCBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZUZyb21Cb29sZWFuLCB2YWx1ZUZyb21Ob21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbHVlXCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTb21lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PTUlOQUxfVkFMVUVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlcyA9IHByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICBib29sZWFuID0gYXdhaXQgYXN5bmNTb21lKG5vbWluYWxWYWx1ZXMsIGFzeW5jIChub21pbmFsVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21Ob21pbmFsVmFsdWUobm9taW5hbFZhbHVlKTtcblxuICAgICAgICAgICAgY29uc3QgeyBWYWx1ZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21UZXJtKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB2YWx1ZS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICB2YWx1ZSA9IHZhbHVlRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZSBhcyAnJHt2YWx1ZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jU29tZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlNvbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidmFsdWUiLCJicmVhayIsInNvbWVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT01JTkFMX1ZBTFVFU19UWVBFIiwidmFsdWVTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9taW5hbFZhbHVlcyIsImJvb2xlYW4iLCJub21pbmFsVmFsdWUiLCJ2YWx1ZUZyb21Ob21pbmFsVmFsdWUiLCJWYWx1ZXMiLCJlbGVtZW50cyIsInZhbHVlcyIsImZyb21UZXJtIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsInZhbHVlRnJvbUJvb2xlYW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYK0M7a0VBRTFCO2tFQUNDO3VCQUc0Qjt1QkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MscUNBQXFCO01BRTNDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixDQUFFO1FBQzNFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtJQUNoQztJQUVBLE1BQU1HLFNBQVNSLE9BQU8sRUFBRTtRQUN0QixJQUFJUztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGFBQWEsSUFBSSxDQUFDQyxTQUFTO1FBRWpDWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsV0FBVyxTQUFTLENBQUM7UUFFdERGLFFBQVEsSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFL0IsTUFBTWMsWUFBWUwsTUFBTU0sT0FBTztRQUUvQixJQUFJRCxjQUFjRSwwQkFBbUIsRUFBRTtZQUNyQyxNQUFNQyxjQUFjUixNQUFNRyxTQUFTLElBQzdCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxZQUFZLFdBQVcsRUFBRUgsVUFBVSxrQkFBa0IsRUFBRUUsMEJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQ2hHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJiLE1BQU1jLGlCQUFpQixJQUN4Q0MsZ0JBQWdCRixnQkFDaEJHLFVBQVUsTUFBTTlCLFVBQVU2QixlQUFlLE9BQU9FO1lBQzlDLElBQUlqQjtZQUVKQSxRQUFRa0IsSUFBQUEsNEJBQXFCLEVBQUNEO1lBRTlCLE1BQU0sRUFBRUUsTUFBTSxFQUFFLEdBQUdDLGlCQUFRLEVBQ3JCQyxTQUFTRixPQUFPRyxRQUFRLENBQUN0QixPQUFPVDtZQUV0Q1MsUUFBUSxNQUFNLElBQUksQ0FBQ0osa0JBQWtCLENBQUMyQixJQUFJLENBQUNGLFFBQVE5QjtZQUVuRCxNQUFNYyxZQUFZTCxNQUFNTSxPQUFPO1lBRS9CLElBQUlELGNBQWNtQixtQkFBWSxFQUFFO2dCQUM5QixNQUFNaEIsY0FBY1IsTUFBTUcsU0FBUyxJQUM3Qk0sVUFBVSxDQUFDLEtBQUssRUFBRUQsWUFBWSxtQkFBbUIsRUFBRUgsVUFBVSw2QkFBNkIsRUFBRW1CLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQzVHZCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO2dCQUV4QyxNQUFNQztZQUNSO1lBRUEsTUFBTUcsaUJBQWlCYixNQUFNYyxpQkFBaUIsSUFDeENFLFVBQVVILGdCQUFnQixHQUFHO1lBRW5DLE9BQU9HO1FBQ1Q7UUFFTmhCLFFBQVF5QixJQUFBQSx1QkFBZ0IsRUFBQ1QsU0FBU3pCO1FBRWxDLE1BQU1pQixjQUFjUixNQUFNRyxTQUFTO1FBRW5DWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsV0FBVyxXQUFXLEVBQUVNLFlBQVksRUFBRSxDQUFDO1FBRTFFLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPMEIsT0FBTyxPQUFPO0FBQ3ZCIn0=