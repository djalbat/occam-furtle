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
                var valueString = value.getString(), parameterString = this.string; ///
                context.trace("Matching the '".concat(valueString, "' value against the '").concat(parameterString, "' parameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The types of the '".concat(valueString, "' value and '").concat(parameterString, "' parameter do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(valueString, "' value against the '").concat(parameterString, "' parameter."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcGFyYW1ldGVyL0AqXCIpLFxuICAgICAgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AbmFtZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wYXJhbWV0ZXIvQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaFZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGVzIG9mIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIGFuZCAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGxldCBwYXJhbWV0ZXJNYXRjaGVzO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJCID0gcGFyYW1ldGVyOyAvLy9cblxuICAgIGNvbnN0IHBhcmFtZXRlckFTdHJpbmcgPSBwYXJhbWV0ZXJBLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlckJTdHJpbmcgPSBwYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3BhcmFtZXRlckFTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyQlN0cmluZ30nIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBwYXJhbWV0ZXJNYXRjaGVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChwYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtwYXJhbWV0ZXJBU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlckJTdHJpbmd9JyBwYXJhbWV0ZXIuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZXNRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzTGVuZ3RoID0gdGVybWluYWxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAodGVybWluYWxOb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gIGNvbnN0IHN0cmluZyA9IGAke3R5cGV9ICR7bmFtZX1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVyIiwic3RyaW5nIiwibmFtZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0VHlwZSIsIm1hdGNoVmFsdWUiLCJ2YWx1ZSIsImNvbnRleHQiLCJ2YWx1ZVN0cmluZyIsInBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInBhcmFtZXRlck1hdGNoZXMiLCJwYXJhbWV0ZXJBIiwicGFyYW1ldGVyQiIsInBhcmFtZXRlckFTdHJpbmciLCJwYXJhbWV0ZXJCU3RyaW5nIiwiZnJvbU5hbWVBbmRUeXBlIiwic3RyaW5nRnJvbU5hbWVBbmRUeXBlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lRnJvbVBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbVBhcmFtZXRlck5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0VBVHNCO21CQUVNO3FCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLGtCQUNoQ0Msd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUNsQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFB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