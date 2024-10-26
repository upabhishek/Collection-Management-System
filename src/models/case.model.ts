import { prop, getModelForClass } from '@typegoose/typegoose';

class Case {
  @prop({ required: true })
  bankName!: string;

  @prop({ required: true })
  propertyName!: string;

  @prop({ required: true })
  city!: string;

  @prop({ required: true })
  borrowerName!: string;

  @prop({ required: true })
  createdAt!: Date;
}

const CaseModel = getModelForClass(Case);
export default CaseModel;
