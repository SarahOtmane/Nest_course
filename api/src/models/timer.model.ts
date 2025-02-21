import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Timer extends Model {
  @Column({ allowNull: false })
  startTime: Date;

  @Column({ allowNull: false })
  endTime: Date;

  @Column
  duration: number;
}
