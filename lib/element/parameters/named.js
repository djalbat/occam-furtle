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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVycyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgYXJyYXkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleClcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldE5hbWVkUGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9XG5cbiAgc29tZU5hbWVkUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaE5hbWVkUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21wYXJlVGVybXModGVybXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGVybXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmICh0ZXJtc0xlbmd0aCAhPT0gbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtc1N0cmluZ30nIHRlcm1zIGFuZCAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzIGFyZSBub3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1zLmdldFRlcm0oaW5kZXgpO1xuXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIGNvbXBhcmVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gbmFtZWRQYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMgPSB0aGlzLnNvbWVOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQkNvbXBhcmVzVG9OYW1lZFBhcmFtZXRlckEgPSBuYW1lZFBhcmFtZXRlckEuY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyQkNvbXBhcmVzVG9OYW1lZFBhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFuYW1lZFBhcmFtZXRlckNvbXBhcmVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGRvZXMgbm90IGNvbXBhcmUgdG8gYW55IG9mIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgY29tcGFyZU5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlcnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5hbWVkUGFyYW1ldGVycyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXROYW1lZFBhcmFtZXRlciIsImluZGV4IiwibmFtZWRQYXJhbWV0ZXIiLCJzb21lTmFtZWRQYXJhbWV0ZXIiLCJjYWxsYmFjayIsInNvbWUiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJmb3JFYWNoIiwiY29tcGFyZVRlcm1zIiwidGVybXMiLCJ0ZXJtc1N0cmluZyIsImdldFN0cmluZyIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidGVybXNMZW5ndGgiLCJuYW1lZFBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0ZXJtIiwiZ2V0VGVybSIsImNvbXBhcmVUZXJtIiwiZGVidWciLCJjb21wYXJlTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQ29tcGFyZXMiLCJuYW1lZFBhcmFtZXRlckIiLCJuYW1lZFBhcmFtZXRlckJDb21wYXJlc1RvTmFtZWRQYXJhbWV0ZXJBIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVycyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjtrRUFFRjswQkFFQzs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsd0JBQXdCQyx1QkFBTztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTTtRQUVoQyxPQUFPQTtJQUNUO0lBRUFDLGtCQUFrQkMsS0FBSyxFQUFFO1FBQ3ZCLE1BQU1DLGlCQUFpQixJQUFJLENBQUNOLEtBQUssQ0FBQ0ssTUFBTSxJQUFJO1FBRTVDLE9BQU9DO0lBQ1Q7SUFFQUMsbUJBQW1CQyxRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxJQUFJLENBQUNEO0lBQVc7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