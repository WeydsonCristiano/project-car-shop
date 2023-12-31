import {
  isValidObjectId,
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';

import GenericError from '../Errors/GenericError';

const err = 'Invalid mongo id';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new GenericError(err, 422);
    return this.model.findById(_id);
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new GenericError(err, 422);

    return this.model.findByIdAndUpdate({ _id }, { ...obj } as UpdateQuery<T>, {
      new: true,
    });
  }

  public async delete(_id: string): Promise<void> {
    if (!isValidObjectId(_id)) throw new GenericError(err, 422);
    await this.model.findByIdAndDelete({ _id });
  }
}

export default AbstractODM;
