document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let profiles = Array.from(document.getElementsByClassName('profile'));

    for (let profile of profiles) {
        let userLocked = profile.querySelector('input[id$="Lock"]');
        let userUnlocked = profile.querySelector('input[id$="Unlock"]');
        let showMore = profile.children[profile.children.length - 1];
        let hiddenFields = profile.querySelector('.hidden-fields');

        showMore.addEventListener('click', handleShowMore);

        function handleShowMore(event) {
            if (userUnlocked.checked) {
                hiddenFields.style.display = 'none'
                if (hiddenFields.style.display == 'none') {
                    hiddenFields.style.display = 'block';
                    showMore.textContent = 'Show less'
                } else {
                    hiddenFields.style.display = 'none';
                    showMore.textContent = 'Show more'
                }
            }
        }
    }
}