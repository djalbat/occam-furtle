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
var _block = /*#__PURE__*/ _interop_require_default(require("../../context/block"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgQmxvY2tDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2Jsb2NrXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vcHJvY2VkdXJlXCI7XG5cbmNvbnN0IG5vbnNlbnNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZm9yRWFjaExvb3AvYW5vbnltb3VzUHJvY2VkdXJlL2Jsb2NrL25vbnNlbnNlXCIpLFxuICAgICAgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQW5vbnltb3VzUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgYmxvY2spIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXRlcnM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0QmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvY2s7XG4gIH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5ibG9jay5yZXNvbHZlKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBCbG9jaywgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBibG9jayA9IEJsb2NrLmZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgYmxvY2spO1xuXG4gICAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KGZvckVhY2hMb29wTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KGZvckVhY2hMb29wTm9kZSksXG4gICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cbiJdLCJuYW1lcyI6WyJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic3RyaW5nIiwicGFyYW1ldGVycyIsIm5vbnNlbnNpY2FsIiwiYmxvY2siLCJnZXRTdHJpbmciLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW10ZXJzIiwiaXNOb25zZW5zaWNhbCIsImdldEJsb2NrIiwiY2FsbCIsInZhbHVlcyIsImNvbnRleHQiLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsIm1hdGNoVmFsdWVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMiLCJyZXNvbHZlIiwiZGVidWciLCJmcm9tRm9yRWFjaExvb3BOb2RlIiwiZm9yRWFjaExvb3BOb2RlIiwiQmxvY2siLCJkb20iLCJQYXJhbWV0ZXJzIiwic3RyaW5nRnJvbUZvckVhY2hMb29wTm9kZSIsIm5vbnNlbnNpY2FsRnJvbUZvckVhY2hMb29wTm9kZSIsImFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uIiwibmFtZSIsInBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc1N0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vbnNlbnNlTm9kZXMiLCJub25zZW5zZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7NERBQ1M7cUJBR2E7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQyxtREFDaENDLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlQyxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLEtBQUs7Z0NBRG5CSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNDLFNBQVM7WUFDdkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNsQixJQUFNQywyQkFBMkIsSUFBSSxDQUFDWixNQUFNLEVBQUUsR0FBRztnQkFFakRXLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGdCQUF3QyxPQUF6QkQsMEJBQXlCO2dCQUV2RCxJQUFJLENBQUNYLFVBQVUsQ0FBQ2EsV0FBVyxDQUFDSixRQUFRQztnQkFFcEMsSUFBTUksWUFBWUMsSUFBQUEsMkNBQWdDLEVBQUNOLFFBQVEsSUFBSSxDQUFDVCxVQUFVLEVBQUVVO2dCQUU1RSxJQUFJLENBQUNSLEtBQUssQ0FBQ2MsT0FBTyxDQUFDRixXQUFXSjtnQkFFOUJBLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGtCQUEwQyxPQUF6Qk4sMEJBQXlCO1lBQzNEOzs7O1lBSU9PLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFVCxPQUFPO2dCQUNqRCxJQUFRVSxRQUFzQkMsWUFBRyxDQUF6QkQsT0FBT0UsYUFBZUQsWUFBRyxDQUFsQkMsWUFDVHZCLFNBQVN3QiwwQkFBMEJKLGlCQUFpQlQsVUFDcERWLGFBQWFzQixXQUFXSixtQkFBbUIsQ0FBQ0MsaUJBQWlCVCxVQUM3RFQsY0FBY3VCLCtCQUErQkwsaUJBQWlCVCxVQUM5RFIsUUFBUWtCLE1BQU1GLG1CQUFtQixDQUFDQyxpQkFBaUJULFVBQ25EZSxnQ0FBZ0MsSUFBSTNCLG1CQUFtQkMsUUFBUUMsWUFBWUMsYUFBYUM7Z0JBRTlGLE9BQU91QjtZQUNUOzs7O0tBWEEsc0NBQU9DLFFBQU87QUFjaEIsU0FBU0gsMEJBQTBCSixlQUFlLEVBQUVULE9BQU87SUFDekQsSUFBTWlCLGlCQUFpQmhDLG9CQUFvQndCLGtCQUNyQ1MsbUJBQW1CbEIsUUFBUW1CLFlBQVksQ0FBQ0YsaUJBQ3hDNUIsU0FBUyxBQUFDLElBQW9CLE9BQWpCNkIsa0JBQWlCO0lBRXBDLE9BQU83QjtBQUNUO0FBRUEsU0FBU3lCLCtCQUErQkwsZUFBZSxFQUFFVCxPQUFPO0lBQzlELElBQU1vQixnQkFBZ0JyQyxtQkFBbUIwQixrQkFDbkNZLHNCQUFzQkQsY0FBY0UsTUFBTSxFQUMxQy9CLGNBQWU4QixzQkFBc0I7SUFFM0MsT0FBTzlCO0FBQ1QifQ==