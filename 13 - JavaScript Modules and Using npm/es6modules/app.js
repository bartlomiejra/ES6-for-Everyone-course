import { uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
 import apiKey from './src/config';
 console.log(apiKey) 

const ages = [1,1,4,52,12,4];

console.log(uniq(ages));