function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('inactive');
    } else {
        console.error('Menu element not found');
    }
}

document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);

function filterProjects() {
    const filterInput = document.getElementById('filterInput');
    const projectItems = document.querySelectorAll('.category');

    if (!filterInput || projectItems.length === 0) {
        console.error('Filter input or project items not found');
        return;
    }

    filterInput.addEventListener('change', () => {
        const filterValue = filterInput.value.toLowerCase();
        projectItems.forEach(item => {
            const category = item.querySelector('h3').textContent.toLowerCase();
            if (category.includes(filterValue)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

filterProjects();

function displayImageInModal() {
    const images = document.querySelectorAll('.project-image');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    console.log(images, modal, modalImage, closeModal); // Debugging line

    if (!images || !modal || !modalImage || !closeModal) {
        console.error('Required elements for modal functionality not found');
        return;
    }

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = image.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

displayImageInModal();

function validateContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorContainer = document.getElementById('formErrors');

    if (!form || !nameInput || !emailInput || !messageInput || !errorContainer) {
        console.error('Required elements for form validation not found');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Name is required.');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            errors.push('A valid email is required.');
        }

        if (messageInput.value.trim() === '') {
            errors.push('Message cannot be empty.');
        }

        if (errors.length > 0) {
            errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
            errorContainer.style.display = 'block';
        } else {
            errorContainer.style.display = 'none';
            console.log('Form submitted successfully');
            form.reset();
        }
    });
}

validateContactForm();