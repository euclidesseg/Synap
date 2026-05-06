import { Component, AfterViewInit, signal, inject, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { EditorComponent } from "../../components/editor-component/editor-component";




@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  imports: [EditorComponent],
  styles: `
  
  `
})
export default class EditPageComponent implements OnDestroy {

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private removeListener!: () => void;

  category = signal('Selecciona una opcion');
  menuOpen = signal(false);

  constructor() {
    this.initClickListener();
  }

  showMenuOptions() {
    this.menuOpen.update(value => !value);
  }
  selectOption(option: 'Ciencia' | 'Matematicas' | 'Ingenieria' | 'Computación' | 'Cine') {
    this.category.set(option);
    this.showMenuOptions();
  }

  private initClickListener() {
    this.removeListener = this.renderer.listen('document', 'click',(event:MouseEvent) =>{
      const clickedInside = this.elementRef.nativeElement.contains(event.target);

      if(!clickedInside && this.menuOpen()){
        this.menuOpen.set(false);
      }
    })
  }
  ngOnDestroy(): void {
    if(this.removeListener){
      this.removeListener();
    }
  }
}
