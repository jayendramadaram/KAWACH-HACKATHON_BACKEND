import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from 'src/Typings';
import { CoreService } from './core.service';
import { ItemType, MuttateDto, QueryDto, QueryReturn, ReportType } from './dto';

/**
 * core has two Routes for both SMS and Mobile
 * - core/query  - call it before every call or sms in coming to predict it as fraud or spam or normal
 * - core/muttate - call it for update or report a sms or number
 *
 * query rout must be called before incomming call or incoming msg which returns is a msg/sms is spam or ham or fraud and also related context
 *
 */

interface AuthRequest extends Request {
  user: UserDTO; // Replace `any` with the actual type of the `user` property
}

@UseGuards(AuthGuard('jwt'))
@Controller('core')
export class CoreController {
  constructor(private coreService: CoreService) {}

  /**
   *
   * @param req @type {AuthRequest}
   * @param body @type {QueryDto}
   * @returns @type {QueryReturn}
   */
  @Post('query')
  QueryContext(
    @Req() req: AuthRequest,
    @Body() body: QueryDto,
  ): Promise<QueryReturn> {
    if (body.Type == ItemType.MobileNum) {
      return this.coreService.handleMobile(body.Item);
    } else {
      return this.coreService.handleSms(body.Item, body.SmsContext);
    }
  }

  /**
   *
   * @param req @type {AuthRequest}
   * @param body @type {MuttateDto}
   * @returns
   */
  @Post('mutate')
  mutate(
    @Req() req: AuthRequest,
    @Body() body: MuttateDto,
  ): Promise<{ Context: string }> {
    if (req.user.verfied === true) {
      if (body.Type == ItemType.MobileNum) {
        return this.coreService.mutateMobile(body.Item, body.Report, req.user);
      } else {
        return this.coreService.mutateSMS(
          body.Item,
          body.Context,
          body.Report,
          req.user,
        );
      }
    } else {
      return Promise.resolve({
        Context: 'User Not verified Cant Make Changes',
      });
    }
  }
}
