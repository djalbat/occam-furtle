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
        }
    ], [
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode, context) {
                var Block = _dom.default.Block, node = forEachLoopNode, string = context.nodeAsString(node), parameters = parametersFromForEachLoopNode(forEachLoopNode, context), nonsensical = nonsensicalFromForEachLoopNode(forEachLoopNode, context), block = Block.fromForEachLoopNode(forEachLoopNode, context), anonymousProcedureDeclaration = new AnonymousProcedure(string, parameters, nonsensical, block);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYW5vbnltb3VzUHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFub255bW91c1Byb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIGJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5wYXJhbXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXRlcnM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0QmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvY2s7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBCbG9jayB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBmb3JFYWNoTG9vcE5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYmxvY2sgPSBCbG9jay5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIGJsb2NrKTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG4iXSwibmFtZXMiOlsibm9uc2Vuc2VOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlck5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFub255bW91c1Byb2NlZHVyZSIsInN0cmluZyIsInBhcmFtZXRlcnMiLCJub25zZW5zaWNhbCIsImJsb2NrIiwicGFyYW10ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0UGFyYW1ldGVycyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRCbG9jayIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJjb250ZXh0IiwiQmxvY2siLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwicGFyYW1ldGVyc0Zyb21Gb3JFYWNoTG9vcE5vZGUiLCJub25zZW5zaWNhbEZyb21Gb3JFYWNoTG9vcE5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVEZWNsYXJhdGlvbiIsIm5hbWUiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsIm1hcCIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJmcm9tUGFyYW1ldGVyTm9kZSIsIm5vbnNlbnNlTm9kZXMiLCJub25zZW5zZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUczQixJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsbURBQ2hDQyxzQkFBc0JELElBQUFBLGlCQUFVLEVBQUM7SUFFdkMsV0FBZUUsSUFBQUEsZ0JBQVcsdUNBQUM7YUFBTUMsbUJBQ25CQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxLQUFLO2dDQURuQko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDSSxTQUFTLEdBQUdIO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxLQUFLO1lBQ25COzs7O1lBSU9NLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFQyxPQUFPO2dCQUNqRCxJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRkUsT0FBT0osaUJBQ1BWLFNBQVNXLFFBQVFJLFlBQVksQ0FBQ0QsT0FDOUJiLGFBQWFlLDhCQUE4Qk4saUJBQWlCQyxVQUM1RFQsY0FBY2UsK0JBQStCUCxpQkFBaUJDLFVBQzlEUixRQUFRUyxNQUFNSCxtQkFBbUIsQ0FBQ0MsaUJBQWlCQyxVQUNuRE8sZ0NBQWdDLElBQUluQixtQkFBbUJDLFFBQVFDLFlBQVlDLGFBQWFDO2dCQUU5RixPQUFPZTtZQUNUOzs7O0tBWkEsc0NBQU9DLFFBQU87QUFlaEIsU0FBU0gsOEJBQThCTixlQUFlLEVBQUVDLE9BQU87SUFDN0QsSUFBTSxBQUFFUyxZQUFjUCxZQUFHLENBQWpCTyxXQUNGQyxpQkFBaUJ4QixvQkFBb0JhLGtCQUNyQ1QsYUFBYW9CLGVBQWVDLEdBQUcsQ0FBQyxTQUFDQztRQUMvQixJQUFNQyxZQUFZSixVQUFVSyxpQkFBaUIsQ0FBQ0YsZUFBZVo7UUFFN0QsT0FBT2E7SUFDVDtJQUVOLE9BQU92QjtBQUNUO0FBRUEsU0FBU2dCLCtCQUErQlAsZUFBZSxFQUFFQyxPQUFPO0lBQzlELElBQU1lLGdCQUFnQi9CLG1CQUFtQmUsa0JBQ25DaUIsc0JBQXNCRCxjQUFjRSxNQUFNLEVBQzFDMUIsY0FBZXlCLHNCQUFzQjtJQUUzQyxPQUFPekI7QUFDVCJ9