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
const _nominal = require("../utilities/nominal");
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
            value = (0, _nominal.valueFromNominalValue)(nominalValue, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZUZyb21Ob21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcblxuY29uc3QgeyBhc3luY1JlZHVjZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGluaXZpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXZpYWxWYWx1ZSA9IGluaXZpYWxWYWx1ZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmluaXZpYWxWYWx1ZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJlZHVjZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PTUlOQUxfVkFMVUVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlcyA9IHByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICBpbml2aWFsVmFsdWUgPSBhd2FpdCB0aGlzLmluaXZpYWxWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHZhbHVlID0gYXdhaXQgYXN5bmNSZWR1Y2Uobm9taW5hbFZhbHVlcywgYXN5bmMgKGN1cnJlbnRWYWx1ZSwgbm9taW5hbFZhbHVlKSA9PiB7XG4gICAgICBsZXQgdmFsdWU7XG5cbiAgICAgIGNvbnN0IHsgVmFsdWVzIH0gPSBlbGVtZW50cztcblxuICAgICAgdmFsdWUgPSBjdXJyZW50VmFsdWU7IC8vL1xuXG4gICAgICBjb25zdCB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21Ob21pbmFsVmFsdWUobm9taW5hbFZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWVzLmFkZFZhbHVlKHZhbHVlKTtcblxuICAgICAgdmFsdWUgPSBhd2FpdCB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBpbml2aWFsVmFsdWUpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlIGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1JlZHVjZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJlZHVjZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsImluaXZpYWxWYWx1ZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFZhcmlhYmxlIiwiZ2V0SW5pdGlhbFZhbHVlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsImJyZWFrIiwicmVkdWNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsInZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZXMiLCJjdXJyZW50VmFsdWUiLCJub21pbmFsVmFsdWUiLCJWYWx1ZXMiLCJlbGVtZW50cyIsInZhbHVlcyIsImZyb21WYWx1ZSIsInZhbHVlRnJvbU5vbWluYWxWYWx1ZSIsImFkZFZhbHVlIiwiY2FsbCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVgrQztrRUFFMUI7a0VBQ0M7dUJBR2M7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLE1BQU0sRUFBRUEsV0FBVyxFQUFFLEdBQUdDLHFDQUFxQjtNQUU3QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGVBQWVDLHVCQUFPO0lBQ2hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGtCQUFrQixDQUFFO1FBQ3pGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDSCxZQUFZO0lBQzFCO0lBRUFJLHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQ0gsa0JBQWtCO0lBQ2hDO0lBRUEsTUFBTUksU0FBU1YsT0FBTyxFQUFFO1FBQ3RCLElBQUlXO1FBRUosTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1o7UUFFakIsTUFBTWEsZUFBZSxJQUFJLENBQUNDLFNBQVM7UUFFbkNkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixhQUFhLFdBQVcsQ0FBQztRQUUxREYsUUFBUSxJQUFJLENBQUNQLFFBQVEsQ0FBQ00sUUFBUSxDQUFDVjtRQUUvQixNQUFNZ0IsWUFBWUwsTUFBTU0sT0FBTztRQUUvQixJQUFJRCxjQUFjRSwwQkFBbUIsRUFBRTtZQUNyQyxNQUFNQyxjQUFjUixNQUFNRyxTQUFTLElBQzdCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxZQUFZLFdBQVcsRUFBRUgsVUFBVSxrQkFBa0IsRUFBRUUsMEJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQ2hHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJiLE1BQU1jLGlCQUFpQixJQUN4Q0MsZ0JBQWdCRixnQkFDaEJuQixlQUFlLE1BQU0sSUFBSSxDQUFDQSxZQUFZLENBQUNLLFFBQVEsQ0FBQ1Y7UUFFdERXLFFBQVEsTUFBTWhCLFlBQVkrQixlQUFlLE9BQU9DLGNBQWNDO1lBQzVELElBQUlqQjtZQUVKLE1BQU0sRUFBRWtCLE1BQU0sRUFBRSxHQUFHQyxpQkFBUTtZQUUzQm5CLFFBQVFnQixjQUFjLEdBQUc7WUFFekIsTUFBTUksU0FBU0YsT0FBT0csU0FBUyxDQUFDckIsT0FBT1g7WUFFdkNXLFFBQVFzQixJQUFBQSw4QkFBcUIsRUFBQ0wsY0FBYzVCO1lBRTVDK0IsT0FBT0csUUFBUSxDQUFDdkI7WUFFaEJBLFFBQVEsTUFBTSxJQUFJLENBQUNMLGtCQUFrQixDQUFDNkIsSUFBSSxDQUFDSixRQUFRL0I7WUFFbkQsT0FBT1c7UUFDVCxHQUFHTjtRQUVILE1BQU1jLGNBQWNSLE1BQU1HLFNBQVM7UUFFbkNkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFRixhQUFhLGFBQWEsRUFBRU0sWUFBWSxFQUFFLENBQUM7UUFFOUUsT0FBT1I7SUFDVDtJQUVBLE9BQU95QixPQUFPLFNBQVM7QUFDekIifQ==