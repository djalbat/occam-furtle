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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
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
var _ReturnStatement;
var returnStatementNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/returnBlock/returnStatement");
var _default = (0, _dom.domAssigned)((_ReturnStatement = /*#__PURE__*/ function() {
    function ReturnStatement(string, value) {
        _class_call_check(this, ReturnStatement);
        this.string = string;
        this.value = value;
    }
    _create_class(ReturnStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var returnStatement = null;
                var returnStatementNode = returnStatementNodeQuery(procedureDeclarationNode);
                if (returnStatementNode !== null) {
                    var Value = _dom.default.Value, node = returnStatementNode, string = context.nodeAsString(node), value = Value.fromReturnStatementNode(returnStatementNode, context);
                    returnStatement = new ReturnStatement(string, value);
                }
                return returnStatement;
            }
        }
    ]);
    return ReturnStatement;
}(), _define_property(_ReturnStatement, "name", "ReturnStatement"), _ReturnStatement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmV0dXJuU3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHJldHVyblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9yZXR1cm5TdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJldHVyblN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnROb2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocmV0dXJuU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJldHVyblN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmV0dXJuU3RhdGVtZW50Iiwic3RyaW5nIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJjb250ZXh0IiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlZhbHVlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsMkJBQTJCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTNDLFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQ25FLElBQUlDLGtCQUFrQjtnQkFFdEIsSUFBTUMsc0JBQXNCWix5QkFBeUJTO2dCQUVyRCxJQUFJRyx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTSxBQUFFQyxRQUFVQyxZQUFHLENBQWJELE9BQ0ZFLE9BQU9ILHFCQUNQUixTQUFTTSxRQUFRTSxZQUFZLENBQUNELE9BQzlCVixRQUFRUSxNQUFNSSx1QkFBdUIsQ0FBQ0wscUJBQXFCRjtvQkFFakVDLGtCQUFrQixJQUFJUixnQkFBZ0JDLFFBQVFDO2dCQUNoRDtnQkFFQSxPQUFPTTtZQUNUOzs7O0tBakJBLG1DQUFPTyxRQUFPIn0=