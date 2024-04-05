import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Post } from './Post';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @HasMany(() => Post, 'userId') // Define a one-to-many relationship with the Post model
  posts!: Post[]; // This property will hold the associated posts
}
