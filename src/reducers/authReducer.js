/* eslint-disable prettier/prettier */
/*
{
    usuario: 'esteban@gmail.com'
}
*/

export const authReducer = ( state = { }, action) => {

    switch (action.type) {
        case '[auth] login':
            return {
                id: action.payload.id,
                usuario: action.payload.usuario,
            }
        case '[auth] logout':
            return {}
        default:
            return state;
    }

}