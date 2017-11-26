import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Order} from '../Order';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import {getOrders} from '../../reducers/market';
import './Market.css';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {

  handleCreateNewOrder = () => {
    const {createOrder} = this.props;
    const newOrder = getNewOrder();

    createOrder(newOrder);
  }

  handleRemoveOrder = () => {
    const {orders, moveOrderToFarm}  = this.props;
    const firstOrder = orders[orders.length - 1];

    moveOrderToFarm(firstOrder);
  }

  render() {
    const {orders} = this.props;
    const isOrdersEmpty = orders.length === 0;
    
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button onClick={this.handleCreateNewOrder}>Создать заказ</button>
        <button onClick={this.handleRemoveOrder} disabled={isOrdersEmpty}>Отправить заказ на ферму</button>
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
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
