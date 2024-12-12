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
    },
    nodesAsString: function() {
        return nodesAsString;
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
function nodesAsString(nodes, tokens) {
    var string = nodes.reduce(function(string, node) {
        var nodeString = nodeAsString(node, tokens);
        string = string === _constants.EMPTY_STRING ? nodeString : "".concat(string, ",").concat(nodeString);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
var _default = {
    nodeAsString: nodeAsString,
    nodesAsString: nodesAsString
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30sJHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZUFzU3RyaW5nLFxuICBub2Rlc0FzU3RyaW5nXG59XG5cbmZ1bmN0aW9uIHRva2Vuc0FzU3RyaW5nKHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgdG9rZW5zID0gdGVybWluYWxOb2RlQXNUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgdG9rZW5zID0gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gdHJpbVN0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gIHRva2VucyA9IFsgIC8vL1xuICAgIHRva2VuXG4gIF07XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICByZXR1cm4gdG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmltU3RyaW5nIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUFzVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQXNUb2tlbnMiLCJyZXBsYWNlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4QkEsT0FHQztlQUhEOztJQTFCZ0JBLFlBQVk7ZUFBWkE7O0lBWUFDLGFBQWE7ZUFBYkE7Ozt5QkFkYTtBQUV0QixTQUFTRCxhQUFhRSxJQUFJLEVBQUVDLE1BQU07SUFDdkMsSUFBSUM7SUFFSkQsU0FBU0UsYUFBYUgsTUFBTUMsU0FBVSxHQUFHO0lBRXpDQyxTQUFTRSxlQUFlSDtJQUV4QkMsU0FBU0csV0FBV0gsU0FBVSxHQUFHO0lBRWpDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSCxjQUFjTyxLQUFLLEVBQUVMLE1BQU07SUFDekMsSUFBTUMsU0FBU0ksTUFBTUMsTUFBTSxDQUFDLFNBQUNMLFFBQVFGO1FBQ25DLElBQU1RLGFBQWFWLGFBQWFFLE1BQU1DO1FBRXRDQyxTQUFTLEFBQUNBLFdBQVdPLHVCQUFZLEdBQ3RCRCxhQUNDLEFBQUMsR0FBWUEsT0FBVk4sUUFBTyxLQUFjLE9BQVhNO1FBRXpCLE9BQU9OO0lBQ1QsR0FBR08sdUJBQVk7SUFFZixPQUFPUDtBQUNUO0lBRUEsV0FBZTtJQUNiSixjQUFBQTtJQUNBQyxlQUFBQTtBQUNGO0FBRUEsU0FBU0ssZUFBZUgsTUFBTTtJQUM1QixJQUFNQyxTQUFTRCxPQUFPTSxNQUFNLENBQUMsU0FBQ0wsUUFBUVE7UUFDcEMsSUFBTUMsVUFBVUQsTUFBTUUsVUFBVTtRQUVoQ1YsU0FBUyxBQUFDLEdBQVdTLE9BQVRULFFBQWlCLE9BQVJTO1FBRXJCLE9BQU9UO0lBQ1QsR0FBR08sdUJBQVk7SUFFZixPQUFPUDtBQUNUO0FBRUEsU0FBU0MsYUFBYUgsSUFBSSxFQUFFQyxNQUFNO0lBQ2hDLElBQU1ZLG1CQUFtQmIsS0FBS2MsY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZWYsTUFBTyxHQUFHO1FBRS9CQyxTQUFTZSxxQkFBcUJELGNBQWNkO0lBQzlDLE9BQU87UUFDTCxJQUFNZ0Isa0JBQWtCakIsTUFBTSxHQUFHO1FBRWpDQyxTQUFTaUIsd0JBQXdCRCxpQkFBaUJoQjtJQUNwRDtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSSxXQUFXSCxNQUFNO0lBQ3hCQSxTQUFTQSxPQUFPaUIsT0FBTyxDQUFDLFFBQVFWLHVCQUFZLEdBQUksR0FBRztJQUVuRCxPQUFPUDtBQUNUO0FBRUEsU0FBU2MscUJBQXFCRCxZQUFZLEVBQUVkLE1BQU07SUFDaEQsSUFBTW1CLG1CQUFtQkwsYUFBYU0sbUJBQW1CLElBQ25EWCxRQUFRVSxrQkFBa0IsR0FBRztJQUVuQ25CLFNBQVM7UUFDUFM7S0FDRDtJQUVELE9BQU9UO0FBQ1Q7QUFFQSxTQUFTaUIsd0JBQXdCRCxlQUFlLEVBQUVoQixNQUFNO0lBQ3RELElBQU1xQiw0QkFBNEJMLGdCQUFnQk0sNEJBQTRCLENBQUN0QixTQUN6RXVCLDZCQUE2QlAsZ0JBQWdCUSw2QkFBNkIsQ0FBQ3hCLFNBQzNFeUIsUUFBUUYsNEJBQ1JHLE1BQU1MLDRCQUE0QjtJQUV4Q3JCLFNBQVNBLE9BQU8yQixLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2QyxPQUFPMUI7QUFDVCJ9