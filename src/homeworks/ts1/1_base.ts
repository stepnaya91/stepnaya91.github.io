/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string):string => string.replace(/^\+/, '');

export const addPlus = (string: string):string => `+${string}`;

export const removeFirstZeros = (value: string):string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: string|null|undefined, separator: string = ' '):string|null|undefined  =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy: number = 2):number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp: RegExp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type Keys = "x" |"y";
type RecordType = Record<Keys, number>;

export const getTransformFromCss = (transformCssString: string): RecordType => {
  const data: RegExpMatchArray | null  = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number, number, number]):number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number):string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp: RegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp: RegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): [number, number, number] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: number = parseInt(color.substring(1, 2), 16);
    const green: number = parseInt(color.substring(2, 3), 16);
    const blue: number = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type NumberKeys = "value" |"number";
type NumberRecordType = Record<NumberKeys, number>;
export const getNumberedArray = (arr: number[]) : NumberRecordType[] => arr.map((value, number) => ({ value, number }));
export const toStringArray = (arr: { value: string; number: number; }[]) : string[] => arr.map(({ value, number }) => `${value}_${number}`);

type Customer = {
  id:   number,
  name: string,
  age:  number,
  isSubscribed: boolean
}

type AccType = Omit<Customer,'id'>;

type Accumulator = {
  [key: number]: AccType;
}

export const transformCustomers = (customers: Customer[]): {} => {
  return customers.reduce((acc, customer) => {
    (acc as Accumulator)[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
