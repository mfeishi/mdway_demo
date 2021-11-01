import { Controller, Get, Provide,HttpCode,SetHeader,Redirect,ContentType } from '@midwayjs/decorator';
// import { ReportMiddleware } from '../middleware/report';


@Provide()
@Controller('/',{ middleware: [ "reportMiddleware" ] })
export class HomeController {

  @Get('/')
  @HttpCode(200)
  @SetHeader({
    'x-bbb': '123',
    'x-ccc': '234'
  })
  @Redirect('/login_check',302)
  async home() {
    return 'Hello Midwayjs!';
  }

  @Get('/login_check')
  @ContentType('html')
  async check() {
    // TODO
    return 'login_check'
  }

  @Get('/test',{ middleware: [ 'getMiddleware' ]})
  async testhome() {
    console.error('testhome')
    return 'tttttt!';
  }
}
