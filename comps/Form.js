const Form = () => {
    return (  
        <div>
        <div>
            <label for="taskinput">Tarea</label>
            <input
                type="text"
                id="taskinput"
            />
            <button>Agregar</button>
        </div>

        <div >
            <button>Eliminar Tareas Terminadas</button>
            <button>Eliminar Todas Las Tareas</button>
        </div>
    </div>

    );
}
 
export default Form;