import {
  Component,
  computed,
  inject,
  input
} from "@angular/core";

import {
  DomSanitizer,
  SafeHtml
} from "@angular/platform-browser";

import { ICONS } from "../../icons/icons";
import { IconName } from "../../../synap/types/icon-name.type";

@Component({
  selector: 'app-icon',
  standalone: true,

  template: `
    <span
      class="block"
      [innerHTML]="svg()">
    </span>
  `
})
export class IconComponent {

  private sanitizer = inject(DomSanitizer);

  name = input.required<IconName>();

  svg = computed<SafeHtml>(() => {

    const icon = ICONS[this.name()];

    return this.sanitizer.bypassSecurityTrustHtml(icon);

  });

}