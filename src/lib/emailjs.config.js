// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
    // Your EmailJS Service ID (e.g., 'service_abc123')
    SERVICE_ID: 'service_n32nkho',

    // Your EmailJS Template ID for receiving messages (e.g., 'template_xyz789')
    TEMPLATE_ID: 'template_n6r78so',

    // Your EmailJS Template ID for auto-reply to users (e.g., 'template_abc456')
    // Create this template in EmailJS dashboard with variables: to_email, to_name
    AUTOREPLY_TEMPLATE_ID: 'template_v1frh42',

    // Your EmailJS Public Key (e.g., 'abcdefghijklmnop')
    PUBLIC_KEY: 'Ak5mOHPxjhMXlqfaQ',
};

// Template variables that will be sent to EmailJS:
// - from_name: User's name from the form
// - from_email: User's email from the form
// - message: User's message from the form
// - to_name: Your name (can be set in EmailJS template)
