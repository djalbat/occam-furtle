"use strict";

export function findSiblingNode(siblingNodes, childNode, parentNode) {
  const childNodes = parentNode.getChildNodes(),
        childNodeIndex = childNodes.indexOf(childNode),
        siblingNodeIndex = childNodeIndex + 1,
        siblingNode = siblingNodes.find((siblingNode) => {
          const index = childNodes.indexOf(siblingNode);

          if (index === siblingNodeIndex) {
            return true;
          }
        }) || null;

  return siblingNode;
}
