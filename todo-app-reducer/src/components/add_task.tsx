import { ChangeEvent, FormEvent, useState } from "react"

interface AddTaskProps {
    onAddTask: (text: string) => void
}

export function AddTask({ onAddTask }: AddTaskProps) {

    const [taskText, setTaskText] = useState('')

    const handlerDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handlerSubmit = (event: FormEvent) => {
        event.preventDefault()
        onAddTask(taskText)
        setTaskText('')
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input className=" text-gray-900 bg-gray-50  border px-2 border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    value={taskText}
                    onChange={handlerDescriptionChange}
                    placeholder="Descrição" />
                <input className="bg-white hover:bg-gray-100 text-gray-800 font-semibold  text-[14px] cursor-pointer  border border-gray-400 rounded shadow  px-3 ml-2 " type="submit" value="Adicionar Tarefa" />
                
            </form>
        </>
    )
}