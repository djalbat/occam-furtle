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
var _elements = require("../../elements");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _ProcedureDeclaration;
var _default = (0, _elements.define)((_ProcedureDeclaration = /*#__PURE__*/ function() {
    function ProcedureDeclaration(string, procedure) {
        _class_call_check(this, ProcedureDeclaration);
        this.string = string;
        this.procedure = procedure;
    }
    _create_class(ProcedureDeclaration, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getProcedure",
            value: function getProcedure() {
                return this.procedure;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = true;
                var procedureDeclarationString = this.getString();
                context.trace("Verifying the '".concat(procedureDeclarationString, "' procedure declaration..."));
                var procedure = this.getProcedure();
                context.addProcedure(procedure);
                if (verifies) {
                    context.debug("...verified the '".concat(procedureDeclarationString, "' procedure declaration."));
                }
                return verifies;
            }
        }
    ]);
    return ProcedureDeclaration;
}(), _define_property(_ProcedureDeclaration, "name", "ProcedureDeclaration"), _ProcedureDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5wcm9jZWR1cmUgPSBwcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgY29uc3QgdmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ30nIHByb2NlZHVyZSBkZWNsYXJhdGlvbi4uLmApXG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmdldFByb2NlZHVyZSgpO1xuXG4gICAgY29udGV4dC5hZGRQcm9jZWR1cmUocHJvY2VkdXJlKTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nfScgcHJvY2VkdXJlIGRlY2xhcmF0aW9uLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInN0cmluZyIsInByb2NlZHVyZSIsImdldFN0cmluZyIsImdldFByb2NlZHVyZSIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJhZGRQcm9jZWR1cmUiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx5Q0FBQzthQUFNQyxxQkFDZEMsTUFBTSxFQUFFQyxTQUFTO2dDQURIRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQU1DLFdBQVc7Z0JBRWpCLElBQU1DLDZCQUE2QixJQUFJLENBQUNMLFNBQVM7Z0JBRWpERyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBNEMsT0FBM0JELDRCQUEyQjtnQkFFM0QsSUFBTU4sWUFBWSxJQUFJLENBQUNFLFlBQVk7Z0JBRW5DRSxRQUFRSSxZQUFZLENBQUNSO2dCQUVyQixJQUFJSyxVQUFVO29CQUNaRCxRQUFRSyxLQUFLLENBQUMsQUFBQyxvQkFBOEMsT0FBM0JILDRCQUEyQjtnQkFDL0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztLQUVBLHdDQUFPSyxRQUFPIn0=