import { Component } from '@angular/core';
import {Toggle} from "ionic-angular";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsService: SettingsService){}

  onToggle(toggle: Toggle){
    console.log(toggle);
    this.settingsService.setAltBg(toggle.checked);
  }
  checkAltBg(){
    return this.settingsService.isAltBg();
  }
}
