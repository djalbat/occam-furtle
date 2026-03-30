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
    constructor(context, string, node, lineIndex, procedure){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVEZWNsYXJhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgcHJvY2VkdXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByb2NlZHVyZSA9IHByb2NlZHVyZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGNvbnN0IHZlcmlmaWVzID0gdHJ1ZTtcblxuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmd9JyBwcm9jZWR1cmUgZGVjbGFyYXRpb24uLi5gKVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5nZXRQcm9jZWR1cmUoKTtcblxuICAgIGNvbnRleHQuYWRkUHJvY2VkdXJlKHByb2NlZHVyZSk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ30nIHByb2NlZHVyZSBkZWNsYXJhdGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJwcm9jZWR1cmUiLCJnZXRQcm9jZWR1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhZGRQcm9jZWR1cmUiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDZCQUE2QkMsdUJBQU87SUFDOUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNGLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNHLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0lBRUFFLE9BQU9OLE9BQU8sRUFBRTtRQUNkLE1BQU1PLFdBQVc7UUFFakIsTUFBTUMsNkJBQTZCLElBQUksQ0FBQ0MsU0FBUztRQUVqRFQsUUFBUVUsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRiwyQkFBMkIsMEJBQTBCLENBQUM7UUFFdEYsTUFBTUosWUFBWSxJQUFJLENBQUNDLFlBQVk7UUFFbkNMLFFBQVFXLFlBQVksQ0FBQ1A7UUFFckIsSUFBSUcsVUFBVTtZQUNaUCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUosMkJBQTJCLHdCQUF3QixDQUFDO1FBQ3hGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9NLE9BQU8sdUJBQXVCO0FBQ3ZDIn0=