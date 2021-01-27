import { SignUpTypeEnum } from '@enums/user';
import { BaseEntitySchema } from '@schema/baseEntity/baseEntity.schema';
import { prop as Property } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The User model', simpleResolvers: true })
export class UserType extends BaseEntitySchema {
  @Field(() => String)
  @Property({ type: String })
  emailId: string;

  @Field(() => String)
  @Property({ type: String })
  firstName: string;

  @Field(() => String)
  @Property({ type: String })
  lastName: string;

  @Field(() => SignUpTypeEnum)
  @Property({ type: String, enum: SignUpTypeEnum })
  signUpType: SignUpTypeEnum;

  @Field(() => String, { nullable: true })
  @Property({ type: String, required: false })
  profilePicture?: string;
}
