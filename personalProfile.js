
class Person {
    constructor(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }
}

function render(person) {
    return `
        <div class="profile">
            <img src="${person.imageUrl}"/>
            <h2>${person.name}</h2>
        </div>
    `
}