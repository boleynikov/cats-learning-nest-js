import { EXCEPTION_MESSAGES } from '@/common/const';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  async create(user: Partial<User>): Promise<User> {
    await this.checkEmailUniqueness(user.email);

    return this.userModel.create(user);
  }

  async update(id: number, user: Partial<User>): Promise<[number, User[]]> {
    await this.checkEmailUniqueness(user.email, id);

    return this.userModel.update(user, { where: { id: id }, returning: true });
  }

  async remove(id: number): Promise<number> {
    return await this.userModel.destroy({ where: { id } });
  }

  private async checkEmailUniqueness(
    email?: string,
    excludeUserId?: number,
  ): Promise<void> {
    if (!email) return;

    const existingUser = await this.userModel.findOne({ where: { email } });

    if (existingUser && existingUser.id !== excludeUserId) {
      throw new ConflictException({
        message: EXCEPTION_MESSAGES.USER_WITH_EMAIL_ALREADY_EXISTS,
      });
    }
  }
}
