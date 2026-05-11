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
        const value = this.returnStatement.evaluate(context), valueString = value.getString();
        context.debug(`Evaluated the '${returnBlockString}' return block as '${valueString}'.`);
        return value;
    }
    static name = "ReturnBlock";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBhc3luY0ZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVybkJsb2NrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybkJsb2NrU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZXR1cm5CbG9ja1N0cmluZ30nIHJldHVybiBibG9jay4uLmApO1xuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgYXdhaXQgYXN5bmNGb3JFYWNoKHRoaXMuc3RlcHMsIGFzeW5jIChzdGVwKSA9PiB7XG4gICAgICBhd2FpdCBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgRXZhbHVhdGVkIHRoZSAnJHtyZXR1cm5CbG9ja1N0cmluZ30nIHJldHVybiBibG9jayBhcyAnJHt2YWx1ZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVybkJsb2NrXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0ZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJSZXR1cm5CbG9jayIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RlcHMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJ1bmRlZmluZWQiLCJyZXR1cm5CbG9ja1N0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsInN0ZXAiLCJ2YWx1ZSIsInZhbHVlU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUK0M7a0VBRXpCOzhEQUNHOzBCQUVGOzs7Ozs7QUFFdkIsTUFBTSxFQUFFQSxZQUFZLEVBQUUsR0FBR0MscUNBQXFCO01BRTlDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBTztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxlQUFlLENBQUU7UUFDbEYsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0gsV0FBVztJQUN6QjtJQUVBSSxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNILGVBQWU7SUFDN0I7SUFFQSxNQUFNSSxTQUFTQyxTQUFTLEVBQUVYLE9BQU8sRUFBRTtRQUNqQyxJQUFJQSxZQUFZWSxXQUFXO1lBQ3pCWixVQUFVVyxXQUFZLEdBQUc7WUFFekJBLFlBQVksRUFBRTtRQUNoQjtRQUVBLE1BQU1FLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRS9DZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsa0JBQWtCLGlCQUFpQixDQUFDO1FBRXJFLElBQUksSUFBSSxDQUFDUixXQUFXLEVBQUU7WUFDcEIsTUFBTVcsVUFBVSxDQUFDLGdDQUFnQyxDQUFDLEVBQzVDQyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxlQUFlQyxjQUFZLENBQUNDLGFBQWEsQ0FBQ1gsV0FBV1g7UUFFM0RBLFVBQVVvQixjQUFjLEdBQUc7UUFFM0IsTUFBTXpCLGFBQWEsSUFBSSxDQUFDUyxLQUFLLEVBQUUsT0FBT21CO1lBQ3BDLE1BQU1BLEtBQUtiLFFBQVEsQ0FBQ1Y7UUFDdEI7UUFFQSxNQUFNd0IsUUFBUSxJQUFJLENBQUNsQixlQUFlLENBQUNJLFFBQVEsQ0FBQ1YsVUFDdEN5QixjQUFjRCxNQUFNVixTQUFTO1FBRW5DZCxRQUFRMEIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFYixrQkFBa0IsbUJBQW1CLEVBQUVZLFlBQVksRUFBRSxDQUFDO1FBRXRGLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRyxPQUFPLGNBQWM7QUFDOUIifQ==