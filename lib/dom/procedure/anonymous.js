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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _query = require("../../utilities/query");
var _procedure = require("../procedure");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _AnonymousProcedure;
var parametersNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/parameters"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/@type"), anonymousProcedureNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure");
var _default = (0, _dom.domAssigned)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, type, parameters, returnBlock) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.type - type;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    _create_class(AnonymousProcedure, [
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
            key: "getParameters",
            value: function getParameters() {
                return this.paramters;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "call",
            value: function call(values, context) {
                debugger;
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                this.parameters.matchValues(values, context);
                var variables = (0, _procedure.variablesFromValuesAndParameters)(values, this.parameters, context);
                var value = this.returnBlock.evaluate(variables, context), valueType = value.getType();
                if (this.type !== valueType) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type and the '").concat(anonymousProcedureString, "' anonymous procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
            }
        }
    ], [
        {
            key: "fromSomeNode",
            value: function fromSomeNode(someNode, context) {
                var ReturnBlock = _dom.default.ReturnBlock, Parameters = _dom.default.Parameters, anonymousProcedureNode = anonymousProcedureNodeQuery(someNode), string = stringFromAnonymousProcedureNode(anonymousProcedureNode, context), type = typeFromProcedureSomeNode(anonymousProcedureNode, context), parameters = Parameters.fromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = ReturnBlock.fromAnonymousProcedureNode(anonymousProcedureNode, context), anonymousProcedureDeclaration = new AnonymousProcedure(string, type, parameters, returnBlock);
                return anonymousProcedureDeclaration;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function typeFromProcedureSomeNode(someNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(someNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function stringFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var parametersNode = parametersNodeQuery(anonymousProcedureNode), parametersString = context.nodeAsString(parametersNode), string = "(".concat(parametersString, ") { ... }");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3QgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS9hbm9ueW1vdXNQcm9jZWR1cmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFub255bW91c1Byb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgLSB0eXBlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW10ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG5cbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBhbmQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlICBkbyBub3QgbWF0Y2guYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZS5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBbm9ueW1vdXNQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBSZXR1cm5CbG9jaywgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZVNvbWVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gICAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVTb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHNvbWVOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJwYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFBhcmFtZXRlcnMiLCJwYXJhbXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImNhbGwiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaFZhbHVlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwidmFsdWUiLCJldmFsdWF0ZSIsInZhbHVlVHlwZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21Tb21lTm9kZSIsInNvbWVOb2RlIiwiUmV0dXJuQmxvY2siLCJkb20iLCJQYXJhbWV0ZXJzIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVTb21lTm9kZSIsImZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJuYW1lIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc1N0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO2dFQUNNO3FCQUVJO3lCQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTUEsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLG1DQUNoQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLDhCQUNsQ0UsOEJBQThCRixJQUFBQSxnQkFBUyxFQUFDO0lBRTlDLFdBQWVHLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbEJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsU0FBUztZQUN2Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsV0FBVztZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ2xCLFFBQVE7Z0JBRVIsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ1osTUFBTSxFQUFFLEdBQUc7Z0JBRWpEVyxRQUFRRSxLQUFLLENBQUMsQUFBQyxnQkFBd0MsT0FBekJELDBCQUF5QjtnQkFFdkQsSUFBSSxDQUFDVixVQUFVLENBQUNZLFdBQVcsQ0FBQ0osUUFBUUM7Z0JBRXBDLElBQU1JLFlBQVlDLElBQUFBLDJDQUFnQyxFQUFDTixRQUFRLElBQUksQ0FBQ1IsVUFBVSxFQUFFUztnQkFFNUUsSUFBTU0sUUFBUSxJQUFJLENBQUNkLFdBQVcsQ0FBQ2UsUUFBUSxDQUFDSCxXQUFXSixVQUM3Q1EsWUFBWUYsTUFBTVosT0FBTztnQkFFL0IsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBS2tCLFdBQVc7b0JBQzNCLElBQU1DLGNBQWNILE1BQU1JLFFBQVEsQ0FBQ1YsVUFDN0JXLFVBQVUsQUFBQyxPQUE4QkgsT0FBeEJDLGFBQVksY0FBd0NSLE9BQTVCTyxXQUFVLG9CQUFzRSxPQUFwRFAsMEJBQXlCLDZCQUFxQyxPQUFWLElBQUksQ0FBQ1gsSUFBSSxFQUFDLDBCQUNuSXNCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBWixRQUFRZSxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJkLDBCQUF5QjtZQUMzRDs7OztZQUlPZSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVqQixPQUFPO2dCQUNuQyxJQUFRa0IsY0FBNEJDLFlBQUcsQ0FBL0JELGFBQWFFLGFBQWVELFlBQUcsQ0FBbEJDLFlBQ2ZDLHlCQUF5Qm5DLDRCQUE0QitCLFdBQ3JENUIsU0FBU2lDLGlDQUFpQ0Qsd0JBQXdCckIsVUFDbEVWLE9BQU9pQywwQkFBMEJGLHdCQUF3QnJCLFVBQ3pEVCxhQUFhNkIsV0FBV0ksMEJBQTBCLENBQUNILHdCQUF3QnJCLFVBQzNFUixjQUFjMEIsWUFBWU0sMEJBQTBCLENBQUNILHdCQUF3QnJCLFVBQzdFeUIsZ0NBQWdDLElBQUlyQyxtQkFBbUJDLFFBQVFDLE1BQU1DLFlBQVlDO2dCQUV2RixPQUFPaUM7WUFDVDs7OztLQVpBLHNDQUFPQyxRQUFPO0FBZWhCLFNBQVNILDBCQUEwQk4sUUFBUSxFQUFFakIsT0FBTztJQUNsRCxJQUFNMkIsbUJBQW1CMUMsc0JBQXNCZ0MsV0FDekNXLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEdkMsT0FBT3NDLHlCQUF5QixHQUFHO0lBRXpDLE9BQU90QztBQUNUO0FBRUEsU0FBU2dDLGlDQUFpQ0Qsc0JBQXNCLEVBQUVyQixPQUFPO0lBQ3ZFLElBQU04QixpQkFBaUIvQyxvQkFBb0JzQyx5QkFDckNVLG1CQUFtQi9CLFFBQVFnQyxZQUFZLENBQUNGLGlCQUN4Q3pDLFNBQVMsQUFBQyxJQUFvQixPQUFqQjBDLGtCQUFpQjtJQUVwQyxPQUFPMUM7QUFDVCJ9