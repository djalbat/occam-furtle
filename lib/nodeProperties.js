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
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var nodePropertiesString = this.string, namedParameterString = namedParameter.getString();
                context.trace("Matching the '".concat(namedParameterString, "' named parameter against the '").concat(nodePropertiesString, "' node properties..."));
                var namedParameterMatches = this.someNodeProperty(function(nodeProperty) {
                    var namedParameterMatchesNodeProperty = nodeProperty.matchNamedParameter(namedParameter, context);
                    if (namedParameterMatchesNodeProperty) {
                        return true;
                    }
                });
                if (!namedParameterMatches) {
                    var message = "The '".concat(namedParameterString, "' named parameter does not match any of the '").concat(nodePropertiesString, "' node properties."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(namedParameterString, "' named parameter against the '").concat(nodePropertiesString, "' node properties."));
            }
        },
        {
            key: "matchNamedParameters",
            value: function matchNamedParameters(namedParameters, context) {
                var _this = this;
                namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.matchNamedParameter(namedParameter, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi9leGNlcHRpb25cIjtcbmltcG9ydCBOb2RlUHJvcGVydHkgZnJvbSBcIi4vbm9kZVByb3BlcnR5XCI7XG5cbmltcG9ydCB7IE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgbm9kZVByb3BlcnRpZXNTdHJpbmdGcm9tTm9kZVByb3BlcnRpZXNBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuL3BhcmFtZXRlck5hbWVzXCI7XG5cbmNsYXNzIE5vZGVQcm9wZXJ0aWVzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHNvbWVOb2RlUHJvcGVydHkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVByb3BlcnRpZXNTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzID0gdGhpcy5zb21lTm9kZVByb3BlcnR5KChub2RlUHJvcGVydHkpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlc05vZGVQcm9wZXJ0eSA9IG5vZGVQcm9wZXJ0eS5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyTWF0Y2hlc05vZGVQcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlICcke25vZGVQcm9wZXJ0aWVzU3RyaW5nfScgbm9kZSBwcm9wZXJ0aWVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtub2RlUHJvcGVydGllc1N0cmluZ30nIG5vZGUgcHJvcGVydGllcy5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXJzKG5hbWVkUGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIG5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLm1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5vZGVQcm9wZXJ0aWVzQXJyYXkgPSBub2RlUHJvcGVydGllc0FycmF5RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlUHJvcGVydGllc1N0cmluZ0Zyb21Ob2RlUHJvcGVydGllc0FycmF5KG5vZGVQcm9wZXJ0aWVzQXJyYXkpLFxuICAgICAgICAgIGFycmF5ID0gbm9kZVByb3BlcnRpZXNBcnJheSwgIC8vL1xuICAgICAgICAgIG5vZGVQcm9wZXJ0aWVzID0gbmV3IE5vZGVQcm9wZXJ0aWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIG5vZGVQcm9wZXJ0aWVzO1xuICB9XG59XG5cbmNvbnN0IG5vZGVQcm9wZXJ0aWVzID0gTm9kZVByb3BlcnRpZXMuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVByb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIG5vZGVQcm9wZXJ0aWVzQXJyYXlGcm9tTm90aGluZygpIHtcbiAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAgICAgU1RSSU5HX1RZUEUsXG4gICAgICAgICAgQk9PTEVBTl9UWVBFLFxuICAgICAgICAgIE5PREVTX1RZUEUsXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWVzID0gW1xuICAgICAgICAgIENPTlRFTlRfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgICAgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgICAgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgbm9kZVByb3BlcnRpZXNBcnJheSA9IG5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5vZGVQcm9wZXJ0eSA9IE5vZGVQcm9wZXJ0eS5mcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSk7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZVByb3BlcnR5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbm9kZVByb3BlcnRpZXNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJOb2RlUHJvcGVydGllcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJzb21lTm9kZVByb3BlcnR5IiwiY2FsbGJhY2siLCJzb21lIiwibWF0Y2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiY29udGV4dCIsIm5vZGVQcm9wZXJ0aWVzU3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5vZGVQcm9wZXJ0eSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlc05vZGVQcm9wZXJ0eSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJmcm9tTm90aGluZyIsIm5vZGVQcm9wZXJ0aWVzQXJyYXkiLCJub2RlUHJvcGVydGllc0FycmF5RnJvbU5vdGhpbmciLCJub2RlUHJvcGVydGllc1N0cmluZ0Zyb21Ob2RlUHJvcGVydGllc0FycmF5Iiwibm9kZVByb3BlcnRpZXMiLCJ0eXBlcyIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiTk9ERVNfVFlQRSIsIm5hbWVzIiwiQ09OVEVOVF9QQVJBTUVURVJfTkFNRSIsIlRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJ0eXBlIiwiTm9kZVByb3BlcnR5IiwiZnJvbU5hbWVBbmRU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