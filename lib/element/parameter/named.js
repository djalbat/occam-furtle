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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
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
var _NamedParameter;
var _default = (0, _elements.define)((_NamedParameter = /*#__PURE__*/ function() {
    function NamedParameter(string, type, name, alias) {
        _class_call_check(this, NamedParameter);
        this.string = string;
        this.type = type;
        this.name = name;
        this.alias = alias;
    }
    _create_class(NamedParameter, [
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
            key: "getAlias",
            value: function getAlias() {
                return this.alias;
            }
        },
        {
            key: "isAliased",
            value: function isAliased() {
                var aliased = this.alias !== null;
                return aliased;
            }
        },
        {
            key: "getAliasedName",
            value: function getAliasedName() {
                var aliased = this.isAliased(), aliasedName = aliased ? this.alias : this.name; ///
                return aliasedName;
            }
        },
        {
            key: "matchTerm",
            value: function matchTerm(term, context) {
                var termString = term.getString(), namedParameterString = this.string; ///
                context.trace("Matching the '".concat(termString, "' term against the '").concat(namedParameterString, "' named parameter..."));
                var termType = term.getType();
                if (this.type !== termType) {
                    var message = "The '".concat(termString, "' term's '").concat(termType, "' type  and '").concat(namedParameterString, "' named parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(termString, "' term against the '").concat(namedParameterString, "' named parameter."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var namedParameterA = this, namedParameterB = namedParameter; ///
                var namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
                context.trace("Matching the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXIge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFsaWFzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGlhcztcbiAgfVxuXG4gIGlzQWxpYXNlZCgpIHtcbiAgICBjb25zdCBhbGlhc2VkID0gKHRoaXMuYWxpYXMgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFsaWFzZWQ7XG4gIH1cblxuICBnZXRBbGlhc2VkTmFtZSgpIHtcbiAgICBjb25zdCBhbGlhc2VkID0gdGhpcy5pc0FsaWFzZWQoKSxcbiAgICAgICAgICBhbGlhc2VkTmFtZSA9IGFsaWFzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaWFzIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTsgLy8vXG5cbiAgICByZXR1cm4gYWxpYXNlZE5hbWU7XG4gIH1cblxuICBtYXRjaFRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSAgYW5kICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgJyR7dGhpcy50eXBlfScgdHlwZSBkbyBub3QgbWF0Y2guYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGxldCBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCID0gbmFtZWRQYXJhbWV0ZXI7IC8vL1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJBLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQlN0cmluZyA9IG5hbWVkUGFyYW1ldGVyQi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBuYW1lZFBhcmFtZXRlck1hdGNoZXMgPSAoKHRoaXMubmFtZSA9PT0gbmFtZSkgJiYgKHRoaXMudHlwZSA9PT0gdHlwZSkpO1xuXG4gICAgaWYgKG5hbWVkUGFyYW1ldGVyTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJBU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyQlN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5hbWVkUGFyYW1ldGVyXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJOYW1lZFBhcmFtZXRlciIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiYWxpYXMiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEFsaWFzIiwiaXNBbGlhc2VkIiwiYWxpYXNlZCIsImdldEFsaWFzZWROYW1lIiwiYWxpYXNlZE5hbWUiLCJtYXRjaFRlcm0iLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1TdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0VBSnNCO3dCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sbUNBQUM7YUFBTUMsZUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEWEo7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFXLElBQUksQ0FBQ04sS0FBSyxLQUFLO2dCQUVoQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFVBQVUsSUFBSSxDQUFDRCxTQUFTLElBQ3hCRyxjQUFjRixVQUNFLElBQUksQ0FBQ04sS0FBSyxHQUNSLElBQUksQ0FBQ0QsSUFBSSxFQUFFLEdBQUc7Z0JBRXRDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFQyxPQUFPO2dCQUNyQixJQUFNQyxhQUFhRixLQUFLVCxTQUFTLElBQzNCWSx1QkFBdUIsSUFBSSxDQUFDaEIsTUFBTSxFQUFHLEdBQUc7Z0JBRTlDYyxRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBaURELE9BQWpDRCxZQUFXLHdCQUEyQyxPQUFyQkMsc0JBQXFCO2dCQUVyRixJQUFNRSxXQUFXTCxLQUFLUixPQUFPO2dCQUU3QixJQUFJLElBQUksQ0FBQ0osSUFBSSxLQUFLaUIsVUFBVTtvQkFDMUIsSUFBTUMsVUFBVSxBQUFDLFFBQThCRCxPQUF2QkgsWUFBVyxjQUFvQ0MsT0FBeEJFLFVBQVMsaUJBQTJELE9BQTVDRixzQkFBcUIseUJBQWlDLE9BQVYsSUFBSSxDQUFDZixJQUFJLEVBQUMseUJBQ3ZIbUIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFOLFFBQVFTLEtBQUssQ0FBQyxBQUFDLG1CQUFtRFAsT0FBakNELFlBQVcsd0JBQTJDLE9BQXJCQyxzQkFBcUI7WUFDekY7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjLEVBQUVYLE9BQU87Z0JBQ3pDLElBQUlZO2dCQUVKLElBQU1DLGtCQUFrQixJQUFJLEVBQ3RCQyxrQkFBa0JILGdCQUFnQixHQUFHO2dCQUUzQyxJQUFNSSx3QkFBd0JGLGdCQUFnQnZCLFNBQVMsSUFDakQwQix3QkFBd0JGLGdCQUFnQnhCLFNBQVM7Z0JBRXZEVSxRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBdUVhLE9BQXZERCx1QkFBc0IsbUNBQXVELE9BQXRCQyx1QkFBc0I7Z0JBRTVHLElBQU01QixPQUFPdUIsZUFBZW5CLE9BQU8sSUFDN0JMLE9BQU93QixlQUFlcEIsT0FBTztnQkFFbkNxQix3QkFBeUIsQUFBQyxJQUFJLENBQUN4QixJQUFJLEtBQUtBLFFBQVUsSUFBSSxDQUFDRCxJQUFJLEtBQUtBO2dCQUVoRSxJQUFJeUIsdUJBQXVCO29CQUN6QlosUUFBUVMsS0FBSyxDQUFDLEFBQUMsbUJBQXlFTyxPQUF2REQsdUJBQXNCLG1DQUF1RCxPQUF0QkMsdUJBQXNCO2dCQUNoSDtnQkFFQSxPQUFPSjtZQUNUOzs7O0tBRUEsa0NBQU94QixRQUFPIn0=