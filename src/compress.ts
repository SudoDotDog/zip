/**
 * @author WMXPY
 * @namespace zip
 * @description Compress
 */

import * as Fs from 'fs';
import { createGzip, Gzip } from 'zlib';

export const compress = () => {

    const gzip: Gzip = createGzip();

    // const originFile: Fs.ReadStream = Fs.createReadStream('./test.a');
    const targetFile: Fs.WriteStream = Fs.createWriteStream('./test.gz');

    // originFile.pipe(gzip);
    gzip.pipe(targetFile);
    gzip.write('hello ds da sad asd asd');
};

compress();
