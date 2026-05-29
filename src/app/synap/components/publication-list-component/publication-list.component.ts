import { Component, input } from '@angular/core';
import { Publication } from '../../interfaces/publication.interface';
import { PublicationComponent } from '../pubication-component/publication.component';
import { ProminentComponent } from '../prominent-component/prominent-component';

@Component({
  selector: 'app-publication-list',
  imports: [PublicationComponent, ProminentComponent],
  templateUrl: './publication-list.component.html',
})
export class PublicationListComponent { 

  publications = input.required<Publication[]>();

}
