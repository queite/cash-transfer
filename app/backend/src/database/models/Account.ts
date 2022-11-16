import { CreationOptional, DECIMAL, INTEGER, Model } from 'sequelize';
import db from '.';

class Account extends Model {
  declare id: CreationOptional<number>;
  declare balance: number;
}

Account.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DECIMAL,
    defaultValue: 100,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'account',
  tableName: 'accounts',
  timestamps: false,
});

export default Account;
