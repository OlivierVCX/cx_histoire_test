import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { HstScreenshot } from '@histoire/plugin-screenshot';
import { HstPercy } from '@histoire/plugin-percy';
//import { HstA11y } from './histoire.plugin-a11y';

export default defineConfig({
    plugins: [
        HstVue(),
        HstScreenshot(),
        HstPercy(),
        //HstA11y(),
    ],
})