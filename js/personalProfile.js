export class Person {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    console.log("Person is loaded");
  }
}

export function render(person) {
  return `
        <div class="profile shadow">
            <img src="${person.imageUrl}"/>
            <h2>${person.name}</h2>
        </div>
    `;
}
