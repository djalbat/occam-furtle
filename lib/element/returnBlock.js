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
    constructor(context, string, node, steps, nonsensical, returnStatement){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBhc3luY0ZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVybkJsb2NrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0UmV0dXJuU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB2YXJpYWJsZXM7ICAvLy9cblxuICAgICAgdmFyaWFibGVzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmV0dXJuQmxvY2tTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JldHVybkJsb2NrU3RyaW5nfScgcmV0dXJuIGJsb2NrLi4uYCk7XG5cbiAgICBpZiAodGhpcy5ub25zZW5zaWNhbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgcmV0dXJuIGJsb2NrIGlzIG5vbnNlbnNpY2FsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2godGhpcy5zdGVwcywgYXN5bmMgKHN0ZXApID0+IHtcbiAgICAgIGF3YWl0IHN0ZXAuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy5yZXR1cm5TdGF0ZW1lbnQuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGBFdmFsdWF0ZWQuLi4gdGhlICcke3JldHVybkJsb2NrU3RyaW5nfScgcmV0dXJuIGJsb2NrIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVybkJsb2NrXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0ZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJSZXR1cm5CbG9jayIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJnZXRTdGVwcyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJldmFsdWF0ZSIsInZhcmlhYmxlcyIsInVuZGVmaW5lZCIsInJldHVybkJsb2NrU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwic3RlcCIsInRlcm0iLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUK0M7a0VBRXpCOzhEQUNHOzBCQUVGOzs7Ozs7QUFFdkIsTUFBTSxFQUFFQSxZQUFZLEVBQUUsR0FBR0MscUNBQXFCO01BRTlDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxDQUFFO1FBQ3RFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUkscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDSCxlQUFlO0lBQzdCO0lBRUEsTUFBTUksU0FBU0MsU0FBUyxFQUFFVixPQUFPLEVBQUU7UUFDakMsSUFBSUEsWUFBWVcsV0FBVztZQUN6QlgsVUFBVVUsV0FBWSxHQUFHO1lBRXpCQSxZQUFZLEVBQUU7UUFDaEI7UUFFQSxNQUFNRSxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUUvQ2IsUUFBUWMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGtCQUFrQixpQkFBaUIsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQ1IsV0FBVyxFQUFFO1lBQ3BCLE1BQU1XLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUM1Q0MsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsZUFBZUMsY0FBWSxDQUFDQyxhQUFhLENBQUNYLFdBQVdWO1FBRTNEQSxVQUFVbUIsY0FBYyxHQUFHO1FBRTNCLE1BQU14QixhQUFhLElBQUksQ0FBQ1EsS0FBSyxFQUFFLE9BQU9tQjtZQUNwQyxNQUFNQSxLQUFLYixRQUFRLENBQUNUO1FBQ3RCO1FBRUEsTUFBTXVCLE9BQU8sSUFBSSxDQUFDbEIsZUFBZSxDQUFDSSxRQUFRLENBQUNULFVBQ3JDd0IsYUFBYUQsS0FBS1YsU0FBUztRQUVqQ2IsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFYixrQkFBa0IsbUJBQW1CLEVBQUVZLFdBQVcsRUFBRSxDQUFDO1FBRXhGLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRyxPQUFPLGNBQWM7QUFDOUIifQ==