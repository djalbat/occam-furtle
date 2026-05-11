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
        let value;
        if (false) {
        ///
        } else if (this.variable !== null) {
            value = this.variable.evaluate(context);
        } else if (this.primitive !== null) {
            value = this.primitive.evaluate(context);
        } else if (this.negatedTerm !== null) {
            value = this.negatedTerm.evaluate(context);
        } else if (this.logicalTerm !== null) {
            value = this.logicalTerm.evaluate(context);
        } else if (this.bracketedTerm !== null) {
            value = this.bracketedTerm.evaluate(context);
        } else if (this.comparisonTerm !== null) {
            value = this.comparisonTerm.evaluate(context);
        }
        return value;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG4gICAgdGhpcy5uZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtO1xuICAgIHRoaXMubG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybTtcbiAgICB0aGlzLmJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtO1xuICAgIHRoaXMuY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlVmFsdWUoKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0aGlzLnByaW1pdGl2ZS5nZXRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVGVybS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uVGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIGJvb2xlYW4gPSAodHlwZSA9PT0gQk9PTEVBTl9UWVBFKTtcblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnByaW1pdGl2ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5uZWdhdGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5sb2dpY2FsVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJyYWNrZXRlZFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29tcGFyaXNvblRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybS5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB0ZXJtLmdldFByaW1pdGl2ZSgpO1xuXG4gICAgICBpZiAocHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8ocHJpbWl0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpbWl0aXZlU3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsVGVybSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVGVybSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvblRlcm0gPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBuZWdhdGVkVGVybSwgbG9naWNhbFRlcm0sIGJyYWNrZXRlZFRlcm0sIGNvbXBhcmlzb25UZXJtKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwicHJpbWl0aXZlIiwibmVnYXRlZFRlcm0iLCJsb2dpY2FsVGVybSIsImJyYWNrZXRlZFRlcm0iLCJjb21wYXJpc29uVGVybSIsImdldFZhcmlhYmxlIiwiZ2V0UHJpbWl0aXZlIiwiZ2V0TmVnYXRlZFRlcm0iLCJnZXRMb2dpY2FsVGVybSIsImdldEJyZWVkaW5nVGVybSIsImdldENvbXBhcmlzb25UZXJtIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJwcmltaXRpdmVWYWx1ZSIsImdldFZhbHVlIiwiZ2V0VHlwZSIsInR5cGUiLCJpc0Jvb2xlYW4iLCJib29sZWFuIiwiQk9PTEVBTl9UWVBFIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsImlzRXF1YWxUbyIsInRlcm0iLCJlcXVhbFRvIiwibmFtZSIsImZyb21QcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDt1QkFDTTtNQUU3QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsQ0FBRTtRQUMzSCxLQUFLLENBQUNULFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO0lBQ3hCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ04sUUFBUTtJQUN0QjtJQUVBTyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNOLFNBQVM7SUFDdkI7SUFFQU8saUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNOLFdBQVc7SUFDekI7SUFFQU8saUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNOLFdBQVc7SUFDekI7SUFFQU8sa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDTixhQUFhO0lBQzNCO0lBRUFPLG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQ04sY0FBYztJQUM1QjtJQUVBTyxvQkFBb0I7UUFDbEIsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ1osU0FBUyxDQUFDYSxRQUFRO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQUUsVUFBVTtRQUNSLElBQUlDO1FBRUosSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNoQixRQUFRLEtBQUssTUFBTTtZQUNqQ2dCLE9BQU8sSUFBSSxDQUFDaEIsUUFBUSxDQUFDZSxPQUFPO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUNkLFNBQVMsS0FBSyxNQUFNO1lBQ2xDZSxPQUFPLElBQUksQ0FBQ2YsU0FBUyxDQUFDYyxPQUFPO1FBQy9CLE9BQU8sSUFBSSxJQUFJLENBQUNiLFdBQVcsS0FBSyxNQUFNO1lBQ3BDYyxPQUFPLElBQUksQ0FBQ2QsV0FBVyxDQUFDYSxPQUFPO1FBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUNaLFdBQVcsS0FBSyxNQUFNO1lBQ3BDYSxPQUFPLElBQUksQ0FBQ2IsV0FBVyxDQUFDWSxPQUFPO1FBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUNYLGFBQWEsS0FBSyxNQUFNO1lBQ3RDWSxPQUFPLElBQUksQ0FBQ1osYUFBYSxDQUFDVyxPQUFPO1FBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNWLGNBQWMsS0FBSyxNQUFNO1lBQ3ZDVyxPQUFPLElBQUksQ0FBQ1gsY0FBYyxDQUFDVSxPQUFPO1FBQ3BDO1FBRUEsT0FBT0M7SUFDVDtJQUVBQyxZQUFZO1FBQ1YsTUFBTUQsT0FBTyxJQUFJLENBQUNELE9BQU8sSUFDbkJHLFVBQVdGLFNBQVNHLG1CQUFZO1FBRXRDLE9BQU9EO0lBQ1Q7SUFFQUUsU0FBU3hCLE9BQU8sRUFBRTtRQUNoQixJQUFJeUI7UUFFSixJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ3JCLFFBQVEsS0FBSyxNQUFNO1lBQ2pDcUIsUUFBUSxJQUFJLENBQUNyQixRQUFRLENBQUNvQixRQUFRLENBQUN4QjtRQUNqQyxPQUFPLElBQUksSUFBSSxDQUFDSyxTQUFTLEtBQUssTUFBTTtZQUNsQ29CLFFBQVEsSUFBSSxDQUFDcEIsU0FBUyxDQUFDbUIsUUFBUSxDQUFDeEI7UUFDbEMsT0FBTyxJQUFJLElBQUksQ0FBQ00sV0FBVyxLQUFLLE1BQU07WUFDcENtQixRQUFRLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ2tCLFFBQVEsQ0FBQ3hCO1FBQ3BDLE9BQU8sSUFBSSxJQUFJLENBQUNPLFdBQVcsS0FBSyxNQUFNO1lBQ3BDa0IsUUFBUSxJQUFJLENBQUNsQixXQUFXLENBQUNpQixRQUFRLENBQUN4QjtRQUNwQyxPQUFPLElBQUksSUFBSSxDQUFDUSxhQUFhLEtBQUssTUFBTTtZQUN0Q2lCLFFBQVEsSUFBSSxDQUFDakIsYUFBYSxDQUFDZ0IsUUFBUSxDQUFDeEI7UUFDdEMsT0FBTyxJQUFJLElBQUksQ0FBQ1MsY0FBYyxLQUFLLE1BQU07WUFDdkNnQixRQUFRLElBQUksQ0FBQ2hCLGNBQWMsQ0FBQ2UsUUFBUSxDQUFDeEI7UUFDdkM7UUFFQSxPQUFPeUI7SUFDVDtJQUVBQyxVQUFVQyxJQUFJLEVBQUU7UUFDZCxJQUFJQyxVQUFVO1FBRWQsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLENBQUN4QixRQUFRLEtBQUssTUFBTTtZQUNqQyxNQUFNQSxXQUFXdUIsS0FBS2pCLFdBQVc7WUFFakMsSUFBSU4sYUFBYSxNQUFNO2dCQUNyQndCLFVBQVUsSUFBSSxDQUFDeEIsUUFBUSxDQUFDc0IsU0FBUyxDQUFDdEI7WUFDcEM7UUFDRixPQUFPLElBQUksSUFBSSxDQUFDQyxTQUFTLEtBQUssTUFBTTtZQUNsQyxNQUFNQSxZQUFZc0IsS0FBS2hCLFlBQVk7WUFFbkMsSUFBSU4sY0FBYyxNQUFNO2dCQUN0QnVCLFVBQVUsSUFBSSxDQUFDdkIsU0FBUyxDQUFDcUIsU0FBUyxDQUFDckI7WUFDckM7UUFDRjtRQUVBLE9BQU91QjtJQUNUO0lBRUEsT0FBT0MsT0FBTyxPQUFPO0lBRXJCLE9BQU9DLGNBQWN6QixTQUFTLEVBQUVMLE9BQU8sRUFBRTtRQUN2QyxNQUFNK0Isa0JBQWtCMUIsVUFBVTJCLFNBQVMsSUFDckMvQixTQUFTOEIsaUJBQ1Q3QixPQUFPLE1BQ1BDLGFBQWEsTUFDYkMsV0FBVyxNQUNYRSxjQUFjLE1BQ2RDLGNBQWMsTUFDZEMsZ0JBQWdCLE1BQ2hCQyxpQkFBaUI7UUFFdkJULFVBQVU7UUFFVixNQUFNMkIsT0FBTyxJQUFJN0IsS0FBS0UsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUMsVUFBVUMsV0FBV0MsYUFBYUMsYUFBYUMsZUFBZUM7UUFFdkgsT0FBT2tCO0lBQ1Q7QUFDRiJ9