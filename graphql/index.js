import {resolversUsuario} from './user/resolvers'
import {typesUsuario} from './user/types'
import { resolversFilantropos} from './filantropos/resolvers';
import { typesFilantropo } from './filantropos/types';

export const resolvers = [resolversUsuario,resolversFilantropos];
export const typeDefs  = [typesUsuario,typesFilantropo] ;
