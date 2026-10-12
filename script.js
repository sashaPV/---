const form = document.getElementById('workoutForm');
const list = document.getElementById('exerciseList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('exName').value;
    const muscle = document.getElementById('exMuscle').value;
    const details = document.getElementById('exDetails').value;

    const item = document.createElement('div');
    item.className = 'workout-item';
    item.setAttribute('data-muscle', muscle);

    item.innerHTML = `
        <div>
            <span class="badge">${muscle}</span>
            <div class="item-name">${name}</div>
        </div>
        <span class="item-details">${details}</span>
    `;

    list.appendChild(item);
    form.reset();
    
    document.getElementById('filterSelect').value = 'Все';
    filterExercises();
});

function filterExercises() {
    const selectedMuscle = document.getElementById('filterSelect').value;
    const items = list.getElementsByClassName('workout-item');

    for (let i = 0; i < items.length; i++) {
        const itemMuscle = items[i].getAttribute('data-muscle');

        if (selectedMuscle === 'Все' || itemMuscle === selectedMuscle) {
            items[i].style.display = 'flex';
        } else {
            items[i].style.display = 'none';
        }
    }
}

document.getElementById('filterSelect').addEventListener('change', filterExercises);
