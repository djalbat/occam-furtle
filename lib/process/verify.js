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
var nodeQuery = _occamlanguages.queryUtilities.nodeQuery;
var errorNodeQuery = nodeQuery("/error"), procedureDeclarationNodeQuery = nodeQuery("/procedureDeclaration");
var TopLevelPass = /*#__PURE__*/ function(SimplePass) {
    _inherits(TopLevelPass, SimplePass);
    function TopLevelPass() {
        _class_call_check(this, TopLevelPass);
        return _call_super(this, TopLevelPass, arguments);
    }
    return TopLevelPass;
}(_occamlanguages.SimplePass);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2ltcGxlUGFzcywgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGVycm9yRnJvbUVycm9yTm9kZSwgcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICBydW46IChlcnJvck5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVzID0gZXJyb3IudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IChwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzID0gcHJvY2VkdXJlRGVjbGFyYXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsUGFzcyA9IG5ldyBUb3BMZXZlbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBmaWxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHRvcExldmVsUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIGZpbGVWZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsImVycm9yTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFBhc3MiLCJTaW1wbGVQYXNzIiwibWFwcyIsInJ1biIsImVycm9yTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnJvckZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVzIiwidmVyaWZ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzIiwidG9wTGV2ZWxQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJub2RlIiwic3VjZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRGdCQTs7O2VBQUFBOzs7OEJBOUMyQjt1QkFFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBTSxBQUFFQyxZQUFjQyw4QkFBYyxDQUE1QkQ7QUFFUixJQUFNRSxpQkFBaUJGLFVBQVUsV0FDM0JHLGdDQUFnQ0gsVUFBVTtBQUVoRCxJQUFBLEFBQU1JLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUFxQkMsMEJBQVU7QUFDbkMsaUJBRElELGNBQ0dFLFFBQU87SUFDWjtRQUNFTixXQUFXRTtRQUNYSyxLQUFLLFNBQUNDLFdBQVdDO1lBQ2YsSUFBSUMsVUFBVTtZQUVkLElBQU1DLFFBQVFDLElBQUFBLDJCQUFrQixFQUFDSixXQUFXQyxVQUN0Q0ksZ0JBQWdCRixNQUFNRyxNQUFNLENBQUNMO1lBRW5DLElBQUlJLGVBQWU7Z0JBQ2pCSCxVQUFVO1lBQ1o7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7SUFDQTtRQUNFVixXQUFXRztRQUNYSSxLQUFLLFNBQUNRLDBCQUEwQk47WUFDOUIsSUFBSUMsVUFBVTtZQUVkLElBQU1NLHVCQUF1QkMsSUFBQUEseURBQWdELEVBQUNGLDBCQUEwQk4sVUFDbEdTLCtCQUErQkYscUJBQXFCRixNQUFNLENBQUNMO1lBRWpFLElBQUlTLDhCQUE4QjtnQkFDaENSLFVBQVU7WUFDWjtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTVMsZUFBZSxJQUFJZjtBQUVsQixTQUFTTCxXQUFXcUIsUUFBUSxFQUFFWCxPQUFPO0lBQzFDLElBQUlZLGVBQWU7SUFFbkIsSUFBTUMsT0FBT0YsVUFDUEcsU0FBU0osYUFBYVosR0FBRyxDQUFDZSxNQUFNYjtJQUV0QyxJQUFJYyxRQUFRO1FBQ1ZGLGVBQWU7SUFDakI7SUFFQSxPQUFPQTtBQUNUIn0=