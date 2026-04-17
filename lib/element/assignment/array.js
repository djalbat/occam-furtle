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
        if (termType !== _types.NODES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nodes = primitiveValue, nodesLength = nodes.length, parametersLength = this.parameters.getLength();
        if (parametersLength > nodesLength) {
            const parametersString = this.parameters.getString(), nodesString = context.nodesAsString(nodex), message = `The length of the '${parametersString}' parameters is greater than the length of the '${nodesString}' nodes.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.parameters.forEachParameter((parameter, index)=>{
            if (parameter !== null) {
                const node = nodes[index], term = (0, _term.termFromNode)(node, context);
                this.evaluateParameter(parameter, term, context);
            }
        });
        context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
    }
    evaluateParameter(parameter, expression, context) {
        const expressionString = expression.getString(), parameterString = parameter.getString();
        context.trace(`Evaluating the '${parameterString}' parameter against the '${expressionString}' expression...`);
        const parameterType = parameter.getType();
        if (parameterType !== _types.NODE_TYPE) {
            const message = `The type of the '${parameterString}' parameter should be '${_types.NODE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const { Variable } = _elements.default, variable = Variable.fromParameter(parameter, context);
        variable.assign(expression, context);
        context.debug(`...evaluated the '${parameterString}' parameter against the '${expressionString}' expression.`);
    }
    static name = "ArrayAssignment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBcnJheUFzc2lnbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gcHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLnBhcmFtZXRlcnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyc0xlbmd0aCA+IG5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5wYXJhbWV0ZXJzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXgpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBpcyBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgJyR7bm9kZXNTdHJpbmd9JyBub2Rlcy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7ZXhwcmVzc2lvblN0cmluZ30nIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlclR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgdHlwZSBvZiB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtleHByZXNzaW9uU3RyaW5nfScgZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcnJheUFzc2lnbm1lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFycmF5QXNzaWdtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFZhcmlhYmxlIiwiZ2V0UGFyYW1ldGVycyIsImV2YWx1YXRlIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXgiLCJmb3JFYWNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiaW5kZXgiLCJ0ZXJtRnJvbU5vZGUiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJUeXBlIiwiTk9ERV9UWVBFIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21QYXJhbWV0ZXIiLCJhc3NpZ24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7a0VBRUg7a0VBQ0M7c0JBR087dUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRXRDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsdUJBQXVCQyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxDQUFFO1FBQ25FLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLE1BQU1TLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRW5EVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsc0JBQXNCLHFCQUFxQixDQUFDO1FBRTdFLE1BQU1HLE9BQU8sSUFBSSxDQUFDUixRQUFRLENBQUNJLFFBQVEsQ0FBQ1IsVUFDOUJhLFdBQVdELEtBQUtFLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsaUJBQVUsRUFBRTtZQUMzQixNQUFNQyxhQUFhSixLQUFLRixTQUFTLElBQzNCTyxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsaUJBQVUsQ0FBQyxFQUFFLENBQUMsRUFDcEZHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLGlCQUFpQlQsS0FBS1UsaUJBQWlCLElBQ3ZDQyxRQUFRRixnQkFDUkcsY0FBY0QsTUFBTUUsTUFBTSxFQUMxQkMsbUJBQW1CLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3NCLFNBQVM7UUFFbEQsSUFBSUQsbUJBQW1CRixhQUFhO1lBQ2xDLE1BQU1JLG1CQUFtQixJQUFJLENBQUN2QixVQUFVLENBQUNLLFNBQVMsSUFDNUNtQixjQUFjN0IsUUFBUThCLGFBQWEsQ0FBQ0MsUUFDcENkLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRVcsaUJBQWlCLGdEQUFnRCxFQUFFQyxZQUFZLFFBQVEsQ0FBQyxFQUN4SFgsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSSxDQUFDYixVQUFVLENBQUMyQixnQkFBZ0IsQ0FBQyxDQUFDQyxXQUFXQztZQUMzQyxJQUFJRCxjQUFjLE1BQU07Z0JBQ3RCLE1BQU0vQixPQUFPcUIsS0FBSyxDQUFDVyxNQUFNLEVBQ25CdEIsT0FBT3VCLElBQUFBLGtCQUFZLEVBQUNqQyxNQUFNRjtnQkFFaEMsSUFBSSxDQUFDb0MsaUJBQWlCLENBQUNILFdBQVdyQixNQUFNWjtZQUMxQztRQUNGO1FBRUFBLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRTVCLHNCQUFzQixtQkFBbUIsQ0FBQztJQUMvRTtJQUVBMkIsa0JBQWtCSCxTQUFTLEVBQUVLLFVBQVUsRUFBRXRDLE9BQU8sRUFBRTtRQUNoRCxNQUFNdUMsbUJBQW1CRCxXQUFXNUIsU0FBUyxJQUN2QzhCLGtCQUFrQlAsVUFBVXZCLFNBQVM7UUFFM0NWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFNkIsZ0JBQWdCLHlCQUF5QixFQUFFRCxpQkFBaUIsZUFBZSxDQUFDO1FBRTdHLE1BQU1FLGdCQUFnQlIsVUFBVW5CLE9BQU87UUFFdkMsSUFBSTJCLGtCQUFrQkMsZ0JBQVMsRUFBRTtZQUMvQixNQUFNekIsVUFBVSxDQUFDLGlCQUFpQixFQUFFdUIsZ0JBQWdCLHVCQUF1QixFQUFFRSxnQkFBUyxDQUFDLEVBQUUsQ0FBQyxFQUNwRnhCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU0sRUFBRXlCLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QnhDLFdBQVd1QyxTQUFTRSxhQUFhLENBQUNaLFdBQVdqQztRQUVuREksU0FBUzBDLE1BQU0sQ0FBQ1IsWUFBWXRDO1FBRTVCQSxRQUFRcUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVHLGdCQUFnQix5QkFBeUIsRUFBRUQsaUJBQWlCLGFBQWEsQ0FBQztJQUMvRztJQUVBLE9BQU9RLE9BQU8sa0JBQWtCO0FBQ2xDIn0=