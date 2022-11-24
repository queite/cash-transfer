import { CreationOptional, DATE, INTEGER, Model } from 'sequelize';
import db from '.';
import Account from './Account';

class Transaction extends Model {
  declare id: CreationOptional<number>;
  declare debitedAccountId: number;
  declare creditedAccountId: number;
  declare value: number;
  declare createdAt: CreationOptional<Date>;
}

Transaction.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  value: {
    type: INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Transaction',
  tableName: 'transactions',
  timestamps: true,
  updatedAt: false,
});

Transaction.belongsTo(Account, { foreignKey: 'debitedAccountId' });
Transaction.belongsTo(Account, { foreignKey: 'creditedAccountId' });

export default Transaction;
