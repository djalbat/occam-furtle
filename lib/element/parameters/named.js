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
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NamedParameters extends _occamlanguages.Element {
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
    getNamedParameter(index) {
        const namedParameter = this.array[index] || null;
        return namedParameter;
    }
    someNamedParameter(callback) {
        return this.array.some(callback);
    }
    forEachNamedParameter(callback) {
        this.array.forEach(callback);
    }
    compareTerms(terms, context) {
        const termsString = terms.getString(), namedParametersString = this.getString(); ///
        context.trace(`Comparing the '${termsString}' terms with the '${namedParametersString}' named parameters...`);
        const termsLength = terms.getLength(), namedParametersLength = this.getLength();
        if (termsLength !== namedParametersLength) {
            const message = `The '${termsString}' terms and '${namedParametersString}' named parameters are not of the same length.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.forEachNamedParameter((namedParameter, index)=>{
            if (namedParameter !== null) {
                const term = terms.getTerm(index);
                namedParameter.compareTerm(term, context);
            }
        });
        context.debug(`...compared the '${termsString}' terms with the '${namedParametersString}' named parameters.`);
    }
    compareNamedParameter(namedParameter, context) {
        const namedParameterString = namedParameter.getString(), namedParametersString = this.getString(); ///
        context.trace(`Comparing the '${namedParameterString}' namedParameter with the '${namedParametersString}' named parameters...`);
        const namedParameterA = namedParameter, namedParameterCompares = this.someNamedParameter((namedParameter)=>{
            if (namedParameter !== null) {
                const namedParameterB = namedParameter, namedParameterBComparesToNamedParameterA = namedParameterA.compareNamedParameter(namedParameterB, context);
                if (namedParameterBComparesToNamedParameterA) {
                    return true;
                }
            }
        });
        if (!namedParameterCompares) {
            const message = `The '${namedParameterString}' namedParameter does not compare to any of the '${namedParametersString}' named parameters.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...compared the '${namedParameterString}' namedParameter with the '${namedParametersString}' named parameters.`);
    }
    compareNamedParameters(namedParameters, context) {
        namedParameters.forEachNamedParameter((namedParameter)=>{
            if (namedParameter !== null) {
                this.compareNamedParameter(namedParameter, context);
            }
        });
    }
    static name = "NamedParameters";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVycyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldE5hbWVkUGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9XG5cbiAgc29tZU5hbWVkUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaE5hbWVkUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21wYXJlVGVybXModGVybXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGVybXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmICh0ZXJtc0xlbmd0aCAhPT0gbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIGFuZCAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzIGFyZSBub3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1zLmdldFRlcm0oaW5kZXgpO1xuXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIGNvbXBhcmVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gbmFtZWRQYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMgPSB0aGlzLnNvbWVOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQkNvbXBhcmVzVG9OYW1lZFBhcmFtZXRlckEgPSBuYW1lZFBhcmFtZXRlckEuY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyQkNvbXBhcmVzVG9OYW1lZFBhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFuYW1lZFBhcmFtZXRlckNvbXBhcmVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGRvZXMgbm90IGNvbXBhcmUgdG8gYW55IG9mIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgY29tcGFyZU5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlcnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5hbWVkUGFyYW1ldGVycyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmFtZWRQYXJhbWV0ZXIiLCJpbmRleCIsIm5hbWVkUGFyYW1ldGVyIiwic29tZU5hbWVkUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwiZm9yRWFjaCIsImNvbXBhcmVUZXJtcyIsInRlcm1zIiwidGVybXNTdHJpbmciLCJnZXRTdHJpbmciLCJuYW1lZFBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsInRlcm1zTGVuZ3RoIiwibmFtZWRQYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidGVybSIsImdldFRlcm0iLCJjb21wYXJlVGVybSIsImRlYnVnIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlckNvbXBhcmVzIiwibmFtZWRQYXJhbWV0ZXJCIiwibmFtZWRQYXJhbWV0ZXJCQ29tcGFyZXNUb05hbWVkUGFyYW1ldGVyQSIsImNvbXBhcmVOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlcnMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7a0VBRUY7MEJBRUM7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHdCQUF3QkMsdUJBQU87SUFDekQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLENBQUU7UUFDcEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUNWLE1BQU1DLFNBQVMsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE1BQU07UUFFaEMsT0FBT0E7SUFDVDtJQUVBQyxrQkFBa0JDLEtBQUssRUFBRTtRQUN2QixNQUFNQyxpQkFBaUIsSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU0sSUFBSTtRQUU1QyxPQUFPQztJQUNUO0lBRUFDLG1CQUFtQkMsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsSUFBSSxDQUFDRDtJ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