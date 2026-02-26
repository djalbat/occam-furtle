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
const _default = (0, _elements.define)(class BracketedTerm extends _occamlanguages.Element {
    constructor(context, string, node, term){
        super(context, string, node);
        this.term = term;
    }
    getTerm() {
        return this.term;
    }
    getType() {
        return this.term.getType();
    }
    evaluate(context) {
        let term;
        const bracketedTermString = this.getString(); ///
        context.trace(`Evaluating the '${bracketedTermString}' bracketed term...`);
        term = this.term.evaluate(context);
        const termString = term.getString();
        context.debug(`...evaluated the '${bracketedTermString}' bracketed term as '${termString}'.`);
        return term;
    }
    static name = "BracketedTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgYnJhY2tldGVkVGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YnJhY2tldGVkVGVybVN0cmluZ30nIGJyYWNrZXRlZCB0ZXJtLi4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2JyYWNrZXRlZFRlcm1TdHJpbmd9JyBicmFja2V0ZWQgdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCcmFja2V0ZWRUZXJtXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZXZhbHVhdGUiLCJicmFja2V0ZWRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxzQkFBc0JDLHVCQUFPO0lBQ3ZELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxVQUFVO1FBQUUsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQ0UsT0FBTztJQUFJO0lBRXhDQyxTQUFTTixPQUFPLEVBQUU7UUFDaEIsSUFBSUc7UUFFSixNQUFNSSxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVqRFIsUUFBUVMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RUosT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0csUUFBUSxDQUFDTjtRQUUxQixNQUFNVSxhQUFhUCxLQUFLSyxTQUFTO1FBRWpDUixRQUFRVyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosb0JBQW9CLHFCQUFxQixFQUFFRyxXQUFXLEVBQUUsQ0FBQztRQUU1RixPQUFPUDtJQUNUO0lBRUEsT0FBT1MsT0FBTyxnQkFBZ0I7QUFDaEMifQ==