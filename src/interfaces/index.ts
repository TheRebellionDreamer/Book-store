export interface IUser {
  login: string,
  password: string
}

export interface IGood {
  id: number;
  category: string;
  title: string;
  author: string;
  image: string;
  price: number;
};

export interface IAuthorisationProps {
  authOpen: boolean;
  userLoggedIn: boolean;
  setAuthOpen(value: boolean): void;
  setUserLoggedIn(value: boolean): void;
  setOpenRegistration(value: boolean): void;
}

export interface IBaggageProps {
  bagOpen: boolean;
  setBagOpen(value: boolean): void;
}

export interface IFilteringItem {
  (book: IGood): boolean;
}

export interface IRegistrationProps {
  openRegistrarion: boolean;
  setOpenRegistration(value: boolean): void;
  setUserLoggedIn(value: boolean): void;
}

export interface IBaggageItemProps {
  id: number;
  category: string;
  title: string;
  author: string;
  price: number;
  count: number;
  image: string
}

export interface IMenuOfUserProps {
  handleClickSignOut(): void;
}

export interface INavBarProps {
  darkMode: boolean;
  switchTheme(e: React.ChangeEvent<HTMLInputElement>): void;
}