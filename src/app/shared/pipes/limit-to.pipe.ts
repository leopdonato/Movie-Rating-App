import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'limitTo' })
export class LimitToPipe implements PipeTransform {
    transform(text: string, qtdCharacters: number): any {
        if (!text) return '';
        if (text.length <= qtdCharacters) return text;
        let stringEllipses = '';
        stringEllipses = text.substr(0, qtdCharacters);
        return `${stringEllipses}...`;
    }
}