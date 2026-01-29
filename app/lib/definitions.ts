export type Bread = {
  id: string;
  title: string;
  backingDate: string;
  description?:string;
  rating?: number;
  ingredients?:Ingredient[] ;
  steps?:Step[];
  pictures?:Picture[];
};

export type Ingredient = {
  amount: number;
  unit: string;
  name: string;
};

export type Step = {
  date: string;
  title: string;
  description?: string;
};

export type Picture = {
  title: string;
  source: string;
  isMain: boolean;
};