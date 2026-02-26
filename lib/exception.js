"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Exception;
    }
});
class Exception {
    constructor(message){
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
    static fromMessage(message) {
        const exception = new Exception(message);
        return exception;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGNlcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBleGNlcHRpb24gPSBuZXcgRXhjZXB0aW9uKG1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwiZnJvbU1lc3NhZ2UiLCJleGNlcHRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQixZQUFZQyxPQUFPLENBQUU7UUFDbkIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0QsT0FBTztJQUNyQjtJQUVBLE9BQU9FLFlBQVlGLE9BQU8sRUFBRTtRQUMxQixNQUFNRyxZQUFZLElBQUlKLFVBQVVDO1FBRWhDLE9BQU9HO0lBQ1Q7QUFDRiJ9