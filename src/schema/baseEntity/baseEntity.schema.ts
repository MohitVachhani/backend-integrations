// import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { prop as Property } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Base Entity Schema', simpleResolvers: true, isAbstract: true })
export class BaseEntitySchema {
  _id: string | Types.ObjectId;

  @Field(() => String)
  @Property({ type: Types.ObjectId, required: true })
  createdById: string | Types.ObjectId;

  @Field(() => String, { nullable: true })
  @Property({ type: Types.ObjectId, required: false })
  updatedById?: string | Types.ObjectId;

  @Field(() => String)
  @Property({ type: Date, required: false })
  createdAt: string;

  @Field(() => String)
  @Property({ type: Date, required: false })
  updatedAt: string;
}
