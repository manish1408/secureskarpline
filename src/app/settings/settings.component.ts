import { Component } from '@angular/core';
import { Broadcaster } from '../shared/broadcast/broadcast';

@Component({
    moduleId: module.id,
    selector: 'as-settings',
    templateUrl: 'settings.html'
})
export class SettingsComponent {
    constructor(public broadcaster: Broadcaster) {
        this.broadcaster.broadcast('NavbarStatus', true);
    }
}
