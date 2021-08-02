/* eslint-disable prettier/prettier */
export const login = (id, usuario) => {
    return {
        type: '[auth] login',
        payload:{
            id,
            usuario
        }
    };
}

export const logout = () => ({
    type: '[auth] logout',
    payload:{}
})