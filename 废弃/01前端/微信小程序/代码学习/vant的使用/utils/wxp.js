import { promisifyAll, promisify } from 'miniprogram-api-promise';

export const wxp = {}
// promisify all wx's api
promisifyAll(wx, wxp)