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
var _elements = require("../elements");
var _string = require("../utilities/string");
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
var _Primitives;
var _default = (0, _elements.define)((_Primitives = /*#__PURE__*/ function() {
    function Primitives(string, array) {
        _class_call_check(this, Primitives);
        this.string = string;
        this.array = array;
    }
    _create_class(Primitives, [
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
            key: "getPrimitive",
            value: function getPrimitive(index) {
                var primitive = this.array[index] || null; ///
                return primitive;
            }
        },
        {
            key: "addPrimitive",
            value: function addPrimitive(primitive) {
                this.array.push(primitive);
            }
        },
        {
            key: "mapPrimitive",
            value: function mapPrimitive(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachPrimitive",
            value: function forEachPrimitive(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var primitivesArray = this.mapPrimitive(function(primitive) {
                    primitive = primitive.evaluate(context);
                    return primitive;
                }), primitivesString = (0, _string.primitivesStringFromPrimitivesArray)(primitivesArray, context), string = primitivesString, array = primitivesArray, primitives = new Primitives(string, array);
                return primitives;
            }
        }
    ]);
    return Primitives;
}(), _define_property(_Primitives, "name", "Primitives"), _Primitives));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgcHJpbWl0aXZlc1N0cmluZ0Zyb21QcmltaXRpdmVzQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJpbWl0aXZlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKGluZGV4KSB7XG4gICAgY29uc3QgcHJpbWl0aXZlID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGFkZFByaW1pdGl2ZShwcmltaXRpdmUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2gocHJpbWl0aXZlKTtcbiAgfVxuXG4gIG1hcFByaW1pdGl2ZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFByaW1pdGl2ZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZXNBcnJheSA9IHRoaXMubWFwUHJpbWl0aXZlKChwcmltaXRpdmUpID0+IHtcbiAgICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmltaXRpdmVzU3RyaW5nID0gcHJpbWl0aXZlc1N0cmluZ0Zyb21QcmltaXRpdmVzQXJyYXkocHJpbWl0aXZlc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVzU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHByaW1pdGl2ZXNBcnJheSwgLy8vXG4gICAgICAgICAgcHJpbWl0aXZlcyA9IG5ldyBQcmltaXRpdmVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJpbWl0aXZlc1wiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJpbWl0aXZlcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRQcmltaXRpdmUiLCJpbmRleCIsInByaW1pdGl2ZSIsImFkZFByaW1pdGl2ZSIsInB1c2giLCJtYXBQcmltaXRpdmUiLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hQcmltaXRpdmUiLCJmb3JFYWNoIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwicHJpbWl0aXZlc0FycmF5IiwicHJpbWl0aXZlc1N0cmluZyIsInByaW1pdGl2ZXNTdHJpbmdGcm9tUHJpbWl0aXZlc0FycmF5IiwicHJpbWl0aXZlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBQTs7O3dCQUh1QjtzQkFDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEQsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsTUFBTSxFQUFFQyxLQUFLO2dDQURDRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSixLQUFLLENBQUNJLE1BQU07Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsS0FBSztnQkFDaEIsSUFBTUMsWUFBWSxJQUFJLENBQUNQLEtBQUssQ0FBQ00sTUFBTSxJQUFJLE1BQU8sR0FBRztnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxTQUFTO2dCQUNwQixJQUFJLENBQUNQLEtBQUssQ0FBQ1MsSUFBSSxDQUFDRjtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLEdBQUcsQ0FBQ0Q7WUFBVzs7O1lBRTFERSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRixRQUFRO2dCQUFJLElBQUksQ0FBQ1gsS0FBSyxDQUFDYyxPQUFPLENBQUNIO1lBQVc7OztZQUUzREksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1AsWUFBWSxDQUFDLFNBQUNIO29CQUNuQ0EsWUFBWUEsVUFBVVEsUUFBUSxDQUFDQztvQkFFL0IsT0FBT1Q7Z0JBQ1QsSUFDQVcsbUJBQW1CQyxJQUFBQSwyQ0FBbUMsRUFBQ0YsaUJBQWlCRCxVQUN4RWpCLFNBQVNtQixrQkFDVGxCLFFBQVFpQixpQkFDUkcsYUFBYSxJQUFJdEIsV0FBV0MsUUFBUUM7Z0JBRTFDLE9BQU9vQjtZQUNUOzs7O0tBRUEsOEJBQU9DLFFBQU8ifQ==