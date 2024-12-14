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
                var value;
                var returnStatementString = this.string;
                context.trace("Resolving the '".concat(returnStatementString, "' return statement..."));
                value = this.value.resolve(context);
                context.debug("...resolved the '".concat(returnStatementString, "' return statement."));
                return value;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmV0dXJuU3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHJldHVyblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9yZXR1cm5TdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5TdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmV0dXJuU3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmV0dXJuU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5TdGF0ZW1lbnQiLCJzdHJpbmciLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFZhbHVlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInJldHVyblN0YXRlbWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLDJCQUEyQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUUzQyxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlKO2dCQUVKLElBQU1LLHdCQUF3QixJQUFJLENBQUNOLE1BQU07Z0JBRXpDSyxRQUFRRSxLQUFLLENBQUMsQUFBQyxrQkFBdUMsT0FBdEJELHVCQUFzQjtnQkFFdERMLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNHLE9BQU8sQ0FBQ0M7Z0JBRTNCQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxvQkFBeUMsT0FBdEJGLHVCQUFzQjtnQkFFeEQsT0FBT0w7WUFDVDs7OztZQUlPUSxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFTCxPQUFPO2dCQUNuRSxJQUFJTSxrQkFBa0I7Z0JBRXRCLElBQU1DLHNCQUFzQmhCLHlCQUF5QmM7Z0JBRXJELElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRkUsT0FBT0gscUJBQ1BaLFNBQVNLLFFBQVFXLFlBQVksQ0FBQ0QsT0FDOUJkLFFBQVFZLE1BQU1JLHVCQUF1QixDQUFDTCxxQkFBcUJQO29CQUVqRU0sa0JBQWtCLElBQUlaLGdCQUFnQkMsUUFBUUM7Z0JBQ2hEO2dCQUVBLE9BQU9VO1lBQ1Q7Ozs7S0FqQkEsbUNBQU9PLFFBQU8ifQ==