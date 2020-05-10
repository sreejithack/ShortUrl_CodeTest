import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  originalurl: string = '';
  

  constructor( private apiService: ApiService) { }
  urlsubmit(url: string) {
    console.log(url);
    this.apiService.postOriginalUrl(url) .subscribe(res => {
     if (res && res.success) {
       alert('Submitted successfully');
     
       }
      }
    //, error => {
    //   alert(error);
    //  }
    );
  }
}
