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
    function ProcedureDeclaration(procedure) {
        _class_call_check(this, ProcedureDeclaration);
        this.procedure = procedure;
    }
    _create_class(ProcedureDeclaration, [
        {
            key: "getProcedure",
            value: function getProcedure() {
                return this.procedure;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.procedure.getString();
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, fileContext) {
                var Procedure = _dom.default.Procedure, context = fileContext, procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclaration = new ProcedureDeclaration(procedure);
                return procedureDeclaration;
            }
        }
    ]);
    return ProcedureDeclaration;
}(), _define_property(_ProcedureDeclaration, "name", "ProcedureDeclaration"), _ProcedureDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvY2VkdXJlKSB7XG4gICAgdGhpcy5wcm9jZWR1cmUgPSBwcm9jZWR1cmU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5wcm9jZWR1cmUuZ2V0U3RyaW5nKCk7IH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBwcm9jZWR1cmUgPSBQcm9jZWR1cmUuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKHByb2NlZHVyZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmUiLCJnZXRQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJQcm9jZWR1cmUiLCJkb20iLCJjb250ZXh0IiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyx5Q0FBQzthQUFNQyxxQkFDbkJDLFNBQVM7Z0NBRFVEO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixTQUFTLENBQUNFLFNBQVM7WUFBSTs7OztZQUkxQ0MsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyx3QkFBd0IsRUFBRUMsV0FBVztnQkFDdkUsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxVQUFVSCxhQUNWTCxZQUFZTSxVQUFVSCw0QkFBNEIsQ0FBQ0MsMEJBQTBCSSxVQUM3RUMsdUJBQXVCLElBQUlWLHFCQUFxQkM7Z0JBRXRELE9BQU9TO1lBQ1Q7Ozs7S0FUQSx3Q0FBT0MsUUFBTyJ9