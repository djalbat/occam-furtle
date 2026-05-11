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
const { asyncReduce } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Reduce extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, inivialValue, anonymousProcedure){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.inivialValue = inivialValue;
        this.anonymousProcedure = anonymousProcedure;
    }
    getVariable() {
        return this.variable;
    }
    getInitialValue() {
        return this.inivialValue;
    }
    getAnonymousProcedure() {
        return this.anonymousProcedure;
    }
    async evaluate(context) {
        let value;
        await this.break(context);
        const reduceString = this.getString();
        context.trace(`Evaluating the '${reduceString}' reduce...`);
        value = this.variable.evaluate(context);
        const valueType = value.getType();
        if (valueType !== _types.NOMINAL_VALUES_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = value.getPrimitiveValue(), nominalValues = primitiveValue, inivialValue = await this.inivialValue.evaluate(context);
        value = await asyncReduce(nominalValues, async (currentValue, nominalValue)=>{
            let value;
            const { Values } = _elements.default;
            value = currentValue; ///
            const values = Values.fromValue(value, context);
            value = (0, _value.valueFromNominalValue)(nominalValue, context);
            values.addValue(value);
            value = await this.anonymousProcedure.call(values, context);
            return value;
        }, inivialValue);
        const valueString = value.getString();
        context.trace(`...evaluated the '${reduceString}' reduce as '${valueString}'.`);
        return value;
    }
    static name = "Reduce";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZUZyb21Ob21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbHVlXCI7XG5cbmNvbnN0IHsgYXN5bmNSZWR1Y2UgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZHVjZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBpbml2aWFsVmFsdWUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5pbml2aWFsVmFsdWUgPSBpbml2aWFsVmFsdWU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml2aWFsVmFsdWU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB2YWx1ZS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgaW5pdmlhbFZhbHVlID0gYXdhaXQgdGhpcy5pbml2aWFsVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICB2YWx1ZSA9IGF3YWl0IGFzeW5jUmVkdWNlKG5vbWluYWxWYWx1ZXMsIGFzeW5jIChjdXJyZW50VmFsdWUsIG5vbWluYWxWYWx1ZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IFZhbHVlcyB9ID0gZWxlbWVudHM7XG5cbiAgICAgIHZhbHVlID0gY3VycmVudFZhbHVlOyAvLy9cblxuICAgICAgY29uc3QgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tTm9taW5hbFZhbHVlKG5vbWluYWxWYWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIHZhbHVlcy5hZGRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgaW5pdmlhbFZhbHVlKTtcblxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JlZHVjZVN0cmluZ30nIHJlZHVjZSBhcyAnJHt2YWx1ZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZHVjZVwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNSZWR1Y2UiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJSZWR1Y2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmFyaWFibGUiLCJpbml2aWFsVmFsdWUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRWYXJpYWJsZSIsImdldEluaXRpYWxWYWx1ZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidmFsdWUiLCJicmVhayIsInJlZHVjZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub21pbmFsVmFsdWVzIiwiY3VycmVudFZhbHVlIiwibm9taW5hbFZhbHVlIiwiVmFsdWVzIiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJ2YWx1ZUZyb21Ob21pbmFsVmFsdWUiLCJhZGRWYWx1ZSIsImNhbGwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYK0M7a0VBRTFCO2tFQUNDO3VCQUdjO3VCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxNQUFNLEVBQUVBLFdBQVcsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFN0MsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxlQUFlQyx1QkFBTztJQUNoRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxrQkFBa0IsQ0FBRTtRQUN6RixLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7SUFDNUI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWTtJQUMxQjtJQUVBSSx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtJQUNoQztJQUVBLE1BQU1JLFNBQVNWLE9BQU8sRUFBRTtRQUN0QixJQUFJVztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNaO1FBRWpCLE1BQU1hLGVBQWUsSUFBSSxDQUFDQyxTQUFTO1FBRW5DZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsYUFBYSxXQUFXLENBQUM7UUFFMURGLFFBQVEsSUFBSSxDQUFDUCxRQUFRLENBQUNNLFFBQVEsQ0FBQ1Y7UUFFL0IsTUFBTWdCLFlBQVlMLE1BQU1NLE9BQU87UUFFL0IsSUFBSUQsY0FBY0UsMEJBQW1CLEVBQUU7WUFDckMsTUFBTUMsY0FBY1IsTUFBTUcsU0FBUyxJQUM3Qk0sVUFBVSxDQUFDLEtBQUssRUFBRUQsWUFBWSxXQUFXLEVBQUVILFVBQVUsa0JBQWtCLEVBQUVFLDBCQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUNoR0csWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsaUJBQWlCYixNQUFNYyxpQkFBaUIsSUFDeENDLGdCQUFnQkYsZ0JBQ2hCbkIsZUFBZSxNQUFNLElBQUksQ0FBQ0EsWUFBWSxDQUFDSyxRQUFRLENBQUNWO1FBRXREVyxRQUFRLE1BQU1oQixZQUFZK0IsZUFBZSxPQUFPQyxjQUFjQztZQUM1RCxJQUFJakI7WUFFSixNQUFNLEVBQUVrQixNQUFNLEVBQUUsR0FBR0MsaUJBQVE7WUFFM0JuQixRQUFRZ0IsY0FBYyxHQUFHO1lBRXpCLE1BQU1JLFNBQVNGLE9BQU9HLFNBQVMsQ0FBQ3JCLE9BQU9YO1lBRXZDVyxRQUFRc0IsSUFBQUEsNEJBQXFCLEVBQUNMLGNBQWM1QjtZQUU1QytCLE9BQU9HLFFBQVEsQ0FBQ3ZCO1lBRWhCQSxRQUFRLE1BQU0sSUFBSSxDQUFDTCxrQkFBa0IsQ0FBQzZCLElBQUksQ0FBQ0osUUFBUS9CO1lBRW5ELE9BQU9XO1FBQ1QsR0FBR047UUFFSCxNQUFNYyxjQUFjUixNQUFNRyxTQUFTO1FBRW5DZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsYUFBYSxhQUFhLEVBQUVNLFlBQVksRUFBRSxDQUFDO1FBRTlFLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPeUIsT0FBTyxTQUFTO0FBQ3pCIn0=