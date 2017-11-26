import React, {Component} from 'react';
import './Farm.css';
import {connect} from 'react-redux';
import {Order} from '../Order';
import {getOrders} from '../../reducers/farm';
import {moveOrderToFarm} from '../../actions/marketActions';
import {moveOrderToCustomer} from '../../actions/farmActions';


export class Farm extends Component {

  handleMoveOrderToCustomer = () => {
    const {orders, moveOrderToCustomer}  = this.props;
    const firstOrder = orders[orders.length - 1];

    moveOrderToCustomer(firstOrder);
  }

  render() {
    const {orders} = this.props;
    const isOrdersEmpty = orders.length === 0;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button onClick={this.handleMoveOrderToCustomer} disabled={isOrdersEmpty}>Отправить урожай клиенту</button>
        <div className="order-list">
          {orders.map((order) => (
            <Order 
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt}
            />
          ))}
      </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  orders: getOrders(state)
});

const mapDispatchToProps = {
  moveOrderToFarm,
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);