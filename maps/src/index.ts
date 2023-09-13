/// <reference types="@types/google.maps" />
import { User } from './user';
import { Company } from './company';
import { CustomMap } from './customMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);