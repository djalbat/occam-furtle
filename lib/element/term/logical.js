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
const _types = require("../../types");
const _value = require("../../utilities/value");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class LogicalTerm extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, type, disjunction, leftTerm, rightTerm){
        super(context, string, node, breakPoint);
        this.type = type;
        this.disjunction = disjunction;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    getType() {
        return this.type;
    }
    isDisjunction() {
        return this.disjunction;
    }
    getLeftTerm() {
        return this.leftTerm;
    }
    getRightTerm() {
        return this.rightTerm;
    }
    evaluate(context) {
        let value;
        const logicalTermString = this.getString(); ///
        context.trace(`Evaluating the '${logicalTermString}' logical term...`);
        const leftValue = this.leftTerm.evaluate(context), rightValue = this.rightTerm.evaluate(context), leftValueType = leftValue.getType(), rightValueType = rightValue.getType();
        if (leftValueType !== _types.BOOLEAN_TYPE) {
            const leftValueString = leftValue.getString(), message = `The '${leftValueString}' left term's type is '${leftValueType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        if (rightValueType !== _types.BOOLEAN_TYPE) {
            const rightValueString = rightValue.getString(), message = `The '${rightValueString}' right term's type is '${rightValueType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const leftValuePrimitiveValue = leftValue.getPrimitiveValue(), rightValuePrimitiveValue = rightValue.getPrimitiveValue(), leftBoolean = leftValuePrimitiveValue, rightBoolean = rightValuePrimitiveValue, boolean = this.disjunction ? leftBoolean || rightBoolean : leftBoolean && rightBoolean;
        value = (0, _value.valueFromBoolean)(boolean, context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${logicalTermString}' logical value as '${valueString}'.`);
        return value;
    }
    static name = "LogicalTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTG9naWNhbFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbjtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGxvZ2ljYWxUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFZhbHVlID0gdGhpcy5sZWZ0VGVybS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhbHVlVHlwZSA9IGxlZnRWYWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZVR5cGUgPSByaWdodFZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VmFsdWVUeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IGxlZnRWYWx1ZVN0cmluZyA9IGxlZnRWYWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRWYWx1ZVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7bGVmdFZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChyaWdodFZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFZhbHVlU3RyaW5nID0gcmlnaHRWYWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3JpZ2h0VmFsdWVTdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRWYWx1ZVByaW1pdGl2ZVZhbHVlID0gbGVmdFZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZVByaW1pdGl2ZVZhbHVlID0gcmlnaHRWYWx1ZS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGxlZnRCb29sZWFuID1sZWZ0VmFsdWVQcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgcmlnaHRCb29sZWFuID0gcmlnaHRWYWx1ZVByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICBib29sZWFuID0gdGhpcy5kaXNqdW5jdGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgKGxlZnRCb29sZWFuIHx8IHJpZ2h0Qm9vbGVhbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnRCb29sZWFuICYmIHJpZ2h0Qm9vbGVhbik7XG5cbiAgICB2YWx1ZSA9IHZhbHVlRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdmFsdWUgYXMgJyR7dmFsdWVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMb2dpY2FsVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTG9naWNhbFRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidHlwZSIsImRpc2p1bmN0aW9uIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRUeXBlIiwiaXNEaXNqdW5jdGlvbiIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsImxvZ2ljYWxUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwibGVmdFZhbHVlVHlwZSIsInJpZ2h0VmFsdWVUeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdFZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRWYWx1ZVN0cmluZyIsImxlZnRWYWx1ZVByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJyaWdodFZhbHVlUHJpbWl0aXZlVmFsdWUiLCJsZWZ0Qm9vbGVhbiIsInJpZ2h0Qm9vbGVhbiIsImJvb2xlYW4iLCJ2YWx1ZUZyb21Cb29sZWFuIiwidmFsdWVTdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjtrRUFFRjswQkFFQzt1QkFDTTt1QkFDSTs7Ozs7O01BRWpDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsQ0FBRTtRQUNyRixLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0osV0FBVztJQUN6QjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDSixTQUFTO0lBQ3ZCO0lBRUFLLFNBQVNaLE9BQU8sRUFBRTtRQUNoQixJQUFJYTtRQUVKLE1BQU1DLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRS9DZixRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGtCQUFrQixpQkFBaUIsQ0FBQztRQUVyRSxNQUFNRyxZQUFZLElBQUksQ0FBQ1gsUUFBUSxDQUFDTSxRQUFRLENBQUNaLFVBQ25Da0IsYUFBYSxJQUFJLENBQUNYLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDWixVQUNyQ21CLGdCQUFnQkYsVUFBVVQsT0FBTyxJQUNqQ1ksaUJBQWlCRixXQUFXVixPQUFPO1FBRXpDLElBQUlXLGtCQUFrQkUsbUJBQVksRUFBRTtZQUNsQyxNQUFNQyxrQkFBa0JMLFVBQVVGLFNBQVMsSUFDckNRLFVBQVUsQ0FBQyxLQUFLLEVBQUVELGdCQUFnQix1QkFBdUIsRUFBRUgsY0FBYyw2QkFBNkIsRUFBRUUsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDeEhHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlKLG1CQUFtQkMsbUJBQVksRUFBRTtZQUNuQyxNQUFNTSxtQkFBbUJULFdBQVdILFNBQVMsSUFDdkNRLFVBQVUsQ0FBQyxLQUFLLEVBQUVJLGlCQUFpQix3QkFBd0IsRUFBRVAsZUFBZSw2QkFBNkIsRUFBRUMsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDM0hHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1JLDBCQUEwQlgsVUFBVVksaUJBQWlCLElBQ3JEQywyQkFBMkJaLFdBQVdXLGlCQUFpQixJQUN2REUsY0FBYUgseUJBQ2JJLGVBQWVGLDBCQUNmRyxVQUFVLElBQUksQ0FBQzVCLFdBQVcsR0FDYjBCLGVBQWVDLGVBQ2JELGVBQWVDO1FBRXBDbkIsUUFBUXFCLElBQUFBLHVCQUFnQixFQUFDRCxTQUFTakM7UUFFbEMsTUFBTW1DLGNBQWN0QixNQUFNRSxTQUFTO1FBRW5DZixRQUFRb0MsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUV0QixrQkFBa0Isb0JBQW9CLEVBQUVxQixZQUFZLEVBQUUsQ0FBQztRQUUxRixPQUFPdEI7SUFDVDtJQUVBLE9BQU93QixPQUFPLGNBQWM7QUFDOUIifQ==