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
const _term = require("../../utilities/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class ComparisonTerm extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, negated, leftTerm, rightTerm){
        super(context, string, node, lineIndex);
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
        let term;
        const comparisonTermString = this.getString(); ///
        context.trace(`Evaluating the '${comparisonTermString}' comparison term...`);
        const leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
        if (leftTermType !== rightTermType) {
            const leftTermString = leftTerm.getString(), rightTermString = rightTerm.getString(), message = `The '${leftTermString}' left term's type is '${leftTermType}' whereas the '${rightTermString}' right term's type is '${rightTermType}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);
        let boolean = leftTermEqualToRightTerm; ///
        if (this.negated) {
            boolean = !boolean; ///
        }
        term = (0, _term.termFromBoolean)(boolean, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${comparisonTermString}' comparison term as '${termString}'.`);
        return term;
    }
    static name = "ComparisonTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21wYXJpc29uVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmVnYXRlZCwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25UZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IHJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gbGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7bGVmdFRlcm1UeXBlfScgd2hlcmVhcyB0aGUgJyR7cmlnaHRUZXJtU3RyaW5nfScgcmlnaHQgdGVybSdzIHR5cGUgaXMgJyR7cmlnaHRUZXJtVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0gPSBsZWZ0VGVybS5pc0VxdWFsVG8ocmlnaHRUZXJtKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGFyaXNvblRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuZWdhdGVkIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImV2YWx1YXRlIiwidGVybSIsImNvbXBhcmlzb25UZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtIiwiaXNFcXVhbFRvIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjtrRUFFRjswQkFFQztzQkFDUzs7Ozs7O01BRWhDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsdUJBQXVCQyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLENBQUU7UUFDMUUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsT0FBTztJQUNyQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDSCxTQUFTO0lBQ3ZCO0lBRUFJLFNBQVNWLE9BQU8sRUFBRTtRQUNoQixJQUFJVztRQUVKLE1BQU1DLHVCQUF1QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRWxEYixRQUFRYyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYscUJBQXFCLG9CQUFvQixDQUFDO1FBRTNFLE1BQU1QLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNLLFFBQVEsQ0FBQ1YsVUFDbENNLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNJLFFBQVEsQ0FBQ1YsVUFDcENlLGVBQWVWLFNBQVNXLE9BQU8sSUFDL0JDLGdCQUFnQlgsVUFBVVUsT0FBTztRQUV2QyxJQUFJRCxpQkFBaUJFLGVBQWU7WUFDbEMsTUFBTUMsaUJBQWlCYixTQUFTUSxTQUFTLElBQ25DTSxrQkFBa0JiLFVBQVVPLFNBQVMsSUFDckNPLFVBQVUsQ0FBQyxLQUFLLEVBQUVGLGVBQWUsdUJBQXVCLEVBQUVILGFBQWEsZUFBZSxFQUFFSSxnQkFBZ0Isd0JBQXdCLEVBQUVGLGNBQWMsRUFBRSxDQUFDLEVBQ25KSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRywyQkFBMkJuQixTQUFTb0IsU0FBUyxDQUFDbkI7UUFFcEQsSUFBSW9CLFVBQVVGLDBCQUEwQixHQUFHO1FBRTNDLElBQUksSUFBSSxDQUFDcEIsT0FBTyxFQUFFO1lBQ2hCc0IsVUFBVSxDQUFDQSxTQUFTLEdBQUc7UUFDekI7UUFFQWYsT0FBT2dCLElBQUFBLHFCQUFlLEVBQUNELFNBQVMxQjtRQUVoQyxNQUFNNEIsYUFBYWpCLEtBQUtFLFNBQVM7UUFFakNiLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWpCLHFCQUFxQixzQkFBc0IsRUFBRWdCLFdBQVcsRUFBRSxDQUFDO1FBRTlGLE9BQU9qQjtJQUNUO0lBRUEsT0FBT21CLE9BQU8saUJBQWlCO0FBQ2pDIn0=