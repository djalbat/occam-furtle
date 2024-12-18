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
var nonsenseNodesQuery = (0, _query.nodesQuery)("/forEachLoop/anonymousProcedure/block/nonsense"), parametersNodeQuery = (0, _query.nodeQuery)("/forEachLoop/anonymousProcedure/parameters");
var _default = (0, _dom.domAssigned)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, parameters, nonsensical, block) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.parameters = parameters;
        this.nonsensical = nonsensical;
        this.block = block;
    }
    _create_class(AnonymousProcedure, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.paramters;
            }
        },
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                return this.nonsensical;
            }
        },
        {
            key: "getBlock",
            value: function getBlock() {
                return this.block;
            }
        },
        {
            key: "call",
            value: function call(values, context) {
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                if (this.nonsensical) {
                    var message = "The '".concat(anonymousProcedureString, "' anonymous procedure is nonsensical."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.parameters.matchValues(values, context);
                var variables = (0, _procedure.variablesFromValuesAndParameters)(values, this.parameters, context);
                this.block.evaluate(variables, context);
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
            }
        }
    ], [
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode, context) {
                var Block = _dom.default.Block, Parameters = _dom.default.Parameters, string = stringFromForEachLoopNode(forEachLoopNode, context), parameters = Parameters.fromForEachLoopNode(forEachLoopNode, context), nonsensical = nonsensicalFromForEachLoopNode(forEachLoopNode, context), block = Block.fromForEachLoopNode(forEachLoopNode, context), anonymousProcedureDeclaration = new AnonymousProcedure(string, parameters, nonsensical, block);
                return anonymousProcedureDeclaration;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function stringFromForEachLoopNode(forEachLoopNode, context) {
    var parametersNode = parametersNodeQuery(forEachLoopNode), parametersString = context.nodeAsString(parametersNode), string = "(".concat(parametersString, ") { ... }");
    return string;
}
function nonsensicalFromForEachLoopNode(forEachLoopNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(forEachLoopNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mb3JFYWNoTG9vcC9hbm9ueW1vdXNQcm9jZWR1cmUvYmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCBibG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMuYmxvY2sgPSBibG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5ibG9jaztcbiAgfVxuXG4gIGNhbGwodmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZS4uLmApO1xuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5ibG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFub255bW91c1Byb2NlZHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQmxvY2ssIFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYmxvY2sgPSBCbG9jay5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIGJsb2NrKTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcGFyYW1ldGVyc05vZGVRdWVyeShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgKCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG4iXSwibmFtZXMiOlsibm9uc2Vuc2VOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFub255bW91c1Byb2NlZHVyZSIsInN0cmluZyIsInBhcmFtZXRlcnMiLCJub25zZW5zaWNhbCIsImJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0UGFyYW1ldGVycyIsInBhcmFtdGVycyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRCbG9jayIsImNhbGwiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJtYXRjaFZhbHVlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJkZWJ1ZyIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJCbG9jayIsImRvbSIsIlBhcmFtZXRlcnMiLCJzdHJpbmdGcm9tRm9yRWFjaExvb3BOb2RlIiwibm9uc2Vuc2ljYWxGcm9tRm9yRWFjaExvb3BOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJuYW1lIiwicGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtnRUFDTTtxQkFHZ0I7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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