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
var _NamedParameters;
var namedParameterNodesQuery = (0, _query.nodesQuery)("/namedParameters/namedParameter"), objectAssignmentNamedParametersNodeQuery = (0, _query.nodeQuery)("/objectAssignment/namedParameters");
var _default = (0, _dom.domAssigned)((_NamedParameters = /*#__PURE__*/ function() {
    function NamedParameters(string, array) {
        _class_call_check(this, NamedParameters);
        this.string = string;
        this.array = array;
    }
    _create_class(NamedParameters, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getNamedParameter",
            value: function getNamedParameter(index) {
                var namedParameter = this.array[index] || null;
                return namedParameter;
            }
        },
        {
            key: "someNamedParameter",
            value: function someNamedParameter(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "forEachNamedParameter",
            value: function forEachNamedParameter(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "matchValues",
            value: function matchValues(values, context) {
                var valuesString = values.getString(), namedParametersString = this.string; ///
                context.trace("Matching the ".concat(valuesString, " values against the '").concat(namedParametersString, "' named parameters..."));
                var valuesLength = values.getLength(), namedParametersLength = this.getLength();
                if (valuesLength !== namedParametersLength) {
                    var message = "The ".concat(valuesString, " values and '").concat(namedParametersString, "' named parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachNamedParameter(function(namedParameter, index) {
                    if (namedParameter !== null) {
                        var value = values.getValue(index);
                        namedParameter.matchValue(value, context);
                    }
                });
                context.debug("...matched the ".concat(valuesString, " values against the '").concat(namedParametersString, "' named parameters."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterString = namedParameter.getString(), namedParametersString = this.string; ///
                context.trace("Matching the '".concat(namedParameterString, "' namedParameter against the '").concat(namedParametersString, "' named parameters..."));
                var namedParameterA = namedParameter, namedParameterMatches = this.someNamedParameter(function(namedParameter) {
                    if (namedParameter !== null) {
                        var namedParameterB = namedParameter, namedParameterBMatchesNamedParameterA = namedParameterA.matchNamedParameter(namedParameterB, context);
                        if (namedParameterBMatchesNamedParameterA) {
                            return true;
                        }
                    }
                });
                if (!namedParameterMatches) {
                    var message = "The '".concat(namedParameterString, "' namedParameter does not match any of the '").concat(namedParametersString, "' named parameters."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(namedParameterString, "' namedParameter against the '").concat(namedParametersString, "' named parameters."));
            }
        },
        {
            key: "matchNamedParameters",
            value: function matchNamedParameters(namedParameters, context) {
                var _this = this;
                namedParameters.forEachNamedParameter(function(namedParameter) {
                    if (namedParameter !== null) {
                        _this.matchNamedParameter(namedParameter, context);
                    }
                });
            }
        }
    ], [
        {
            key: "fromObjectAssignmentNode",
            value: function fromObjectAssignmentNode(objectAssignmentNode, context) {
                var objectAssignmentNamedParametersNode = objectAssignmentNamedParametersNodeQuery(objectAssignmentNode), parametersNode = objectAssignmentNamedParametersNode, node = parametersNode, string = context.nodeAsString(node), namedParameterNodes = namedParameterNodesQuery(parametersNode), array = arrayFromNamedParameterNodes(namedParameterNodes, context), namedParameters = new NamedParameters(string, array);
                return namedParameters;
            }
        }
    ]);
    return NamedParameters;
}(), _define_property(_NamedParameters, "name", "NamedParameters"), _NamedParameters));
function arrayFromNamedParameterNodes(namedParameterNodes, context) {
    var NamedParameter = _dom.default.NamedParameter, array = namedParameterNodes.map(function(namedParameterNode) {
        var namedParameter = NamedParameter.fromNamedParameterNode(namedParameterNode, context);
        return namedParameter;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG5hbWVkUGFyYW1ldGVyTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXJzL25hbWVkUGFyYW1ldGVyXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L25hbWVkUGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmFtZWRQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcihpbmRleCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfVxuXG4gIHNvbWVOYW1lZFBhcmFtZXRlcihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hOYW1lZFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHZhbHVlc0xlbmd0aCAhPT0gbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFuZCAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzIGFyZSBub3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXMuZ2V0VmFsdWUoaW5kZXgpO1xuXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gbmFtZWRQYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZU5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCTWF0Y2hlc05hbWVkUGFyYW1ldGVyQSA9IG5hbWVkUGFyYW1ldGVyQS5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJzXCI7XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50TmFtZWRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuZXcgTmFtZWRQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IE5hbWVkUGFyYW1ldGVyLmZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbIm5hbWVkUGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50TmFtZWRQYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOYW1lZFBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmFtZWRQYXJhbWV0ZXIiLCJpbmRleCIsIm5hbWVkUGFyYW1ldGVyIiwic29tZU5hbWVkUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwiZm9yRWFjaCIsIm1hdGNoVmFsdWVzIiwidmFsdWVzIiwiY29udGV4dCIsInZhbHVlc1N0cmluZyIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwibmFtZWRQYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1hdGNoVmFsdWUiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEiLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVycyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiYXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWUiLCJOYW1lZFBhcmFtZXRlciIsImRvbSIsIm1hcCIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsImZyb21OYW1lZFBhcmFtZXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtnRUFDTTtxQkFHZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLDJCQUEyQkMsSUFBQUEsaUJBQVUsRUFBQyxvQ0FDdENDLDJDQUEyQ0MsSUFBQUEsZ0JBQVMsRUFBQztJQUUzRCxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsS0FBSztnQkFDckIsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNLElBQUk7Z0JBRTVDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNVLElBQUksQ0FBQ0Q7WUFBVzs7O1lBRWpFRSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCRixRQUFRO2dCQUFJLElBQUksQ0FBQ1QsS0FBSyxDQUFDWSxPQUFPLENBQUNIO1lBQVc7OztZQUVoRUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE1BQU0sRUFBRUMsT0FBTztnQkFDekIsSUFBTUMsZUFBZUYsT0FBT2IsU0FBUyxJQUMvQmdCLHdCQUF3QixJQUFJLENBQUNsQixNQUFNLEVBQUUsR0FBRztnQkFFOUNnQixRQUFRRyxLQUFLLENBQUMsQUFBQyxnQkFBbURELE9BQXBDRCxjQUFhLHlCQUE2QyxPQUF0QkMsdUJBQXNCO2dCQUV4RixJQUFNRSxlQUFlTCxPQUFPWCxTQUFTLElBQy9CaUIsd0JBQXdCLElBQUksQ0FBQ2pCLFNBQVM7Z0JBRTVDLElBQUlnQixpQkFBaUJDLHVCQUF1QjtvQkFDMUMsSUFBTUMsVUFBVSxBQUFDLE9BQWtDSixPQUE1QkQsY0FBYSxpQkFBcUMsT0FBdEJDLHVCQUFzQixtREFDbkVLLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUksQ0FBQ1gscUJBQXFCLENBQUMsU0FBQ0osZ0JBQWdCRDtvQkFDMUMsSUFBSUMsbUJBQW1CLE1BQU07d0JBQzNCLElBQU1rQixRQUFRWCxPQUFPWSxRQUFRLENBQUNwQjt3QkFFOUJDLGVBQWVvQixVQUFVLENBQUNGLE9BQU9WO29CQUNuQztnQkFDRjtnQkFFQUEsUUFBUWEsS0FBSyxDQUFDLEFBQUMsa0JBQXFEWCxPQUFwQ0QsY0FBYSx5QkFBNkMsT0FBdEJDLHVCQUFzQjtZQUM1Rjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0J0QixjQUFjLEVBQUVRLE9BQU87Z0JBQ3pDLElBQU1lLHVCQUF1QnZCLGVBQWVOLFNBQVMsSUFDL0NnQix3QkFBd0IsSUFBSSxDQUFDbEIsTUFBTSxFQUFFLEdBQUc7Z0JBRTlDZ0IsUUFBUUcsS0FBSyxDQUFDLEFBQUMsaUJBQXFFRCxPQUFyRGEsc0JBQXFCLGtDQUFzRCxPQUF0QmIsdUJBQXNCO2dCQUUxRyxJQUFNYyxrQkFBa0J4QixnQkFDbEJ5Qix3QkFBd0IsSUFBSSxDQUFDeEIsa0JBQWtCLENBQUMsU0FBQ0Q7b0JBQy9DLElBQUlBLG1CQUFtQixNQUFNO3dCQUMzQixJQUFNMEIsa0JBQWtCMUIsZ0JBQ2xCMkIsd0NBQXdDSCxnQkFBZ0JGLG1CQUFtQixDQUFDSSxpQkFBaUJsQjt3QkFFbkcsSUFBSW1CLHVDQUF1Qzs0QkFDekMsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFTixJQUFJLENBQUNGLHVCQUF1QjtvQkFDMUIsSUFBTVgsVUFBVSxBQUFDLFFBQTBFSixPQUFuRWEsc0JBQXFCLGdEQUFvRSxPQUF0QmIsdUJBQXNCLHdCQUMzR0ssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFQLFFBQVFhLEtBQUssQ0FBQyxBQUFDLG1CQUF1RVgsT0FBckRhLHNCQUFxQixrQ0FBc0QsT0FBdEJiLHVCQUFzQjtZQUM5Rzs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxlQUFlLEVBQUVyQixPQUFPOztnQkFDM0NxQixnQkFBZ0J6QixxQkFBcUIsQ0FBQyxTQUFDSjtvQkFDckMsSUFBSUEsbUJBQW1CLE1BQU07d0JBQzNCLE1BQUtzQixtQkFBbUIsQ0FBQ3RCLGdCQUFnQlE7b0JBQzNDO2dCQUNGO1lBQ0Y7Ozs7WUFJT3NCLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUV2QixPQUFPO2dCQUMzRCxJQUFNd0Isc0NBQXNDNUMseUNBQXlDMkMsdUJBQy9FRSxpQkFBaUJELHFDQUNqQkUsT0FBT0QsZ0JBQ1B6QyxTQUFTZ0IsUUFBUTJCLFlBQVksQ0FBQ0QsT0FDOUJFLHNCQUFzQmxELHlCQUF5QitDLGlCQUMvQ3hDLFFBQVE0Qyw2QkFBNkJELHFCQUFxQjVCLFVBQzFEcUIsa0JBQWtCLElBQUl0QyxnQkFBZ0JDLFFBQVFDO2dCQUVwRCxPQUFPb0M7WUFDVDs7OztLQVpBLG1DQUFPUyxRQUFPO0FBZWhCLFNBQVNELDZCQUE2QkQsbUJBQW1CLEVBQUU1QixPQUFPO0lBQ2hFLElBQU0sQUFBRStCLGlCQUFtQkMsWUFBRyxDQUF0QkQsZ0JBQ0Y5QyxRQUFRMkMsb0JBQW9CSyxHQUFHLENBQUMsU0FBQ0M7UUFDL0IsSUFBTTFDLGlCQUFpQnVDLGVBQWVJLHNCQUFzQixDQUFDRCxvQkFBb0JsQztRQUVqRixPQUFPUjtJQUNUO0lBRU4sT0FBT1A7QUFDVCJ9