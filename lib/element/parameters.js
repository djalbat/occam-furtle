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
    constructor(context, string, node, breakPoint, array){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlcnMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIGZvckVhY2hQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbXBhcmVUZXJtcyh0ZXJtcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc0xlbmd0aCA9IHRlcm1zLmdldExlbmd0aCgpLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHRlcm1zTGVuZ3RoICE9PSBwYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtc1N0cmluZ30nIGV4cHJlc3Npb25zIGFuZCAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtcy5nZXRUZXJtKGluZGV4KTtcblxuICAgICAgICBwYXJhbWV0ZXIuY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dGVybXNTdHJpbmd9JyB0ZXJtcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJzXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXJzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRQYXJhbWV0ZXIiLCJpbmRleCIsInBhcmFtZXRlciIsImZvckVhY2hQYXJhbWV0ZXIiLCJjYWxsYmFjayIsImZvckVhY2giLCJjb21wYXJlVGVybXMiLCJ0ZXJtcyIsInRlcm1zU3RyaW5nIiwiZ2V0U3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidGVybXNMZW5ndGgiLCJwYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidGVybSIsImdldFRlcm0iLCJjb21wYXJlVGVybSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCO2tFQUVGOzBCQUVDOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLFlBQVk7UUFDVixNQUFNQyxTQUFTLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxNQUFNO1FBRWhDLE9BQU9BO0lBQ1Q7SUFFQUMsYUFBYUMsS0FBSyxFQUFFO1FBQ2xCLE1BQU1DLFlBQVksSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU0sSUFBSTtRQUV2QyxPQUFPQztJQUNUO0lBRUFDLGlCQUFpQkMsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNTLE9BQU8sQ0FBQ0Q7SUFBVztJQUUzREUsYUFBYUMsS0FBSyxFQUFFZixPQUFPLEVBQUU7UUFDM0IsTUFBTWdCLGNBQWNELE1BQU1FLFNBQVMsSUFDN0JDLG1CQUFtQixJQUFJLENBQUNELFNBQVMsSUFBSSxHQUFHO1FBRTlDakIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsWUFBWSxxQkFBcUIsRUFBRUUsaUJBQWlCLGVBQWUsQ0FBQztRQUVwRyxNQUFNRSxjQUFjTCxNQUFNVCxTQUFTLElBQzdCZSxtQkFBbUIsSUFBSSxDQUFDZixTQUFTO1FBRXZDLElBQUljLGdCQUFnQkMsa0JBQWtCO1lBQ3BDLE1BQU1DLFVBQVUsQ0FBQyxLQUFLLEVBQUVOLFlBQVksbUJBQW1CLEVBQUVFLGlCQUFpQix3Q0FBd0MsQ0FBQyxFQUM3R0ssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQyxDQUFDRCxXQUFXRDtZQUNoQyxJQUFJQyxjQUFjLE1BQU07Z0JBQ3RCLE1BQU1nQixPQUFPWCxNQUFNWSxPQUFPLENBQUNsQjtnQkFFM0JDLFVBQVVrQixXQUFXLENBQUNGLE1BQU0xQjtZQUM5QjtRQUNGO1FBRUFBLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWIsWUFBWSxxQkFBcUIsRUFBRUUsaUJBQWlCLGFBQWEsQ0FBQztJQUN0RztJQUVBLE9BQU9ZLE9BQU8sYUFBYTtBQUM3QiJ9