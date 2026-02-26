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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleNameInput extends _easy.Input {
    getRuleName() {
        const value = this.getValue(), ruleName = value; ///
        return ruleName;
    }
    setRuleName(ruleName) {
        const value = ruleName; ///
        this.setValue(value);
    }
    parentContext() {
        const getRuleName = this.getRuleName.bind(this), setRuleName = this.setRuleName.bind(this);
        return {
            getRuleName,
            setRuleName
        };
    }
    static defaultProperties = {
        className: "rule-name",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(RuleNameInput)`

  border: 1px solid darkgrey;
  padding: 0.25rem;
  font-size: 1.2rem;
  font-family: monospace;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgUnVsZU5hbWVJbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRSdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFJ1bGVOYW1lID0gdGhpcy5zZXRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZSxcbiAgICAgIHNldFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJ1bGUtbmFtZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUnVsZU5hbWVJbnB1dClgXG5cbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVJbnB1dCIsIklucHV0IiwiZ2V0UnVsZU5hbWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwicnVsZU5hbWUiLCJzZXRSdWxlTmFtZSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OztzRUFsQ3NCO3NCQUVBOzs7Ozs7QUFFdEIsTUFBTUEsc0JBQXNCQyxXQUFLO0lBQy9CQyxjQUFjO1FBQ1osTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFdBQVdGLE9BQU8sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLFlBQVlELFFBQVEsRUFBRTtRQUNwQixNQUFNRixRQUFRRSxVQUFVLEdBQUc7UUFFM0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKO0lBQ2hCO0lBRUFLLGdCQUFnQjtRQUNkLE1BQU1OLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQ3hDSCxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUU5QyxPQUFRO1lBQ05QO1lBQ0FJO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsY0FBYyxDQUFDOzs7Ozs7O0FBT3hDLENBQUMifQ==