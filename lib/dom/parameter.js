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
                var valueString = value.asString(context), parameterString = this.string; ///
                context.trace("Matching the ".concat(valueString, " value against the '").concat(parameterString, "' parameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The ".concat(valueString, " value's '").concat(valueType, "' type  and '").concat(parameterString, "' parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(valueString, " value against the '").concat(parameterString, "' parameter."));
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter, context) {
                var parameterMatches;
                var parameterA = this, parameterB = parameter; ///
                var parameterAString = parameterA.getString(), parameterBString = parameterB.getString();
                context.trace("Matching the '".concat(parameterAString, "' parameter against the '").concat(parameterBString, "' parameter..."));
                var name = parameter.getName(), type = parameter.getType();
                parameterMatches = this.name === name && this.type === type;
                if (parameterMatches) {
                    context.debug("...matched the '".concat(parameterAString, "' parameter against the '").concat(parameterBString, "' parameter."));
                }
                return parameterMatches;
            }
        }
    ], [
        {
            key: "fromNameAndType",
            value: function fromNameAndType(name, type, context) {
                var string = stringFromNameAndType(name, type, context), parameter = new Parameter(string, name, type);
                return parameter;
            }
        },
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameter = null;
                var terminalNodes = terminalNodesQuery(parameterNode), terminalNodesLength = terminalNodes.length;
                if (terminalNodesLength === 2) {
                    var name = nameFromParameterNode(parameterNode, context), type = typeFromParameterNode(parameterNode, context), node = parameterNode, string = context.nodeAsString(node);
                    parameter = new Parameter(string, name, type);
                }
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));
function stringFromNameAndType(name, type) {
    var string = "".concat(type, " ").concat(name);
    return string;
}
function nameFromParameterNode(parameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(parameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcGFyYW1ldGVyL0AqXCIpLFxuICAgICAgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AbmFtZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wYXJhbWV0ZXIvQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaFZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgIGFuZCAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IHBhcmFtZXRlck1hdGNoZXM7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJBID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlckIgPSBwYXJhbWV0ZXI7IC8vL1xuXG4gICAgY29uc3QgcGFyYW1ldGVyQVN0cmluZyA9IHBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyQlN0cmluZyA9IHBhcmFtZXRlckIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7cGFyYW1ldGVyQVN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJCU3RyaW5nfScgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIHBhcmFtZXRlck1hdGNoZXMgPSAoKHRoaXMubmFtZSA9PT0gbmFtZSkgJiYgKHRoaXMudHlwZSA9PT0gdHlwZSkpO1xuXG4gICAgaWYgKHBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3BhcmFtZXRlckFTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyQlN0cmluZ30nIHBhcmFtZXRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2Rlc1F1ZXJ5KHBhcmFtZXRlck5vZGUpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZXNMZW5ndGggPSB0ZXJtaW5hbE5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh0ZXJtaW5hbE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCBuYW1lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpIHtcbiAgY29uc3Qgc3RyaW5nID0gYCR7dHlwZX0gJHtuYW1lfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXIiLCJzdHJpbmciLCJuYW1lIiwidHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRUeXBlIiwibWF0Y2hWYWx1ZSIsInZhbHVlIiwiY29udGV4dCIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJwYXJhbWV0ZXJNYXRjaGVzIiwicGFyYW1ldGVyQSIsInBhcmFtZXRlckIiLCJwYXJhbWV0ZXJBU3RyaW5nIiwicGFyYW1ldGVyQlN0cmluZyIsImZyb21OYW1lQW5kVHlwZSIsInN0cmluZ0Zyb21OYW1lQW5kVHlwZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInRlcm1pbmFsTm9kZXMiLCJ0ZXJtaW5hbE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibmFtZUZyb21QYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21QYXJhbWV0ZXJOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRzQjttQkFFTTtxQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQyxrQkFDaENDLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDbENDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlRSxJQUFBQSxnQkFBVyw4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