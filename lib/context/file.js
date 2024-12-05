"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _necessary = require("necessary");
var _occamgrammars = require("occam-grammars");
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
var readFile = _necessary.fileSystemUtilities.readFile, furtleLexerFromNothing = _occamgrammars.lexersUtilities.furtleLexerFromNothing, furtleParserFromNothing = _occamgrammars.parsersUtilities.furtleParserFromNothing;
var furtleLexer = furtleLexerFromNothing(), furtleParser = furtleParserFromNothing();
var FileContext = /*#__PURE__*/ function() {
    function FileContext(node, tokens, filePath) {
        _class_call_check(this, FileContext);
        this.node = node;
        this.tokens = tokens;
        this.filePath = filePath;
    }
    _create_class(FileContext, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _string.nodeAsString)(node, this.tokens);
                return string;
            }
        }
    ], [
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath) {
                var fileContent = readFile(filePath), content = fileContent, tokens = furtleLexer.tokenise(content), node = furtleParser.parse(tokens), fileContext = new FileContext(node, tokens, filePath);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2VucywgZmlsZVBhdGgpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGVDb250ZW50LCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gZnVydGxlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGZ1cnRsZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJyZWFkRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwiZnVydGxlUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwiZnVydGxlTGV4ZXIiLCJmdXJ0bGVQYXJzZXIiLCJub2RlIiwidG9rZW5zIiwiZmlsZVBhdGgiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0RmlsZVBhdGgiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJmcm9tRmlsZVBhdGgiLCJmaWxlQ29udGVudCIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiZmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVplOzZCQUNjO3NCQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxXQUFhQyw4QkFBbUIsQ0FBaENELFVBQ0YsQUFBRUUseUJBQTJCQyw4QkFBZSxDQUExQ0Qsd0JBQ0YsQUFBRUUsMEJBQTRCQywrQkFBZ0IsQ0FBNUNEO0FBRVIsSUFBTUUsY0FBY0osMEJBQ2RLLGVBQWVIO0FBRU4sSUFBQSxBQUFNTCw0QkFBTjthQUFNQSxZQUNQUyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUTtnQ0FEZlg7UUFFakIsSUFBSSxDQUFDUyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ1g7O1lBT25CWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYU4sSUFBSTtnQkFDZixJQUFNTyxTQUFTRCxJQUFBQSxvQkFBWSxFQUFDTixNQUFNLElBQUksQ0FBQ0MsTUFBTTtnQkFFN0MsT0FBT007WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhTixRQUFRO2dCQUMxQixJQUFNTyxjQUFjakIsU0FBU1UsV0FDdkJRLFVBQVVELGFBQ1ZSLFNBQVNILFlBQVlhLFFBQVEsQ0FBQ0QsVUFDOUJWLE9BQU9ELGFBQWFhLEtBQUssQ0FBQ1gsU0FDMUJZLGNBQWMsSUE5Qkh0QixZQThCbUJTLE1BQU1DLFFBQVFDO2dCQUVsRCxPQUFPVztZQUNUOzs7V0FqQ21CdEIifQ==