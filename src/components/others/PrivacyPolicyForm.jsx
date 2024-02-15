import React, { useState } from 'react';
import dropdown from "../../images/dropdown.webp";
import {LazyLoadImage} from "react-lazy-load-image-component";
import thankLog from "../../images/thank-page.webp";
import thankPageReview from "../../images/thank-page-review.jpg"

const PrivacyPolicyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dropdownOption: 'Solicitud de información',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); 

    const newErrors = {};

    // Check for empty fields and set errors for each one
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'Este campo es obligatorio';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Este campo es obligatorio';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Este campo es obligatorio';
    }
    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Este campo es obligatorio';
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Este campo es obligatorio';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(true)
    const data = {
        data: {
          First_name: formData.firstName,
          Last_name: formData.lastName,
          Email: formData.email,
          Phone_number: formData.phoneNumber,
          Type: formData.dropdownOption,
          Message: formData.message,
         
        },
      };
    
    try {
        const response = await fetch(
          `${process.env.REACT_APP_STRAPI_API_URL}/api/privacy-policy-messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
            },
            body: JSON.stringify(data), 
          }
        );
          await response.json();
         
      } catch (error) {
        console.error("Error:", error);     
      }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dropdownOption: 'Solicitud de información',
      message: '',
    });
  };

  return (
      <>
      <div className="bg-hero-section bg-cover flex flex-col justify-center items-center py-20">
            <div className="flex flex-col align-middle w-auto px-3 sm:px-0 sm:w-4/5 md:w-3/4 lg:w-2/4 text-white text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-10 tracking-wide">
                     Formulario de privacidad de Mejor Empresa
                  </div>    
            </div>
        </div>
     {submitted ? (
      <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-14 px-4 sm:px-12 md:px-32 pt-20 pb-20 font-semibold">
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 h-full">
          <img src={thankLog} alt="thank you logo" className="h-24 w-auto rounded-lg mb-4 sm:mb-0" />
          <div className="w-8/12 ">
          <div className="font-bold text-center text-2xl mt-8">
            Gracias por enviarnos su solicitud
          </div>
          <div className="text-grey-400 text-center mt-2 ml-1">
            Su petición sobre la privacidad de su información será procesada a la brevedad por el equipo de Mejor Empresa
          </div>
          </div>
        </div>
      <img src={thankPageReview} alt="review" className="h-64 w-auto rounded-md mx-auto sm:ml-4" />
    </div>
    
     
     ):(
      <>
      <div className="px-4 sm:px-12 md:px-32 py-10">
        <div>
          Por favor llene este formulario para enviarnos su solicitud referente a la privacidad de su información personal procesada por Mejor Empresa.   
        </div>
          <div className='mt-2'>
            Puede consultar nuestra
            <a href="https://mejorempresa.nablasol.net/politica-de-privacidad" className="text-blue-600 underline ml-1 mr-1">
              Política de privacidad
            </a>
            para obtener más información sobre cómo utilizamos y mantenemos protegida su información personal.
         </div>
      <div className=" mt-10">
        <form onSubmit={handleSubmit}>
          <input
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ?'border-solid border-[#9a2302]':''}`}
            type="text"
            placeholder="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            
          />
           {errors.firstName && (
                  <p className="text-[#9a2302] text-sm mt-1 font-bold">{errors.firstName}</p>
            )}
          <input
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-7 ${errors.firstName ?'border-solid border-[#9a2302]':''}`}
            type="text"
            placeholder="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            
          />
          {errors.lastName && (
                  <p className="text-[#9a2302] text-sm mt-1 font-bold">{errors.lastName}</p>
            )}
          <input
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-7 ${errors.firstName ?'border-solid border-[#9a2302]':''}`}
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange} 
          />
          {errors.email && (
                  <p className="text-[#9a2302] text-sm mt-1 font-bold">{errors.email}</p>
            )}
          <input
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-7 ${errors.firstName ?'border-solid border-[#9a2302]':''}`}
            type="tel"
            placeholder="Número de teléfono"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            
          />
          {errors.phoneNumber && (
                  <p className="text-[#9a2302] text-sm mt-1 font-bold">{errors.phoneNumber}</p>
            )}
         <div className="relative flex items-center w-full mt-7">
            <select
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline pr-12" // Added pr-12 for padding on the right side
                name="dropdownOption"
                value={formData.dropdownOption}
                onChange={handleChange}
                
            >
                <option value="Solicitud de información">Solicitud de información</option>
                <option value="Eliminar los datos">Eliminar los datos</option>
                <option value="Actualizar los datos">Actualizar los datos</option>
                <option value="Darse de baja del correo electrónico">Darse de baja del correo electrónico</option>
                <option value="Optar por no vender/compartir datos">Optar por no vender/compartir datos</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LazyLoadImage src={dropdown} alt="dropdown" />
            </div>
        </div>

          <textarea
            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-7 ${errors.firstName ?'border-solid border-[#9a2302]':''}`}
            placeholder="Escriba su mensaje aquí"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            
          />
          {errors.message && (
                  <p className="text-[#9a2302] text-sm mt-1 font-bold">{errors.message}</p>
            )}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
      </>
     ) }
    </>
  );
};

export default PrivacyPolicyForm;
