import {CreateAddress} from '../address/create-address';

export interface CreateUser {
  documentId: string;
  name: string;
  lastname: string;
  birthdate: Date;
  phoneCountryId: number;
  phone: string;
  email: string;
  password: string;
  roleId: string;
  address: CreateAddress;
}
