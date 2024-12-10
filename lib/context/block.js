"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockContext;
    }
});
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
var BlockContext = /*#__PURE__*/ function() {
    function BlockContext(context, variables) {
        _class_call_check(this, BlockContext);
        this.context = context;
        this.variables = variables;
    }
    _create_class(BlockContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.context.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.context.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.context.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.context.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.context.error(message);
            }
        }
    ], [
        {
            key: "fromParameters",
            value: function fromParameters(parameters, context) {
                var variables = variablesFromParameters(parameters), blockContext = new BlockContext(context, variables);
                return blockContext;
            }
        }
    ]);
    return BlockContext;
}();
function variablesFromParameters(parameters) {
    var variables = parameters.map(function(parameter) {
        var variable = parameter.getVariable();
        return variable;
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0NvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycyksXG4gICAgICAgICAgYmxvY2tDb250ZXh0ID0gbmV3IEJsb2NrQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGJsb2NrQ29udGV4dDtcbiAgfVxufVxuXG4gZnVuY3Rpb24gdmFyaWFibGVzRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgY29uc3QgdmFyaWFibGVzID0gcGFyYW1ldGVycy5tYXAoKHBhcmFtZXRlcikgPT4ge1xuICAgICBjb25zdCB2YXJpYWJsZSA9IHBhcmFtZXRlci5nZXRWYXJpYWJsZSgpO1xuXG4gICAgIHJldHVybiB2YXJpYWJsZTtcbiAgIH0pO1xuXG4gICByZXR1cm4gdmFyaWFibGVzO1xuIH1cbiJdLCJuYW1lcyI6WyJCbG9ja0NvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21QYXJhbWV0ZXJzIiwicGFyYW1ldGVycyIsInZhcmlhYmxlc0Zyb21QYXJhbWV0ZXJzIiwiYmxvY2tDb250ZXh0IiwibWFwIiwicGFyYW1ldGVyIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQUksSUFBSSxDQUFDTCxPQUFPLENBQUNJLEtBQUssQ0FBQ0M7WUFBVTs7O1lBRTlDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUQsT0FBTztnQkFBSSxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sS0FBSyxDQUFDRDtZQUFVOzs7WUFFOUNFLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLRixPQUFPO2dCQUFJLElBQUksQ0FBQ0wsT0FBTyxDQUFDTyxJQUFJLENBQUNGO1lBQVU7OztZQUU1Q0csS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFILE9BQU87Z0JBQUksSUFBSSxDQUFDTCxPQUFPLENBQUNRLE9BQU8sQ0FBQ0g7WUFBVTs7O1lBRWxESSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosT0FBTztnQkFBSSxJQUFJLENBQUNMLE9BQU8sQ0FBQ1MsS0FBSyxDQUFDSjtZQUFVOzs7O1lBRXZDSyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVLEVBQUVYLE9BQU87Z0JBQ3ZDLElBQU1DLFlBQVlXLHdCQUF3QkQsYUFDcENFLGVBQWUsSUExQkpkLGFBMEJxQkMsU0FBU0M7Z0JBRS9DLE9BQU9ZO1lBQ1Q7OztXQTdCbUJkOztBQWdDcEIsU0FBU2Esd0JBQXdCRCxVQUFVO0lBQ3pDLElBQU1WLFlBQVlVLFdBQVdHLEdBQUcsQ0FBQyxTQUFDQztRQUNoQyxJQUFNQyxXQUFXRCxVQUFVRSxXQUFXO1FBRXRDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPZjtBQUNUIn0=