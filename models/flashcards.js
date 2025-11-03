// const card_categories = {
//     "j-angielski-food": {
//       name: "j. angielski - food",
//       cards: [
//         { front: "truskawka", back: "strawberry" },
//         { front: "gałka muszkatołowa", back: "nutmeg" },
//         { front: "jabłko", back: "apple" },
//         { front: "karczoch", back: "artichoke" },
//         { front: "cielęcina", back: "veal" },
//       ],
//     },
//     "stolice-europejskie": {
//       name: "stolice europejskie",
//       cards: [
//         { front: "Holandia", back: "Amsterdam" },
//         { front: "Włochy", back: "Rzym" },
//         { front: "Niemcy", back: "Berlin" },
//         { front: "Węgry", back: "Budapeszt" },
//         { front: "Rumunia", back: "Bukareszt" },
//       ],
//     },
//   };
  
//   export function getCategorySummaries() {
//     return Object.entries(card_categories).map(([id, category]) => {
//       return { id, name: category.name };
//     });
//   }
  
//   export function hasCategory(categoryId) {
//     return card_categories.hasOwnProperty(categoryId);
//   }
  
//   export function getCategory(categoryId) {
//     if (hasCategory(categoryId))
//       return { id: categoryId, ...card_categories[categoryId] };
//     return null;
//   }
  
//   export function addCard(categoryId, card) {
//     if (hasCategory(categoryId)) card_categories[categoryId].cards.push(card);
//   }
  
//   export default {
//     getCategorySummaries,
//     hasCategory,
//     getCategory,
//     addCard,
//   };


const tanks = {
    "M4A3 76 W": {
        name: "M4A3 76 W",
        nation: "USA", 
        gun_caliber: "76mm",
        crew: "5",
        horsepower: "500",
        ammo_types: {
            
        }
    }, 
    "T-34-85": {
        name: "T-34-85",
        nation: "USSR",
        gun_caliber: "85mm",
        crew: "4",
        horsepower: "500"
    }
}