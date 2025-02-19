class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Signatures:
// - params: { nodeNumber: number; treeStructure: string[] }
// - treeStructure: "nodeID nodeValue leftNodeID rightNodeID"[]

function makeTree(nodeNumber, treeStructure) {
  const nodesMap = new Map();
  let root;

  for (let i = 0; i < nodeNumber; i++) {
    const [nodeId, value, leftChildId, rightChildId] =
      treeStructure[i].split(' ');

    const newNode = new TreeNode(value);

    if (nodeId === '1') {
      root = newNode;
    }

    nodesMap.set(nodeId, {
      node: newNode,
      leftChildId,
      rightChildId,
    });
  }

  const mapIterator = nodesMap.keys();

  for (let i = 0; i < nodeNumber; i++) {
    const key = mapIterator.next().value;

    const currentNode = nodesMap.get(key);

    currentNode.node.left =
      currentNode.leftChildId !== 'null'
        ? nodesMap.get(currentNode.leftChildId).node
        : null;

    currentNode.node.right =
      currentNode.rightChildId !== 'null'
        ? nodesMap.get(currentNode.rightChildId).node
        : null;
  }

  return root;
}

//-------------1----------
//
//     1
//    / \
//   2   3
//  / \   \
// 5   6   4
//        /
//       7
const testTree1 = makeTree(7, [
  '1 1 2 3',
  '2 2 5 6',
  '3 3 null 4',
  '4 4 7 null',
  '5 5 null null',
  '6 6 null null',
  '7 7 null null',
]);

//-------------2----------
//
//      1
//    /    \
//   2      5
//  / \    /  \
// 3   4  6     9
//       / \   /  \
//      7   8 10  11
const testTree2 = makeTree(11, [
  '1 1 2 5',
  '2 2 3 4',
  '3 3 null null',
  '4 4 null null',
  '5 5 6 9',
  '6 6 7 8',
  '7 7 null null',
  '8 8 null null',
  '9 9 10 11',
  '10 10 null null',
  '11 11 null null',
]);

//-------------3----------
//       1
//      / \
//     2   7
//    / \
//   3   6
//  /
// 4
//  \
//   5
const testTree3 = makeTree(7, [
  '1 1 2 7',
  '2 2 3 6',
  '3 3 4 null',
  '4 4 null 5',
  '5 5 null null',
  '6 6 null null',
  '7 7 null null',
]);

console.log("=============");
console.log(testTree1);
console.log("=============");
console.log(testTree2);
console.log("==============");
console.log(testTree3);

// 1) Глубина дерева - расстояние до самого низкого листа.
// С помощью обхода дерева в глубину напиши функцию нахождения глубины дерева.
// На вход функция получает корень дерева.

const DFS = (root) => {
  // --Твой-код-здесь--
};

// --Тесты-для-проверки--
// console.log("=============");
// console.log(DFS(testTree1)); //3
// console.log("=============");
// console.log(DFS(testTree2)); //3
// console.log("==============");
// console.log(DFS(testTree3)); //4

// 2) С помощью обхода дерева в ширину напиши функцию, которая найдет
// количество узлов левого и правого поддеревьев относительно корня
// и верни их массивом значений [number, number].
// На вход функция получает корень дерева

const BFS = (root) => {
  // --Твой-код-здесь--
};

// --Тесты-для-проверки--
// console.log("+++++++++++++");
// console.log(BFS(testTree1)); //[3, 3]
// console.log("++++++++++++++");
// console.log(BFS(testTree2)); //[3, 7]
// console.log("++++++++++++++");
// console.log(BFS(testTree3)); //[5, 1]