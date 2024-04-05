import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Post } from './Post'; // Import the Post model

@Table({
  tableName: 'comments',
})
export class Comment extends Model {
  @ForeignKey(() => Post) // Define a foreign key relationship with Post model
  @Column({
    type: DataType.INTEGER, // Change the data type to INTEGER
    allowNull: false,
  })
  postId!: number; // Change the data type to number

  @BelongsTo(() => Post) // Define the association with the Post model
  post!: Post; // This property will hold the associated post

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updatedAt!: Date;
}
