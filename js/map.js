
document.addEventListener('DOMContentLoaded', () => {

    renderStatus();

});


function getProgress() {

    return { evidence: 0, suspects: 0 };

}

function renderStatus() {

    const rooms = document.querySelectorAll('.room[data-room]');
    const available = document.querySelectorAll('.room[data-status="available"]').length;
    const progress = getProgress();

    setText('stat-rooms', available + ' / ' + rooms.length);
    setText('stat-evidence', progress.evidence);
    setText('stat-suspects', progress.suspects);

}

function setText(id, value) {

    const el = document.getElementById(id);

    if (el) {
        el.textContent = value;
    }

}