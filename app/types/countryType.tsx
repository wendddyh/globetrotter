export interface Country
{
  name:{
    common: string;
    official: string
  };
  currency:string;
  language: string[];
  flags:{
    png: string;
    svg: string;
  };
  population: string;
  timezones: string[];
  capital: string;
  continents: string;
  region: string;
  cca2: string;
  cca3: string;
}
