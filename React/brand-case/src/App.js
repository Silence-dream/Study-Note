import './App.css';
import React from 'react';
// 功能：
// 1.添加品牌
// 2.删除品牌
// 3.搜索品牌
class App extends React.Component {
  // 1.定义初始化数据
  state = {
    id: "",
    name: '',
    keywords: '',
    brandList: [
      { id: 1, name: '奔驰', ctime: '2020/9/23' },
      { id: 2, name: '宝马', ctime: '2020/9/21' },
      { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
      { id: 4, name: '千里马', ctime: '2020/5/3' }
    ]
  }

  // 添加商品
  addBrand = () => {
    const { id, name, brandList } = this.state;
    if (!(id && name)) return alert("数据不能为空");
    this.setState({
      brandList: [...brandList, { id: parseInt(id), name: name, ctime: new Date().toLocaleDateString() }],
      id: "",
      name: ""
    })
  }

  handlerModel = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchItem = () => {
    return this.state.brandList.filter(item => item.name.includes(this.state.keywords))
  }

  deleteItem=(id)=>{
    // console.log(id);
    
    const  List = this.state.brandList.filter(item=> item.id !== id);
    this.setState({
      brandList: List
    })

  }

  render() {
    return (
      <div className="App">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">添加品牌</h3>
          </div>

          <div className="panel-body">
            <div className="form-group form-inline">
              <div className="input-group">
                <div className="input-group-addon">编号</div>
                <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.handlerModel} />
              </div>

              <div className="input-group">
                <div className="input-group-addon">品牌名称</div>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handlerModel} />
              </div>

              <div className="input-group">
                <button className="btn btn-primary" onClick={this.addBrand}>添加</button>
              </div>

              <div className="input-group pull-right">
                <div className="input-group-addon">按名称搜索</div>
                <input type="text" className="form-control" name="keywords" value={this.state.keywords} onChange={this.handlerModel} />
              </div>
            </div>
          </div>

          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>编号</th>
                <th>品牌名称</th>
                <th>添加时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {
                this.searchItem().map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.ctime}</td>
                    <td>
                      <a href="#" onClick={this.deleteItem.bind(this,item.id)}>删除</a>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default App;
