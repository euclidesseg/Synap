import { Component, input } from '@angular/core';
import { Publication } from '../../interfaces/publication.interface';

@Component({
  selector: 'app-publication-component',
  imports: [],
  templateUrl: './publication.component.html',
})
export class PublicationComponent {  

  publication = input.required<Publication>();
}
