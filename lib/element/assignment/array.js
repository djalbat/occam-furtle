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
    constructor(context, string, node, variable, parameters){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBcnJheUFzc2lnbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMucGFyYW1ldGVycy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJzTGVuZ3RoID4gbm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2RleCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSAnJHtub2Rlc1N0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtleHByZXNzaW9uU3RyaW5nfScgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSB0eXBlIG9mIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke2V4cHJlc3Npb25TdHJpbmd9JyBleHByZXNzaW9uLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFycmF5QXNzaWdubWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXJyYXlBc3NpZ21lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsInBhcmFtZXRlcnMiLCJnZXRWYXJpYWJsZSIsImdldFBhcmFtZXRlcnMiLCJldmFsdWF0ZSIsImFycmF5QXNzaWdubWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwicGFyYW1ldGVyc1N0cmluZyIsIm5vZGVzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGV4IiwiZm9yRWFjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsImluZGV4IiwidGVybUZyb21Ob2RlIiwiZXZhbHVhdGVQYXJhbWV0ZXIiLCJkZWJ1ZyIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RyaW5nIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyVHlwZSIsIk5PREVfVFlQRSIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJmcm9tUGFyYW1ldGVyIiwiYXNzaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCO2tFQUVIO2tFQUNDO3NCQUdPO3VCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUV0QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHVCQUF1QkMsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxTQUFTUCxPQUFPLEVBQUU7UUFDaEIsTUFBTVEsd0JBQXdCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFbkRULFFBQVFVLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixzQkFBc0IscUJBQXFCLENBQUM7UUFFN0UsTUFBTUcsT0FBTyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUCxVQUM5QlksV0FBV0QsS0FBS0UsT0FBTztRQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO1lBQzNCLE1BQU1DLGFBQWFKLEtBQUtGLFNBQVMsSUFDM0JPLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFSCxTQUFTLGtCQUFrQixFQUFFRSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxFQUNwRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsaUJBQWlCVCxLQUFLVSxpQkFBaUIsSUFDdkNDLFFBQVFGLGdCQUNSRyxjQUFjRCxNQUFNRSxNQUFNLEVBQzFCQyxtQkFBbUIsSUFBSSxDQUFDckIsVUFBVSxDQUFDc0IsU0FBUztRQUVsRCxJQUFJRCxtQkFBbUJGLGFBQWE7WUFDbEMsTUFBTUksbUJBQW1CLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ0ssU0FBUyxJQUM1Q21CLGNBQWM1QixRQUFRNkIsYUFBYSxDQUFDQyxRQUNwQ2QsVUFBVSxDQUFDLG1CQUFtQixFQUFFVyxpQkFBaUIsZ0RBQWdELEVBQUVDLFlBQVksUUFBUSxDQUFDLEVBQ3hIWCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJLENBQUNiLFVBQVUsQ0FBQzJCLGdCQUFnQixDQUFDLENBQUNDLFdBQVdDO1lBQzNDLElBQUlELGNBQWMsTUFBTTtnQkFDdEIsTUFBTTlCLE9BQU9vQixLQUFLLENBQUNXLE1BQU0sRUFDbkJ0QixPQUFPdUIsSUFBQUEsa0JBQVksRUFBQ2hDLE1BQU1GO2dCQUVoQyxJQUFJLENBQUNtQyxpQkFBaUIsQ0FBQ0gsV0FBV3JCLE1BQU1YO1lBQzFDO1FBQ0Y7UUFFQUEsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFNUIsc0JBQXNCLG1CQUFtQixDQUFDO0lBQy9FO0lBRUEyQixrQkFBa0JILFNBQVMsRUFBRUssVUFBVSxFQUFFckMsT0FBTyxFQUFFO1FBQ2hELE1BQU1zQyxtQkFBbUJELFdBQVc1QixTQUFTLElBQ3ZDOEIsa0JBQWtCUCxVQUFVdkIsU0FBUztRQUUzQ1QsUUFBUVUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU2QixnQkFBZ0IseUJBQXlCLEVBQUVELGlCQUFpQixlQUFlLENBQUM7UUFFN0csTUFBTUUsZ0JBQWdCUixVQUFVbkIsT0FBTztRQUV2QyxJQUFJMkIsa0JBQWtCQyxnQkFBUyxFQUFFO1lBQy9CLE1BQU16QixVQUFVLENBQUMsaUJBQWlCLEVBQUV1QixnQkFBZ0IsdUJBQXVCLEVBQUVFLGdCQUFTLENBQUMsRUFBRSxDQUFDLEVBQ3BGeEIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTSxFQUFFeUIsUUFBUSxFQUFFLEdBQUdDLGlCQUFRLEVBQ3ZCeEMsV0FBV3VDLFNBQVNFLGFBQWEsQ0FBQ1osV0FBV2hDO1FBRW5ERyxTQUFTMEMsTUFBTSxDQUFDUixZQUFZckM7UUFFNUJBLFFBQVFvQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUcsZ0JBQWdCLHlCQUF5QixFQUFFRCxpQkFBaUIsYUFBYSxDQUFDO0lBQy9HO0lBRUEsT0FBT1EsT0FBTyxrQkFBa0I7QUFDbEMifQ==