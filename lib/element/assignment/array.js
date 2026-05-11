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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _nominal = require("../../utilities/nominal");
const _string = require("../../utilities/string");
const _types = require("../../types");
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
const _default = (0, _elements.define)(class ArrayAssigment extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, bindings){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.bindings = bindings;
    }
    getVariable() {
        return this.variable;
    }
    getBindings() {
        return this.bindings;
    }
    evaluate(context) {
        const arrayAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${arrayAssignmentString}' array assignment...`);
        const value = this.variable.evaluate(context), valueType = value.getType();
        if (valueType !== _types.NOMINAL_VALUES_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = value.getPrimitiveValue(), nominalValues = primitiveValue, bindingsLength = this.bindings.getLength(), nominalValuesLength = nominalValues.length;
        if (bindingsLength > nominalValuesLength) {
            const bindingsString = this.bindings.getString(), primitiveString = (0, _string.primtiveStringFromNominalValues)(nominalValues), message = `The length of the '${bindingsString}' bindings is greater than the length of the '${primitiveString}' nodes.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.bindings.forEachBinding((binding, index)=>{
            if (binding !== null) {
                const nominalValue = nominalValues[index], value = (0, _nominal.valueFromNominalValue)(nominalValue);
                this.evaluateBinding(binding, value, context);
            }
        });
        context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
    }
    evaluateBinding(binding, expression, context) {
        const bindingString = binding.getString(), expressionString = expression.getString();
        context.trace(`Evaluating the '${bindingString}' binding against the '${expressionString}' expression...`);
        const bindingType = binding.getType();
        if (bindingType !== _types.NOMINAL_VALUE_TYPE) {
            const message = `The type of the '${bindingString}' binding should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const { Variable } = _elements.default, variable = Variable.fromBinding(binding, context);
        variable.assign(expression, context);
        context.debug(`...evaluated the '${bindingString}' binding against the '${expressionString}' expression.`);
    }
    static name = "ArrayAssignment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhbHVlRnJvbU5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuaW1wb3J0IHsgcHJpbXRpdmVTdHJpbmdGcm9tTm9taW5hbFZhbHVlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBOT01JTkFMX1ZBTFVFX1RZUEUsIE5PTUlOQUxfVkFMVUVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFycmF5QXNzaWdtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGJpbmRpbmdzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmJpbmRpbmdzID0gYmluZGluZ3M7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEJpbmRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmJpbmRpbmdzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PTUlOQUxfVkFMVUVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlcyA9IHByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICBiaW5kaW5nc0xlbmd0aCA9IHRoaXMuYmluZGluZ3MuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlc0xlbmd0aCA9IG5vbWluYWxWYWx1ZXMubGVuZ3RoO1xuXG4gICAgaWYgKGJpbmRpbmdzTGVuZ3RoID4gbm9taW5hbFZhbHVlc0xlbmd0aCkge1xuICAgICAgY29uc3QgYmluZGluZ3NTdHJpbmcgPSB0aGlzLmJpbmRpbmdzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gcHJpbXRpdmVTdHJpbmdGcm9tTm9taW5hbFZhbHVlcyhub21pbmFsVmFsdWVzKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgJyR7YmluZGluZ3NTdHJpbmd9JyBiaW5kaW5ncyBpcyBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgJyR7cHJpbWl0aXZlU3RyaW5nfScgbm9kZXMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaEJpbmRpbmcoKGJpbmRpbmcsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYmluZGluZyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub21pbmFsVmFsdWUgPSBub21pbmFsVmFsdWVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21Ob21pbmFsVmFsdWUobm9taW5hbFZhbHVlKTtcblxuICAgICAgICB0aGlzLmV2YWx1YXRlQmluZGluZyhiaW5kaW5nLCB2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZUJpbmRpbmcoYmluZGluZywgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGJpbmRpbmdTdHJpbmcgPSBiaW5kaW5nLmdldFN0cmluZygpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YmluZGluZ1N0cmluZ30nIGJpbmRpbmcgYWdhaW5zdCB0aGUgJyR7ZXhwcmVzc2lvblN0cmluZ30nIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IGJpbmRpbmdUeXBlID0gYmluZGluZy5nZXRUeXBlKCk7XG5cbiAgICBpZiAoYmluZGluZ1R5cGUgIT09IE5PTUlOQUxfVkFMVUVfVFlQRSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgdHlwZSBvZiB0aGUgJyR7YmluZGluZ1N0cmluZ30nIGJpbmRpbmcgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21CaW5kaW5nKGJpbmRpbmcsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtiaW5kaW5nU3RyaW5nfScgYmluZGluZyBhZ2FpbnN0IHRoZSAnJHtleHByZXNzaW9uU3RyaW5nfScgZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcnJheUFzc2lnbm1lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFycmF5QXNzaWdtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwiYmluZGluZ3MiLCJnZXRWYXJpYWJsZSIsImdldEJpbmRpbmdzIiwiZXZhbHVhdGUiLCJhcnJheUFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub21pbmFsVmFsdWVzIiwiYmluZGluZ3NMZW5ndGgiLCJnZXRMZW5ndGgiLCJub21pbmFsVmFsdWVzTGVuZ3RoIiwibGVuZ3RoIiwiYmluZGluZ3NTdHJpbmciLCJwcmltaXRpdmVTdHJpbmciLCJwcmltdGl2ZVN0cmluZ0Zyb21Ob21pbmFsVmFsdWVzIiwiZm9yRWFjaEJpbmRpbmciLCJiaW5kaW5nIiwiaW5kZXgiLCJub21pbmFsVmFsdWUiLCJ2YWx1ZUZyb21Ob21pbmFsVmFsdWUiLCJldmFsdWF0ZUJpbmRpbmciLCJkZWJ1ZyIsImV4cHJlc3Npb24iLCJiaW5kaW5nU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZyIsImJpbmRpbmdUeXBlIiwiTk9NSU5BTF9WQUxVRV9UWVBFIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21CaW5kaW5nIiwiYXNzaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCO2tFQUVIO2tFQUNDO3lCQUdnQjt3QkFDVTt1QkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFeEQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx1QkFBdUJDLHVCQUFPO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLENBQUU7UUFDakUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLE1BQU1TLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsSUFBSSxH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