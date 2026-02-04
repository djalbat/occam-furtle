"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get chainContext () {
        return chainContext;
    },
    get default () {
        return _default;
    }
});
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function chainContext(context) {
    return new Proxy(context, {
        get: function(context, name, receiver) {
            if (name in context) {
                return Reflect.get(context, name, receiver);
            }
            context = context.getContext(); ///
            var value = context[name];
            return (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.FUNCTION ? value.bind(context) : value;
        }
    });
}
var _default = {
    chainContext: chainContext
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbkNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbnRleHQsIHtcbiAgICBnZXQ6IChjb250ZXh0LCBuYW1lLCByZWNlaXZlcikgPT4ge1xuICAgICAgaWYgKG5hbWUgaW4gY29udGV4dCkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoY29udGV4dCwgbmFtZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7IC8vL1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHRbbmFtZV07XG5cbiAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgdmFsdWUuYmluZChjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hhaW5Db250ZXh0XG59O1xuIl0sIm5hbWVzIjpbImNoYWluQ29udGV4dCIsImNvbnRleHQiLCJQcm94eSIsImdldCIsIm5hbWUiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJnZXRDb250ZXh0IiwidmFsdWUiLCJGVU5DVElPTiIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUlnQkE7ZUFBQUE7O1FBa0JoQjtlQUFBOzs7eUJBcEJ5Qjs7Ozs7QUFFbEIsU0FBU0EsYUFBYUMsT0FBTztJQUNsQyxPQUFPLElBQUlDLE1BQU1ELFNBQVM7UUFDeEJFLEtBQUssU0FBQ0YsU0FBU0csTUFBTUM7WUFDbkIsSUFBSUQsUUFBUUgsU0FBUztnQkFDbkIsT0FBT0ssUUFBUUgsR0FBRyxDQUFDRixTQUFTRyxNQUFNQztZQUNwQztZQUVBSixVQUFVQSxRQUFRTSxVQUFVLElBQUksR0FBRztZQUVuQyxJQUFNQyxRQUFRUCxPQUFPLENBQUNHLEtBQUs7WUFFM0IsT0FBTyxBQUFDLENBQUEsT0FBT0ksc0NBQVAsU0FBT0EsTUFBSSxNQUFNQyxtQkFBUSxHQUN4QkQsTUFBTUUsSUFBSSxDQUFDVCxXQUNUTztRQUNiO0lBQ0Y7QUFDRjtJQUVBLFdBQWU7SUFDYlIsY0FBQUE7QUFDRiJ9