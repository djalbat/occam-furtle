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
var _query = require("../utilities/query");
var _dom = require("../dom");
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
var _Variable;
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(name) {
        _class_call_check(this, Variable);
        this.name = name;
    }
    _create_class(Variable, [
        {
            key: "getType",
            value: function getType() {
                return this.name;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.name; ///
                return string;
            }
        }
    ], [
        {
            key: "fromArgumentNode",
            value: function fromArgumentNode(argumentNode, context) {
                var name = nameFromArgumentNode(argumentNode), variable = new Variable(name);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function nameFromArgumentNode(argumentNode) {
    var nameTerminalNode = nameTerminalNodeQuery(argumentNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQG5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5uYW1lOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lID0gbmFtZUZyb21Bcmd1bWVudE5vZGUoYXJndW1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShuYW1lKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZSIsIm5hbWUiLCJnZXRUeXBlIiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiZnJvbUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZSIsImNvbnRleHQiLCJuYW1lRnJvbUFyZ3VtZW50Tm9kZSIsInZhcmlhYmxlIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7cUJBTDBCO21CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlQyxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsSUFBSTtnQ0FEZUQ7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0gsSUFBSSxFQUFFLEdBQUc7Z0JBRTdCLE9BQU9HO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxZQUFZLEVBQUVDLE9BQU87Z0JBQzNDLElBQU1OLE9BQU9PLHFCQUFxQkYsZUFDNUJHLFdBQVcsSUFBSVQsU0FBU0M7Z0JBRTlCLE9BQU9RO1lBQ1Q7Ozs7S0FQQSw0QkFBT1IsUUFBTztBQVVoQixTQUFTTyxxQkFBcUJGLFlBQVk7SUFDeEMsSUFBTUksbUJBQW1CYixzQkFBc0JTLGVBQ3pDSywwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRFgsT0FBT1UseUJBQXlCLEdBQUc7SUFFekMsT0FBT1Y7QUFDVCJ9