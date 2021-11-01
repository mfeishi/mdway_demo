import { Provide } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';


@Provide()
export class UserService {
  async getUser(options: any ) {
    return {
      uid: options,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
