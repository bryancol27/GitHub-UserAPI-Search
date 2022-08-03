import { urlFetch } from '../constants';

export const gettingUser = async(tag) => {
    const user = await fetch(`${urlFetch}${tag}`)
        .then(res => res.json());

    return user
};