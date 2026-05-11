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
const _term = require("../../utilities/term");
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
        const term = this.variable.evaluate(context), termType = term.getType();
        if (termType !== _types.NOMINAL_VALUES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValues = primitiveValue, bindingsLength = this.bindings.getLength(), nominalValuesLength = nominalValues.length;
        if (bindingsLength > nominalValuesLength) {
            const bindingsString = this.bindings.getString(), primitiveString = (0, _string.primtiveStringFromNominalValues)(nominalValues), message = `The length of the '${bindingsString}' bindings is greater than the length of the '${primitiveString}' nodes.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.bindings.forEachBinding((binding, index)=>{
            if (binding !== null) {
                const nominalValue = nominalValues[index], term = (0, _term.termFromNominalValue)(nominalValue);
                this.evaluateBinding(binding, term, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9taW5hbFZhbHVlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5pbXBvcnQgeyBwcmltdGl2ZVN0cmluZ0Zyb21Ob21pbmFsVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IE5PTUlOQUxfVkFMVUVfVFlQRSwgTk9NSU5BTF9WQUxVRVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXJyYXlBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgYmluZGluZ3MpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYmluZGluZ3MgPSBiaW5kaW5ncztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QmluZGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmluZGluZ3M7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgYmluZGluZ3NMZW5ndGggPSB0aGlzLmJpbmRpbmdzLmdldExlbmd0aCgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZXNMZW5ndGggPSBub21pbmFsVmFsdWVzLmxlbmd0aDtcblxuICAgIGlmIChiaW5kaW5nc0xlbmd0aCA+IG5vbWluYWxWYWx1ZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGJpbmRpbmdzU3RyaW5nID0gdGhpcy5iaW5kaW5ncy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbU5vbWluYWxWYWx1ZXMobm9taW5hbFZhbHVlcyksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke2JpbmRpbmdzU3RyaW5nfScgYmluZGluZ3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlICcke3ByaW1pdGl2ZVN0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2hCaW5kaW5nKChiaW5kaW5nLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGJpbmRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFZhbHVlID0gbm9taW5hbFZhbHVlc1tpbmRleF0sXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5vbWluYWxWYWx1ZShub21pbmFsVmFsdWUpO1xuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVCaW5kaW5nKGJpbmRpbmcsIHRlcm0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVCaW5kaW5nKGJpbmRpbmcsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBiaW5kaW5nU3RyaW5nID0gYmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JpbmRpbmdTdHJpbmd9JyBiaW5kaW5nIGFnYWluc3QgdGhlICcke2V4cHJlc3Npb25TdHJpbmd9JyBleHByZXNzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBiaW5kaW5nVHlwZSA9IGJpbmRpbmcuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGJpbmRpbmdUeXBlICE9PSBOT01JTkFMX1ZBTFVFX1RZUEUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGUgb2YgdGhlICcke2JpbmRpbmdTdHJpbmd9JyBiaW5kaW5nIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tQmluZGluZyhiaW5kaW5nLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YmluZGluZ1N0cmluZ30nIGJpbmRpbmcgYWdhaW5zdCB0aGUgJyR7ZXhwcmVzc2lvblN0cmluZ30nIGV4cHJlc3Npb24uYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBcnJheUFzc2lnbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsImJpbmRpbmdzIiwiZ2V0VmFyaWFibGUiLCJnZXRCaW5kaW5ncyIsImV2YWx1YXRlIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9taW5hbFZhbHVlcyIsImJpbmRpbmdzTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibm9taW5hbFZhbHVlc0xlbmd0aCIsImxlbmd0aCIsImJpbmRpbmdzU3RyaW5nIiwicHJpbWl0aXZlU3RyaW5nIiwicHJpbXRpdmVTdHJpbmdGcm9tTm9taW5hbFZhbHVlcyIsImZvckVhY2hCaW5kaW5nIiwiYmluZGluZyIsImluZGV4Iiwibm9taW5hbFZhbHVlIiwidGVybUZyb21Ob21pbmFsVmFsdWUiLCJldmFsdWF0ZUJpbmRpbmciLCJkZWJ1ZyIsImV4cHJlc3Npb24iLCJiaW5kaW5nU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZyIsImJpbmRpbmdUeXBlIiwiTk9NSU5BTF9WQUxVRV9UWVBFIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21CaW5kaW5nIiwiYXNzaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCO2tFQUVIO2tFQUNDO3NCQUdlO3dCQUNXO3VCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUV4RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHVCQUF1QkMsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsQ0FBRTtRQUNqRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxTQUFTUixPQUFPLEVBQUU7UUFDaEIsTUFBTVMsd0JBQXdCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFbkRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixzQkFBc0IscUJBQXFCLENBQUM7UUFFN0UsTUFBTUcsT0FBTyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUixVQUM5QmEsV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhRSwwQkFBbUIsRUFBRTtZQUNwQyxNQUFNQyxhQUFhSixLQUFLRixTQUFTLElBQzNCTyxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsMEJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQzdGRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJULEtBQUtVLGlCQUFpQixJQUN2Q0MsZ0JBQWdCRixnQkFDaEJHLGlCQUFpQixJQUFJLENBQUNuQixRQUFRLENBQUNvQixTQUFTLElBQ3hDQyxzQkFBc0JILGNBQWNJLE1BQU07UUFFaEQsSUFBSUgsaUJBQWlCRSxxQkFBcUI7WUFDeEMsTUFBTUUsaUJBQWlCLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ0ssU0FBUyxJQUN4Q21CLGtCQUFrQkMsSUFBQUEsdUNBQStCLEVBQUNQLGdCQUNsRE4sVUFBVSxDQUFDLG1CQUFtQixFQUFFVyxlQUFlLDhDQUE4QyxFQUFFQyxnQkFBZ0IsUUFBUSxDQUFDLEVBQ3hIWCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJLENBQUNiLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxDQUFDQyxTQUFTQztZQUNyQyxJQUFJRCxZQUFZLE1BQU07Z0JBQ3BCLE1BQU1FLGVBQWVYLGFBQWEsQ0FBQ1UsTUFBTSxFQUNuQ3JCLE9BQU91QixJQUFBQSwwQkFBb0IsRUFBQ0Q7Z0JBRWxDLElBQUksQ0FBQ0UsZUFBZSxDQUFDSixTQUFTcEIsTUFBTVo7WUFDdEM7UUFDRjtRQUVBQSxRQUFRcUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUU1QixzQkFBc0IsbUJBQW1CLENBQUM7SUFDL0U7SUFFQTJCLGdCQUFnQkosT0FBTyxFQUFFTSxVQUFVLEVBQUV0QyxPQUFPLEVBQUU7UUFDNUMsTUFBTXVDLGdCQUFnQlAsUUFBUXRCLFNBQVMsSUFDakM4QixtQkFBbUJGLFdBQVc1QixTQUFTO1FBRTdDVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTRCLGNBQWMsdUJBQXVCLEVBQUVDLGlCQUFpQixlQUFlLENBQUM7UUFFekcsTUFBTUMsY0FBY1QsUUFBUWxCLE9BQU87UUFFbkMsSUFBSTJCLGdCQUFnQkMseUJBQWtCLEVBQUU7WUFDdEMsTUFBTXpCLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRXNCLGNBQWMscUJBQXFCLEVBQUVHLHlCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUN6RnhCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU0sRUFBRXlCLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QnhDLFdBQVd1QyxTQUFTRSxXQUFXLENBQUNiLFNBQVNoQztRQUUvQ0ksU0FBUzBDLE1BQU0sQ0FBQ1IsWUFBWXRDO1FBRTVCQSxRQUFRcUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVFLGNBQWMsdUJBQXVCLEVBQUVDLGlCQUFpQixhQUFhLENBQUM7SUFDM0c7SUFFQSxPQUFPTyxPQUFPLGtCQUFrQjtBQUNsQyJ9