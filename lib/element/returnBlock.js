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
    constructor(context, string, node, lineIndex, steps, nonsensical, returnStatement){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBhc3luY0ZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVybkJsb2NrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybkJsb2NrU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZXR1cm5CbG9ja1N0cmluZ30nIHJldHVybiBibG9jay4uLmApO1xuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgYXdhaXQgYXN5bmNGb3JFYWNoKHRoaXMuc3RlcHMsIGFzeW5jIChzdGVwKSA9PiB7XG4gICAgICBhd2FpdCBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMucmV0dXJuU3RhdGVtZW50LmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgRXZhbHVhdGVkLi4uIHRoZSAnJHtyZXR1cm5CbG9ja1N0cmluZ30nIHJldHVybiBibG9jayBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNGb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiUmV0dXJuQmxvY2siLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RlcHMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJ1bmRlZmluZWQiLCJyZXR1cm5CbG9ja1N0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsInN0ZXAiLCJ0ZXJtIiwidGVybVN0cmluZyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVCtDO2tFQUV6Qjs4REFDRzswQkFFRjs7Ozs7O0FBRXZCLE1BQU0sRUFBRUEsWUFBWSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU5QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxDQUFFO1FBQ2pGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUkscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDSCxlQUFlO0lBQzdCO0lBRUEsTUFBTUksU0FBU0MsU0FBUyxFQUFFWCxPQUFPLEVBQUU7UUFDakMsSUFBSUEsWUFBWVksV0FBVztZQUN6QlosVUFBVVcsV0FBWSxHQUFHO1lBRXpCQSxZQUFZLEVBQUU7UUFDaEI7UUFFQSxNQUFNRSxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUUvQ2QsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGtCQUFrQixpQkFBaUIsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQ1IsV0FBVyxFQUFFO1lBQ3BCLE1BQU1XLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUM1Q0MsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsZUFBZUMsY0FBWSxDQUFDQyxhQUFhLENBQUNYLFdBQVdYO1FBRTNEQSxVQUFVb0IsY0FBYyxHQUFHO1FBRTNCLE1BQU16QixhQUFhLElBQUksQ0FBQ1MsS0FBSyxFQUFFLE9BQU9tQjtZQUNwQyxNQUFNQSxLQUFLYixRQUFRLENBQUNWO1FBQ3RCO1FBRUEsTUFBTXdCLE9BQU8sSUFBSSxDQUFDbEIsZUFBZSxDQUFDSSxRQUFRLENBQUNWLFVBQ3JDeUIsYUFBYUQsS0FBS1YsU0FBUztRQUVqQ2QsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFYixrQkFBa0IsbUJBQW1CLEVBQUVZLFdBQVcsRUFBRSxDQUFDO1FBRXhGLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRyxPQUFPLGNBQWM7QUFDOUIifQ==