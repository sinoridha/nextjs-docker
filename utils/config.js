import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

export const serverConf = { ...serverRuntimeConfig} ;
export const publicConf = {...publicRuntimeConfig};