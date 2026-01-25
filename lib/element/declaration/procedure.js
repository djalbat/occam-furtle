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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByb2NlZHVyZSA9IHByb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSwgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9jZWR1cmUgPSBQcm9jZWR1cmUuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUHJvY2VkdXJlKHByb2NlZHVyZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKHN0cmluZywgcHJvY2VkdXJlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7cHJvY2VkdXJlU3RyaW5nfTtgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwic3RyaW5nIiwicHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0UHJvY2VkdXJlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImNvbnRleHQiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwiUHJvY2VkdXJlIiwiZWxlbWVudHMiLCJzdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnRUFKcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlyQixXQUFlQSxJQUFBQSxnQkFBTSx5Q0FBQzthQUFNQyxxQkFDZEMsTUFBTSxFQUFFQyxTQUFTO2dDQURIRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFQyxPQUFPO2dCQUNuRSxJQUFNQyx1QkFBdUJDLHNDQUFzQ0gsMEJBQTBCQztnQkFFN0YsT0FBT0M7WUFDVDs7OztLQU5BLHdDQUFPRSxRQUFPO0FBU2hCLFNBQVNELHNDQUFzQ0gsd0JBQXdCLEVBQUVDLE9BQU87SUFDOUUsSUFBUUksWUFBb0NDLGlCQUFRLENBQTVDRCxXQUFXWCx1QkFBeUJZLGlCQUFRLENBQWpDWixzQkFDYkUsWUFBWVMsVUFBVU4sNEJBQTRCLENBQUNDLDBCQUEwQkMsVUFDN0VOLFNBQVNZLG9CQUFvQlgsV0FBV0ssVUFDeENDLHVCQUF1QixJQUFJUixxQkFBcUJDLFFBQVFDO0lBRTlELE9BQU9NO0FBQ1Q7QUFFQSxTQUFTSyxvQkFBb0JYLFNBQVMsRUFBRUssT0FBTztJQUM3QyxJQUFNTyxrQkFBa0JaLFVBQVVDLFNBQVMsSUFDckNGLFNBQVMsQUFBQyxHQUFrQixPQUFoQmEsaUJBQWdCO0lBRWxDLE9BQU9iO0FBQ1QifQ==