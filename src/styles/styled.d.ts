import 'styled-components';
declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;
        default: boolean,
        text: string,
        background: string,
        'gray-200'?: string,
        'gray-100': string,
        'gray-300': string,
        'gray-400': string,
        'gray-500': string,
        'gray-600': string,
        'gray-700': string,
        'gray-800': string,
        

        'green-light':string,
        'green': string,
        'green-dark': string

        'red-500': string,
        'red-700': string,

        'yellow-500': string,
    }
}