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
    constructor(context, string, node, lineIndex, term){
        super(context, string, node, lineIndex);
        this.term = term;
    }
    getExpression() {
        return this.term;
    }
    evaluate(context) {
        let term;
        const returnStatementString = this.getString(); ///
        context.trace(`Evaluating the '${returnStatementString}' return statement...`);
        term = this.term.evaluate(context);
        const termString = term.getString();
        context.debug(`...evaluated the '${returnStatementString}' return statement as '${termString}'.`);
        return term;
    }
    static name = "ReturnStatement";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuU3RhdGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9JyByZXR1cm4gc3RhdGVtZW50IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVyblN0YXRlbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmV0dXJuU3RhdGVtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsImdldEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsInJldHVyblN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVN0cmluZyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsd0JBQXdCQyx1QkFBTztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBRTtRQUNsRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLFNBQVNOLE9BQU8sRUFBRTtRQUNoQixJQUFJSTtRQUVKLE1BQU1HLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRXBEUixRQUFRUyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsc0JBQXNCLHFCQUFxQixDQUFDO1FBRTdFSCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxRQUFRLENBQUNOO1FBRTFCLE1BQU1VLGFBQWFOLEtBQUtJLFNBQVM7UUFFakNSLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSixzQkFBc0IsdUJBQXVCLEVBQUVHLFdBQVcsRUFBRSxDQUFDO1FBRWhHLE9BQU9OO0lBQ1Q7SUFFQSxPQUFPUSxPQUFPLGtCQUFrQjtBQUNsQyJ9