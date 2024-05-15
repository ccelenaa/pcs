export const API_URLs = {
    local:       'https://api.local.fr',
    development: 'https://nest.dev.fr',
    production:  'https://api.bleme.fr'
};

export const API_URL = API_URLs[`${process.env.NODE_ENV}`];
