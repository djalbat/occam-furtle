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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
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
var _default = (0, _dom.domAssigned)((_ProcedureDeclaration = /*#__PURE__*/ function() {
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
    var Procedure = _dom.default.Procedure, ProcedureDeclaration = _dom.default.ProcedureDeclaration, procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context), string = stringFromProcedure(procedure, context), procedureDeclaration = new ProcedureDeclaration(string, procedure);
    return procedureDeclaration;
}
function stringFromProcedure(procedure, context) {
    var procedureString = procedure.getString(), string = "".concat(procedureString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnByb2NlZHVyZSA9IHByb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSwgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgcHJvY2VkdXJlID0gUHJvY2VkdXJlLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUHJvY2VkdXJlKHByb2NlZHVyZSwgY29udGV4dCkge1xuICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAke3Byb2NlZHVyZVN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufSJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwic3RyaW5nIiwicHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0UHJvY2VkdXJlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImNvbnRleHQiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwiUHJvY2VkdXJlIiwiZG9tIiwic3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcseUNBQUM7YUFBTUMscUJBQ25CQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREVGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQ25FLElBQU1DLHVCQUF1QkMsc0NBQXNDSCwwQkFBMEJDO2dCQUU3RixPQUFPQztZQUNUOzs7O0tBTkEsd0NBQU9FLFFBQU87QUFTaEIsU0FBU0Qsc0NBQXNDSCx3QkFBd0IsRUFBRUMsT0FBTztJQUM5RSxJQUFRSSxZQUFvQ0MsWUFBRyxDQUF2Q0QsV0FBV1gsdUJBQXlCWSxZQUFHLENBQTVCWixzQkFDYkUsWUFBWVMsVUFBVU4sNEJBQTRCLENBQUNDLDBCQUEwQkMsVUFDN0VOLFNBQVNZLG9CQUFvQlgsV0FBV0ssVUFDeENDLHVCQUF1QixJQUFJUixxQkFBcUJDLFFBQVFDO0lBRTlELE9BQU9NO0FBQ1Q7QUFFQSxTQUFTSyxvQkFBb0JYLFNBQVMsRUFBRUssT0FBTztJQUM3QyxJQUFNTyxrQkFBa0JaLFVBQVVDLFNBQVMsSUFDckNGLFNBQVMsQUFBQyxHQUFrQixPQUFoQmEsaUJBQWdCO0lBRWxDLE9BQU9iO0FBQ1QifQ==