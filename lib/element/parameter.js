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
const _default = (0, _elements.define)(class Parameter extends _occamlanguages.Element {
    constructor(context, string, node, type, name){
        super(context, string, node);
        this.type = type;
        this.name = name;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    compareTerm(term, context) {
        const termString = term.getString(), parameterString = this.getString(); ///
        context.trace(`Comparing the '${termString}' term against the '${parameterString}' parameter...`);
        const termType = term.getType();
        if (this.type !== termType) {
            const message = `The '${termString}' term's '${termType}' type is not equal to the '${parameterString}' parameter's '${this.type}' type.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...comparing the '${termString}' term against the '${parameterString}' parameter.`);
    }
    static name = "Parameter";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUGFyYW1ldGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUGFyYW1ldGVyIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsIm5hbWUiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImNvbXBhcmVUZXJtIiwidGVybSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjtrRUFFRjswQkFFQzs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUM3QyxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsWUFBWUMsSUFBSSxFQUFFUixPQUFPLEVBQUU7UUFDekIsTUFBTVMsYUFBYUQsS0FBS0UsU0FBUyxJQUMzQkMsa0JBQWtCLElBQUksQ0FBQ0QsU0FBUyxJQUFLLEdBQUc7UUFFOUNWLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsV0FBVyxvQkFBb0IsRUFBRUUsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoRyxNQUFNRSxXQUFXTCxLQUFLSCxPQUFPO1FBRTdCLElBQUksSUFBSSxDQUFDRixJQUFJLEtBQUtVLFVBQVU7WUFDMUIsTUFBTUMsVUFBVSxDQUFDLEtBQUssRUFBRUwsV0FBVyxVQUFVLEVBQUVJLFNBQVMsNEJBQTRCLEVBQUVGLGdCQUFnQixlQUFlLEVBQUUsSUFBSSxDQUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ25JWSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQWYsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFVCxXQUFXLG9CQUFvQixFQUFFRSxnQkFBZ0IsWUFBWSxDQUFDO0lBQ25HO0lBRUEsT0FBT1AsT0FBTyxZQUFZO0FBQzVCIn0=