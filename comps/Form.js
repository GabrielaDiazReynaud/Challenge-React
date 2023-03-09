const Form = ({tasksList}) => {
    return (  
        <div>
        <div className="mb-3 d-flex flex-wrap justify-content-center align-items-center">
            <label  className="form-label" htmlFor="taskinput">Tarea</label>
            <input
                className="m-2 p-1"
                type="text"
                id="taskinput"
            />
            <button className="btn btn-success">Agregar</button>
        </div>

        <div className="d-grid gap-2 " >
            <button className="btn btn-primary">Eliminar Tareas Terminadas</button>
            <button className="btn btn-dark">Eliminar Todas Las Tareas</button>
        </div>
    </div>

    );
}
 
export default Form;