import { useForm } from "./hooks/useForm";

const AddTasks = ({handleNewTodo}) => {

  const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input 
            type="text"
            className="input-add"
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="¿Que hay que hacer?" />
            <button className="btn-add" type="submit">Agregar</button>
        </form>
    </div>
  )
}

export default AddTasks