import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milisecondsTransform'
})
export class MilisecondsTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let ms = value;
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }

}
