import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../../schema/graphql.schema';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(input: CreateUserInput) {
    const newUser = {
      name: input.name,
      email: input.email,
      password: input.password,
    } as User;
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, input: Partial<User>) {
    let user = await this.findOne(id);
    if (!user) {
      return null;
    }
    user = { ...user, ...input };
    return await this.userRepository.save(user);
  }

  async delete(id: string) {
    return await this.userRepository.softDelete(id);
  }
}
