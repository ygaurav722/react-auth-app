import { getDbConnection } from '../db';

export const showDatabases ={
    path: '/api/showdatabases',
    method: 'get',
    handler: async (req, res) =>{

        const db = getDbConnection('react-auth-db');
        const users =db.listCollections();
        
     }
    }