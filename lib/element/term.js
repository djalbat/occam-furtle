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
const _elements = require("../elements");
const _types = require("../types");
const _default = (0, _elements.define)(class Term extends _occamlanguages.Element {
    constructor(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm){
        super(context, string, node);
        this.variable = variable;
        this.primitive = primitive;
        this.negatedTerm = negatedTerm;
        this.logicalTerm = logicalTerm;
        this.bracketedTerm = bracketedTerm;
        this.comparisonTerm = comparisonTerm;
    }
    getVariable() {
        return this.variable;
    }
    getPrimitive() {
        return this.primitive;
    }
    getNegatedTerm() {
        return this.negatedTerm;
    }
    getLogicalTerm() {
        return this.logicalTerm;
    }
    getBreedingTerm() {
        return this.bracketedTerm;
    }
    getComparisonTerm() {
        return this.comparisonTerm;
    }
    getPrimitiveValue() {
        const primitiveValue = this.primitive.getValue();
        return primitiveValue;
    }
    getType() {
        let type;
        if (false) {
        ///
        } else if (this.variable !== null) {
            type = this.variable.getType();
        } else if (this.primitive !== null) {
            type = this.primitive.getType();
        } else if (this.negatedTerm !== null) {
            type = this.negatedTerm.getType();
        } else if (this.logicalTerm !== null) {
            type = this.logicalTerm.getType();
        } else if (this.bracketedTerm !== null) {
            type = this.bracketedTerm.getType();
        } else if (this.comparisonTerm !== null) {
            type = this.comparisonTerm.getType();
        }
        return type;
    }
    isBoolean() {
        const type = this.getType(), boolean = type === _types.BOOLEAN_TYPE;
        return boolean;
    }
    evaluate(context) {
        let term;
        if (false) {
        ///
        } else if (this.variable !== null) {
            term = this.variable.evaluate(context);
        } else if (this.primitive !== null) {
            term = this.primitive.evaluate(context);
        } else if (this.negatedTerm !== null) {
            term = this.negatedTerm.evaluate(context);
        } else if (this.logicalTerm !== null) {
            term = this.logicalTerm.evaluate(context);
        } else if (this.bracketedTerm !== null) {
            term = this.bracketedTerm.evaluate(context);
        } else if (this.comparisonTerm !== null) {
            term = this.comparisonTerm.evaluate(context);
        }
        return term;
    }
    isEqualTo(term) {
        let equalTo = false;
        if (false) {
        ///
        } else if (this.variable !== null) {
            const variable = term.getVariable();
            if (variable !== null) {
                equalTo = this.variable.isEqualTo(variable);
            }
        } else if (this.primitive !== null) {
            const primitive = term.getPrimitive();
            if (primitive !== null) {
                equalTo = this.primitive.isEqualTo(primitive);
            }
        }
        return equalTo;
    }
    static name = "Term";
    static fromPrimitive(primitive, context) {
        const primitiveString = primitive.getString(), string = primitiveString, node = null, variable = null, negatedTerm = null, logicalTerm = null, bracketedTerm = null, comparisonTerm = null;
        context = null;
        const term = new Term(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
        return term;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLm5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm07XG4gICAgdGhpcy5sb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtO1xuICAgIHRoaXMuYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm07XG4gICAgdGhpcy5jb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0TmVnYXRlZFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZFRlcm07XG4gIH1cblxuICBnZXRMb2dpY2FsVGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpY2FsVGVybTtcbiAgfVxuXG4gIGdldEJyZWVkaW5nVGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvblRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvblRlcm07XG4gIH1cblxuICBnZXRQcmltaXRpdmVWYWx1ZSgpIHtcbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRoaXMucHJpbWl0aXZlLmdldFZhbHVlKCk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlVmFsdWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcmltaXRpdmUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZFRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubG9naWNhbFRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5icmFja2V0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb25UZXJtLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgYm9vbGVhbiA9ICh0eXBlID09PSBCT09MRUFOX1RZUEUpO1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJpbWl0aXZlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubmVnYXRlZFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5sb2dpY2FsVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuYnJhY2tldGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmNvbXBhcmlzb25UZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybS5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB0ZXJtLmdldFByaW1pdGl2ZSgpO1xuXG4gICAgICBpZiAocHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8ocHJpbWl0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpbWl0aXZlU3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsVGVybSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVGVybSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvblRlcm0gPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBuZWdhdGVkVGVybSwgbG9naWNhbFRlcm0sIGJyYWNrZXRlZFRlcm0sIGNvbXBhcmlzb25UZXJtKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwiZ2V0VmFyaWFibGUiLCJnZXRQcmltaXRpdmUiLCJnZXROZWdhdGVkVGVybSIsImdldExvZ2ljYWxUZXJtIiwiZ2V0QnJlZWRpbmdUZXJtIiwiZ2V0Q29tcGFyaXNvblRlcm0iLCJnZXRQcmltaXRpdmVWYWx1ZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0VmFsdWUiLCJnZXRUeXBlIiwidHlwZSIsImlzQm9vbGVhbiIsImJvb2xlYW4iLCJCT09MRUFOX1RZUEUiLCJldmFsdWF0ZSIsInRlcm0iLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibmFtZSIsImZyb21QcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDt1QkFDTTtNQUU3QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLENBQUU7UUFDL0csS0FBSyxDQUFDUixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtJQUN4QjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNOLFFBQVE7SUFDdEI7SUFFQU8sZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFD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