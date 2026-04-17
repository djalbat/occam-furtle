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
    constructor(context, string, node, breakPoint, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm){
        super(context, string, node, breakPoint);
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
        const primitiveString = primitive.getString(), string = primitiveString, node = null, breakPoint = null, variable = null, negatedTerm = null, logicalTerm = null, bracketedTerm = null, comparisonTerm = null;
        context = null;
        const term = new Term(context, string, node, breakPoint, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
        return term;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG4gICAgdGhpcy5uZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtO1xuICAgIHRoaXMubG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybTtcbiAgICB0aGlzLmJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtO1xuICAgIHRoaXMuY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlVmFsdWUoKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0aGlzLnByaW1pdGl2ZS5nZXRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVGVybS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uVGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGJvb2xlYW4gPSAodHlwZSA9PT0gQk9PTEVBTl9UWVBFKTtcblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnByaW1pdGl2ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5lZ2F0ZWRUZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubG9naWNhbFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmJyYWNrZXRlZFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5jb21wYXJpc29uVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRlcm0uZ2V0VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLnZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJpbWl0aXZlID0gdGVybS5nZXRQcmltaXRpdmUoKTtcblxuICAgICAgaWYgKHByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gdGhpcy5wcmltaXRpdmUuaXNFcXVhbFRvKHByaW1pdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tUHJpbWl0aXZlKHByaW1pdGl2ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkVGVybSA9IG51bGwsXG4gICAgICAgICAgbG9naWNhbFRlcm0gPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0gPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldE5lZ2F0ZWRUZXJtIiwiZ2V0TG9naWNhbFRlcm0iLCJnZXRCcmVlZGluZ1Rlcm0iLCJnZXRDb21wYXJpc29uVGVybSIsImdldFByaW1pdGl2ZVZhbHVlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRWYWx1ZSIsImdldFR5cGUiLCJ0eXBlIiwiaXNCb29sZWFuIiwiYm9vbGVhbiIsIkJPT0xFQU5fVFlQRSIsImV2YWx1YXRlIiwidGVybSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJuYW1lIiwiZnJvbVByaW1pdGl2ZSIsInByaW1pdGl2ZVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3VCQUNNO01BRTdCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxDQUFFO1FBQzNILEtBQUssQ0FBQ1QsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJ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