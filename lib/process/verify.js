"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "verifyFile", {
    enumerable: true,
    get: function() {
        return verifyFile;
    }
});
var _occamlanguages = require("occam-languages");
var _element = require("../utilities/element");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var nodeQuery = _occamlanguages.nodeUtilities.nodeQuery;
var errorNodeQuery = nodeQuery("/error"), procedureDeclarationNodeQuery = nodeQuery("/procedureDeclaration");
var TopLevelPass = /*#__PURE__*/ function(Pass) {
    _inherits(TopLevelPass, Pass);
    function TopLevelPass() {
        _class_call_check(this, TopLevelPass);
        return _call_super(this, TopLevelPass, arguments);
    }
    return TopLevelPass;
}(_occamlanguages.Pass);
_define_property(TopLevelPass, "maps", [
    {
        nodeQuery: errorNodeQuery,
        run: function(errorNode, context) {
            var success = false;
            var error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = error.verify(context);
            if (errorVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: procedureDeclarationNodeQuery,
        run: function(procedureDeclarationNode, context) {
            var success = false;
            var procedureDeclaration = (0, _element.procedureDeclarationFromProcedureDeclarationNode)(procedureDeclarationNode, context), procedureDeclarationVerifies = procedureDeclaration.verify(context);
            if (procedureDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    }
]);
var topLevelPass = new TopLevelPass();
function verifyFile(fileNode, context) {
    var fileVerifies = false;
    var node = fileNode, sucess = topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFzcywgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZXJyb3JGcm9tRXJyb3JOb2RlLCBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBub2RlUXVlcnkgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IGVycm9yTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb25cIik7XG5cbmNsYXNzIFRvcExldmVsUGFzcyBleHRlbmRzIFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGVycm9yLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZXJyb3JWZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25WZXJpZmllcyA9IHByb2NlZHVyZURlY2xhcmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvY2VkdXJlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCB0b3BMZXZlbFBhc3MgPSBuZXcgVG9wTGV2ZWxQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBmaWxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlID0gZmlsZU5vZGUsIC8vL1xuICAgICAgICBzdWNlc3MgPSB0b3BMZXZlbFBhc3MucnVuKG5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNlc3MpIHtcbiAgICBmaWxlVmVyaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVWZXJpZmllcztcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlIiwibm9kZVF1ZXJ5Iiwibm9kZVV0aWxpdGllcyIsImVycm9yTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFBhc3MiLCJQYXNzIiwibWFwcyIsInJ1biIsImVycm9yTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnJvckZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVzIiwidmVyaWZ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzIiwidG9wTGV2ZWxQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJub2RlIiwic3VjZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRGdCQTs7O2VBQUFBOzs7OEJBOUNvQjt1QkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBTSxBQUFFQyxZQUFjQyw2QkFBYSxDQUEzQkQ7QUFFUixJQUFNRSxpQkFBaUJGLFVBQVUsV0FDM0JHLGdDQUFnQ0gsVUFBVTtBQUVoRCxJQUFBLEFBQU1JLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFxQkMsb0JBQUk7QUFDN0IsaUJBRElELGNBQ0dFLFFBQU87SUFDWjtRQUNFTixXQUFXRTtRQUNYSyxLQUFLLFNBQUNDLFdBQVdDO1lBQ2YsSUFBSUMsVUFBVTtZQUVkLElBQU1DLFFBQVFDLElBQUFBLDJCQUFrQixFQUFDSixXQUFXQyxVQUN0Q0ksZ0JBQWdCRixNQUFNRyxNQUFNLENBQUNMO1lBRW5DLElBQUlJLGVBQWU7Z0JBQ2pCSCxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFVixXQUFXRztRQUNYSSxLQUFLLFNBQUNRLDBCQUEwQk47WUFDOUIsSUFBSUMsVUFBVTtZQUVkLElBQU1NLHVCQUF1QkMsSUFBQUEseURBQWdELEVBQUNGLDBCQUEwQk4sVUFDbEdTLCtCQUErQkYscUJBQXFCRixNQUFNLENBQUNMO1lBRWpFLElBQUlTLDhCQUE4QjtnQkFDaENSLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTVMsZUFBZSxJQUFJZjtBQUVsQixTQUFTTCxXQUFXcUIsUUFBUSxFQUFFWCxPQUFPO0lBQzFDLElBQUlZLGVBQWU7SUFFbkIsSUFBTUMsT0FBT0YsVUFDUEcsU0FBU0osYUFBYVosR0FBRyxDQUFDZSxNQUFNYjtJQUV0QyxJQUFJYyxRQUFRO1FBQ1ZGLGVBQWU7SUFDakI7SUFFQSxPQUFPQTtBQUNUIn0=