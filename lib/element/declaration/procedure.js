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
    constructor(context, string, node, procedure){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVEZWNsYXJhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucHJvY2VkdXJlID0gcHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgY29uc3QgdmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ30nIHByb2NlZHVyZSBkZWNsYXJhdGlvbi4uLmApXG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmdldFByb2NlZHVyZSgpO1xuXG4gICAgY29udGV4dC5hZGRQcm9jZWR1cmUocHJvY2VkdXJlKTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nfScgcHJvY2VkdXJlIGRlY2xhcmF0aW9uLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInByb2NlZHVyZSIsImdldFByb2NlZHVyZSIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZFByb2NlZHVyZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsNkJBQTZCQyx1QkFBTztJQUM5RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDNUMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNELE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNFLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLE9BQU9MLE9BQU8sRUFBRTtRQUNkLE1BQU1NLFdBQVc7UUFFakIsTUFBTUMsNkJBQTZCLElBQUksQ0FBQ0MsU0FBUztRQUVqRFIsUUFBUVMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiwyQkFBMkIsMEJBQTBCLENBQUM7UUFFdEYsTUFBTUosWUFBWSxJQUFJLENBQUNDLFlBQVk7UUFFbkNKLFFBQVFVLFlBQVksQ0FBQ1A7UUFFckIsSUFBSUcsVUFBVTtZQUNaTixRQUFRVyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUosMkJBQTJCLHdCQUF3QixDQUFDO1FBQ3hGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9NLE9BQU8sdUJBQXVCO0FBQ3ZDIn0=