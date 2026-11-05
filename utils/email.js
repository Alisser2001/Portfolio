import emailjs from "@emailjs/browser";

export default function sendEmail({ user_name, user_email, subject, message }) {
    return emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        { from_name: user_name, from_email: user_email, subject, message },
        process.env.NEXT_PUBLIC_KEY
    );
}
