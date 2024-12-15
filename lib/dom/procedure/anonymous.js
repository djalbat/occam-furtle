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
                this.block.resolve(variables, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mb3JFYWNoTG9vcC9hbm9ueW1vdXNQcm9jZWR1cmUvYmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCBibG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMuYmxvY2sgPSBibG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5ibG9jaztcbiAgfVxuXG4gIGNhbGwodmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZS4uLmApO1xuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5ibG9jay5yZXNvbHZlKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBCbG9jaywgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBibG9jayA9IEJsb2NrLmZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgYmxvY2spO1xuXG4gICAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KGZvckVhY2hMb29wTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KGZvckVhY2hMb29wTm9kZSksXG4gICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cbiJdLCJuYW1lcyI6WyJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic3RyaW5nIiwicGFyYW1ldGVycyIsIm5vbnNlbnNpY2FsIiwiYmxvY2siLCJnZXRTdHJpbmciLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW10ZXJzIiwiaXNOb25zZW5zaWNhbCIsImdldEJsb2NrIiwiY2FsbCIsInZhbHVlcyIsImNvbnRleHQiLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm1hdGNoVmFsdWVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMiLCJyZXNvbHZlIiwiZGVidWciLCJmcm9tRm9yRWFjaExvb3BOb2RlIiwiZm9yRWFjaExvb3BOb2RlIiwiQmxvY2siLCJkb20iLCJQYXJhbWV0ZXJzIiwic3RyaW5nRnJvbUZvckVhY2hMb29wTm9kZSIsIm5vbnNlbnNpY2FsRnJvbUZvckVhY2hMb29wTm9kZSIsImFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uIiwibmFtZSIsInBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc1N0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vbnNlbnNlTm9kZXMiLCJub25zZW5zZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7Z0VBQ007cUJBR2dCO3lCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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