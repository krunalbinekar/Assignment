import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any, search?: string, title?: string, description?: string, genre?: string): any {
    if (search === undefined) {
      return data;
    } else {
      let result:any = [];
      let filteredData = data.filter(obj => obj[title].toLowerCase().includes(search.toLowerCase()));
      if (description) {
        filteredData = filteredData.concat(data.filter(obj => obj[description].toLowerCase().includes(search.toLowerCase())));
        if (genre) {
          filteredData = filteredData.concat(data.filter(obj => obj[genre].toLowerCase().includes(search.toLowerCase())));
        }
      }
      filteredData.forEach(function(item) {
        if(result.indexOf(item) < 0) {
            result.push(item);
        }
      });

       return result;
    }
  }

}