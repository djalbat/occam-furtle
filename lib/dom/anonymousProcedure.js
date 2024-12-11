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
var _query = require("../utilities/query");
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
var nonsenseNodesQuery = (0, _query.nodesQuery)("/forEachLoop/anonymousProcedure/block/nonsense"), parameterNodesQuery = (0, _query.nodesQuery)("/forEachLoop/anonymousProcedure/parameter");
var _default = (0, _dom.domAssigned)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, parameters, nonsensical, block) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.paramters = parameters;
        this.nonsensical = nonsensical;
        this.block = block;
    }
    _create_class(AnonymousProcedure, [
        {
            key: "getString",
            value: function getString() {
                debugger;
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
        }
    ], [
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode) {
                var Block = _dom.default.Block, parameters = parametersFromForEachLoopNode(forEachLoopNode), nonsensical = nonsensicalFromForEachLoopNode(forEachLoopNode), block = Block.fromForEachLoopNode(forEachLoopNode), string = null, anonymousProcedureDeclaration = new AnonymousProcedure(string, parameters, nonsensical, block);
                return anonymousProcedureDeclaration;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function parametersFromForEachLoopNode(forEachLoopNode) {
    var Parameter = _dom.default.Parameter, parameterNodes = parameterNodesQuery(forEachLoopNode), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode);
        return parameter;
    });
    return parameters;
}
function nonsensicalFromForEachLoopNode(forEachLoopNode) {
    var nonsenseNodes = nonsenseNodesQuery(forEachLoopNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYW5vbnltb3VzUHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFub255bW91c1Byb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIGJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5wYXJhbXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW10ZXJzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldEJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2NrO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFub255bW91c1Byb2NlZHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSkge1xuICAgIGNvbnN0IHsgQmxvY2sgfSA9IGRvbSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICAgIGJsb2NrID0gQmxvY2suZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIGJsb2NrKTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlKTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlKSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG4iXSwibmFtZXMiOlsibm9uc2Vuc2VOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlck5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFub255bW91c1Byb2NlZHVyZSIsInN0cmluZyIsInBhcmFtZXRlcnMiLCJub25zZW5zaWNhbCIsImJsb2NrIiwicGFyYW10ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0UGFyYW1ldGVycyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRCbG9jayIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJCbG9jayIsImRvbSIsInBhcmFtZXRlcnNGcm9tRm9yRWFjaExvb3BOb2RlIiwibm9uc2Vuc2ljYWxGcm9tRm9yRWFjaExvb3BOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJuYW1lIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHM0IsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLG1EQUNoQ0Msc0JBQXNCRCxJQUFBQSxpQkFBVSxFQUFDO0lBRXZDLFdBQWVFLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsS0FBSztnQ0FEbkJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0ksU0FBUyxHQUFHSDtRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7Ozs7WUFJT00sS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlO2dCQUN4QyxJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRlYsYUFBYVksOEJBQThCSCxrQkFDM0NSLGNBQWNZLCtCQUErQkosa0JBQzdDUCxRQUFRUSxNQUFNRixtQkFBbUIsQ0FBQ0Msa0JBQ2xDVixTQUFTLE1BQ1RlLGdDQUFnQyxJQUFJaEIsbUJBQW1CQyxRQUFRQyxZQUFZQyxhQUFhQztnQkFFOUYsT0FBT1k7WUFDVDs7OztLQVhBLHNDQUFPQyxRQUFPO0FBY2hCLFNBQVNILDhCQUE4QkgsZUFBZTtJQUNwRCxJQUFNLEFBQUVPLFlBQWNMLFlBQUcsQ0FBakJLLFdBQ0ZDLGlCQUFpQnJCLG9CQUFvQmEsa0JBQ3JDVCxhQUFhaUIsZUFBZUMsR0FBRyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLFlBQVlKLFVBQVVLLGlCQUFpQixDQUFDRjtRQUU5QyxPQUFPQztJQUNUO0lBRU4sT0FBT3BCO0FBQ1Q7QUFFQSxTQUFTYSwrQkFBK0JKLGVBQWU7SUFDckQsSUFBTWEsZ0JBQWdCNUIsbUJBQW1CZSxrQkFDbkNjLHNCQUFzQkQsY0FBY0UsTUFBTSxFQUMxQ3ZCLGNBQWVzQixzQkFBc0I7SUFFM0MsT0FBT3RCO0FBQ1QifQ==