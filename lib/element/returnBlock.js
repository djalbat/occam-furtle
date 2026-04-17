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
const _block = /*#__PURE__*/ _interop_require_default(require("../context/block"));
const _elements = require("../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { asyncForEach } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class ReturnBlock extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, steps, nonsensical, returnStatement){
        super(context, string, node, breakPoint);
        this.steps = steps;
        this.nonsensical = nonsensical;
        this.returnStatement = returnStatement;
    }
    getSteps() {
        return this.steps;
    }
    isNonsensical() {
        return this.nonsensical;
    }
    getReturnStatement() {
        return this.returnStatement;
    }
    async evaluate(variables, context) {
        if (context === undefined) {
            context = variables; ///
            variables = [];
        }
        const returnBlockString = this.getString(); ///
        context.trace(`Evaluating the '${returnBlockString}' return block...`);
        if (this.nonsensical) {
            const message = `The return block is nonsensical.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const blockContext = _block.default.fromVariables(variables, context);
        context = blockContext; ///
        await asyncForEach(this.steps, async (step)=>{
            await step.evaluate(context);
        });
        const term = this.returnStatement.evaluate(context), termString = term.getString();
        context.debug(`Evaluated... the '${returnBlockString}' return block as '${termString}'.`);
        return term;
    }
    static name = "ReturnBlock";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBhc3luY0ZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVybkJsb2NrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybkJsb2NrU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZXR1cm5CbG9ja1N0cmluZ30nIHJldHVybiBibG9jay4uLmApO1xuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgYXdhaXQgYXN5bmNGb3JFYWNoKHRoaXMuc3RlcHMsIGFzeW5jIChzdGVwKSA9PiB7XG4gICAgICBhd2FpdCBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMucmV0dXJuU3RhdGVtZW50LmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgRXZhbHVhdGVkLi4uIHRoZSAnJHtyZXR1cm5CbG9ja1N0cmluZ30nIHJldHVybiBibG9jayBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNGb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiUmV0dXJuQmxvY2siLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50Iiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsImdldFN0ZXBzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVyblN0YXRlbWVudCIsImV2YWx1YXRlIiwidmFyaWFibGVzIiwidW5kZWZpbmVkIiwicmV0dXJuQmxvY2tTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21WYXJpYWJsZXMiLCJzdGVwIiwidGVybSIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVQrQztrRUFFekI7OERBQ0c7MEJBRUY7Ozs7OztBQUV2QixNQUFNLEVBQUVBLFlBQVksRUFBRSxHQUFHQyxxQ0FBcUI7TUFFOUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFPO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsQ0FBRTtRQUNsRixLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7SUFDekI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSCxXQUFXO0lBQ3pCO0lBRUFJLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0gsZUFBZTtJQUM3QjtJQUVBLE1BQU1JLFNBQVNDLFNBQVMsRUFBRVgsT0FBTyxFQUFFO1FBQ2pDLElBQUlBLFlBQVlZLFdBQVc7WUFDekJaLFVBQVVXLFdBQVksR0FBRztZQUV6QkEsWUFBWSxFQUFFO1FBQ2hCO1FBRUEsTUFBTUUsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFL0NkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixrQkFBa0IsaUJBQWlCLENBQUM7UUFFckUsSUFBSSxJQUFJLENBQUNSLFdBQVcsRUFBRTtZQUNwQixNQUFNVyxVQUFVLENBQUMsZ0NBQWdDLENBQUMsRUFDNUNDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDWCxXQUFXWDtRQUUzREEsVUFBVW9CLGNBQWMsR0FBRztRQUUzQixNQUFNekIsYUFBYSxJQUFJLENBQUNTLEtBQUssRUFBRSxPQUFPbUI7WUFDcEMsTUFBTUEsS0FBS2IsUUFBUSxDQUFDVjtRQUN0QjtRQUVBLE1BQU13QixPQUFPLElBQUksQ0FBQ2xCLGVBQWUsQ0FBQ0ksUUFBUSxDQUFDVixVQUNyQ3lCLGFBQWFELEtBQUtWLFNBQVM7UUFFakNkLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWIsa0JBQWtCLG1CQUFtQixFQUFFWSxXQUFXLEVBQUUsQ0FBQztRQUV4RixPQUFPRDtJQUNUO0lBRUEsT0FBT0csT0FBTyxjQUFjO0FBQzlCIn0=