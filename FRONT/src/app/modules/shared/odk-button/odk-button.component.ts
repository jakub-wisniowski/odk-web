import { Component, Input } from "@angular/core";


@Component({
    selector: 'odk-button',
    template: `<button class="btn" [routerLink]="link"><ng-content></ng-content></button>`,
    styleUrls: ['odk-button.component.scss']
})

export class OdkButtonComponent {
    @Input()
    link: string;
}