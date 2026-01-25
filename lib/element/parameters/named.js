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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
var _default = (0, _elements.define)((_NamedParameters = /*#__PURE__*/ function() {
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
            key: "matchExpressions",
            value: function matchExpressions(expressions, context) {
                var expressionsString = expressions.getString(), namedParametersString = this.string; ///
                context.trace("Matching the ".concat(expressionsString, " expressions against the '").concat(namedParametersString, "' named parameters..."));
                var expressionsLength = expressions.getLength(), namedParametersLength = this.getLength();
                if (expressionsLength !== namedParametersLength) {
                    var message = "The ".concat(expressionsString, " expressions and '").concat(namedParametersString, "' named parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachNamedParameter(function(namedParameter, index) {
                    if (namedParameter !== null) {
                        var expression = expressions.getExpression(index);
                        namedParameter.matchExpression(expression, context);
                    }
                });
                context.debug("...matched the ".concat(expressionsString, " expressions against the '").concat(namedParametersString, "' named parameters."));
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
    var NamedParameters = _elements.default.NamedParameters, namedParameterNodes = namedParameterNodesQuery(namedParametersNode), array = arrayFromNamedParameterNodes(namedParameterNodes, context), string = stringFromArray(array, context), namedParameters = new NamedParameters(string, array);
    return namedParameters;
}
function arrayFromNamedParameterNodes(namedParameterNodes, context) {
    var NamedParameter = _elements.default.NamedParameter, array = namedParameterNodes.map(function(namedParameterNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbmFtZWRQYXJhbWV0ZXJOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9uYW1lZFBhcmFtZXRlcnMvbmFtZWRQYXJhbWV0ZXJcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50TmFtZWRQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvbmFtZWRQYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcihpbmRleCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfVxuXG4gIHNvbWVOYW1lZFBhcmFtZXRlcihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hOYW1lZFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hFeHByZXNzaW9ucyhleHByZXNzaW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7ZXhwcmVzc2lvbnNTdHJpbmd9IGV4cHJlc3Npb25zIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25zTGVuZ3RoID0gZXhwcmVzc2lvbnMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChleHByZXNzaW9uc0xlbmd0aCAhPT0gbmFtZWRQYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25zU3RyaW5nfSBleHByZXNzaW9ucyBhbmQgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9ucy5nZXRFeHByZXNzaW9uKGluZGV4KTtcblxuICAgICAgICBuYW1lZFBhcmFtZXRlci5tYXRjaEV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke2V4cHJlc3Npb25zU3RyaW5nfSBleHByZXNzaW9ucyBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gbmFtZWRQYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZU5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCTWF0Y2hlc05hbWVkUGFyYW1ldGVyQSA9IG5hbWVkUGFyYW1ldGVyQS5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVycyhuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBuYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJzXCI7XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROYW1lZFBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlck5vZGVzUXVlcnkobmFtZWRQYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IE5hbWVkUGFyYW1ldGVyLmZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzU1N0cmluZyA9IGFycmF5LnJlZHVjZSgobmFtZWRQYXJhbWV0ZXJzU1N0cmluZywgbmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU1N0cmluZyA9IChuYW1lZFBhcmFtZXRlcnNTU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtuYW1lZFBhcmFtZXRlcnNTU3RyaW5nfSwgJHtuYW1lZFBhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyc1NTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBuYW1lZFBhcmFtZXRlcnNTU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJuYW1lZFBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudE5hbWVkUGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlZmluZSIsIk5hbWVkUGFyYW1ldGVycyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXROYW1lZFBhcmFtZXRlciIsImluZGV4IiwibmFtZWRQYXJhbWV0ZXIiLCJzb21lTmFtZWRQYXJhbWV0ZXIiLCJjYWxsYmFjayIsInNvbWUiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJmb3JFYWNoIiwibWF0Y2hFeHByZXNzaW9ucyIsImV4cHJlc3Npb25zIiwiY29udGV4dCIsImV4cHJlc3Npb25zU3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uc0xlbmd0aCIsIm5hbWVkUGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uIiwibWF0Y2hFeHByZXNzaW9uIiwiZGVidWciLCJtYXRjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXMiLCJuYW1lZFBhcmFtZXRlckIiLCJuYW1lZFBhcmFtZXRlckJNYXRjaGVzTmFtZWRQYXJhbWV0ZXJBIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlcnMiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZSIsImVsZW1lbnRzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImFycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMiLCJzdHJpbmdGcm9tQXJyYXkiLCJOYW1lZFBhcmFtZXRlciIsIm1hcCIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsImZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNTU3RyaW5nIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnRUFUcUI7Z0VBQ0M7cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSwyQkFBMkJDLElBQUFBLGlCQUFVLEVBQUMsb0NBQ3RDQywyQ0FBMkNDLElBQUFBLGdCQUFTLEVBQUM7SUFFM0QsV0FBZUMsSUFBQUEsZ0JBQU0sb0NBQUM7YUFBTUMsZ0JBQ2RDLE1BQU0sRUFBRUMsS0FBSztnQ0FEQ0Y7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsS0FBSztnQkFDckIsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNLElBQUk7Z0JBRTVDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNVLElBQUksQ0FBQ0Q7WUFBVzs7O1lB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