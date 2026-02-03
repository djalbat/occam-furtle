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
var _elements = require("../elements");
var _types = require("../types");
var _term = require("../utilities/term");
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
var _NodesQuery;
var _default = (0, _elements.define)((_NodesQuery = /*#__PURE__*/ function() {
    function NodesQuery(string, variable, query) {
        _class_call_check(this, NodesQuery);
        this.string = string;
        this.variable = variable;
        this.query = query;
    }
    _create_class(NodesQuery, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getQuery",
            value: function getQuery() {
                return this.query;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var nodesQueryString = this.string; ///
                context.trace("Evaluating the '".concat(nodesQueryString, "' nodes query..."));
                if (this.query === null) {
                    var message = "Cannot evaluate the '".concat(nodesQueryString, "' nodes query because its expression is malformed."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                term = this.variable.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.NODE_TYPE) {
                    var termString = term.getString(), message1 = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var node;
                var primitiveValue = term.getPrimitiveValue();
                node = primitiveValue; ///
                if (node === null) {
                    var termString1 = term.getString(), message2 = "The '".concat(termString1, "' term's node is null."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var nodes = this.query.execute(node);
                term = (0, _term.termFromNodes)(nodes, context);
                var termString2 = term.getString();
                context.debug("...evaluated the '".concat(nodesQueryString, "' nodes query as '").concat(termString2, "'."));
                return term;
            }
        }
    ]);
    return NodesQuery;
}(), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTm9kZXNRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICBub2RlID0gcHJpbWl0aXZlVmFsdWU7ICAvLy9cblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZXNRdWVyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTm9kZXNRdWVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsIm5vZGVzUXVlcnlTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInRlcm1TdHJpbmciLCJub2RlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vZGVzIiwiZXhlY3V0ZSIsInRlcm1Gcm9tTm9kZXMiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5zQjt3QkFFQztxQkFDRztvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlCLFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDO2FBQU1DLFdBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2dDQURUSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQixJQUFJLENBQUNULE1BQU0sRUFBRyxHQUFHO2dCQUUxQ08sUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQW1DLE9BQWpCRCxrQkFBaUI7Z0JBRWxELElBQUksSUFBSSxDQUFDUCxLQUFLLEtBQUssTUFBTTtvQkFDdkIsSUFBTVMsVUFBVSxBQUFDLHdCQUF3QyxPQUFqQkYsa0JBQWlCLHVEQUNuREcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFKLE9BQU8sSUFBSSxDQUFDUCxRQUFRLENBQUNLLFFBQVEsQ0FBQ0M7Z0JBRTlCLElBQU1RLFdBQVdQLEtBQUtRLE9BQU87Z0JBRTdCLElBQUlELGFBQWFFLGdCQUFTLEVBQUU7b0JBQzFCLElBQU1DLGFBQWFWLEtBQUtMLFNBQVMsSUFDM0JRLFdBQVUsQUFBQyxRQUE4QkksT0FBdkJHLFlBQVcsY0FBeUNELE9BQTdCRixVQUFTLHNCQUE4QixPQUFWRSxnQkFBUyxFQUFDLE9BQ2hGTCxhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJTztnQkFFSixJQUFNQyxpQkFBaUJaLEtBQUthLGlCQUFpQjtnQkFFN0NGLE9BQU9DLGdCQUFpQixHQUFHO2dCQUUzQixJQUFJRCxTQUFTLE1BQU07b0JBQ2pCLElBQU1ELGNBQWFWLEtBQUtMLFNBQVMsSUFDM0JRLFdBQVUsQUFBQyxRQUFrQixPQUFYTyxhQUFXLDJCQUM3Qk4sYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTVUsUUFBUSxJQUFJLENBQUNwQixLQUFLLENBQUNxQixPQUFPLENBQUNKO2dCQUVqQ1gsT0FBT2dCLElBQUFBLG1CQUFhLEVBQUNGLE9BQU9mO2dCQUU1QixJQUFNVyxjQUFhVixLQUFLTCxTQUFTO2dCQUVqQ0ksUUFBUWtCLEtBQUssQ0FBQyxBQUFDLHFCQUF5RFAsT0FBckNULGtCQUFpQixzQkFBK0IsT0FBWFMsYUFBVztnQkFFbkYsT0FBT1Y7WUFDVDs7OztLQUVBLDhCQUFPa0IsUUFBTyJ9