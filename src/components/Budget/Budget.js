import React, {Component} from 'react';
import './Budget.css';
import {connect} from 'react-redux';
import {getProfit, getMarketExpanse, getFarmExpanse, getDeliveryExpanse} from '../../reducers/budget';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import {moveOrderToCustomer} from '../../actions/farmActions';

export class Budget extends Component {
  render() {
    const {profit, marketExpanse, farmExpanse, deliveryExpanse} = this.props;
    const total = profit - marketExpanse - farmExpanse - deliveryExpanse;
    const isTotal = profit > 0;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено: {profit}</p>
        <p>Расходы продавцов: {marketExpanse > 0 ? '-' + marketExpanse : marketExpanse}</p>
        <p>Расходы на ферме: {farmExpanse > 0 ? '-' + farmExpanse : farmExpanse}</p>
        <p>Расходы на доставку: {deliveryExpanse > 0 ? '-' + deliveryExpanse : deliveryExpanse}</p>
        {isTotal &&
          <p>Итого: {total}</p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profit: getProfit(state),
  marketExpanse: getMarketExpanse(state),
  farmExpanse: getFarmExpanse(state),
  deliveryExpanse: getDeliveryExpanse(state)
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
