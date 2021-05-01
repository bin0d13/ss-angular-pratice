import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentencecasePipe implements PipeTransform {

  transform(str) {
    let firstChar = str.charAt(0);
    let restChars = str.substring(1);
    let sentence = firstChar.toUpperCase() + restChars.toLowerCase();
    return sentence;

    return null;
  }

}
