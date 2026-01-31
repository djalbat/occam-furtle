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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
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
var _NamedParameters;
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
    ]);
    return NamedParameters;
}(), _define_property(_NamedParameters, "name", "NamedParameters"), _NamedParameters));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVycyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke2V4cHJlc3Npb25zU3RyaW5nfSBleHByZXNzaW9ucyBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uc0xlbmd0aCA9IGV4cHJlc3Npb25zLmdldExlbmd0aCgpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbnNMZW5ndGggIT09IG5hbWVkUGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uc1N0cmluZ30gZXhwcmVzc2lvbnMgYW5kICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnMuZ2V0RXhwcmVzc2lvbihpbmRleCk7XG5cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIubWF0Y2hFeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHtleHByZXNzaW9uc1N0cmluZ30gZXhwcmVzc2lvbnMgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IG5hbWVkUGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlck1hdGNoZXMgPSB0aGlzLnNvbWVOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEgPSBuYW1lZFBhcmFtZXRlckEubWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlckIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChuYW1lZFBhcmFtZXRlckJNYXRjaGVzTmFtZWRQYXJhbWV0ZXJBKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcnMobmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5hbWVkUGFyYW1ldGVyc1wiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXJzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldE5hbWVkUGFyYW1ldGVyIiwiaW5kZXgiLCJuYW1lZFBhcmFtZXRlciIsInNvbWVOYW1lZFBhcmFtZXRlciIsImNhbGxiYWNrIiwic29tZSIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsImZvckVhY2giLCJtYXRjaEV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbnMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbnNTdHJpbmciLCJuYW1lZFBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25zTGVuZ3RoIiwibmFtZWRQYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb24iLCJtYXRjaEV4cHJlc3Npb24iLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQk1hdGNoZXNOYW1lZFBhcmFtZXRlckEiLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVycyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dFQUpzQjt3QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLG9DQUFDO2FBQU1DLGdCQUNkQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRENGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksTUFBTTtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLEtBQUs7Z0JBQ3JCLElBQU1DLGlCQUFpQixJQUFJLENBQUNQLEtBQUssQ0FBQ00sTUFBTSxJ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