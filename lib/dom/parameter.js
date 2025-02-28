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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _dom = require("../dom");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Parameter;
var terminalNodesQuery = (0, _query.nodesQuery)("/parameter/@*"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@name"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@type");
var _default = (0, _dom.domAssigned)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(string, type, name) {
        _class_call_check(this, Parameter);
        this.string = string;
        this.type = type;
        this.name = name;
    }
    _create_class(Parameter, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchValue",
            value: function matchValue(value, context) {
                var valueString = value.asString(context), parameterString = this.string; ///
                context.trace("Matching the ".concat(valueString, " value against the '").concat(parameterString, "' parameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The ".concat(valueString, " value's '").concat(valueType, "' type  and '").concat(parameterString, "' parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(valueString, " value against the '").concat(parameterString, "' parameter."));
            }
        }
    ], [
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameter = null;
                var terminalNodes = terminalNodesQuery(parameterNode), terminalNodesLength = terminalNodes.length;
                if (terminalNodesLength === 2) {
                    var name = nameFromParameterNode(parameterNode, context), type = typeFromParameterNode(parameterNode, context), node = parameterNode, string = context.nodeAsString(node);
                    parameter = new Parameter(string, type, name);
                }
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));
function nameFromParameterNode(parameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(parameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcGFyYW1ldGVyL0AqXCIpLFxuICAgICAgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AbmFtZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wYXJhbWV0ZXIvQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBtYXRjaFZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgIGFuZCAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2Rlc1F1ZXJ5KHBhcmFtZXRlck5vZGUpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZXNMZW5ndGggPSB0ZXJtaW5hbE5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh0ZXJtaW5hbE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXIiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwibWF0Y2hWYWx1ZSIsInZhbHVlIiwiY29udGV4dCIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lRnJvbVBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbVBhcmFtZXRlck5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0VBVHNCO21CQUVNO3FCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLGtCQUNoQ0Msd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUNsQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEQ0g7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxLQUFLLEVBQUVDLE9BQU87Z0JBQ3ZCLElBQU1DLGNBQWNGLE1BQU1HLFFBQVEsQ0FBQ0YsVUFDN0JHLGtCQUFrQixJQUFJLENBQUNYLE1BQU0sRUFBRyxHQUFHO2dCQUV6Q1EsUUFBUUksS0FBSyxDQUFDLEFBQUMsZ0JBQWlERCxPQUFsQ0YsYUFBWSx3QkFBc0MsT0FBaEJFLGlCQUFnQjtnQkFFaEYsSUFBTUUsWUFBWU4sTUFBTUgsT0FBTztnQkFFL0IsSUFBSSxJQUFJLENBQUNILElBQUksS0FBS1ksV0FBVztvQkFDM0IsSUFBTUMsVUFBVSxBQUFDLE9BQThCRCxPQUF4QkosYUFBWSxjQUFxQ0UsT0FBekJFLFdBQVUsaUJBQWdELE9BQWpDRixpQkFBZ0IsbUJBQTJCLE9BQVYsSUFBSSxDQUFDVixJQUFJLEVBQUMseUJBQzdHYyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQVAsUUFBUVUsS0FBSyxDQUFDLEFBQUMsa0JBQW1EUCxPQUFsQ0YsYUFBWSx3QkFBc0MsT0FBaEJFLGlCQUFnQjtZQUNwRjs7OztZQUlPUSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRVosT0FBTztnQkFDN0MsSUFBSWEsWUFBWTtnQkFFaEIsSUFBTUMsZ0JBQWdCN0IsbUJBQW1CMkIsZ0JBQ25DRyxzQkFBc0JELGNBQWNFLE1BQU07Z0JBRWhELElBQUlELHdCQUF3QixHQUFHO29CQUM3QixJQUFNckIsT0FBT3VCLHNCQUFzQkwsZUFBZVosVUFDNUNQLE9BQU95QixzQkFBc0JOLGVBQWVaLFVBQzVDbUIsT0FBT1AsZUFDUHBCLFNBQVNRLFFBQVFvQixZQUFZLENBQUNEO29CQUVwQ04sWUFBWSxJQUFJdEIsVUFBVUMsUUFBUUMsTUFBTUM7Z0JBQzFDO2dCQUVBLE9BQU9tQjtZQUNUOzs7O0tBbEJBLDZCQUFPbkIsUUFBTztBQXFCaEIsU0FBU3VCLHNCQUFzQkwsYUFBYSxFQUFFWixPQUFPO0lBQ25ELElBQU1xQixtQkFBbUJsQyxzQkFBc0J5QixnQkFDekNVLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEN0IsT0FBTzRCLHlCQUF5QixHQUFHO0lBRXpDLE9BQU81QjtBQUNUO0FBRUEsU0FBU3dCLHNCQUFzQk4sYUFBYSxFQUFFWixPQUFPO0lBQ25ELElBQU13QixtQkFBbUJuQyxzQkFBc0J1QixnQkFDekNhLDBCQUEwQkQsaUJBQWlCRCxVQUFVLElBQ3JEOUIsT0FBT2dDLHlCQUF5QixHQUFHO0lBRXpDLE9BQU9oQztBQUNUIn0=