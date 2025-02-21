import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface TimerCreationAttributes {
  name: string;
  duration: number;
}

@Table
export class Timer extends Model<Timer, TimerCreationAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration: number;
}
