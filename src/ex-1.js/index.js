document.addEventListener('DOMContentLoaded', (event) => {
    showHeading() });

function showHeading() {
   
    let heading = document.createElement('h1');
    
    heading.textContent = 'Hello Javascript';
    
    document.body.appendChild(heading);
}

