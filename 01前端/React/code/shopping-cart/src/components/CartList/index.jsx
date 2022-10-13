import React from "react";

class CartList extends React.Component {


  handlerDelete = (id) => {
    this.props.deleteItem(id);
  };

  updateNum = (obj) => {
    this.props.updateNum(obj);
  };

  render() {
    return (
      <div>
        {this.props.list.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
            <div className="change">
              {/* eslint-disable-next-line */}
              <a href="#!" onClick={(e)=>this.updateNum({id:item.id,name:"reduce"})}>－</a>
              <input type="text" className="num" value={item.num} readOnly />
              {/* eslint-disable-next-line */}
              <a href="#!" onClick={(e)=>this.updateNum({id:item.id,name:"add",e:e})}>
                ＋
              </a>
            </div>
            <div
              className="del"
              onClick={this.handlerDelete.bind(this, item.id)}
            >
              ×
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CartList;
