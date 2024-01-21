
export interface Plant {
    name: string;
    type: string;
    favorite: boolean;
  }
  
  export interface PlantAddedEvent {
    plant: Plant;
  }
  
  export interface PlantDeletedEvent {
    plant: Plant;
  }
  
  export interface PlantToggledFavoriteEvent {
    plant: Plant;
  }
  