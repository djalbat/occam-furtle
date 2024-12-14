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
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var returnStatementString = this.string;
                context.trace("Resolving the '".concat(returnStatementString, "' return statement..."));
                debugger;
                context.debug("...resolved the '".concat(returnStatementString, "' return statement."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmV0dXJuU3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHJldHVyblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9yZXR1cm5TdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVidWdnZXJcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9JyByZXR1cm4gc3RhdGVtZW50LmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVyblN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZXR1cm5TdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgaWYgKHJldHVyblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXR1cm5TdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJldHVyblN0YXRlbWVudCIsInN0cmluZyIsInZhbHVlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFsdWUiLCJyZXNvbHZlIiwiY29udGV4dCIsInJldHVyblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlZhbHVlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsMkJBQTJCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTNDLFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsd0JBQXdCLElBQUksQ0FBQ04sTUFBTTtnQkFFekNLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUF1QyxPQUF0QkQsdUJBQXNCO2dCQUV0RCxRQUFRO2dCQUVSRCxRQUFRRyxLQUFLLENBQUMsQUFBQyxvQkFBeUMsT0FBdEJGLHVCQUFzQjtZQUMxRDs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFTCxPQUFPO2dCQUNuRSxJQUFJTSxrQkFBa0I7Z0JBRXRCLElBQU1DLHNCQUFzQmhCLHlCQUF5QmM7Z0JBRXJELElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRkUsT0FBT0gscUJBQ1BaLFNBQVNLLFFBQVFXLFlBQVksQ0FBQ0QsT0FDOUJkLFFBQVFZLE1BQU1JLHVCQUF1QixDQUFDTCxxQkFBcUJQO29CQUVqRU0sa0JBQWtCLElBQUlaLGdCQUFnQkMsUUFBUUM7Z0JBQ2hEO2dCQUVBLE9BQU9VO1lBQ1Q7Ozs7S0FqQkEsbUNBQU9PLFFBQU8ifQ==