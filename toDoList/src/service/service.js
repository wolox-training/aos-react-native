import { getBooks as BOOKS } from '../constants/bookConstants';

export const getBooks = async () => ({ ok:true, data:BOOKS });
