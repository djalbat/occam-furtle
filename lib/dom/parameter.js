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
        }
    ], [
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
function nameFromParameterNode(parameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(parameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcGFyYW1ldGVyL0AqXCIpLFxuICAgICAgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AbmFtZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wYXJhbWV0ZXIvQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaFZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGVzIG9mIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIGFuZCAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZXNRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzTGVuZ3RoID0gdGVybWluYWxOb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAodGVybWluYWxOb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgbmFtZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVyIiwic3RyaW5nIiwibmFtZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0VHlwZSIsIm1hdGNoVmFsdWUiLCJ2YWx1ZSIsImNvbnRleHQiLCJ2YWx1ZVN0cmluZyIsInBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5hbWVGcm9tUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tUGFyYW1ldGVyTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnRUFUc0I7bUJBRU07cUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsa0JBQ2hDQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQ2xDQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURDSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLEtBQUssRUFBRUMsT0FBTztnQkFDdkIsSUFBTUMsY0FBY0YsTUFBTUosU0FBUyxJQUM3Qk8sa0JBQWtCLElBQUksQ0FBQ1YsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDUSxRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBbURELE9BQW5DRCxhQUFZLHlCQUF1QyxPQUFoQkMsaUJBQWdCO2dCQUVsRixJQUFNRSxZQUFZTCxNQUFNRixPQUFPO2dCQUUvQixJQUFJLElBQUksQ0FBQ0gsSUFBSSxLQUFLVSxXQUFXO29CQUMzQixJQUFNQyxVQUFVLEFBQUMscUJBQStDSCxPQUEzQkQsYUFBWSxpQkFBK0IsT0FBaEJDLGlCQUFnQiw4QkFDMUVJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBTixRQUFRUyxLQUFLLENBQUMsQUFBQyxtQkFBcURQLE9BQW5DRCxhQUFZLHlCQUF1QyxPQUFoQkMsaUJBQWdCO1lBQ3RGOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFWCxPQUFPO2dCQUM3QyxJQUFJWSxZQUFZO2dCQUVoQixJQUFNQyxnQkFBZ0I1QixtQkFBbUIwQixnQkFDbkNHLHNCQUFzQkQsY0FBY0UsTUFBTTtnQkFFaEQsSUFBSUQsd0JBQXdCLEdBQUc7b0JBQzdCLElBQU1yQixPQUFPdUIsc0JBQXNCTCxlQUFlWCxVQUM1Q04sT0FBT3VCLHNCQUFzQk4sZUFBZVgsVUFDNUNrQixPQUFPUCxlQUNQbkIsU0FBU1EsUUFBUW1CLFlBQVksQ0FBQ0Q7b0JBRXBDTixZQUFZLElBQUlyQixVQUFVQyxRQUFRQyxNQUFNQztnQkFDMUM7Z0JBRUEsT0FBT2tCO1lBQ1Q7Ozs7S0FsQkEsNkJBQU9uQixRQUFPO0FBcUJoQixTQUFTdUIsc0JBQXNCTCxhQUFhLEVBQUVYLE9BQU87SUFDbkQsSUFBTW9CLG1CQUFtQmpDLHNCQUFzQndCLGdCQUN6Q1UsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckQ3QixPQUFPNEIseUJBQXlCLEdBQUc7SUFFekMsT0FBTzVCO0FBQ1Q7QUFFQSxTQUFTd0Isc0JBQXNCTixhQUFhLEVBQUVYLE9BQU87SUFDbkQsSUFBTXVCLG1CQUFtQmxDLHNCQUFzQnNCLGdCQUN6Q2EsMEJBQTBCRCxpQkFBaUJELFVBQVUsSUFDckQ1QixPQUFPOEIseUJBQXlCLEdBQUc7SUFFekMsT0FBTzlCO0FBQ1QifQ==