"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Procedure;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("./dom"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Procedure = /*#__PURE__*/ function() {
    function Procedure() {
        _class_call_check(this, Procedure);
    }
    _create_class(Procedure, null, [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, fileContext) {
                var Statement = _dom.default.Statement, statementNode = statementNodeQuery(procedureDeclarationNode), localContext = LocalContext.fromFileContext(fileContext), statement = Statement.fromStatementNode(statementNode, localContext), procedure = new Procedure(statement);
                return procedure;
            }
        }
    ]);
    return Procedure;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZWR1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2NlZHVyZSB7XG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBuZXcgUHJvY2VkdXJlKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvY2VkdXJlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwiU3RhdGVtZW50IiwiZG9tIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVRdWVyeSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwicHJvY2VkdXJlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELElBQUEsQUFBTUEsMEJBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVDLFdBQVc7Z0JBQ3ZFLElBQU0sQUFBRUMsWUFBY0MsWUFBRyxDQUFqQkQsV0FDRkUsZ0JBQWdCQyxtQkFBbUJMLDJCQUNuQ00sZUFBZUMsYUFBYUMsZUFBZSxDQUFDUCxjQUM1Q1EsWUFBWVAsVUFBVVEsaUJBQWlCLENBQUNOLGVBQWVFLGVBQ3ZESyxZQUFZLElBTkRiLFVBTWVXO2dCQUVoQyxPQUFPRTtZQUNUOzs7V0FUbUJiIn0=