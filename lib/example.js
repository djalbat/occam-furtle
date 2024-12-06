"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _necessary = require("necessary");
require("./index");
var _log = /*#__PURE__*/ _interop_require_default(require("./log"));
var _file = /*#__PURE__*/ _interop_require_default(require("./context/file"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TRACE_LEVEL = _necessary.levels.TRACE_LEVEL;
var logLevel = TRACE_LEVEL, log = _log.default.fromLogLevel(logLevel), filePath = "first-order-logic/Procedures/Free and bound variables.ftl", fileContext = _file.default.fromLogAndFilePath(log, filePath);
fileContext.initialise();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgVFJBQ0VfTEVWRUwgfSA9IGxldmVscztcblxuaW1wb3J0IFwiLi9pbmRleFwiO1xuXG5pbXBvcnQgTG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvZmlsZVwiO1xuXG5jb25zdCBsb2dMZXZlbCA9IFRSQUNFX0xFVkVMLCAvLy9cbiAgICAgIGxvZyA9IExvZy5mcm9tTG9nTGV2ZWwobG9nTGV2ZWwpLFxuICAgICAgZmlsZVBhdGggPSBcImZpcnN0LW9yZGVyLWxvZ2ljL1Byb2NlZHVyZXMvRnJlZSBhbmQgYm91bmQgdmFyaWFibGVzLmZ0bFwiLFxuICAgICAgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tTG9nQW5kRmlsZVBhdGgobG9nLCBmaWxlUGF0aCk7XG5cbmZpbGVDb250ZXh0LmluaXRpYWxpc2UoKTtcbiJdLCJuYW1lcyI6WyJUUkFDRV9MRVZFTCIsImxldmVscyIsImxvZ0xldmVsIiwibG9nIiwiTG9nIiwiZnJvbUxvZ0xldmVsIiwiZmlsZVBhdGgiLCJmaWxlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiZnJvbUxvZ0FuZEZpbGVQYXRoIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7eUJBRXVCO1FBSWhCOzBEQUVTOzJEQUNROzs7Ozs7QUFMeEIsSUFBTSxBQUFFQSxjQUFnQkMsaUJBQU0sQ0FBdEJEO0FBT1IsSUFBTUUsV0FBV0YsYUFDWEcsTUFBTUMsWUFBRyxDQUFDQyxZQUFZLENBQUNILFdBQ3ZCSSxXQUFXLDZEQUNYQyxjQUFjQyxhQUFXLENBQUNDLGtCQUFrQixDQUFDTixLQUFLRztBQUV4REMsWUFBWUcsVUFBVSJ9