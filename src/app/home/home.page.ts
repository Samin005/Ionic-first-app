import {Component} from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private iab: InAppBrowser) {
    }

    loadSugarlock() {
        console.log('load Sugarlock');
        const url = 'https://samin005.github.io/Store-AF/Sugarlock';
        const target = '_self';
        this.iab.create(url, target, {
            location: 'no'
        });
    }

}
