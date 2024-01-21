import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plant, PlantAddedEvent } from '../interfaces/plant.interface';

@Component({
  selector: 'app-plantform',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './plantform.component.html',
  styleUrl: './plantform.component.css'
})
export class PlantFormComponent {
  @Output() plantAdded = new EventEmitter<PlantAddedEvent>();

  newPlant: Plant = { name: '', type: '', favorite: false };

  onTypeChange(type: string) {
    this.newPlant.type = type;
  }

  onClear() {
    this.newPlant = { name: '', type: '', favorite: false };
  }

  onSave() {
    const trimmedName = this.newPlant.name.trim();
    const trimmedType = this.newPlant.type.trim();

    if (trimmedName === '' && trimmedType === '') {
      alert('Especifica nombre y tipo no seas bobo.');
    } else if (trimmedName === '') {
      alert('Nombre es obligatorio para poder guardar mamawebo.');
    } else if (trimmedType === '') {
      alert('Tipo es obligatorio ¿me entiendes?.');
    } else {
      this.plantAdded.emit({ plant: { ...this.newPlant } });
      this.onClear();
    }
  }
}