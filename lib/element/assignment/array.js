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
    constructor(context, string, node, breakPoint, variable, parameters){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.parameters = parameters;
    }
    getVariable() {
        return this.variable;
    }
    getParameters() {
        return this.parameters;
    }
    evaluate(context) {
        const arrayAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${arrayAssignmentString}' array assignment...`);
        const term = this.variable.evaluate(context), termType = term.getType();
        if (termType !== _types.NOMINAL_VALUES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValues = primitiveValue, parametersLength = this.parameters.getLength(), nominalValuesLength = nominalValues.length;
        if (parametersLength > nominalValuesLength) {
            const parametersString = this.parameters.getString(), primitiveString = (0, _string.primtiveStringFromNominalValues)(nominalValues), message = `The length of the '${parametersString}' parameters is greater than the length of the '${primitiveString}' nodes.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.parameters.forEachParameter((parameter, index)=>{
            if (parameter !== null) {
                const nominalValue = nominalValues[index], term = (0, _term.termFromNominalValue)(nominalValue);
                this.evaluateParameter(parameter, term, context);
            }
        });
        context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
    }
    evaluateParameter(parameter, expression, context) {
        const expressionString = expression.getString(), parameterString = parameter.getString();
        context.trace(`Evaluating the '${parameterString}' parameter against the '${expressionString}' expression...`);
        const parameterType = parameter.getType();
        if (parameterType !== _types.NOMINAL_VALUE_TYPE) {
            const message = `The type of the '${parameterString}' parameter should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const { Variable } = _elements.default, variable = Variable.fromParameter(parameter, context);
        variable.assign(expression, context);
        context.debug(`...evaluated the '${parameterString}' parameter against the '${expressionString}' expression.`);
    }
    static name = "ArrayAssignment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9taW5hbFZhbHVlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5pbXBvcnQgeyBwcmltdGl2ZVN0cmluZ0Zyb21Ob21pbmFsVmFsdWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IE5PTUlOQUxfVkFMVUVfVFlQRSwgTk9NSU5BTF9WQUxVRVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXJyYXlBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcGFyYW1ldGVycykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9NSU5BTF9WQUxVRVNfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWVzID0gcHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLnBhcmFtZXRlcnMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlc0xlbmd0aCA9IG5vbWluYWxWYWx1ZXMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmFtZXRlcnNMZW5ndGggPiBub21pbmFsVmFsdWVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5wYXJhbWV0ZXJzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gcHJpbXRpdmVTdHJpbmdGcm9tTm9taW5hbFZhbHVlcyhub21pbmFsVmFsdWVzKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlICcke3ByaW1pdGl2ZVN0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub21pbmFsVmFsdWUgPSBub21pbmFsVmFsdWVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9taW5hbFZhbHVlKG5vbWluYWxWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke2V4cHJlc3Npb25TdHJpbmd9JyBleHByZXNzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJUeXBlICE9PSBOT01JTkFMX1ZBTFVFX1RZUEUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGUgb2YgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVBhcmFtZXRlcihwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7ZXhwcmVzc2lvblN0cmluZ30nIGV4cHJlc3Npb24uYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBcnJheUFzc2lnbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsInBhcmFtZXRlcnMiLCJnZXRWYXJpYWJsZSIsImdldFBhcmFtZXRlcnMiLCJldmFsdWF0ZSIsImFycmF5QXNzaWdubWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVTX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZXMiLCJwYXJhbWV0ZXJzTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwibm9taW5hbFZhbHVlc0xlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNTdHJpbmciLCJwcmltaXRpdmVTdHJpbmciLCJwcmltdGl2ZVN0cmluZ0Zyb21Ob21pbmFsVmFsdWVzIiwiZm9yRWFjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsImluZGV4Iiwibm9taW5hbFZhbHVlIiwidGVybUZyb21Ob21pbmFsVmFsdWUiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJUeXBlIiwiTk9NSU5BTF9WQUxVRV9UWVBFIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21QYXJhbWV0ZXIiLCJhc3NpZ24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7a0VBRUg7a0VBQ0M7c0JBR2U7d0JBQ1c7dUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRXhELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsdUJBQXVCQyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxDQUFFO1FBQ25FLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLE1BQU1TLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRW5EVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsc0JBQXNCLHFCQUFxQixDQUFDO1FBRTdFLE1BQU1HLE9BQU8sSUFBSSxDQUFDUixRQUFRLENBQUNJLFFBQVEsQ0FBQ1IsVUFDOUJhLFdBQVdELEtBQUtFLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsMEJBQW1CLEVBQUU7WUFDcEMsTUFBTUMsYUFBYUosS0FBS0YsU0FBUyxJQUMzQk8sVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxVQUFVLEVBQUVILFNBQVMsa0JBQWtCLEVBQUVFLDBCQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUM3RkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsaUJBQWlCVCxLQUFLVSxpQkFBaUIsSUFDdkNDLGdCQUFnQkYsZ0JBQ2hCRyxtQkFBbUIsSUFBSSxDQUFDbkIsVUFBVSxDQUFDb0IsU0FBUyxJQUM1Q0Msc0JBQXNCSCxjQUFjSSxNQUFNO1FBRWhELElBQUlILG1CQUFtQkUscUJBQXFCO1lBQzFDLE1BQU1FLG1CQUFtQixJQUFJLENBQUN2QixVQUFVLENBQUNLLFNBQVMsSUFDNUNtQixrQkFBa0JDLElBQUFBLHVDQUErQixFQUFDUCxnQkFDbEROLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRVcsaUJBQWlCLGdEQUFnRCxFQUFFQyxnQkFBZ0IsUUFBUSxDQUFDLEVBQzVIWCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJLENBQUNiLFVBQVUsQ0FBQzBCLGdCQUFnQixDQUFDLENBQUNDLFdBQVdDO1lBQzNDLElBQUlELGNBQWMsTUFBTTtnQkFDdEIsTUFBTUUsZUFBZVgsYUFBYSxDQUFDVSxNQUFNLEVBQ25DckIsT0FBT3VCLElBQUFBLDBCQUFvQixFQUFDRDtnQkFFbEMsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ0osV0FBV3BCLE1BQU1aO1lBQzFDO1FBQ0Y7UUFFQUEsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFNUIsc0JBQXNCLG1CQUFtQixDQUFDO0lBQy9FO0lBRUEyQixrQkFBa0JKLFNBQVMsRUFBRU0sVUFBVSxFQUFFdEMsT0FBTyxFQUFFO1FBQ2hELE1BQU11QyxtQkFBbUJELFdBQVc1QixTQUFTLElBQ3ZDOEIsa0JBQWtCUixVQUFVdEIsU0FBUztRQUUzQ1YsUUFBUVcsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU2QixnQkFBZ0IseUJBQXlCLEVBQUVELGlCQUFpQixlQUFlLENBQUM7UUFFN0csTUFBTUUsZ0JBQWdCVCxVQUFVbEIsT0FBTztRQUV2QyxJQUFJMkIsa0JBQWtCQyx5QkFBa0IsRUFBRTtZQUN4QyxNQUFNekIsVUFBVSxDQUFDLGlCQUFpQixFQUFFdUIsZ0JBQWdCLHVCQUF1QixFQUFFRSx5QkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFDN0Z4QixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNLEVBQUV5QixRQUFRLEVBQUUsR0FBR0MsaUJBQVEsRUFDdkJ4QyxXQUFXdUMsU0FBU0UsYUFBYSxDQUFDYixXQUFXaEM7UUFFbkRJLFNBQVMwQyxNQUFNLENBQUNSLFlBQVl0QztRQUU1QkEsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFRyxnQkFBZ0IseUJBQXlCLEVBQUVELGlCQUFpQixhQUFhLENBQUM7SUFDL0c7SUFFQSxPQUFPUSxPQUFPLGtCQUFrQjtBQUNsQyJ9