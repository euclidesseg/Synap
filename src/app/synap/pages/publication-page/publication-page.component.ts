import { Component, signal } from '@angular/core';
import { PublicationListComponent } from "../../components/publication-list/publication-list.component";
import { Publication } from '../../interfaces/publication.interface';




@Component({
  selector: 'app-lists-explore',
  imports: [PublicationListComponent],
  templateUrl: './publication-page.component.html',
})
export default class PublicationPageComponent {

  publications = signal<Publication[]>([
    {
      id: 1,
      title: "El impacto de la IA en el aprendizaje autodidacta",
      summary: "Analizamos cómo las herramientas generativas están cambiando la forma en que los estudiantes abordan la investigación y la síntesis de información.",
      category: "research",
      date: "12 Oct 2023",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      author: "Sofía M."
    },
    {
      id: 2,
      title: "Reseña: 'Hábitos Atómicos' desde la perspectiva estudiantil",
      summary: "Más allá del hype: ¿Son realmente aplicables estos consejos durante la época de exámenes finales? Ponemos a prueba el sistema.",
      category: "reviews",
      date: "10 Oct 2023",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
      author: "Javier R."
    },
    {
      id: 3,
      title: "Método Pomodoro vs. Flowtime: ¿Cuál es para ti?",
      summary: "Comparamos dos de las técnicas de gestión de tiempo más populares para descubrir cuál se adapta mejor a diferentes tipos de cerebros.",
      category: "study",
      date: "08 Oct 2023",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      author: "Ana P."
    },
    {
      id: 4,
      title: "La evolución de las bibliotecas digitales",
      summary: "Un recorrido por los repositorios de acceso abierto más importantes para tesistas y estudiantes de grado.",
      category: "tech",
      date: "05 Oct 2023",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1692576735072-a317af931b24?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Carlos D."
    },
    {
      id: 5,
      title: "Neurociencia y sueño: Por qué no deberías desvelarte",
      summary: "Explicación científica de cómo el sueño consolida la memoria a largo plazo y por qué estudiar toda la noche es contraproducente.",
      category: "research",
      date: "01 Oct 2023",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Lucía F."
    },
    {
      id: 6,
      title: "Apps de organización para el semestre 2024",
      summary: "Una lista curada de aplicaciones minimalistas que te ayudarán a mantener el orden sin distraerte.",
      category: "tech",
      date: "28 Sep 2023",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=800&auto=format&fit=crop",
      author: "Esteban G."
    },
  ]);


}
