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
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var forEachLoopString = this.getString();
                context.trace("Evaluating the '".concat(forEachLoopString, "' for-each loop..."));
                var value = this.variable.evaluate(context), valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes();
                nodes.forEach(function(node) {
                    var Value = _dom.default.Value, Values = _dom.default.Values, value = Value.fromNode(node, context), values = Values.fromValue(value, context);
                    _this.anonymousProcedure.call(values, context);
                });
                context.trace("...evaluated the '".concat(forEachLoopString, "' for-each loop."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZm9yRWFjaExvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC92YXJpYWJsZVwiKSxcbiAgICAgIHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZm9yRWFjaExvb3AvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBmb3JFYWNoTG9vcE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2ZvckVhY2hMb29wXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBGb3JFYWNoTG9vcCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZm9yRWFjaExvb3BTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7Zm9yRWFjaExvb3BTdHJpbmd9JyBmb3ItZWFjaCBsb29wLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGVzKCk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCB7IFZhbHVlLCBWYWx1ZXMgfSA9IGRvbSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtmb3JFYWNoTG9vcFN0cmluZ30nIGZvci1lYWNoIGxvb3AuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRm9yRWFjaExvb3BcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvckVhY2hMb29wID0gbnVsbDtcblxuICAgIGNvbnN0IGZvckVhY2hMb29wTm9kZSA9IGZvckVhY2hMb29wTm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChmb3JFYWNoTG9vcE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBmb3JFYWNoTG9vcCA9IG5ldyBGb3JFYWNoTG9vcChzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JFYWNoTG9vcDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGZvckVhY2hMb29wTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNOb2RlID0gcGFyYW1ldGVyc05vZGVRdWVyeShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGBGb3JFYWNoKCR7dmFyaWFibGVTdHJpbmd9LCAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsImZvckVhY2hMb29wTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJGb3JFYWNoTG9vcCIsInN0cmluZyIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJmb3JFYWNoTG9vcFN0cmluZyIsInRyYWNlIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhbHVlcyIsImZyb21Ob2RlIiwidmFsdWVzIiwiZnJvbVZhbHVlIiwiY2FsbCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiZm9yRWFjaExvb3AiLCJmb3JFYWNoTG9vcE5vZGUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsInN0cmluZ0Zyb21Gb3JFYWNoTG9vcE5vZGUiLCJmcm9tRm9yRWFjaExvb3BOb2RlIiwibmFtZSIsInZhcmlhYmxlTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7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