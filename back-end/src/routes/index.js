import { clearDatabase } from './clearDatabase';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { logInRoute } from './logInRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { showDatabases } from './showDatabase';
import { signUpRoute } from './signUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';


export const routes = [
    forgotPasswordRoute,
    logInRoute,
    resetPasswordRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    showDatabases,
    clearDatabase
];
