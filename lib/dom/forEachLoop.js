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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
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
var _ForEachLoop;
var variableNodeQuery = (0, _query.nodeQuery)("/forEachLoop/variable"), parametersNodeQuery = (0, _query.nodeQuery)("/forEachLoop/anonymousProcedure/parameters"), forEachLoopNodeQuery = (0, _query.nodeQuery)("/step/forEachLoop");
var _default = (0, _dom.domAssigned)((_ForEachLoop = /*#__PURE__*/ function() {
    function ForEachLoop(string, variable, anonymousProcedure) {
        _class_call_check(this, ForEachLoop);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(ForEachLoop, [
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
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var _this = this;
                var forEachLoopString = this.getString();
                context.trace("Resolving the '".concat(forEachLoopString, "' for-each loop..."));
                var value = this.variable.resolve(context), valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes();
                nodes.forEach(function(node) {
                    var Value = _dom.default.Value, Values = _dom.default.Values, value = Value.fromNode(node, context), values = Values.fromValue(value, context);
                    _this.anonymousProcedure.call(values, context);
                });
                context.trace("...resolved the '".concat(forEachLoopString, "' for-each loop."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var forEachLoop = null;
                var forEachLoopNode = forEachLoopNodeQuery(stepNode);
                if (forEachLoopNode !== null) {
                    var Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, string = stringFromForEachLoopNode(forEachLoopNode, context), variable = Variable.fromForEachLoopNode(forEachLoopNode, context), anonymousProcedure = AnonymousProcedure.fromForEachLoopNode(forEachLoopNode, context);
                    forEachLoop = new ForEachLoop(string, variable, anonymousProcedure);
                }
                return forEachLoop;
            }
        }
    ]);
    return ForEachLoop;
}(), _define_property(_ForEachLoop, "name", "ForEachLoop"), _ForEachLoop));
function stringFromForEachLoopNode(forEachLoopNode, context) {
    var variableNode = variableNodeQuery(forEachLoopNode), parametersNode = parametersNodeQuery(forEachLoopNode), variableString = context.nodeAsString(variableNode), parametersString = context.nodeAsString(parametersNode), string = "ForEach(".concat(variableString, ", (").concat(parametersString, ") { ... })");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZm9yRWFjaExvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC92YXJpYWJsZVwiKSxcbiAgICAgIHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZm9yRWFjaExvb3AvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBmb3JFYWNoTG9vcE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2ZvckVhY2hMb29wXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBGb3JFYWNoTG9vcCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2ZvckVhY2hMb29wU3RyaW5nfScgZm9yLWVhY2ggbG9vcC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLnJlc29sdmUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGVzKCk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCB7IFZhbHVlLCBWYWx1ZXMgfSA9IGRvbSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4ucmVzb2x2ZWQgdGhlICcke2ZvckVhY2hMb29wU3RyaW5nfScgZm9yLWVhY2ggbG9vcC5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGb3JFYWNoTG9vcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9yRWFjaExvb3AgPSBudWxsO1xuXG4gICAgY29uc3QgZm9yRWFjaExvb3BOb2RlID0gZm9yRWFjaExvb3BOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGZvckVhY2hMb29wTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSwgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBkb20sXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IEFub255bW91c1Byb2NlZHVyZS5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGZvckVhY2hMb29wID0gbmV3IEZvckVhY2hMb29wKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvckVhY2hMb29wO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KGZvckVhY2hMb29wTm9kZSksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYEZvckVhY2goJHt2YXJpYWJsZVN0cmluZ30sICgke3BhcmFtZXRlcnNTdHJpbmd9KSB7IC4uLiB9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwiZm9yRWFjaExvb3BOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkZvckVhY2hMb29wIiwic3RyaW5nIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsInJlc29sdmUiLCJjb250ZXh0IiwiZm9yRWFjaExvb3BTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImZvckVhY2giLCJub2RlIiwiVmFsdWUiLCJkb20iLCJWYWx1ZXMiLCJmcm9tTm9kZSIsInZhbHVlcyIsImZyb21WYWx1ZSIsImNhbGwiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImZvckVhY2hMb29wIiwiZm9yRWFjaExvb3BOb2RlIiwiVmFyaWFibGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzdHJpbmdGcm9tRm9yRWFjaExvb3BOb2RlIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsIm5hbWUiLCJ2YXJpYWJsZU5vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFB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