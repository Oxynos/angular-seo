import { Component } from '@angular/core';
import { SeoSocialShareService } from 'ngx-seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-seo';

  constructor(private readonly seoSocialShareService: SeoSocialShareService) {

  }
}
