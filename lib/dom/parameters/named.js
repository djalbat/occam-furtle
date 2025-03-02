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
                var objectAssignmentNamedParametersNode = objectAssignmentNamedParametersNodeQuery(objectAssignmentNode), namedParametersNode = objectAssignmentNamedParametersNode, namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
                return namedParameters;
            }
        }
    ]);
    return NamedParameters;
}(), _define_property(_NamedParameters, "name", "NamedParameters"), _NamedParameters));
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    var NamedParameters = _dom.default.NamedParameters, namedParameterNodes = namedParameterNodesQuery(namedParametersNode), array = arrayFromNamedParameterNodes(namedParameterNodes, context), string = stringFromArray(array, context), namedParameters = new NamedParameters(string, array);
    return namedParameters;
}
function arrayFromNamedParameterNodes(namedParameterNodes, context) {
    var NamedParameter = _dom.default.NamedParameter, array = namedParameterNodes.map(function(namedParameterNode) {
        var namedParameter = NamedParameter.fromNamedParameterNode(namedParameterNode, context);
        return namedParameter;
    });
    return array;
}
function stringFromArray(array, context) {
    var namedParametersSString = array.reduce(function(namedParametersSString, namedParameter) {
        var namedParameterString = namedParameter.getString();
        namedParametersSString = namedParametersSString === null ? namedParameterString : "".concat(namedParametersSString, ", ").concat(namedParameterString);
        return namedParametersSString;
    }, null), string = namedParametersSString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG5hbWVkUGFyYW1ldGVyTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXJzL25hbWVkUGFyYW1ldGVyXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L25hbWVkUGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmFtZWRQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcihpbmRleCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfVxuXG4gIHNvbWVOYW1lZFBhcmFtZXRlcihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hOYW1lZFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHZhbHVlc0xlbmd0aCAhPT0gbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFuZCAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzIGFyZSBub3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXMuZ2V0VmFsdWUoaW5kZXgpO1xuXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gbmFtZWRQYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZU5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCTWF0Y2hlc05hbWVkUGFyYW1ldGVyQSA9IG5hbWVkUGFyYW1ldGVyQS5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJzXCI7XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROYW1lZFBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICBuYW1lZFBhcmFtZXRlck5vZGVzID0gbmFtZWRQYXJhbWV0ZXJOb2Rlc1F1ZXJ5KG5hbWVkUGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBhcnJheSA9IGFycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlck5vZGVzLm1hcCgobmFtZWRQYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gTmFtZWRQYXJhbWV0ZXIuZnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNTU3RyaW5nID0gYXJyYXkucmVkdWNlKChuYW1lZFBhcmFtZXRlcnNTU3RyaW5nLCBuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNTU3RyaW5nID0gKG5hbWVkUGFyYW1ldGVyc1NTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke25hbWVkUGFyYW1ldGVyc1NTdHJpbmd9LCAke25hbWVkUGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzU1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IG5hbWVkUGFyYW1ldGVyc1NTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm5hbWVkUGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50TmFtZWRQYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOYW1lZFBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmFtZWRQYXJhbWV0ZXIiLCJpbmRleCIsIm5hbWVkUGFyYW1ldGVyIiwic29tZU5hbWVkUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwiZm9yRWFjaCIsIm1hdGNoVmFsdWVzIiwidmFsdWVzIiwiY29udGV4dCIsInZhbHVlc1N0cmluZyIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwibmFtZWRQYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1hdGNoVmFsdWUiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEiLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVycyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGUiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUiLCJuYW1lIiwiZG9tIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImFycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMiLCJzdHJpbmdGcm9tQXJyYXkiLCJOYW1lZFBhcmFtZXRlciIsIm1hcCIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsImZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNT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