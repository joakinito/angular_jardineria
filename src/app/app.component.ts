import { Component } from '@angular/core';
import { PlantFormComponent } from './plantform/plantform.component';
import { PlantListComponent } from './plantlist/plantlist.component';
import { Plant, PlantAddedEvent, PlantDeletedEvent, PlantToggledFavoriteEvent } from './interfaces/plant.interface';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[PlantFormComponent,PlantListComponent,]
})
export class AppComponent {
  title = 'FP JARDINERIA';
  plants: Plant[] = [];

  onPlantAdded(event: PlantAddedEvent) {
    this.plants.push(event.plant);
    this.plants.sort((a, b) => a.name.localeCompare(b.name));
  }

  onPlantDeleted(event: PlantDeletedEvent) {
    this.plants = this.plants.filter(p => p !== event.plant);
  }

  onToggleFavorite(event: PlantToggledFavoriteEvent) {
  
  }
}
