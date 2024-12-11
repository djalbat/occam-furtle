"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    nodeAsString: function() {
        return nodeAsString;
    }
});
var _constants = require("../constants");
function nodeAsString(node, tokens) {
    var string;
    tokens = nodeAsTokens(node, tokens); ///
    string = tokensAsString(tokens);
    string = trimString(string); ///
    return string;
}
var _default = {
    nodeAsString: nodeAsString
};
function tokensAsString(tokens) {
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
function nodeAsTokens(node, tokens) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        z;
        var terminalNode = node; ///
        tokens = terminalNodeAsTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
    }
    return tokens;
}
function trimString(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
    return string;
}
function terminalNodeAsTokens(terminalNode, tokens) {
    var significantToken = terminalNode.getSignificantToken(), token = significantToken; ///
    tokens = [
        token
    ];
    return tokens;
}
function nonTerminalNodeAsTokens(nonTerminalNode, tokens) {
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZUFzU3RyaW5nXG59XG5cbmZ1bmN0aW9uIHRva2Vuc0FzU3RyaW5nKHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7elxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMrJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICB0b2tlbnMgPSBbICAvLy9cbiAgICB0b2tlblxuICBdO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmltU3RyaW5nIiwicmVkdWNlIiwidG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIkVNUFRZX1NUUklORyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInoiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwicmVwbGFjZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0JBLE9BRUM7ZUFGRDs7SUFaZ0JBLFlBQVk7ZUFBWkE7Ozt5QkFGYTtBQUV0QixTQUFTQSxhQUFhQyxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSkQsU0FBU0UsYUFBYUgsTUFBTUMsU0FBVSxHQUFHO0lBRXpDQyxTQUFTRSxlQUFlSDtJQUV4QkMsU0FBU0csV0FBV0gsU0FBVSxHQUFHO0lBRWpDLE9BQU9BO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JILGNBQUFBO0FBQ0Y7QUFFQSxTQUFTSyxlQUFlSCxNQUFNO0lBQzVCLElBQU1DLFNBQVNELE9BQU9LLE1BQU0sQ0FBQyxTQUFDSixRQUFRSztRQUNwQyxJQUFNQyxVQUFVRCxNQUFNRSxVQUFVO1FBRWhDUCxTQUFTLEFBQUMsR0FBV00sT0FBVE4sUUFBaUIsT0FBUk07UUFFckIsT0FBT047SUFDVCxHQUFHUSx1QkFBWTtJQUVmLE9BQU9SO0FBQ1Q7QUFFQSxTQUFTQyxhQUFhSCxJQUFJLEVBQUVDLE1BQU07SUFDaEMsSUFBTVUsbUJBQW1CWCxLQUFLWSxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUFDRTtRQUNyQixJQUFNQyxlQUFlZCxNQUFPLEdBQUc7UUFFL0JDLFNBQVNjLHFCQUFxQkQsY0FBY2I7SUFDOUMsT0FBTztRQUNMLElBQU1lLGtCQUFrQmhCLE1BQU0sR0FBRztRQUVqQ0MsU0FBU2dCLHdCQUF3QkQsaUJBQWlCZjtJQUNwRDtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSSxXQUFXSCxNQUFNO0lBQ3hCQSxTQUFTQSxPQUFPZ0IsT0FBTyxDQUFDLFFBQVFSLHVCQUFZLEdBQUksR0FBRztJQUVuRCxPQUFPUjtBQUNUO0FBRUEsU0FBU2EscUJBQXFCRCxZQUFZLEVBQUViLE1BQU07SUFDaEQsSUFBTWtCLG1CQUFtQkwsYUFBYU0sbUJBQW1CLElBQ25EYixRQUFRWSxrQkFBa0IsR0FBRztJQUVuQ2xCLFNBQVM7UUFDUE07S0FDRDtJQUVELE9BQU9OO0FBQ1Q7QUFFQSxTQUFTZ0Isd0JBQXdCRCxlQUFlLEVBQUVmLE1BQU07SUFDdEQsSUFBTW9CLDRCQUE0QkwsZ0JBQWdCTSw0QkFBNEIsQ0FBQ3JCLFNBQ3pFc0IsNkJBQTZCUCxnQkFBZ0JRLDZCQUE2QixDQUFDdkIsU0FDM0V3QixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDcEIsU0FBU0EsT0FBTzBCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU96QjtBQUNUIn0=