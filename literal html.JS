const person = {

    name: 'indra',
    job: 'Web Developer',
    city: 'kolkata',
    bio: 'indra is very intersting person ,and always keen to learn new things.'
}
// And then create our markup:
const markup = `
 <div class="person">
    <h2>
        ${person.name}
    </h2>
    <p class="location">${person.city}</p>
    <p class="bio">${person.bio}</p>
 </div>
`;

