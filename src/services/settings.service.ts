export class SettingsService{
  private altBg: boolean = false;

  setAltBg(isAlt: boolean){
    this.altBg = isAlt;
  }
  isAltBg(){
    return this.altBg;
  }
}
