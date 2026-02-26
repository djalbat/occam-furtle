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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVycyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbXBhcmVUZXJtcyh0ZXJtcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdGVybXNMZW5ndGggPSB0ZXJtcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHRlcm1zTGVuZ3RoICE9PSBuYW1lZFBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgYW5kICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybXMuZ2V0VGVybShpbmRleCk7XG5cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIuY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dGVybXNTdHJpbmd9JyB0ZXJtcyB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckEgPSBuYW1lZFBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJDb21wYXJlcyA9IHRoaXMuc29tZU5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCQ29tcGFyZXNUb05hbWVkUGFyYW1ldGVyQSA9IG5hbWVkUGFyYW1ldGVyQS5jb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXJCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobmFtZWRQYXJhbWV0ZXJCQ29tcGFyZXNUb05hbWVkUGFyYW1ldGVyQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW5hbWVkUGFyYW1ldGVyQ29tcGFyZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgZG9lcyBub3QgY29tcGFyZSB0byBhbnkgb2YgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBjb21wYXJlTmFtZWRQYXJhbWV0ZXJzKG5hbWVkUGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIG5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5hbWVkUGFyYW1ldGVyc1wiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXJzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldE5hbWVkUGFyYW1ldGVyIiwiaW5kZXgiLCJuYW1lZFBhcmFtZXRlciIsInNvbWVOYW1lZFBhcmFtZXRlciIsImNhbGxiYWNrIiwic29tZSIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsImZvckVhY2giLCJjb21wYXJlVGVybXMiLCJ0ZXJtcyIsInRlcm1zU3RyaW5nIiwiZ2V0U3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJ0ZXJtc0xlbmd0aCIsIm5hbWVkUGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRlcm0iLCJnZXRUZXJtIiwiY29tcGFyZVRlcm0iLCJkZWJ1ZyIsImNvbXBhcmVOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJBIiwibmFtZWRQYXJhbWV0ZXJDb21wYXJlcyIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQkNvbXBhcmVzVG9OYW1lZFBhcmFtZXRlckEiLCJjb21wYXJlTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCO2tFQUVGOzBCQUVDOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx3QkFBd0JDLHVCQUFPO0lBQ3pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtRQUN4QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTTtRQUVoQyxPQUFPQTtJQUNUO0lBRUFDLGtCQUFrQkMsS0FBSyxFQUFFO1FBQ3ZCLE1BQU1DLGlCQUFpQixJQUFJLENBQUNOLEtBQUssQ0FBQ0ssTUFBTSxJQUFJO1FBRTVDLE9BQU9DO0lBQ1Q7SUFFQUMsbUJBQW1CQyxRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxJQUFJLENBQUNEO0lBQVc7SUFFakVFLHNCQUFzQkYsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNXLE9BQU8sQ0FBQ0g7SUFBVztJQUVoRUksYUFBYUMsS0FBSyxFQUFFaEIsT0FBTyxFQUFFO1FBQzNCLE1BQU1pQixjQUFjRCxNQUFNRSxTQUFTLElBQzdCQyx3QkFBd0IsSUFBSSxDQUFDRCxTQUFTLElBQUksR0FBRztRQUVuRGxCLFFBQVFvQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVILFlBQVksa0JBQWtCLEVBQUVFLHNCQUFzQixxQkFBcUIsQ0FBQztRQUU1RyxNQUFNRSxjQUFjTCxNQUFNWCxTQUFTLElBQzdCaUIsd0JBQXdCLElBQUksQ0FBQ2pCLFNBQVM7UUFFNUMsSUFBSWdCLGdCQUFnQkMsdUJBQXVCO1lBQ3pDLE1BQU1DLFVBQVUsQ0FBQyxLQUFLLEVBQUVOLFlBQVksYUFBYSxFQUFFRSxzQkFBc0IsOENBQThDLENBQUMsRUFDbEhLLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUksQ0FBQ1gscUJBQXFCLENBQUMsQ0FBQ0osZ0JBQWdCRDtZQUMxQyxJQUFJQyxtQkFBbUIsTUFBTTtnQkFDM0IsTUFBTWtCLE9BQU9YLE1BQU1ZLE9BQU8sQ0FBQ3BCO2dCQUUzQkMsZUFBZW9CLFdBQVcsQ0FBQ0YsTUFBTTNCO1lBQ25DO1FBQ0Y7UUFFQUEsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFYixZQUFZLGtCQUFrQixFQUFFRSxzQkFBc0IsbUJBQW1CLENBQUM7SUFDOUc7SUFFQVksc0JBQXNCdEIsY0FBYyxFQUFFVCxPQUFPLEVBQUU7UUFDN0MsTUFBTWdDLHVCQUF1QnZCLGVBQWVTLFNBQVMsSUFDL0NDLHdCQUF3QixJQUFJLENBQUNELFNBQVMsSUFBSSxHQUFHO1FBRW5EbEIsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRVkscUJBQXFCLDJCQUEyQixFQUFFYixzQkFBc0IscUJBQXFCLENBQUM7UUFFOUgsTUFBTWMsa0JBQWtCeEIsZ0JBQ2xCeUIseUJBQXlCLElBQUksQ0FBQ3hCLGtCQUFrQixDQUFDLENBQUNEO1lBQ2hELElBQUlBLG1CQUFtQixNQUFNO2dCQUMzQixNQUFNMEIsa0JBQWtCMUIsZ0JBQ2xCMkIsMkNBQTJDSCxnQkFBZ0JGLHFCQUFxQixDQUFDSSxpQkFBaUJuQztnQkFFeEcsSUFBSW9DLDBDQUEwQztvQkFDNUMsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7UUFFTixJQUFJLENBQUNGLHdCQUF3QjtZQUMzQixNQUFNWCxVQUFVLENBQUMsS0FBSyxFQUFFUyxxQkFBcUIsaURBQWlELEVBQUViLHNCQUFzQixtQkFBbUIsQ0FBQyxFQUNwSUssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUF4QixRQUFROEIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVFLHFCQUFxQiwyQkFBMkIsRUFBRWIsc0JBQXNCLG1CQUFtQixDQUFDO0lBQ2hJO0lBRUFrQix1QkFBdUJDLGVBQWUsRUFBRXRDLE9BQU8sRUFBRTtRQUMvQ3NDLGdCQUFnQnpCLHFCQUFxQixDQUFDLENBQUNKO1lBQ3JDLElBQUlBLG1CQUFtQixNQUFNO2dCQUMzQixJQUFJLENBQUNzQixxQkFBcUIsQ0FBQ3RCLGdCQUFnQlQ7WUFDN0M7UUFDRjtJQUNGO0lBRUEsT0FBT3VDLE9BQU8sa0JBQWtCO0FBQ2xDIn0=