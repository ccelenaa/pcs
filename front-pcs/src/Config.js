export const API_URLs = {
    local:       'https://api.local.fr',
    development: 'https://api.pcs.fr',
    production:  'https://api.pcs.fr'
};

export const API_URL = API_URLs[`${process.env.NODE_ENV}`];
