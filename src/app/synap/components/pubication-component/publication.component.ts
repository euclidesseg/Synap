import { Component, input } from '@angular/core';
import { Publication } from '../../interfaces/publication.interface';
import { IconComponent } from "../../../shared/components/icon/icon.component";

@Component({
  selector: 'app-publication-component',
  imports: [IconComponent],
  templateUrl: './publication.component.html',
})
export class PublicationComponent {  

  publication = input.required<Publication>();

}
