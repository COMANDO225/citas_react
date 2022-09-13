import { useState, useEffect } from 'react';
import BannerError from './BannerError';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);


    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return(random + fecha);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del formulario
        if( [nombre, propietario, email, fecha, sintomas].includes('') ) {
            setError(true);
            return;
        } 

        setError(false);


        // Objeto de pacientes
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        } 

        if(paciente.id){
            // Editando el registro
            console.log('Editando')
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})

        }else{
            // Nuevo registro
            objetoPaciente.id = generarId(),
            setPacientes([...pacientes , objetoPaciente]);
        }


        // Reiniciando el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    };


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-center text-3xl'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-4 text-center mb-10'>
                Añade Pacientes y
                <span className='text-indigo-600 font-bold'> Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-md py-10 px-5'
            >
                { 
                    error && 
                    <BannerError/>
                }
                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor="mascota">Nombre Mascota</label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className={`border-2 w-full mt-1 placeholder-gray-400 rounded-md p-1 ${error && 'border-red-600'}`}
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre del Propietario'
                        className={`border-2 w-full mt-1 placeholder-gray-400 rounded-md p-1 ${error && 'border-red-600'}`}
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email Contacto'
                        className={`border-2 w-full mt-1 placeholder-gray-400 rounded-md p-1 ${error && 'border-red-600'}`}
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor="alta">Alta</label>
                    <input
                        id='alta'
                        type="date"
                        className={`border-2 w-full mt-1 placeholder-gray-400 rounded-md p-1 ${error && 'border-red-600'}`}
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label className='text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
                    <textarea
                        id='sintomas'
                        placeholder='Describir sintomas'
                        className={`border-2 w-full mt-1 placeholder-gray-400 rounded-md p-1 ${error && 'border-red-600'}`}
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className='bg-indigo-600 w-full p-3 font-bold text-white rounded-md cursor-pointer hover:bg-indigo-700 uppercase '
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario

