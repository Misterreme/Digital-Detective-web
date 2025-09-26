import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../../config.js";

const $ = (id) => document.getElementById(id);
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

const showPasswordButton = $('show-password');
const emailInput = $('email-input');
const passwordInput = $('password-input');
const iconEye = $('icon-eye');
const signUpButton = $('sign-up-button');
const pageForm = $('page-form');

showPasswordButton.addEventListener('click', (e) => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconEye.setAttribute("xlink:href", "../assets/sprite.svg#icon-eye-slash");

    } else {
        passwordInput.type = "password";
        iconEye.setAttribute("xlink:href", "../assets/sprite.svg#icon-eye");
    };
});

pageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser();
});

async function createUser() {
    try {
        const { data, error } = await client.auth.signUp({
            email: emailInput.value,
            password: passwordInput.value,
        });

        if (data !== undefined) {
            window.location.href = "/public";
        };
        
    } catch (error) {
        throw new Error(error);
    };
};

// const { data } = client.auth.onAuthStateChange((event, session) => {
//     console.log(event, session);
// });