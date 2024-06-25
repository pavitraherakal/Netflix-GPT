import OpenAI from 'openai';
import { OPENAI_APIKEY } from './constant';

const openai = new OpenAI({
    apiKey: OPENAI_APIKEY , // This is the default and can be omitted
    dangerouslyAllowBrowser: true
});

export default openai;