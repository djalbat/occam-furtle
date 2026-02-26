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
    constructor(context, string, node, array){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlcnMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcihpbmRleCkge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG5cbiAgZm9yRWFjaFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgY29tcGFyZVRlcm1zKHRlcm1zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGVybXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAodGVybXNMZW5ndGggIT09IHBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1zU3RyaW5nfScgZXhwcmVzc2lvbnMgYW5kICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGFyZSBub3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1zLmdldFRlcm0oaW5kZXgpO1xuXG4gICAgICAgIHBhcmFtZXRlci5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlcnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlcnMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UGFyYW1ldGVyIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJmb3JFYWNoUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiY29tcGFyZVRlcm1zIiwidGVybXMiLCJ0ZXJtc1N0cmluZyIsImdldFN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsInRlcm1zTGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRlcm0iLCJnZXRUZXJtIiwiY29tcGFyZVRlcm0iLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjtrRUFFRjswQkFFQzs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUU7UUFDeEMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUNWLE1BQU1DLFNBQVMsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE1BQU07UUFFaEMsT0FBT0E7SUFDVDtJQUVBQyxhQUFhQyxLQUFLLEVBQUU7UUFDbEIsTUFBTUMsWUFBWSxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssTUFBTSxJQUFJO1FBRXZDLE9BQU9DO0lBQ1Q7SUFFQUMsaUJBQWlCQyxRQUFRLEVBQUU7UUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsT0FBTyxDQUFDRDtJQUFXO0lBRTNERSxhQUFhQyxLQUFLLEVBQUVkLE9BQU8sRUFBRTtRQUMzQixNQUFNZSxjQUFjRCxNQUFNRSxTQUFTLElBQzdCQyxtQkFBbUIsSUFBSSxDQUFDRCxTQUFTLElBQUksR0FBRztRQUU5Q2hCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVILFlBQVkscUJBQXFCLEVBQUVFLGlCQUFpQixlQUFlLENBQUM7UUFFcEcsTUFBTUUsY0FBY0wsTUFBTVQsU0FBUyxJQUM3QmUsbUJBQW1CLElBQUksQ0FBQ2YsU0FBUztRQUV2QyxJQUFJYyxnQkFBZ0JDLGtCQUFrQjtZQUNwQyxNQUFNQyxVQUFVLENBQUMsS0FBSyxFQUFFTixZQUFZLG1CQUFtQixFQUFFRSxpQkFBaUIsd0NBQXdDLENBQUMsRUFDN0dLLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUksQ0FBQ1osZ0JBQWdCLENBQUMsQ0FBQ0QsV0FBV0Q7WUFDaEMsSUFBSUMsY0FBYyxNQUFNO2dCQUN0QixNQUFNZ0IsT0FBT1gsTUFBTVksT0FBTyxDQUFDbEI7Z0JBRTNCQyxVQUFVa0IsV0FBVyxDQUFDRixNQUFNekI7WUFDOUI7UUFDRjtRQUVBQSxRQUFRNEIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUViLFlBQVkscUJBQXFCLEVBQUVFLGlCQUFpQixhQUFhLENBQUM7SUFDdEc7SUFFQSxPQUFPWSxPQUFPLGFBQWE7QUFDN0IifQ==