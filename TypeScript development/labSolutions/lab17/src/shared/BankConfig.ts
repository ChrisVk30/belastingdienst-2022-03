import { LanguageCode } from "./LanguageCode";

export interface BankConfig {
  name: string;
  countryCode: string;
  bankCode: string;
  port: number;
  language: LanguageCode;
}