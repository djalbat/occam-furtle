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
    constructor(context, string, node, lineIndex, variable, parameters){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBcnJheUFzc2lnbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHBhcmFtZXRlcnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleClcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gcHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLnBhcmFtZXRlcnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyc0xlbmd0aCA+IG5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5wYXJhbWV0ZXJzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXgpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBpcyBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgJyR7bm9kZXNTdHJpbmd9JyBub2Rlcy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7ZXhwcmVzc2lvblN0cmluZ30nIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlclR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgdHlwZSBvZiB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtleHByZXNzaW9uU3RyaW5nfScgZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcnJheUFzc2lnbm1lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFycmF5QXNzaWdtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidmFyaWFibGUiLCJwYXJhbWV0ZXJzIiwiZ2V0VmFyaWFibGUiLCJnZXRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJhcnJheUFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsImdldExlbmd0aCIsInBhcmFtZXRlcnNTdHJpbmciLCJub2Rlc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RleCIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJpbmRleCIsInRlcm1Gcm9tTm9kZSIsImV2YWx1YXRlUGFyYW1ldGVyIiwiZGVidWciLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblN0cmluZyIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlclR5cGUiLCJOT0RFX1RZUEUiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbVBhcmFtZXRlciIsImFzc2lnbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjtrRUFFSDtrRUFDQztzQkFHTzt1QkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFdEMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx1QkFBdUJDLHVCQUFPO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUU7UUFDbEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxTQUFTUixPQUFPLEVBQUU7UUFDaEIsTUFBTVMsd0JBQXdCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFbkRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixzQkFBc0IscUJBQXFCLENBQUM7UUFFN0UsTUFBTUcsT0FBTyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUixVQUM5QmEsV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO1lBQzNCLE1BQU1DLGFBQWFKLEtBQUtGLFNBQVMsSUFDM0JPLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFSCxTQUFTLGtCQUFrQixFQUFFRSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxFQUNwRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsaUJBQWlCVCxLQUFLVSxpQkFBaUIsSUFDdkNDLFFBQVFGLGdCQUNSRyxjQUFjRCxNQUFNRSxNQUFNLEVBQzFCQyxtQkFBbUIsSUFBSSxDQUFDckIsVUFBVSxDQUFDc0IsU0FBUztRQUVsRCxJQUFJRCxtQkFBbUJGLGFBQWE7WUFDbEMsTUFBTUksbUJBQW1CLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ0ssU0FBUyxJQUM1Q21CLGNBQWM3QixRQUFROEIsYUFBYSxDQUFDQyxRQUNwQ2QsVUFBVSxDQUFDLG1CQUFtQixFQUFFVyxpQkFBaUIsZ0RBQWdELEVBQUVDLFlBQVksUUFBUSxDQUFDLEVBQ3hIWCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJLENBQUNiLFVBQVUsQ0FBQzJCLGdCQUFnQixDQUFDLENBQUNDLFdBQVdDO1lBQzNDLElBQUlELGNBQWMsTUFBTTtnQkFDdEIsTUFBTS9CLE9BQU9xQixLQUFLLENBQUNXLE1BQU0sRUFDbkJ0QixPQUFPdUIsSUFBQUEsa0JBQVksRUFBQ2pDLE1BQU1GO2dCQUVoQyxJQUFJLENBQUNvQyxpQkFBaUIsQ0FBQ0gsV0FBV3JCLE1BQU1aO1lBQzFDO1FBQ0Y7UUFFQUEsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFNUIsc0JBQXNCLG1CQUFtQixDQUFDO0lBQy9FO0lBRUEyQixrQkFBa0JILFNBQVMsRUFBRUssVUFBVSxFQUFFdEMsT0FBTyxFQUFFO1FBQ2hELE1BQU11QyxtQkFBbUJELFdBQVc1QixTQUFTLElBQ3ZDOEIsa0JBQWtCUCxVQUFVdkIsU0FBUztRQUUzQ1YsUUFBUVcsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU2QixnQkFBZ0IseUJBQXlCLEVBQUVELGlCQUFpQixlQUFlLENBQUM7UUFFN0csTUFBTUUsZ0JBQWdCUixVQUFVbkIsT0FBTztRQUV2QyxJQUFJMkIsa0JBQWtCQyxnQkFBUyxFQUFFO1lBQy9CLE1BQU16QixVQUFVLENBQUMsaUJBQWlCLEVBQUV1QixnQkFBZ0IsdUJBQXVCLEVBQUVFLGdCQUFTLENBQUMsRUFBRSxDQUFDLEVBQ3BGeEIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTSxFQUFFeUIsUUFBUSxFQUFFLEdBQUdDLGlCQUFRLEVBQ3ZCeEMsV0FBV3VDLFNBQVNFLGFBQWEsQ0FBQ1osV0FBV2pDO1FBRW5ESSxTQUFTMEMsTUFBTSxDQUFDUixZQUFZdEM7UUFFNUJBLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUcsZ0JBQWdCLHlCQUF5QixFQUFFRCxpQkFBaUIsYUFBYSxDQUFDO0lBQy9HO0lBRUEsT0FBT1EsT0FBTyxrQkFBa0I7QUFDbEMifQ==