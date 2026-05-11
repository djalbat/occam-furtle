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
    compareValues(values, context) {
        const valuesString = values.getString(), parametersString = this.getString(); ///
        context.trace(`Comparing the '${valuesString}' values against the '${parametersString}' parameters...`);
        const valuesLength = values.getLength(), parametersLength = this.getLength();
        if (valuesLength !== parametersLength) {
            const message = `The '${valuesString}' expressions and '${parametersString}' parameters are not of the same length.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        this.forEachParameter((parameter, index)=>{
            if (parameter !== null) {
                const value = values.getValue(index);
                parameter.compareValue(value, context);
            }
        });
        context.debug(`...compared the '${valuesString}' values against the '${parametersString}' parameters.`);
    }
    static name = "Parameters";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlcnMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIGZvckVhY2hQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbXBhcmVWYWx1ZXModmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7dmFsdWVzU3RyaW5nfScgdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAodmFsdWVzTGVuZ3RoICE9PSBwYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZXNTdHJpbmd9JyBleHByZXNzaW9ucyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5nZXRWYWx1ZShpbmRleCk7XG5cbiAgICAgICAgcGFyYW1ldGVyLmNvbXBhcmVWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dmFsdWVzU3RyaW5nfScgdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlcnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlcnMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFBhcmFtZXRlciIsImluZGV4IiwicGFyYW1ldGVyIiwiZm9yRWFjaFBhcmFtZXRlciIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImNvbXBhcmVWYWx1ZXMiLCJ2YWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJnZXRTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZXNMZW5ndGgiLCJwYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbXBhcmVWYWx1ZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCO2tFQUVGOzBCQUVDOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLFlBQVk7UUFDVixNQUFNQyxTQUFTLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxNQUFNO1FBRWhDLE9BQU9BO0lBQ1Q7SUFFQUMsYUFBYUMsS0FBSyxFQUFFO1FBQ2xCLE1BQU1DLFlBQVksSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU0sSUFBSTtRQUV2QyxPQUFPQztJQUNUO0lBRUFDLGlCQUFpQkMsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNTLE9BQU8sQ0FBQ0Q7SUFBVztJQUUzREUsY0FBY0MsTUFBTSxFQUFFZixPQUFPLEVBQUU7UUFDN0IsTUFBTWdCLGVBQWVELE9BQU9FLFNBQVMsSUFDL0JDLG1CQUFtQixJQUFJLENBQUNELFNBQVMsSUFBSSxHQUFHO1FBRTlDakIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsYUFBYSxzQkFBc0IsRUFBRUUsaUJBQWlCLGVBQWUsQ0FBQztRQUV0RyxNQUFNRSxlQUFlTCxPQUFPVCxTQUFTLElBQy9CZSxtQkFBbUIsSUFBSSxDQUFDZixTQUFTO1FBRXZDLElBQUljLGlCQUFpQkMsa0JBQWtCO1lBQ3JDLE1BQU1DLFVBQVUsQ0FBQyxLQUFLLEVBQUVOLGFBQWEsbUJBQW1CLEVBQUVFLGlCQUFpQix3Q0FBd0MsQ0FBQyxFQUM5R0ssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQyxDQUFDRCxXQUFXRDtZQUNoQyxJQUFJQyxjQUFjLE1BQU07Z0JBQ3RCLE1BQU1nQixRQUFRWCxPQUFPWSxRQUFRLENBQUNsQjtnQkFFOUJDLFVBQVVrQixZQUFZLENBQUNGLE9BQU8xQjtZQUNoQztRQUNGO1FBRUFBLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWIsYUFBYSxzQkFBc0IsRUFBRUUsaUJBQWlCLGFBQWEsQ0FBQztJQUN4RztJQUVBLE9BQU9ZLE9BQU8sYUFBYTtBQUM3QiJ9