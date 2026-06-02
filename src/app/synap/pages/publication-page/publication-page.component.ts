import { Component, signal } from '@angular/core';
import { PublicationListComponent } from "../../components/publication-list-component/publication-list.component";
import { Publication } from '../../interfaces/publication.interface';
import { PUBLICATIONS } from '../../data/publications.data';




@Component({
  selector: 'app-lists-explore',
  imports: [PublicationListComponent],
  templateUrl: './publication-page.component.html',
})
export default class PublicationPageComponent {

  publications = signal<Publication[]>(PUBLICATIONS)
    

}
