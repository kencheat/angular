import { Component } from '@angular/core';

@Component({
    selector: 'app-twitter',
    template: `
        Chars: {{ twitte.length }}
    `,
    templateUrl: './twitter.component.html',
    //styleUrls: ['./twitter.component.css'],
    styles: [`
        .textColor {
            color: red;
        }
    `]
})
export class TwitterComponent {
    maxLength = 20;
    twitte = '';
}
