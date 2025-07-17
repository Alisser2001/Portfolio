import emailjs from '@emailjs/browser';

export default async function emailJS(data) {
    let dataForm = document.createElement("form");
    let inputName = document.createElement("input");
    inputName.type = "text";
    inputName.value = data.user_name;
    inputName.name = "from_name";
    dataForm.appendChild(inputName);
    let inputGmail = document.createElement("input");
    inputGmail.type = "text";
    inputGmail.value = data.user_email;
    inputGmail.name = "from_email";
    dataForm.appendChild(inputGmail);
    let inputSubject = document.createElement("input");
    inputSubject.type = "text";
    inputSubject.value = data.subject;
    inputSubject.name = "subject";
    dataForm.appendChild(inputSubject);
    let inputMessage = document.createElement("input");
    inputMessage.type = "text";
    inputMessage.value = data.message;
    inputMessage.name = "message";
    dataForm.appendChild(inputMessage);

    return await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, dataForm, process.env.NEXT_PUBLIC_KEY)
}