export interface Address {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: {lat: string, lng: string};
}
