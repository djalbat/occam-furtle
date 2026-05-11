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
const _value = require("../../utilities/value");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class ComparisonTerm extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, negated, leftTerm, rightTerm){
        super(context, string, node, breakPoint);
        this.negated = negated;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    isNegated() {
        return this.negated;
    }
    getLeftTerm() {
        return this.leftTerm;
    }
    getRightTerm() {
        return this.rightTerm;
    }
    evaluate(context) {
        let value;
        const comparisonTermString = this.getString(); ///
        context.trace(`Evaluating the '${comparisonTermString}' comparison term...`);
        const leftValue = this.leftTerm.evaluate(context), rightValue = this.rightTerm.evaluate(context), leftValueType = leftValue.getType(), rightValueType = rightValue.getType();
        if (leftValueType !== rightValueType) {
            const leftValueString = leftValue.getString(), rightValueString = rightValue.getString(), message = `The '${leftValueString}' left term's type is '${leftValueType}' whereas the '${rightValueString}' right term's type is '${rightTermType}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const leftValueEqualToRightValue = leftValue.isEqualTo(rightValue);
        let boolean = leftValueEqualToRightValue; ///
        if (this.negated) {
            boolean = !boolean; ///
        }
        value = (0, _value.valueFromBoolean)(boolean, context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${comparisonTermString}' comparison value as '${valueString}'.`);
        return value;
    }
    static name = "ComparisonTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFsdWVGcm9tQm9vbGVhbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbXBhcmlzb25UZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmVnYXRlZCwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25UZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFZhbHVlID0gdGhpcy5sZWZ0VGVybS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhbHVlVHlwZSA9IGxlZnRWYWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZVR5cGUgPSByaWdodFZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VmFsdWVUeXBlICE9PSByaWdodFZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgbGVmdFZhbHVlU3RyaW5nID0gbGVmdFZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZVN0cmluZyA9IHJpZ2h0VmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VmFsdWVTdHJpbmd9JyBsZWZ0IHRlcm0ncyB0eXBlIGlzICcke2xlZnRWYWx1ZVR5cGV9JyB3aGVyZWFzIHRoZSAnJHtyaWdodFZhbHVlU3RyaW5nfScgcmlnaHQgdGVybSdzIHR5cGUgaXMgJyR7cmlnaHRUZXJtVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VmFsdWVFcXVhbFRvUmlnaHRWYWx1ZSA9IGxlZnRWYWx1ZS5pc0VxdWFsVG8ocmlnaHRWYWx1ZSk7XG5cbiAgICBsZXQgYm9vbGVhbiA9IGxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Y29tcGFyaXNvblRlcm1TdHJpbmd9JyBjb21wYXJpc29uIHZhbHVlIGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBhcmlzb25UZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsIm5lZ2F0ZWQiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImlzTmVnYXRlZCIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsImNvbXBhcmlzb25UZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwibGVmdFZhbHVlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhbHVlVHlwZSIsImxlZnRWYWx1ZVN0cmluZyIsInJpZ2h0VmFsdWVTdHJpbmciLCJtZXNzYWdlIiwicmlnaHRUZXJtVHlwZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWUiLCJpc0VxdWFsVG8iLCJib29sZWFuIiwidmFsdWVGcm9tQm9vbGVhbiIsInZhbHVlU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUY7MEJBRUM7dUJBQ1U7Ozs7OztNQUVqQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHVCQUF1QkMsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQzNFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE9BQU87SUFDckI7SUFFQUksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0gsU0FBUztJQUN2QjtJQUVBSSxTQUFTVixPQUFPLEVBQUU7UUFDaEIsSUFBSVc7UUFFSixNQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVsRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHFCQUFxQixvQkFBb0IsQ0FBQztRQUUzRSxNQUFNRyxZQUFZLElBQUksQ0FBQ1YsUUFBUSxDQUFDSyxRQUFRLENBQUNWLFVBQ25DZ0IsYUFBYSxJQUFJLENBQUNWLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDVixVQUNyQ2lCLGdCQUFnQkYsVUFBVUcsT0FBTyxJQUNqQ0MsaUJBQWlCSCxXQUFXRSxPQUFPO1FBRXpDLElBQUlELGtCQUFrQkUsZ0JBQWdCO1lBQ3BDLE1BQU1DLGtCQUFrQkwsVUFBVUYsU0FBUyxJQUNyQ1EsbUJBQW1CTCxXQUFXSCxTQUFTLElBQ3ZDUyxVQUFVLENBQUMsS0FBSyxFQUFFRixnQkFBZ0IsdUJBQXVCLEVBQUVILGNBQWMsZUFBZSxFQUFFSSxpQkFBaUIsd0JBQXdCLEVBQUVFLGNBQWMsRUFBRSxDQUFDLEVBQ3RKQyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNKO1lBRXhDLE1BQU1FO1FBQ1I7UUFFQSxNQUFNRyw2QkFBNkJaLFVBQVVhLFNBQVMsQ0FBQ1o7UUFFdkQsSUFBSWEsVUFBVUYsNEJBQTRCLEdBQUc7UUFFN0MsSUFBSSxJQUFJLENBQUN2QixPQUFPLEVBQUU7WUFDaEJ5QixVQUFVLENBQUNBLFNBQVMsR0FBRztRQUN6QjtRQUVBbEIsUUFBUW1CLElBQUFBLHVCQUFnQixFQUFDRCxTQUFTN0I7UUFFbEMsTUFBTStCLGNBQWNwQixNQUFNRSxTQUFTO1FBRW5DYixRQUFRZ0MsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVwQixxQkFBcUIsdUJBQXVCLEVBQUVtQixZQUFZLEVBQUUsQ0FBQztRQUVoRyxPQUFPcEI7SUFDVDtJQUVBLE9BQU9zQixPQUFPLGlCQUFpQjtBQUNqQyJ9