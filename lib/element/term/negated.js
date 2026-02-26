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
const _term = require("../../utilities/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NegatedTerm extends _occamlanguages.Element {
    constructor(context, string, node, type, term){
        super(context, string, node);
        this.type = type;
        this.term = term;
    }
    getType() {
        return this.type;
    }
    getTerm() {
        return this.term;
    }
    evaluate(context) {
        let term;
        const negatedTermString = this.getString(); ///
        context.trace(`Evaluating the '${negatedTermString}' negated term...`);
        term = this.term.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.BOOLEAN_TYPE) {
            const termString = term.getString(), message = `The '${termString}' left term's type is '${termType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let boolean;
        const primitiveValue = term.getPrimitiveValue();
        boolean = primitiveValue; ///
        boolean = !boolean;
        term = (0, _term.termFromBoolean)(boolean, context);
        const termString = term.getString();
        context.debug(`...evaluated the '${negatedTermString}' negated term as '${termString}'.`);
        return term;
    }
    static name = "NegatedTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5lZ2F0ZWRUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5lZ2F0ZWRUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuZWdhdGVkVGVybVN0cmluZ30nIG5lZ2F0ZWQgdGVybS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBib29sZWFuO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICBib29sZWFuID0gcHJpbWl0aXZlVmFsdWU7IC8vL1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuZWdhdGVkVGVybVN0cmluZ30nIG5lZ2F0ZWQgdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOZWdhdGVkVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmVnYXRlZFRlcm0iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwidGVybSIsImdldFR5cGUiLCJnZXRUZXJtIiwiZXZhbHVhdGUiLCJuZWdhdGVkVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJCT09MRUFOX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYm9vbGVhbiIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJ0ZXJtRnJvbUJvb2xlYW4iLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjtrRUFFRjswQkFFQzt1QkFDTTtzQkFDRzs7Ozs7O01BRWhDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUM3QyxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsU0FBU1AsT0FBTyxFQUFFO1FBQ2hCLElBQUlJO1FBRUosTUFBTUksb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFL0NULFFBQVFVLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixrQkFBa0IsaUJBQWlCLENBQUM7UUFFckVKLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNHLFFBQVEsQ0FBQ1A7UUFFMUIsTUFBTVcsV0FBV1AsS0FBS0MsT0FBTztRQUU3QixJQUFJTSxhQUFhQyxtQkFBWSxFQUFFO1lBQzdCLE1BQU1DLGFBQWFULEtBQUtLLFNBQVMsSUFDM0JLLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsdUJBQXVCLEVBQUVGLFNBQVMsNkJBQTZCLEVBQUVDLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQzlHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJRztRQUVKLE1BQU1DLGlCQUFpQmYsS0FBS2dCLGlCQUFpQjtRQUU3Q0YsVUFBVUMsZ0JBQWdCLEdBQUc7UUFFN0JELFVBQVUsQ0FBQ0E7UUFFWGQsT0FBT2lCLElBQUFBLHFCQUFlLEVBQUNILFNBQVNsQjtRQUVoQyxNQUFNYSxhQUFhVCxLQUFLSyxTQUFTO1FBRWpDVCxRQUFRc0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVkLGtCQUFrQixtQkFBbUIsRUFBRUssV0FBVyxFQUFFLENBQUM7UUFFeEYsT0FBT1Q7SUFDVDtJQUVBLE9BQU9tQixPQUFPLGNBQWM7QUFDOUIifQ==