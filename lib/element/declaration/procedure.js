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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                context.debug("...verified the '".concat(procedureDeclarationString, "' procedure declaration."));
                return verifies;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclaration = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context);
                return procedureDeclaration;
            }
        }
    ]);
    return ProcedureDeclaration;
}(), _define_property(_ProcedureDeclaration, "name", "ProcedureDeclaration"), _ProcedureDeclaration));
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Procedure = _elements.default.Procedure, ProcedureDeclaration = _elements.default.ProcedureDeclaration, procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context), string = stringFromProcedure(procedure, context), procedureDeclaration = new ProcedureDeclaration(string, procedure);
    return procedureDeclaration;
}
function stringFromProcedure(procedure, context) {
    var procedureString = procedure.getString(), string = "".concat(procedureString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByb2NlZHVyZSA9IHByb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBjb25zdCB2ZXJpZmllcyA9IHRydWU7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nfScgcHJvY2VkdXJlIGRlY2xhcmF0aW9uLi4uYClcblxuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZ2V0UHJvY2VkdXJlKCk7XG5cbiAgICBjb250ZXh0LmFkZFByb2NlZHVyZShwcm9jZWR1cmUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nfScgcHJvY2VkdXJlIGRlY2xhcmF0aW9uLmApXG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlLCBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZSA9IFByb2NlZHVyZS5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oc3RyaW5nLCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgJHtwcm9jZWR1cmVTdHJpbmd9O2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJzdHJpbmciLCJwcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRQcm9jZWR1cmUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiYWRkUHJvY2VkdXJlIiwiZGVidWciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibmFtZSIsIlByb2NlZHVyZSIsImVsZW1lbnRzIiwic3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0VBSnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJckIsV0FBZUEsSUFBQUEsZ0JBQU0seUNBQUM7YUFBTUMscUJBQ2RDLE1BQU0sRUFBRUMsU0FBUztnQ0FESEY7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFNQyxXQUFXO2dCQUVqQixJQUFNQyw2QkFBNkIsSUFBSSxDQUFDTCxTQUFTO2dCQUVqREcsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQTRDLE9BQTNCRCw0QkFBMkI7Z0JBRTNELElBQU1OLFlBQVksSUFBSSxDQUFDRSxZQUFZO2dCQUVuQ0UsUUFBUUksWUFBWSxDQUFDUjtnQkFFckJJLFFBQVFLLEtBQUssQ0FBQyxBQUFDLG9CQUE4QyxPQUEzQkgsNEJBQTJCO2dCQUU3RCxPQUFPRDtZQUNUOzs7O1lBSU9LLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVQLE9BQU87Z0JBQ25FLElBQU1RLHVCQUF1QkMsc0NBQXNDRiwwQkFBMEJQO2dCQUU3RixPQUFPUTtZQUNUOzs7O0tBTkEsd0NBQU9FLFFBQU87QUFTaEIsU0FBU0Qsc0NBQXNDRix3QkFBd0IsRUFBRVAsT0FBTztJQUM5RSxJQUFRVyxZQUFvQ0MsaUJBQVEsQ0FBNUNELFdBQVdqQix1QkFBeUJrQixpQkFBUSxDQUFqQ2xCLHNCQUNiRSxZQUFZZSxVQUFVTCw0QkFBNEIsQ0FBQ0MsMEJBQTBCUCxVQUM3RUwsU0FBU2tCLG9CQUFvQmpCLFdBQVdJLFVBQ3hDUSx1QkFBdUIsSUFBSWQscUJBQXFCQyxRQUFRQztJQUU5RCxPQUFPWTtBQUNUO0FBRUEsU0FBU0ssb0JBQW9CakIsU0FBUyxFQUFFSSxPQUFPO0lBQzdDLElBQU1jLGtCQUFrQmxCLFVBQVVDLFNBQVMsSUFDckNGLFNBQVMsQUFBQyxHQUFrQixPQUFoQm1CLGlCQUFnQjtJQUVsQyxPQUFPbkI7QUFDVCJ9