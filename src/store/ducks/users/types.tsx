export interface IUserState {
  usersList: IUser[];
  usersListLoaded: boolean;
  user?: IUser;
}

export interface IUser {
  cell: string;
  dob: IUserDate;
  email: string;
  gender: "male" | "female";
  id: IUserId;
  location: ILocation;
  login: ILogin;
  name: IUserName;
  nat: string;
  phone: string;
  picture: IImage;
  registered: IUserDate;
}

interface IUserDate {
  date: string;
  age: number;
}

interface IUserId {
  name: string;
  value: string;
}

interface ILocation {
  city: string;
  coordinates: ICoordinates;
  country: string;
  postcode: string;
  state: string;
  street: IStreetAddress;
  timezone: ITimezone;
}

interface ILogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface IStreetAddress {
  number: number;
  name: string;
}

interface ITimezone {
  description: string;
  offset: string;
}

interface IUserName {
  first: string;
  last: string;
  title: string;
}

interface IImage {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface getUsersListProps {
  batchSize: number;
  page: number;
  nationalities: string;
}
