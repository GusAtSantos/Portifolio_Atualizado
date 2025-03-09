import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importe o EmailJS
import "../assets/styles/contact_css.css";

const Forms = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Nome é obrigatório';
        if (!formData.email) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }
        if (!formData.message) newErrors.message = 'Mensagem é obrigatória';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Configurações do EmailJS
            const serviceID = 'service_6ngxrmg'; // Substitua pelo seu Service ID
            const templateID = 'template_r8zzhos'; // Substitua pelo seu Template ID
            const userID = 'x6lpyhnZocW4A2rOf'; // Substitua pelo seu User ID

            // Envia o e-mail usando o EmailJS
            emailjs.sendForm(serviceID, templateID, e.target, userID)
                .then((result) => {
                    console.log('E-mail enviado com sucesso!', result.text);
                    alert('Mensagem enviada com sucesso!');
                    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
                }, (error) => {
                    console.log('Erro ao enviar o e-mail:', error.text);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                });
        } else {
            console.log('Formulário contém erros');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem..."
        />
                {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-button">
                Enviar
            </button>
        </form>
    );
};

export default Forms;