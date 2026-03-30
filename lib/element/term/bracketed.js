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
    constructor(context, string, node, lineIndex, term){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleClcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JyYWNrZXRlZFRlcm1TdHJpbmd9JyBicmFja2V0ZWQgdGVybS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHticmFja2V0ZWRUZXJtU3RyaW5nfScgYnJhY2tldGVkIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQnJhY2tldGVkVGVybSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm0iLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImV2YWx1YXRlIiwiYnJhY2tldGVkVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVN0cmluZyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1QkFBTztJQUN2RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBRTtRQUNsRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxVQUFVO1FBQUUsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQ0UsT0FBTztJQUFJO0lBRXhDQyxTQUFTUCxPQUFPLEVBQUU7UUFDaEIsSUFBSUk7UUFFSixNQUFNSSxzQkFBc0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVqRFQsUUFBUVUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLG9CQUFvQixtQkFBbUIsQ0FBQztRQUV6RUosT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0csUUFBUSxDQUFDUDtRQUUxQixNQUFNVyxhQUFhUCxLQUFLSyxTQUFTO1FBRWpDVCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosb0JBQW9CLHFCQUFxQixFQUFFRyxXQUFXLEVBQUUsQ0FBQztRQUU1RixPQUFPUDtJQUNUO0lBRUEsT0FBT1MsT0FBTyxnQkFBZ0I7QUFDaEMifQ==