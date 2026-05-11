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
            const { Values } = _elements.default, values = Values.fromValue(value, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFLCBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZUZyb21Cb29sZWFuLCB2YWx1ZUZyb21Ob21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbHVlXCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTb21lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PTUlOQUxfVkFMVUVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlcyA9IHByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICBib29sZWFuID0gYXdhaXQgYXN5bmNTb21lKG5vbWluYWxWYWx1ZXMsIGFzeW5jIChub21pbmFsVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21Ob21pbmFsVmFsdWUobm9taW5hbFZhbHVlKTtcblxuICAgICAgICAgICAgY29uc3QgeyBWYWx1ZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgdHlwZSBpcyAnJHt2YWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdmFsdWUuZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgdmFsdWUgPSB2YWx1ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUgYXMgJyR7dmFsdWVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTb21lXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTb21lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsInZhbHVlIiwiYnJlYWsiLCJzb21lU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsInZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZXMiLCJib29sZWFuIiwibm9taW5hbFZhbHVlIiwidmFsdWVGcm9tTm9taW5hbFZhbHVlIiwiVmFsdWVzIiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVGcm9tQm9vbGVhbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVgrQztrRUFFMUI7a0VBQ0M7dUJBRzRCO3VCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFM0MsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLENBQUU7UUFDM0UsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7SUFDNUI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCO0lBQ2hDO0lBRUEsTUFBTUcsU0FBU1IsT0FBTyxFQUFFO1FBQ3RCLElBQUlTO1FBRUosTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1Y7UUFFakIsTUFBTVcsYUFBYSxJQUFJLENBQUNDLFNBQVM7UUFFakNaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixXQUFXLFNBQVMsQ0FBQztRQUV0REYsUUFBUSxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUjtRQUUvQixNQUFNYyxZQUFZTCxNQUFNTSxPQUFPO1FBRS9CLElBQUlELGNBQWNFLDBCQUFtQixFQUFFO1lBQ3JDLE1BQU1DLGNBQWNSLE1BQU1HLFNBQVMsSUFDN0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFlBQVksV0FBVyxFQUFFSCxVQUFVLGtCQUFrQixFQUFFRSwwQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFDaEdHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLGlCQUFpQmIsTUFBTWMsaUJBQWlCLElBQ3hDQyxnQkFBZ0JGLGdCQUNoQkcsVUFBVSxNQUFNOUIsVUFBVTZCLGVBQWUsT0FBT0U7WUFDOUMsSUFBSWpCO1lBRUpBLFFBQVFrQixJQUFBQSw0QkFBcUIsRUFBQ0Q7WUFFOUIsTUFBTSxFQUFFRSxNQUFNLEVBQUUsR0FBR0MsaUJBQVEsRUFDckJDLFNBQVNGLE9BQU9HLFNBQVMsQ0FBQ3RCLE9BQU9UO1lBRXZDUyxRQUFRLE1BQU0sSUFBSSxDQUFDSixrQkFBa0IsQ0FBQzJCLElBQUksQ0FBQ0YsUUFBUTlCO1lBRW5ELE1BQU1jLFlBQVlMLE1BQU1NLE9BQU87WUFFL0IsSUFBSUQsY0FBY21CLG1CQUFZLEVBQUU7Z0JBQzlCLE1BQU1oQixjQUFjUixNQUFNRyxTQUFTLElBQzdCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxZQUFZLG1CQUFtQixFQUFFSCxVQUFVLDZCQUE2QixFQUFFbUIsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDNUdkLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7Z0JBRXhDLE1BQU1DO1lBQ1I7WUFFQSxNQUFNRyxpQkFBaUJiLE1BQU1jLGlCQUFpQixJQUN4Q0UsVUFBVUgsZ0JBQWdCLEdBQUc7WUFFbkMsT0FBT0c7UUFDVDtRQUVOaEIsUUFBUXlCLElBQUFBLHVCQUFnQixFQUFDVCxTQUFTekI7UUFFbEMsTUFBTWlCLGNBQWNSLE1BQU1HLFNBQVM7UUFFbkNaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFRixXQUFXLFdBQVcsRUFBRU0sWUFBWSxFQUFFLENBQUM7UUFFMUUsT0FBT1I7SUFDVDtJQUVBLE9BQU8wQixPQUFPLE9BQU87QUFDdkIifQ==