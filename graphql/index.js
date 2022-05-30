import {resolversUsuario} from './user/resolvers'
import {typesUsuario} from './user/types'
import { resolversFilantropos} from './filantropos/resolvers';
import { typesFilantropo } from './filantropos/types';
import { typesServicios } from './servicios/types';
import { resolversServicios } from './servicios/resolvers';

export const resolvers = [resolversUsuario,resolversFilantropos,resolversServicios];
export const typeDefs  = [typesUsuario,typesFilantropo,typesServicios] ;
