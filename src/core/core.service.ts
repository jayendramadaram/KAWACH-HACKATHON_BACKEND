import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { items } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDTO } from 'src/Typings';
import { ItemType, QueryReturn, ReportType } from './dto';

@Injectable()
export class CoreService {
  constructor(private postgre: PrismaService, private config: ConfigService) {}
  /**
   * Takes input as mobile num checks it in predb and
   *
   * @param phnum @type {string}
   * @returns {QueryReturn}
   */
  async RunNlp(Context: string, matches: Array<string>): Promise<ReportType> {
    const options = [ReportType.Fraud, ReportType.Normal, ReportType.Spam];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  async handleMobile(phnum: string): Promise<QueryReturn> {
    const report = await this.postgre.predb.findUnique({
      where: {
        item: phnum,
      },
    });
    if (report) {
      const type =
        report.casetype == 'Spam' ? ReportType.Spam : ReportType.Fraud;
      return {
        Type: type,
        Context: report.context,
      };
    } else {
      const item = await this.postgre.items.findUnique({
        where: {
          item: phnum,
        },
        include: {
          fraudnums: {
            select: {
              id: true,
            },
          },
          spamreport: {
            select: {
              id: true,
            },
          },
        },
      });
      if (item) {
        await this.postgre.items.update({
          where: {
            id: item.id,
          },
          data: {
            interactions: item.interactions + 1,
          },
        });
        const reports = item.fraudnums.length + item.spamreport.length;
        if (reports / item.interactions > 0.05 && item.interactions > 10) {
          const type =
            item.fraudnums.length > item.spamreport.length
              ? ReportType.Fraud
              : ReportType.Spam;
          return {
            Type: type,
          };
        } else {
          return {
            Type: ReportType.Normal,
          };
        }
      } else {
        const createitem = await this.postgre.items.create({
          data: {
            interactions: 1,
            type: 'Mobile',
            item: phnum,
          },
        });
        return {
          Type: ReportType.Normal,
          Context: 'New Item Created',
        };
      }
    }
  }

  async handleSms(header: string, Context: string): Promise<QueryReturn> {
    const report = await this.postgre.predb.findUnique({
      where: {
        item: header,
      },
    });
    /**
     * regex differentiation
     * search regex
     * context NLP prediction
     * regex addition to db
     *
     */
    const regex =
      /(\b[13][a-km-zA-HJ-NP-Z0-9]{25,34}\b)|(\b[6-9]\d{9}\b)|(\b(?:[a-zA-Z0-9._%+-]+@(?:apl|abfspay|fbl|idfcbank|okaxis|okicici|axisbank|icici|yesbank|ibl|ybl))\b)|(\b(?:https?:\/\/|www\.)\S+\b)/g;

    const matches = Context.match(regex);
    if (report) {
      const type =
        report.casetype == 'Spam' ? ReportType.Spam : ReportType.Fraud;
      return {
        Type: type,
        Context: report.context,
      };
    } else {
      if (matches.length > 0) {
        for (const item of matches) {
          const report = await this.postgre.predb.findUnique({
            where: {
              item: item,
            },
          });
          if (report) {
            const type =
              report.casetype == 'Spam' ? ReportType.Spam : ReportType.Fraud;
            return {
              Type: type,
              Context: report.context,
            };
          }
        }
      }
      const item = await this.postgre.items.findUnique({
        where: {
          item: header,
        },
        include: {
          fraudnums: {
            select: {
              id: true,
            },
          },
          spamreport: {
            select: {
              id: true,
            },
          },
        },
      });
      if (item) {
        await this.postgre.items.update({
          where: {
            id: item.id,
          },
          data: {
            interactions: item.interactions + 1,
          },
        });
        const reports = item.fraudnums.length + item.spamreport.length;
        if (reports / item.interactions > 0.05 && item.interactions > 10) {
          const type =
            item.fraudnums.length > item.spamreport.length
              ? ReportType.Fraud
              : ReportType.Spam;
          return {
            Type: type,
          };
        }
      }
      const createitem = await this.postgre.items.create({
        data: {
          interactions: 1,
          type: 'Sms',
          item: header,
        },
      });
      const type = await this.RunNlp(Context, matches);
      return {
        Type: type,
        Context: `This Subjected SMS is suspected to be ${type}`,
      };
    }
  }

  async mutateMobile(
    phnum: string,
    type: ReportType,
    user: UserDTO,
  ): Promise<{ Context: string }> {
    let item: items;
    item = await this.postgre.items.findUnique({
      where: {
        item: phnum,
      },
    });
    if (!item) {
      item = await this.postgre.items.create({
        data: {
          interactions: 1,
          type: 'Mobile',
          item: phnum,
        },
      });
    }
    if (type == ReportType.Spam) {
      await this.postgre.usertable.update({
        where: {
          id: user.id,
        },
        data: {
          reportedSpamNums: {
            connect: {
              id: item.id,
            },
          },
        },
      });
    } else {
      await this.postgre.usertable.update({
        where: {
          id: user.id,
        },
        data: {
          reportedFraudNums: {
            connect: {
              id: item.id,
            },
          },
        },
      });
    }
    return {
      Context: 'Changes Made',
    };
  }

  async mutateSMS(
    Sms: string,
    Context: string,
    type: ReportType,
    user: UserDTO,
  ) {
    let item: items;
    item = await this.postgre.items.findUnique({
      where: {
        item: Sms,
      },
    });
    if (!item) {
      item = await this.postgre.items.create({
        data: {
          interactions: 1,
          type: 'Mobile',
          item: Sms,
        },
      });
    }
    if (type == ReportType.Spam) {
      await this.postgre.usertable.update({
        where: {
          id: user.id,
        },
        data: {
          reportedSpamNums: {
            connect: {
              id: item.id,
            },
          },
        },
      });
    } else {
      await this.postgre.usertable.update({
        where: {
          id: user.id,
        },
        data: {
          reportedFraudNums: {
            connect: {
              id: item.id,
            },
          },
        },
      });
    }
    return {
      Context: 'Changes Made',
    };
  }
}
