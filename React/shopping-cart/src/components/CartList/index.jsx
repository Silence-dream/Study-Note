import React from "react"


class CartList extends React.Component {

  handlerDelete = (id)=>{
    this.props.deleteItem(id);
  }



  render() {
    return (
      <div>
        {
          this.props.list.map(item=>(
            <div className="item">
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
            <div className="change">
              {/* eslint-disable-next-line */}
              <a href="javascript:;">－</a>
              <input type="text" className="num" />
              {/* eslint-disable-next-line */}
              <a href="javascript:;">＋</a>
            </div>
            <div class="del" onClick={this.handlerDelete.bind(this,item.id)}>×</div>
          </div>
          ))
        }
      </div>
    )
  }
}

export default CartList;