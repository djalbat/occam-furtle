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
const _default = (0, _elements.define)(class ProcedureDeclaration extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, procedure){
        super(context, string, node, breakPoint);
        this.string = string;
        this.procedure = procedure;
    }
    getProcedure() {
        return this.procedure;
    }
    verify(context) {
        const verifies = true;
        const procedureDeclarationString = this.getString();
        context.trace(`Verifying the '${procedureDeclarationString}' procedure declaration...`);
        const procedure = this.getProcedure();
        context.addProcedure(procedure);
        if (verifies) {
            context.debug(`...verified the '${procedureDeclarationString}' procedure declaration.`);
        }
        return verifies;
    }
    static name = "ProcedureDeclaration";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVEZWNsYXJhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHByb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByb2NlZHVyZSA9IHByb2NlZHVyZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGNvbnN0IHZlcmlmaWVzID0gdHJ1ZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmd9JyBwcm9jZWR1cmUgZGVjbGFyYXRpb24uLi5gKVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5nZXRQcm9jZWR1cmUoKTtcblxuICAgIGNvbnRleHQuYWRkUHJvY2VkdXJlKHByb2NlZHVyZSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ30nIHByb2NlZHVyZSBkZWNsYXJhdGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwicHJvY2VkdXJlIiwiZ2V0UHJvY2VkdXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYWRkUHJvY2VkdXJlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw2QkFBNkJDLHVCQUFPO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDRixNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDRyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxPQUFPTixPQUFPLEVBQUU7UUFDZCxNQUFNTyxXQUFXO1FBRWpCLE1BQU1DLDZCQUE2QixJQUFJLENBQUNDLFNBQVM7UUFFakRULFFBQVFVLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsMkJBQTJCLDBCQUEwQixDQUFDO1FBRXRGLE1BQU1KLFlBQVksSUFBSSxDQUFDQyxZQUFZO1FBRW5DTCxRQUFRVyxZQUFZLENBQUNQO1FBRXJCLElBQUlHLFVBQVU7WUFDWlAsUUFBUVksS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVKLDJCQUEyQix3QkFBd0IsQ0FBQztRQUN4RjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPTSxPQUFPLHVCQUF1QjtBQUN2QyJ9