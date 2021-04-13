// 关于用户的接口
export const user = {
  LoginUser: "login", // 用户登录
  GetUsers: "users", // 获取所有用户
  AddUser: "users", // 添加一个新用户
  DeleteUser: "users", // 删除一个用户
  GetUser: "users", // 根据id查询某一个用户信息、
  UpdateUser: "users" // 根据id更新某一个用户的信息
};

// 关于权限的接口
export const rights = {
  AsideMenus: "menus", // 获取左侧菜单权限
  GetListRights: "rights/list",
  GetTreeRights: "rights/tree"
};

// 关于角色的接口
export const role = {
  GetRoles: "roles"
};

// 关于订单的接口
export const order = {
  GetOrders: "orders"
};

// 关于商品的接口
export const goods = {
  GetGoods: "goods",
  GetCategories: "categories"
};

//
