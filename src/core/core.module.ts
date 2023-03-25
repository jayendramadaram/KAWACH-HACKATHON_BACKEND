import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';

/**
 * MODULE to take care of query and muation of backed aspect
 * - core/query  - call it before every call or sms in coming to predict it as fraud or spam or normal
 * - core/muttate - call it for update or report a sms or number
 */
@Module({
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
