const main = document.getElementById("main-container");
const section = document.createElement("section");
section.innerHTML = `
    <h1>My dynamic section - 1</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>List dynamic - 1</li>
        <l2>List dynamic - 2</l2>
        <li>List dynamic - 3</li>
        <li>List dynamic - 4</li>
    </ul>
`
main.appendChild(section);


