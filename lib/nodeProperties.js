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
var _exception = /*#__PURE__*/ _interop_require_default(require("./exception"));
var _nodeProperty = /*#__PURE__*/ _interop_require_default(require("./nodeProperty"));
var _types = require("./types");
var _string = require("./utilities/string");
var _parameterNames = require("./parameterNames");
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
var NodeProperties = /*#__PURE__*/ function() {
    function NodeProperties(string, array) {
        _class_call_check(this, NodeProperties);
        this.string = string;
        this.array = array;
    }
    _create_class(NodeProperties, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "someNodeProperty",
            value: function someNodeProperty(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "compareNamedParameter",
            value: function compareNamedParameter(namedParameter, context) {
                var nodePropertiesString = this.string, namedParameterString = namedParameter.getString();
                context.trace("Comparing the '".concat(namedParameterString, "' named parameter with the '").concat(nodePropertiesString, "' node properties..."));
                var namedParametersCompare = this.someNodeProperty(function(nodeProperty) {
                    var namedParameterComparesToNodeProperty = nodeProperty.compareNamedParameter(namedParameter, context);
                    if (namedParameterComparesToNodeProperty) {
                        return true;
                    }
                });
                if (!namedParametersCompare) {
                    var message = "The '".concat(namedParameterString, "' named parameter does not compmare to any of the '").concat(nodePropertiesString, "' node properties."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...compared the '".concat(namedParameterString, "' named parameter with the '").concat(nodePropertiesString, "' node properties."));
            }
        },
        {
            key: "compareNamedParameters",
            value: function compareNamedParameters(namedParameters, context) {
                var _this = this;
                namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.compareNamedParameter(namedParameter, context);
                });
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nodePropertiesArray = nodePropertiesArrayFromNothing(), string = (0, _string.nodePropertiesStringFromNodePropertiesArray)(nodePropertiesArray), array = nodePropertiesArray, nodeProperties = new NodeProperties(string, array);
                return nodeProperties;
            }
        }
    ]);
    return NodeProperties;
}();
var nodeProperties = NodeProperties.fromNothing();
var _default = nodeProperties;
function nodePropertiesArrayFromNothing() {
    var types = [
        _types.STRING_TYPE,
        _types.BOOLEAN_TYPE,
        _types.NODES_TYPE
    ], names = [
        _parameterNames.CONTENT_PARAMETER_NAME,
        _parameterNames.TERMINAL_PARAMETER_NAME,
        _parameterNames.CHILD_NODES_PARAMETER_NAME
    ], nodePropertiesArray = names.map(function(name, index) {
        var type = types[index], nodeProperty = _nodeProperty.default.fromNameAndType(name, type);
        return nodeProperty;
    });
    return nodePropertiesArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi9leGNlcHRpb25cIjtcbmltcG9ydCBOb2RlUHJvcGVydHkgZnJvbSBcIi4vbm9kZVByb3BlcnR5XCI7XG5cbmltcG9ydCB7IE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgbm9kZVByb3BlcnRpZXNTdHJpbmdGcm9tTm9kZVByb3BlcnRpZXNBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuL3BhcmFtZXRlck5hbWVzXCI7XG5cbmNsYXNzIE5vZGVQcm9wZXJ0aWVzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHNvbWVOb2RlUHJvcGVydHkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBjb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUHJvcGVydGllc1N0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciB3aXRoIHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzQ29tcGFyZSA9IHRoaXMuc29tZU5vZGVQcm9wZXJ0eSgobm9kZVByb3BlcnR5KSA9PiB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlckNvbXBhcmVzVG9Ob2RlUHJvcGVydHkgPSBub2RlUHJvcGVydHkuY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyQ29tcGFyZXNUb05vZGVQcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbmFtZWRQYXJhbWV0ZXJzQ29tcGFyZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgZG9lcyBub3QgY29tcG1hcmUgdG8gYW55IG9mIHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIHdpdGggdGhlICcke25vZGVQcm9wZXJ0aWVzU3RyaW5nfScgbm9kZSBwcm9wZXJ0aWVzLmApO1xuICB9XG5cbiAgY29tcGFyZU5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgdGhpcy5jb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vZGVQcm9wZXJ0aWVzQXJyYXkgPSBub2RlUHJvcGVydGllc0FycmF5RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlUHJvcGVydGllc1N0cmluZ0Zyb21Ob2RlUHJvcGVydGllc0FycmF5KG5vZGVQcm9wZXJ0aWVzQXJyYXkpLFxuICAgICAgICAgIGFycmF5ID0gbm9kZVByb3BlcnRpZXNBcnJheSwgIC8vL1xuICAgICAgICAgIG5vZGVQcm9wZXJ0aWVzID0gbmV3IE5vZGVQcm9wZXJ0aWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIG5vZGVQcm9wZXJ0aWVzO1xuICB9XG59XG5cbmNvbnN0IG5vZGVQcm9wZXJ0aWVzID0gTm9kZVByb3BlcnRpZXMuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVByb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIG5vZGVQcm9wZXJ0aWVzQXJyYXlGcm9tTm90aGluZygpIHtcbiAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAgICAgU1RSSU5HX1RZUEUsXG4gICAgICAgICAgQk9PTEVBTl9UWVBFLFxuICAgICAgICAgIE5PREVTX1RZUEUsXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWVzID0gW1xuICAgICAgICAgIENPTlRFTlRfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgICAgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgICAgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgbm9kZVByb3BlcnRpZXNBcnJheSA9IG5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5vZGVQcm9wZXJ0eSA9IE5vZGVQcm9wZXJ0eS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZVByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbm9kZVByb3BlcnRpZXNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJOb2RlUHJvcGVydGllcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJzb21lTm9kZVByb3BlcnR5IiwiY2FsbGJhY2siLCJzb21lIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJjb250ZXh0Iiwibm9kZVByb3BlcnRpZXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwibmFtZWRQYXJhbWV0ZXJzQ29tcGFyZSIsIm5vZGVQcm9wZXJ0eSIsIm5hbWVkUGFyYW1ldGVyQ29tcGFyZXNUb05vZGVQcm9wZXJ0eSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVycyIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsImZyb21Ob3RoaW5nIiwibm9kZVByb3BlcnRpZXNBcnJheSIsIm5vZGVQcm9wZXJ0aWVzQXJyYXlGcm9tTm90aGluZyIsIm5vZGVQcm9wZXJ0aWVzU3RyaW5nRnJvbU5vZGVQcm9wZXJ0aWVzQXJyYXkiLCJub2RlUHJvcGVydGllcyIsInR5cGVzIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJOT0RFU19UWVBFIiwibmFtZXMiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsIm1hcCIsIm5hbWUiLCJpbmRleCIsInR5cGUiLCJO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