import { CreationOptional, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Account from './Account';

class User extends Model {
  declare id: CreationOptional<number>;
  declare username: string;
  declare password: string;
  declare accountId: number;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

Account.hasOne(User);
User.belongsTo(Account);

export default User;
