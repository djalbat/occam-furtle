"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get variablesFromTermsAndParameters () {
        return variablesFromTermsAndParameters;
    }
});
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _types = require("../types");
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
var _Procedure;
var _default = (0, _elements.define)((_Procedure = /*#__PURE__*/ function() {
    function Procedure(string, type, label, parameters, returnBlock) {
        _class_call_check(this, Procedure);
        this.string = string;
        this.type = type;
        this.label = label;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    _create_class(Procedure, [
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
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "isBoolean",
            value: function isBoolean() {
                var typeBooleanType = this.type === _types.BOOLEAN_TYPE, boolean = typeBooleanType; ///
                return boolean;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.label.getName();
            }
        },
        {
            key: "getReturnStatement",
            value: function getReturnStatement() {
                return this.returnBlock.getReturnStatement();
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                return this.label.matchName(name);
            }
        },
        {
            key: "call",
            value: function call(terms, context) {
                var procedureString = this.string; ///
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                this.parameters.matchTerms(terms, context);
                var variables = variablesFromTermsAndParameters(terms, this.parameters, context), term = this.returnBlock.evaluate(variables, context), termType = term.getType();
                if (this.type !== termType) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type and the '").concat(procedureString, "' procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(procedureString, "' procedure."));
                return term;
            }
        }
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function variablesFromTermsAndParameters(terms, parameters, context) {
    var variables = [];
    terms.forEachTerm(function(term, index) {
        var parameter = parameters.getParameter(index);
        if (parameter !== null) {
            var Variable = _elements.default.Variable, variable = Variable.fromTermAndParameter(term, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZUJvb2xlYW5UeXBlID0gKHRoaXMudHlwZSA9PT0gQk9PTEVBTl9UWVBFKSxcbiAgICAgICAgICBib29sZWFuID0gdHlwZUJvb2xlYW5UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLmxhYmVsLmdldE5hbWUoKTsgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2suZ2V0UmV0dXJuU3RhdGVtZW50KCk7IH1cblxuICBtYXRjaE5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5tYXRjaE5hbWUobmFtZSk7IH1cblxuICBjYWxsKHRlcm1zLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS4uLmApO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLm1hdGNoVGVybXModGVybXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyh0ZXJtcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB0ZXJtVHlwZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBhbmQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVRlcm1zQW5kUGFyYW1ldGVycyh0ZXJtcywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICB0ZXJtcy5mb3JFYWNoVGVybSgodGVybSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1BbmRQYXJhbWV0ZXIodGVybSwgcGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNGcm9tVGVybXNBbmRQYXJhbWV0ZXJzIiwiZGVmaW5lIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldExhYmVsIiwiZ2V0UGFyYW1ldGVycyIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsImdldE5hbWUiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJtYXRjaE5hbWUiLCJuYW1lIiwiY2FsbCIsInRlcm1zIiwiY29udGV4dCIsInByb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hUZXJtcyIsInZhcmlhYmxlcyIsInRlcm0iLCJldmFsdWF0ZSIsInRlcm1UeXBlIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiZm9yRWFjaFRlcm0iLCJpbmRleCIsInBhcmFtZXRlciIsImdldFBhcmFtZXRlciIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJ2YXJpYWJsZSIsImZyb21UZXJtQW5kUGFyYW1ldGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUUE7ZUFBQTs7UUFxRWdCQTtlQUFBQTs7O2dFQTNFSztnRUFDQztxQkFHTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQUQ5Qkw7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxLQUFLO1lBQ25COzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxVQUFVO1lBQ3hCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFtQixJQUFJLENBQUNWLElBQUksS0FBS1csbUJBQVksRUFDN0NDLFVBQVVGLGlCQUFrQixHQUFHO2dCQUVyQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDWixLQUFLLENBQUNZLE9BQU87WUFBSTs7O1lBRXpDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXVCLE9BQU8sSUFBSSxDQUFDWCxXQUFXLENBQUNXLGtCQUFrQjtZQUFJOzs7WUFFckVDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJO2dCQUFJLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNjLFNBQVMsQ0FBQ0M7WUFBTzs7O1lBRXJEQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsS0FBSyxFQUFFQyxPQUFPO2dCQUNqQixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDckIsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDb0IsUUFBUUUsS0FBSyxDQUFDLEFBQUMsZ0JBQStCLE9BQWhCRCxpQkFBZ0I7Z0JBRTlDLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQ29CLFVBQVUsQ0FBQ0osT0FBT0M7Z0JBRWxDLElBQU1JLFlBQVkzQixnQ0FBZ0NzQixPQUFPLElBQUksQ0FBQ2hCLFVBQVUsRUFBRWlCLFVBQ3BFSyxPQUFPLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQ3NCLFFBQVEsQ0FBQ0YsV0FBV0osVUFDNUNPLFdBQVdGLEtBQUtuQixPQUFPO2dCQUU3QixJQUFJLElBQUksQ0FBQ0wsSUFBSSxLQUFLMEIsVUFBVTtvQkFDMUIsSUFBTUMsYUFBYUgsS0FBS3BCLFNBQVMsSUFDM0J3QixVQUFVLEFBQUMsUUFBOEJGLE9BQXZCQyxZQUFXLGNBQXVDUCxPQUEzQk0sVUFBUyxvQkFBbUQsT0FBakNOLGlCQUFnQixtQkFBMkIsT0FBVixJQUFJLENBQUNwQixJQUFJLEVBQUMsMEJBQy9HNkIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFWLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQlosaUJBQWdCO2dCQUVoRCxPQUFPSTtZQUNUOzs7O0tBRUEsNkJBQU9SLFFBQU87QUFHVCxTQUFTcEIsZ0NBQWdDc0IsS0FBSyxFQUFFaEIsVUFBVSxFQUFFaUIsT0FBTztJQUN4RSxJQUFNSSxZQUFZLEVBQUU7SUFFcEJMLE1BQU1lLFdBQVcsQ0FBQyxTQUFDVCxNQUFNVTtRQUN2QixJQUFNQyxZQUFZakMsV0FBV2tDLFlBQVksQ0FBQ0Y7UUFFMUMsSUFBSUMsY0FBYyxNQUFNO1lBQ3RCLElBQU0sQUFBRUUsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLFdBQVdGLFNBQVNHLG9CQUFvQixDQUFDaEIsTUFBTVcsV0FBV2hCO1lBRWhFSSxVQUFVa0IsSUFBSSxDQUFDRjtRQUNqQjtJQUNGO0lBRUEsT0FBT2hCO0FBQ1QifQ==