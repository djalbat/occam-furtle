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
    function AnonymousProcedure(parameters, nonsensical, block) {
        _class_call_check(this, AnonymousProcedure);
        this.paramters = parameters;
        this.nonsensical = nonsensical;
        this.block = block;
    }
    _create_class(AnonymousProcedure, [
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
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode, context) {
                var Block = _dom.default.Block, parameters = parametersFromForEachLoopNode(forEachLoopNode, context), nonsensical = nonsensicalFromForEachLoopNode(forEachLoopNode, context), block = Block.fromForEachLoopNode(forEachLoopNode, context), anonymousProcedureDeclaration = new AnonymousProcedure(parameters, nonsensical, block);
                return anonymousProcedureDeclaration;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function parametersFromForEachLoopNode(forEachLoopNode, context) {
    var Parameter = _dom.default.Parameter, parameterNodes = parameterNodesQuery(forEachLoopNode), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function nonsensicalFromForEachLoopNode(forEachLoopNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(forEachLoopNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYW5vbnltb3VzUHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFub255bW91c1Byb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCBibG9jaykge1xuICAgIHRoaXMucGFyYW10ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5ibG9jayA9IGJsb2NrO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXRlcnM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0QmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBbm9ueW1vdXNQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEJsb2NrIH0gPSBkb20sXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBibG9jayA9IEJsb2NrLmZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUocGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIGJsb2NrKTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG4iXSwibmFtZXMiOlsibm9uc2Vuc2VOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlck5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFub255bW91c1Byb2NlZHVyZSIsInBhcmFtZXRlcnMiLCJub25zZW5zaWNhbCIsImJsb2NrIiwicGFyYW10ZXJzIiwiZ2V0UGFyYW1ldGVycyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRCbG9jayIsImdldFN0cmluZyIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJjb250ZXh0IiwiQmxvY2siLCJkb20iLCJwYXJhbWV0ZXJzRnJvbUZvckVhY2hMb29wTm9kZSIsIm5vbnNlbnNpY2FsRnJvbUZvckVhY2hMb29wTm9kZSIsImFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uIiwibmFtZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5vZGVzIiwibWFwIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsImZyb21QYXJhbWV0ZXJOb2RlIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQyxtREFDaENDLHNCQUFzQkQsSUFBQUEsaUJBQVUsRUFBQztJQUV2QyxXQUFlRSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxLQUFLO2dDQURYSDtRQUU3QixJQUFJLENBQUNJLFNBQVMsR0FBR0g7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFQyxPQUFPO2dCQUNqRCxJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRlgsYUFBYWEsOEJBQThCSixpQkFBaUJDLFVBQzVEVCxjQUFjYSwrQkFBK0JMLGlCQUFpQkMsVUFDOURSLFFBQVFTLE1BQU1ILG1CQUFtQixDQUFDQyxpQkFBaUJDLFVBQ25ESyxnQ0FBZ0MsSUFBSWhCLG1CQUFtQkMsWUFBWUMsYUFBYUM7Z0JBRXRGLE9BQU9hO1lBQ1Q7Ozs7S0FWQSxzQ0FBT0MsUUFBTztBQWFoQixTQUFTSCw4QkFBOEJKLGVBQWUsRUFBRUMsT0FBTztJQUM3RCxJQUFNLEFBQUVPLFlBQWNMLFlBQUcsQ0FBakJLLFdBQ0ZDLGlCQUFpQnJCLG9CQUFvQlksa0JBQ3JDVCxhQUFha0IsZUFBZUMsR0FBRyxDQUFDLFNBQUNDO1FBQy9CLElBQU1DLFlBQVlKLFVBQVVLLGlCQUFpQixDQUFDRixlQUFlVjtRQUU3RCxPQUFPVztJQUNUO0lBRU4sT0FBT3JCO0FBQ1Q7QUFFQSxTQUFTYywrQkFBK0JMLGVBQWUsRUFBRUMsT0FBTztJQUM5RCxJQUFNYSxnQkFBZ0I1QixtQkFBbUJjLGtCQUNuQ2Usc0JBQXNCRCxjQUFjRSxNQUFNLEVBQzFDeEIsY0FBZXVCLHNCQUFzQjtJQUUzQyxPQUFPdkI7QUFDVCJ9