let input = [{
    id: 1,

    val: "学校",

    parentId: null,
  },
  {
    id: 2,

    val: "班级1",

    parentId: 1,
  },
  {
    id: 3,

    val: "班级2",

    parentId: 1,
  },
  {
    id: 4,

    val: "学生1",

    parentId: 2,
  },
  {
    id: 5,

    val: "学生2",

    parentId: 2,
  },
  {
    id: 6,

    val: "学生3",

    parentId: 3,
  },
];

let output = {
  id: 1,

  val: "学校",

  children: [{
      id: 2,

      val: "班级1",

      children: [{
          id: 4,

          val: "学生1",

          children: [],
        },

        {
          id: 5,

          val: "学生2",

          children: [],
        },
      ],
    },
    {
      id: 3,

      val: "班级2",

      children: [{
        id: 6,

        val: "学生3",

        children: [],
      }, ],
    },
  ],
};

/**

 *

 * @param {Array} arr

 */

function arrToTree(arr) {
  let root = arr[0];

  arr.shift();

  let tree = {
    id: root.id,

    val: root.val,

    children: arr.length > 0 ? toTree(root.id, arr) : [],
  };

  return tree;
}
// console.log(arrToTree(input))
/**

 *

 * @param {Number} id

 * @param {Array} arr

 */

function toTree(id, arr) {
  let children = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parentId === id) {
      children.push({
        id: arr[i].id,

        val: arr[i].val,

        children: toTree(arr[i].id, arr),
      });
    }
  }

  return children;
}

/** 转成数组

 *

 * @param {Array} arr

 */

function arr2Tree(arr, pid = null) {
  return arr.reduce((prev, cur) => {
    if (cur.parentId === pid) {
      const children = arr2Tree(arr, cur.id);

      if (children.length) {
        cur.children = children;
      }

      prev.push(cur);
    }

    return prev;
  }, []);
}



let map = {}
let result = []
input.forEach(item => {
  map[item.id] = item;
})

input.forEach(item => {
  const parent = map[item.parentId]
  if (parent) {
    parent.children = parent.children || []
    parent.children.push(item)
  } else {
    result.push(item)
  }
})

console.log(result)