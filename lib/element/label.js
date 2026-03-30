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
const _default = (0, _elements.define)(class Label extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, name){
        super(context, string, node, lineIndex);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    compareProcedureName(procedureName) {
        const procedureNameCompares = this.name === procedureName;
        return procedureNameCompares;
    }
    static name = "Label";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExhYmVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZU5hbWVDb21wYXJlcyA9ICh0aGlzLm5hbWUgPT09IHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZU5hbWVDb21wYXJlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwiZ2V0TmFtZSIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWVDb21wYXJlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUU7UUFDbEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUscUJBQXFCQyxhQUFhLEVBQUU7UUFDbEMsTUFBTUMsd0JBQXlCLElBQUksQ0FBQ0osSUFBSSxLQUFLRztRQUU3QyxPQUFPQztJQUNUO0lBRUEsT0FBT0osT0FBTyxRQUFRO0FBQ3hCIn0=