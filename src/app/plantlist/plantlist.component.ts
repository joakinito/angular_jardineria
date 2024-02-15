import { NgClass, NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plant, PlantDeletedEvent, PlantToggledFavoriteEvent } from '../interfaces/plant.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-plantlist',
  standalone: true,
  imports: [NgFor,NgClass,FontAwesomeModule],
  templateUrl: './plantlist.component.html',
  styleUrl: './plantlist.component.css'
})
export class PlantListComponent {
  @Input() plants: Plant[] = [];
  @Output() plantDeleted = new EventEmitter<PlantDeletedEvent>();
  @Output() plantToggledFavorite = new EventEmitter<PlantToggledFavoriteEvent>();
  

  onDelete(plant: Plant) {
    this.plantDeleted.emit({ plant });
  }

  onToggleFavorite(plant: Plant) {
    plant.favorite = !plant.favorite;
    this.plantToggledFavorite.emit({ plant });
    //papa
    
  }
}
