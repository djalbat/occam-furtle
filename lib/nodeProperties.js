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
var types = [
    _types.STRING_TYPE,
    _types.BOOLEAN_TYPE,
    _types.NODES_TYPE
], names = [
    _parameterNames.CONTENT_PARAMETER_NAME,
    _parameterNames.TERMINAL_PARAMETER_NAME,
    _parameterNames.CHILD_NODES_PARAMETER_NAME
];
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
                var context = null, array = names.map(function(name, index) {
                    var type = types[index], nodeProperty = _nodeProperty.default.fromNameAndType(name, type, context);
                    return nodeProperty;
                }), string = stringFromArray(array, context), nodeProperties = new NodeProperties(string, array);
                return nodeProperties;
            }
        }
    ]);
    return NodeProperties;
}();
var nodeProperties = NodeProperties.fromNothing();
var _default = nodeProperties;
function stringFromArray(array, context) {
    var nodePropertiesString = array.reduce(function(nodePropertiesString, nodeProperty) {
        var nodePropertyString = nodeProperty.getString();
        nodePropertiesString = nodePropertiesString === null ? nodePropertyString : "".concat(nodePropertiesString, ", ").concat(nodePropertyString);
        return nodePropertiesString;
    }, null), string = nodePropertiesString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi9leGNlcHRpb25cIjtcbmltcG9ydCBOb2RlUHJvcGVydHkgZnJvbSBcIi4vbm9kZVByb3BlcnR5XCI7XG5cbmltcG9ydCB7IE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3QgdHlwZXMgPSBbXG4gICAgICAgIFNUUklOR19UWVBFLFxuICAgICAgICBCT09MRUFOX1RZUEUsXG4gICAgICAgIE5PREVTX1RZUEUsXG4gICAgICBdLFxuICAgICAgbmFtZXMgPSBbXG4gICAgICAgIENPTlRFTlRfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLFxuICAgICAgICBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRVxuICAgICAgXTtcblxuY2xhc3MgTm9kZVByb3BlcnRpZXMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgc29tZU5vZGVQcm9wZXJ0eShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUHJvcGVydGllc1N0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25vZGVQcm9wZXJ0aWVzU3RyaW5nfScgbm9kZSBwcm9wZXJ0aWVzLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlck1hdGNoZXMgPSB0aGlzLnNvbWVOb2RlUHJvcGVydHkoKG5vZGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzTm9kZVByb3BlcnR5ID0gbm9kZVByb3BlcnR5Lm1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzTm9kZVByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgJyR7bm9kZVByb3BlcnRpZXNTdHJpbmd9JyBub2RlIHByb3BlcnRpZXMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25vZGVQcm9wZXJ0aWVzU3RyaW5nfScgbm9kZSBwcm9wZXJ0aWVzLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcnMobmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMubWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG51bGwsXG4gICAgICAgICAgYXJyYXkgPSBuYW1lcy5tYXAoKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbm9kZVByb3BlcnR5ID0gTm9kZVByb3BlcnR5LmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGVQcm9wZXJ0eTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGVQcm9wZXJ0aWVzID0gbmV3IE5vZGVQcm9wZXJ0aWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIG5vZGVQcm9wZXJ0aWVzO1xuICB9XG59XG5cbmNvbnN0IG5vZGVQcm9wZXJ0aWVzID0gTm9kZVByb3BlcnRpZXMuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVByb3BlcnRpZXM7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCBub2RlUHJvcGVydGllc1N0cmluZyA9IGFycmF5LnJlZHVjZSgobm9kZVByb3BlcnRpZXNTdHJpbmcsIG5vZGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGVQcm9wZXJ0eVN0cmluZyA9IG5vZGVQcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIG5vZGVQcm9wZXJ0aWVzU3RyaW5nID0gKG5vZGVQcm9wZXJ0aWVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVQcm9wZXJ0eVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtub2RlUHJvcGVydGllc1N0cmluZ30sICR7bm9kZVByb3BlcnR5U3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gbm9kZVByb3BlcnRpZXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBub2RlUHJvcGVydGllc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidHlwZXMiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsIk5PREVTX1RZUEUiLCJuYW1lcyIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiTm9kZVByb3BlcnRpZXMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5Iiwic29tZU5vZGVQcm9wZXJ0eSIsImNhbGxiYWNrIiwic29tZSIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImNvbnRleHQiLCJub2RlUHJvcGVydGllc1N0cmluZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwidHJhY2UiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXMiLCJub2RlUHJvcGVydHkiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXNOb2RlUHJvcGVydHkiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJzIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwiZnJvbU5vdGhpbmciLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJ0eXBlIiwiTm9kZVByb3BlcnR5IiwiZnJvbU5hbWVBbmRUeXBlIiwic3RyaW5nRnJvbUFycmF5Iiwibm9kZVByb3BlcnRpZXMiLCJyZWR1Y2UiLCJub2RlUHJvcGVydHlTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtGQTs7O2VBQUE7OztnRUFoRnNCO21FQUNHO3FCQUU2Qjs4QkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUYsSUFBTUEsUUFBUTtJQUNOQyxrQkFBVztJQUNYQyxtQkFBWTtJQUNaQyxpQkFBVTtDQUNYLEVBQ0RDLFFBQVE7SUFDTkMsc0NBQXNCO0lBQ3RCQyx1Q0FBdUI7SUFDdkJDLDBDQUEwQjtDQUMzQjtBQUVQLElBQUEsQUFBTUMsK0JBQU47YUFBTUEsZUFDUUMsTUFBTSxFQUFFQyxLQUFLO2dDQURyQkY7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7O2tCQUhYRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUNEO1lBQVc7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsY0FBYyxFQUFFQyxPQUFPO2dCQUN6QyxJQUFNQyx1QkFBdUIsSUFBSSxDQUFDVixNQUFNLEVBQ2xDVyx1QkFBdUJILGVBQWVOLFNBQVM7Z0JBRXJETyxRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBc0VGLE9BQXREQyxzQkFBcUIsbUNBQXNELE9BQXJCRCxzQkFBcUI7Z0JBRTFHLElBQU1HLHdCQUF3QixJQUFJLENBQUNULGdCQUFnQixDQUFDLFNBQUNVO29CQUNuRCxJQUFNQyxvQ0FBb0NELGFBQWFQLG1CQUFtQixDQUFDQyxnQkFBZ0JDO29CQUUzRixJQUFJTSxtQ0FBbUM7d0JBQ3JDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRix1QkFBdUI7b0JBQzFCLElBQU1HLFVBQVUsQUFBQyxRQUEyRU4sT0FBcEVDLHNCQUFxQixpREFBb0UsT0FBckJELHNCQUFxQix1QkFDM0dPLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBUixRQUFRVyxLQUFLLENBQUMsQUFBQyxtQkFBd0VWLE9BQXREQyxzQkFBcUIsbUNBQXNELE9BQXJCRCxzQkFBcUI7WUFDOUc7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxlQUFlLEVBQUViLE9BQU87O2dCQUMzQ2EsZ0JBQWdCQyxxQkFBcUIsQ0FBQyxTQUFDZjtvQkFDckMsTUFBS0QsbUJBQW1CLENBQUNDLGdCQUFnQkM7Z0JBQzNDO1lBQ0Y7Ozs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTWYsVUFBVSxNQUNWUixRQUFRTixNQUFNOEIsR0FBRyxDQUFDLFNBQUNDLE1BQU1DO29CQUN2QixJQUFNQyxPQUFPckMsS0FBSyxDQUFDb0MsTUFBTSxFQUNuQmIsZUFBZWUscUJBQVksQ0FBQ0MsZUFBZSxDQUFDSixNQUFNRSxNQUFNbkI7b0JBRTlELE9BQU9LO2dCQUNULElBQ0FkLFNBQVMrQixnQkFBZ0I5QixPQUFPUSxVQUNoQ3VCLGlCQUFpQixJQXZEckJqQyxlQXVEd0NDLFFBQVFDO2dCQUVsRCxPQUFPK0I7WUFDVDs7O1dBMURJakM7O0FBNkROLElBQU1pQyxpQkFBaUJqQyxlQUFleUIsV0FBVztJQUVqRCxXQUFlUTtBQUVmLFNBQVNELGdCQUFnQjlCLEtBQUssRUFBRVEsT0FBTztJQUNyQyxJQUFNQyx1QkFBdUJULE1BQU1nQyxNQUFNLENBQUMsU0FBQ3ZCLHNCQUFzQkk7UUFDekQsSUFBTW9CLHFCQUFxQnBCLGFBQWFaLFNBQVM7UUFFakRRLHVCQUF1QixBQUFDQSx5QkFBeUIsT0FDeEJ3QixxQkFDQyxBQUFDLEdBQTJCQSxPQUF6QnhCLHNCQUFxQixNQUF1QixPQUFuQndCO1FBRXRELE9BQU94QjtJQUNULEdBQUcsT0FDSFYsU0FBU1Usc0JBQXVCLEdBQUc7SUFFekMsT0FBT1Y7QUFDVCJ9