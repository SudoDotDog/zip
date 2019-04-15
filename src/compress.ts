/**
 * @author WMXPY
 * @namespace zip
 * @description Compress
 */

import { createGzip, Gzip } from 'zlib';

export const compress = (source: string, target: string) => {

    const gzip: Gzip = createGzip();
};
