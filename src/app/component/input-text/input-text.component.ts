import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {

  @Input() label: string |undefined;

  @Input() type: "text" | "password" | undefined;

  @Input() placeholder: string | undefined;

  public isFocused: boolean | undefined;

  constructor() { }

  public onBlur(event: any) {
    const value = event.target.value;
    if(!value) {
      this.isFocused = false;
    }
  }

}
