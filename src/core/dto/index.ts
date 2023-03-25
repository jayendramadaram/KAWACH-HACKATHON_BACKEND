import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  validate,
  ValidateIf,
} from 'class-validator';

export enum ItemType {
  MobileNum = 'MobileNum',
  SmsHeader = 'SmsHeader',
}
export class QueryDto {
  @IsString()
  @IsNotEmpty()
  Item: string;

  @IsString()
  @IsEnum(ItemType)
  Type: ItemType;

  @ValidateIf((obj: QueryDto) => obj.Type === ItemType.SmsHeader)
  @IsNotEmpty()
  @IsString()
  SmsContext: string;
}

export enum ReportType {
  Normal = 'Normal',
  Spam = 'Spam',
  Fraud = 'Fraud',
}
export interface QueryReturn {
  Type: ReportType;
  Context?: string;
}

export class MuttateDto {
  @IsString()
  @IsNotEmpty()
  Item: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ItemType)
  Type: ItemType;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ItemType)
  Report: ReportType;

  @IsNotEmpty()
  @IsString()
  Context: string;
}
