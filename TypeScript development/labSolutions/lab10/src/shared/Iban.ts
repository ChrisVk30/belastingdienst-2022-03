const CHAR_CODE_A = 'A'.charCodeAt(0);
const CHAR_CODE_Z = 'Z'.charCodeAt(0);
const OFFSET_LATIN_CHARACTER = 55;

export class Iban {
  constructor(
    public readonly countryCode: string,
    public readonly bankCode: string,
    public readonly accountNumber: string,
    public readonly controlNumber: number) {
  }

  format() {
    const unFormatted = `${this.countryCode}${this.controlNumber < 10 ? `0${this.controlNumber}` : this.controlNumber}${this.bankCode}${this.accountNumber}`;
    const parts: string[] = [];
    for (let i = 0; i < unFormatted.length; i += 4) {
      parts.push(unFormatted.substr(i, 4));
    }
    return parts.join(' ');
  }


  static generate(bankCode: string, countryCode: string, accountNumber = Math.floor(Math.random() * 10000000000).toString()): Iban {
    return new Iban(
      countryCode,
      bankCode,
      accountNumber,
      controlNumber()
    );

    function controlNumber() {
      const accountNumberInteger = `${convert(bankCode)}${accountNumber}${convert(countryCode)}00`;
      const control = 98n - BigInt(accountNumberInteger) % 97n;
      return Number(control);
    }

    function convert(chars: string) {
      let result = '';
      for (var i = 0; i < chars.length; i++) {
        if (isCapitalLetter(chars, i)) {
          result += chars.charCodeAt(i) - OFFSET_LATIN_CHARACTER;
        } else {
          result += chars.charAt(i);
        }
      }
      return result;
    }

    function isCapitalLetter(source: string, index = 0) {
      const charCode = source.charCodeAt(index);
      return charCode >= CHAR_CODE_A && charCode <= CHAR_CODE_Z;
    }
  }
}
