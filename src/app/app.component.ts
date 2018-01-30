import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  go(id): void {
    if (window.location.href.indexOf("detail") === -1)
      $('html,body').animate({scrollTop: $('#'+id).offset().top-50});
    else
      window.location.href = "/dashboard#"+id;
  }
}
