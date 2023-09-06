interface optionProps {
  title: string;
  value: string;
}

interface link {
  title: string;
  url: string;
}

interface footerLink {
  title: string;
  links: link[];
}

interface car {
  make: string;
  model: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  transmission: string;
  year: number;
}

interface filterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
