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
const _value = require("../../utilities/value");
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
            const elidated = binding.isElided();
            if (!elidated) {
                const nominalValue = nominalValues[index], value = (0, _value.valueFromNominalValue)(nominalValue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhbHVlRnJvbU5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsdWVcIjtcbmltcG9ydCB7IHByaW10aXZlU3RyaW5nRnJvbU5vbWluYWxWYWx1ZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgTk9NSU5BTF9WQUxVRV9UWVBFLCBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBcnJheUFzc2lnbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBiaW5kaW5ncykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRCaW5kaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5iaW5kaW5ncztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB2YWx1ZS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgYmluZGluZ3NMZW5ndGggPSB0aGlzLmJpbmRpbmdzLmdldExlbmd0aCgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZXNMZW5ndGggPSBub21pbmFsVmFsdWVzLmxlbmd0aDtcblxuICAgIGlmIChiaW5kaW5nc0xlbmd0aCA+IG5vbWluYWxWYWx1ZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJpbmRpbmdzU3RyaW5nID0gdGhpcy5iaW5kaW5ncy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbU5vbWluYWxWYWx1ZXMobm9taW5hbFZhbHVlcyksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke2JpbmRpbmdzU3RyaW5nfScgYmluZGluZ3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlICcke3ByaW1pdGl2ZVN0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2hCaW5kaW5nKChiaW5kaW5nLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxpZGF0ZWQgPSBiaW5kaW5nLmlzRWxpZGVkKCk7XG5cbiAgICAgIGlmICghZWxpZGF0ZWQpIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFZhbHVlID0gbm9taW5hbFZhbHVlc1tpbmRleF0sXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tTm9taW5hbFZhbHVlKG5vbWluYWxWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZUJpbmRpbmcoYmluZGluZywgdmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVCaW5kaW5nKGJpbmRpbmcsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBiaW5kaW5nU3RyaW5nID0gYmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JpbmRpbmdTdHJpbmd9JyBiaW5kaW5nIGFnYWluc3QgdGhlICcke2V4cHJlc3Npb25TdHJpbmd9JyBleHByZXNzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBiaW5kaW5nVHlwZSA9IGJpbmRpbmcuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGJpbmRpbmdUeXBlICE9PSBOT01JTkFMX1ZBTFVFX1RZUEUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGUgb2YgdGhlICcke2JpbmRpbmdTdHJpbmd9JyBiaW5kaW5nIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tQmluZGluZyhiaW5kaW5nLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YmluZGluZ1N0cmluZ30nIGJpbmRpbmcgYWdhaW5zdCB0aGUgJyR7ZXhwcmVzc2lvblN0cmluZ30nIGV4cHJlc3Npb24uYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBcnJheUFzc2lnbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsImJpbmRpbmdzIiwiZ2V0VmFyaWFibGUiLCJnZXRCaW5kaW5ncyIsImV2YWx1YXRlIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT01JTkFMX1ZBTFVFU19UWVBFIiwidmFsdWVTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9taW5hbFZhbHVlcyIsImJpbmRpbmdzTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibm9taW5hbFZhbHVlc0xlbmd0aCIsImxlbmd0aCIsImJpbmRpbmdzU3RyaW5nIiwicHJpbWl0aXZlU3RyaW5nIiwicHJpbXRpdmVTdHJpbmdGcm9tTm9taW5hbFZhbHVlcyIsImZvckVhY2hCaW5kaW5nIiwiYmluZGluZyIsImluZGV4IiwiZWxpZGF0ZWQiLCJpc0VsaWRlZCIsIm5vbWluYWxWYWx1ZSIsInZhbHVlRnJvbU5vbWluYWxWYWx1ZSIsImV2YWx1YXRlQmluZGluZyIsImRlYnVnIiwiZXhwcmVzc2lvbiIsImJpbmRpbmdTdHJpbmciLCJleHByZXNzaW9uU3RyaW5nIiwiYmluZGluZ1R5cGUiLCJOT01JTkFMX1ZBTFVFX1RZUEUiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbUJpbmRpbmciLCJhc3NpZ24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7a0VBRUg7a0VBQ0M7dUJBR2dCO3dCQUNVO3VCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUV4RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHVCQUF1QkMsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsQ0FBRTtRQUNqRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVB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