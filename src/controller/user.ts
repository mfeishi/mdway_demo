import { Controller, Provide, Get, Query, Body, Post, ALL, Param ,Inject} from "@midwayjs/decorator";
import { User } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;


  @Get('/')
  async getUser(@Query('id') uid: string): Promise<User> {
    console.error(uid, 'id')
    return {
      id: 1,
      name: '2',
      age: 3
    }
  }

  @Post('/')
  async updateUser(@Body(ALL) user: User): Promise<User> {
    console.error(user, 'user')
    // user 等价于 ctx.request.body 整个 body 对象
    return {
      id: 1,
      name: '2',
      age: 3
    }
  }


  @Post('/id')
  async postUserId(@Body() id: string): Promise<User> {
    console.error(id, 'id')
    // user 等价于 ctx.request.body 整个 body 对象
    return {
      id: 1,
      name: '2',
      age: 3
    }
  }


  @Post('/all')
  async postAllUser(@Body(ALL) user: User, @Query() pageIdx: number): Promise<User> {
    console.error(user, pageIdx, 'id')

    // user 从 body 获取
    // pageIdx 从 query 获取
    return {
      id: 1,
      name: '2',
      age: 3
    }
  }


  @Get('/:uid')
  async findUser(@Param() uid: string): Promise<User> {
    // uid 从路由参数中获取
    const user = await this.userService.getUser(uid);
    console.error(uid,user, 'uid')
    return {
      id: 1,
      name: '2',
      age: 3
    }
  }


}
