import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_COLLECTION_NAME, User } from '../schemas/user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(USER_COLLECTION_NAME)
    private UserModel: Model<User>,
  ) {}

  async create(data: any, projectionExcludeCredentials = true): Promise<User> {
    const documentRef = await this.UserModel.create(data);

    if (documentRef && projectionExcludeCredentials === true) {
      /**
       * Remove fields like passwordHash
       */
      if (documentRef['_doc'].passwordHash)
        delete documentRef['_doc'].passwordHash;
    }
    return documentRef;
  }

  async findOne(
    filter: any,
    projection?: any,
    projectionExcludeCredentials = true,
  ): Promise<User> {
    /**
     * Exclude deleted
     */
    const filterKeys = Object.keys(filter);
    if (filterKeys.length === 0 || !filterKeys.includes('deletedAt')) {
      filter['deletedAt'] = { $eq: null };
    }

    const documentRef = await this.UserModel.findOne(filter, projection);

    if (documentRef && projectionExcludeCredentials === true) {
      /**
       * Remove fields like passwordHash
       */
      if (documentRef['_doc'].passwordHash)
        delete documentRef['_doc'].passwordHash;
    }

    return documentRef;
  }

  async FindMany(filter: any, projection?: any) {
    const documentRef = await this.UserModel.find(filter, projection);

    return documentRef;
  }
}
