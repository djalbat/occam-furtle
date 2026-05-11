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
const _elements = require("../../elements");
const _default = (0, _elements.define)(class ReturnStatement extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, value){
        super(context, string, node, breakPoint);
        this.value = value;
    }
    getExpression() {
        return this.value;
    }
    evaluate(context) {
        let value;
        const returnStatementString = this.getString(); ///
        context.trace(`Evaluating the '${returnStatementString}' return statement...`);
        value = this.value.evaluate(context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${returnStatementString}' return statement as '${valueString}'.`);
        return value;
    }
    static name = "ReturnStatement";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFsdWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9JyByZXR1cm4gc3RhdGVtZW50Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9JyByZXR1cm4gc3RhdGVtZW50IGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmFsdWUiLCJnZXRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx3QkFBd0JDLHVCQUFPO0lBQ3pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsU0FBU04sT0FBTyxFQUFFO1FBQ2hCLElBQUlJO1FBRUosTUFBTUcsd0JBQXdCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFcERSLFFBQVFTLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixzQkFBc0IscUJBQXFCLENBQUM7UUFFN0VILFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNFLFFBQVEsQ0FBQ047UUFFNUIsTUFBTVUsY0FBY04sTUFBTUksU0FBUztRQUVuQ1IsUUFBUVcsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLHNCQUFzQix1QkFBdUIsRUFBRUcsWUFBWSxFQUFFLENBQUM7UUFFakcsT0FBT047SUFDVDtJQUVBLE9BQU9RLE9BQU8sa0JBQWtCO0FBQ2xDIn0=