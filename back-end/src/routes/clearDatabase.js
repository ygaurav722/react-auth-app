import { getDbConnection } from '../db';

export const clearDatabase ={
    path: '/api/cleardatabases',
    method: 'post',
    handler: async (req, res) =>{

        const db = getDbConnection('react-auth-db');
        const user = await db.collection('users').findOne({ email });
    }
}