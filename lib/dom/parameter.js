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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Parameter;
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@name"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@type");
var _default = (0, _dom.domAssigned)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(string, name, type) {
        _class_call_check(this, Parameter);
        this.string = string;
        this.name = name;
        this.type = type;
    }
    _create_class(Parameter, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "matchValue",
            value: function matchValue(value, context) {
                var valueString = value.getString(), parameterString = this.getString();
                context.trace("Matching the '".concat(valueString, "' value against the '").concat(parameterString, "' parameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The types of the '".concat(valueString, "' value and '").concat(parameterString, "' parameter do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(valueString, "' value against the '").concat(parameterString, "' parameter."));
            }
        }
    ], [
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var name = nameFromParameterNode(parameterNode, context), type = typeFromParameterNode(parameterNode, context), node = parameterNode, string = context.nodeAsString(node), parameter = new Parameter(string, name, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wYXJhbWV0ZXIvQG5hbWVcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcGFyYW1ldGVyL0B0eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQYXJhbWV0ZXIge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgbWF0Y2hWYWx1ZSh2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSB0eXBlcyBvZiB0aGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSBhbmQgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lID0gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXIiLCJzdHJpbmciLCJuYW1lIiwidHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRUeXBlIiwibWF0Y2hWYWx1ZSIsInZhbHVlIiwiY29udGV4dCIsInZhbHVlU3RyaW5nIiwicGFyYW1ldGVyU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsIm5hbWVGcm9tUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tUGFyYW1ldGVyTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJwYXJhbWV0ZXIiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFSc0I7cUJBRUk7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQ2xDQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURDSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLEtBQUssRUFBRUMsT0FBTztnQkFDdkIsSUFBTUMsY0FBY0YsTUFBTUosU0FBUyxJQUM3Qk8sa0JBQWtCLElBQUksQ0FBQ1AsU0FBUztnQkFFdENLLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGlCQUFtREQsT0FBbkNELGFBQVkseUJBQXVDLE9BQWhCQyxpQkFBZ0I7Z0JBRWxGLElBQU1FLFlBQVlMLE1BQU1GLE9BQU87Z0JBRS9CLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtVLFdBQVc7b0JBQzNCLElBQU1DLFVBQVUsQUFBQyxxQkFBK0NILE9BQTNCRCxhQUFZLGlCQUErQixPQUFoQkMsaUJBQWdCLDhCQUMxRUksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFOLFFBQVFTLEtBQUssQ0FBQyxBQUFDLG1CQUFxRFAsT0FBbkNELGFBQVkseUJBQXVDLE9BQWhCQyxpQkFBZ0I7WUFDdEY7Ozs7WUFJT1EsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVYLE9BQU87Z0JBQzdDLElBQU1QLE9BQU9tQixzQkFBc0JELGVBQWVYLFVBQzVDTixPQUFPbUIsc0JBQXNCRixlQUFlWCxVQUM1Q2MsT0FBT0gsZUFDUG5CLFNBQVNRLFFBQVFlLFlBQVksQ0FBQ0QsT0FDOUJFLFlBQVksSUFBSXpCLFVBQVVDLFFBQVFDLE1BQU1DO2dCQUU5QyxPQUFPc0I7WUFDVDs7OztLQVZBLDZCQUFPdkIsUUFBTztBQWFoQixTQUFTbUIsc0JBQXNCRCxhQUFhLEVBQUVYLE9BQU87SUFDbkQsSUFBTWlCLG1CQUFtQjlCLHNCQUFzQndCLGdCQUN6Q08sMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckQxQixPQUFPeUIseUJBQXlCLEdBQUc7SUFFekMsT0FBT3pCO0FBQ1Q7QUFFQSxTQUFTb0Isc0JBQXNCRixhQUFhLEVBQUVYLE9BQU87SUFDbkQsSUFBTW9CLG1CQUFtQi9CLHNCQUFzQnNCLGdCQUN6Q1UsMEJBQTBCRCxpQkFBaUJELFVBQVUsSUFDckR6QixPQUFPMkIseUJBQXlCLEdBQUc7SUFFekMsT0FBTzNCO0FBQ1QifQ==