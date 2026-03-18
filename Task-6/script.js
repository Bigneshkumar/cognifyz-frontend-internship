document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMsg = document.getElementById('success-msg');

    const setError = (element, isError) => {
        const group = element.parentElement;
        if (isError) {
            group.classList.add('error');
        } else {
            group.classList.remove('error');
        }
    };

    const isEmailValid = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let valid = true;
        successMsg.style.display = 'none';

        // Check name
        if (nameInput.value.trim() === '') {
            setError(nameInput, true);
            valid = false;
        } else {
            setError(nameInput, false);
        }

        // Check email
        if (emailInput.value.trim() === '' || !isEmailValid(emailInput.value.trim())) {
            setError(emailInput, true);
            valid = false;
        } else {
            setError(emailInput, false);
        }

        // Check message
        if (messageInput.value.trim() === '') {
            setError(messageInput, true);
            valid = false;
        } else {
            setError(messageInput, false);
        }

        if (valid) {
            // Simulate successful form submission
            successMsg.style.display = 'block';
            form.reset();
            
            // Remove error classes if any
            [nameInput, emailInput, messageInput].forEach(el => setError(el, false));
        }
    });

    // Real-time error removal on typing
    const inputs = [nameInput, emailInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                setError(input, false);
            }
        });
    });
});
