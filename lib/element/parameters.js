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
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _elements = require("../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Parameters extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, array){
        super(context, string, node, lineIndex);
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getLength() {
        const length = this.array.length;
        return length;
    }
    getParameter(index) {
        const parameter = this.array[index] || null;
        return parameter;
    }
    forEachParameter(callback) {
        this.array.forEach(callback);
    }
    compareTerms(terms, context) {
        const termsString = terms.getString(), parametersString = this.getString(); ///
        context.trace(`Comparing the '${termsString}' terms against the '${parametersString}' parameters...`);
        const termsLength = terms.getLength(), parametersLength = this.getLength();
        if (termsLength !== parametersLength) {
            const message = `The '${termsString}' expressions and '${parametersString}' parameters are not of the same length.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.forEachParameter((parameter, index)=>{
            if (parameter !== null) {
                const term = terms.getTerm(index);
                parameter.compareTerm(term, context);
            }
        });
        context.debug(`...compared the '${termsString}' terms against the '${parametersString}' parameters.`);
    }
    static name = "Parameters";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlcnMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIGZvckVhY2hQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbXBhcmVUZXJtcyh0ZXJtcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc0xlbmd0aCA9IHRlcm1zLmdldExlbmd0aCgpLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHRlcm1zTGVuZ3RoICE9PSBwYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtc1N0cmluZ30nIGV4cHJlc3Npb25zIGFuZCAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtcy5nZXRUZXJtKGluZGV4KTtcblxuICAgICAgICBwYXJhbWV0ZXIuY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dGVybXNTdHJpbmd9JyB0ZXJtcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJzXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXJzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFBhcmFtZXRlciIsImluZGV4IiwicGFyYW1ldGVyIiwiZm9yRWFjaFBhcmFtZXRlciIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImNvbXBhcmVUZXJtcyIsInRlcm1zIiwidGVybXNTdHJpbmciLCJnZXRTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJ0ZXJtc0xlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0ZXJtIiwiZ2V0VGVybSIsImNvbXBhcmVUZXJtIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7a0VBRUY7MEJBRUM7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUNWLE1BQU1DLFNBQVMsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE1BQU07UUFFaEMsT0FBT0E7SUFDVDtJQUVBQyxhQUFhQyxLQUFLLEVBQUU7UUFDbEIsTUFBTUMsWUFBWSxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssTUFBTSxJQUFJO1FBRXZDLE9BQU9DO0lBQ1Q7SUFFQUMsaUJBQWlCQyxRQUFRLEVBQUU7UUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsT0FBTyxDQUFDRDtJQUFXO0lBRTNERSxhQUFhQyxLQUFLLEVBQUVmLE9BQU8sRUFBRTtRQUMzQixNQUFNZ0IsY0FBY0QsTUFBTUUsU0FBUyxJQUM3QkMsbUJBQW1CLElBQUksQ0FBQ0QsU0FBUyxJQUFJLEdBQUc7UUFFOUNqQixRQUFRbUIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxZQUFZLHFCQUFxQixFQUFFRSxpQkFBaUIsZUFBZSxDQUFDO1FBRXBHLE1BQU1FLGNBQWNMLE1BQU1ULFNBQVMsSUFDN0JlLG1CQUFtQixJQUFJLENBQUNmLFNBQVM7UUFFdkMsSUFBSWMsZ0JBQWdCQyxrQkFBa0I7WUFDcEMsTUFBTUMsVUFBVSxDQUFDLEtBQUssRUFBRU4sWUFBWSxtQkFBbUIsRUFBRUUsaUJBQWlCLHdDQUF3QyxDQUFDLEVBQzdHSyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJLENBQUNaLGdCQUFnQixDQUFDLENBQUNELFdBQVdEO1lBQ2hDLElBQUlDLGNBQWMsTUFBTTtnQkFDdEIsTUFBTWdCLE9BQU9YLE1BQU1ZLE9BQU8sQ0FBQ2xCO2dCQUUzQkMsVUFBVWtCLFdBQVcsQ0FBQ0YsTUFBTTFCO1lBQzlCO1FBQ0Y7UUFFQUEsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFYixZQUFZLHFCQUFxQixFQUFFRSxpQkFBaUIsYUFBYSxDQUFDO0lBQ3RHO0lBRUEsT0FBT1ksT0FBTyxhQUFhO0FBQzdCIn0=