import React, { Fragment, useState } from 'react';
import ReactDom from 'react-dom';
// import '../style.css'

type FormElem = React.FormEvent<HTMLFormElement>

export default function App(): JSX.Element {

    const sum = (a: number, b: number): number => a + b;

    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    interface ITodo {
        text: string
        complete: boolean
    }


    const handleSubmit = (e: FormElem): void => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

    //testing re-render with using hooks
    console.log('testing', value)

    //console log todos variable
    console.log('todos variable', todos)

    const addTodo = (text: string) => {
        const newTodos: ITodo[] = [...todos, { text, complete: false }];
        setTodos(newTodos);
    }

    return (
        <Fragment>
            <div className="container">
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required />
                    <button type="submit">Add Todo</button>
                </form>
            </div>

            <section>
                {todos.map((todo: ITodo, index: number) =>
                    <div key={index}>{todo.text} ping </div>
                )}
            </section>
        </Fragment>
    )
}

const root = document.getElementById('app-root');

ReactDom.render(<App />, root);
