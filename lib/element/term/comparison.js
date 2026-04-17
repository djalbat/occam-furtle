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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21wYXJpc29uVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25UZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IHJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gbGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7bGVmdFRlcm1UeXBlfScgd2hlcmVhcyB0aGUgJyR7cmlnaHRUZXJtU3RyaW5nfScgcmlnaHQgdGVybSdzIHR5cGUgaXMgJyR7cmlnaHRUZXJtVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0gPSBsZWZ0VGVybS5pc0VxdWFsVG8ocmlnaHRUZXJtKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGFyaXNvblRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibmVnYXRlZCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiaXNOZWdhdGVkIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJldmFsdWF0ZSIsInRlcm0iLCJjb21wYXJpc29uVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1UeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRUZXJtRXF1YWxUb1JpZ2h0VGVybSIsImlzRXF1YWxUbyIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7a0VBRUY7MEJBRUM7c0JBQ1M7Ozs7OztNQUVoQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHVCQUF1QkMsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQzNFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE9BQU87SUFDckI7SUFFQUksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0gsU0FBUztJQUN2QjtJQUVBSSxTQUFTVixPQUFPLEVBQUU7UUFDaEIsSUFBSVc7UUFFSixNQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVsRGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHFCQUFxQixvQkFBb0IsQ0FBQztRQUUzRSxNQUFNUCxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDSyxRQUFRLENBQUNWLFVBQ2xDTSxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDSSxRQUFRLENBQUNWLFVBQ3BDZSxlQUFlVixTQUFTVyxPQUFPLElBQy9CQyxnQkFBZ0JYLFVBQVVVLE9BQU87UUFFdkMsSUFBSUQsaUJBQWlCRSxlQUFlO1lBQ2xDLE1BQU1DLGlCQUFpQmIsU0FBU1EsU0FBUyxJQUNuQ00sa0JBQWtCYixVQUFVTyxTQUFTLElBQ3JDTyxVQUFVLENBQUMsS0FBSyxFQUFFRixlQUFlLHVCQUF1QixFQUFFSCxhQUFhLGVBQWUsRUFBRUksZ0JBQWdCLHdCQUF3QixFQUFFRixjQUFjLEVBQUUsQ0FBQyxFQUNuSkksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsMkJBQTJCbkIsU0FBU29CLFNBQVMsQ0FBQ25CO1FBRXBELElBQUlvQixVQUFVRiwwQkFBMEIsR0FBRztRQUUzQyxJQUFJLElBQUksQ0FBQ3BCLE9BQU8sRUFBRTtZQUNoQnNCLFVBQVUsQ0FBQ0EsU0FBUyxHQUFHO1FBQ3pCO1FBRUFmLE9BQU9nQixJQUFBQSxxQkFBZSxFQUFDRCxTQUFTMUI7UUFFaEMsTUFBTTRCLGFBQWFqQixLQUFLRSxTQUFTO1FBRWpDYixRQUFRNkIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVqQixxQkFBcUIsc0JBQXNCLEVBQUVnQixXQUFXLEVBQUUsQ0FBQztRQUU5RixPQUFPakI7SUFDVDtJQUVBLE9BQU9tQixPQUFPLGlCQUFpQjtBQUNqQyJ9