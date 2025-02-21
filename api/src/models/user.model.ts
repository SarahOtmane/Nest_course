import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface UserCreationAttributes {
  username: string;
  email: string;
  password: string;
}

@Table
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
