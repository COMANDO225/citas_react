import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const rellenarPaciente = () => {
        setPaciente(paciente)
    }

    const handleEliminar = () => {
        const respuesta = confirm('¿Desea eliminar este paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }
    };

    return (
        <div className='bg-white shadow-md rounded-md p-5 mb-5'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                fecha alta: <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='mt-7'>
                <button 
                    className='py-2 px-10 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-700 mr-3' 
                    type='button'
                    onClick={rellenarPaciente}
                >Editar</button>

                <button 
                    className='py-2 px-10 bg-red-600 rounded-md text-white font-semibold hover:bg-red-700' 
                    type='button'
                    onClick={ handleEliminar }
                >Eliminar</button>
            </div>

        </div>
    )
}

export default Paciente
