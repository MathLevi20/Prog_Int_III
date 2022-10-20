import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Task } from "../App"

interface TaskItemProps {
    task: Task
    onChangeTask: any
    onDeleteTask: (taskId: number) => void
}

export function TaskItem({ task, onChangeTask, onDeleteTask }: TaskItemProps) {
    const [taskText, setTaskText] = useState(task.text)
    const [isEditing, setIsEditing] = useState(false)

    // useCallback --> Faz memória da função entre as redenrizações
    const handlerDoneChange = useCallback(() => {
        () => {
            task.done = !task.done
            onChangeTask(task)
        }
    }, [task])


    // Implantar --> useCallback
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    // Implantar --> useCallback
    const handleEditSaveClick = () => {
        if (isEditing) {
            onChangeTask({ ...task, text: taskText })
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }

    // useMemo --> Faz Memória valores entre renderizações/sincronizações
    const buttonLabel = useMemo(() => isEditing ? "Salvar" : "Editar", [isEditing])

    // useHef --> Similar a useState, porém não muda. (atributo current)
    /* Usado geralmente para ficar conectado a algum HTMLElement
      e assim ler ou alterar algum atributo/estado  */
    const inputTaskTextRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        isEditing && inputTaskTextRef.current!.focus()
    }, [isEditing])

    return (
        <>
            <div className="flex  text-white">
                <li key={task.id}>
                    <div className=" self-center flex-none w-6 h-5">
                        <input type="checkbox" checked={task.done} onChange={handlerDoneChange} />
                    </div>
                    <div className="   self-center text-left flex-1 w-80">
                        {
                            isEditing ?
                                (
                                    <input
                                        ref={inputTaskTextRef}
                                        value={taskText}
                                        onChange={handleTextChange}
                                    />
                                )
                                :
                                (<span className="content-center justify-items-center text-center p-2">{task.text}</span>)
                        }
                    </div>
                    <div className=" self-center	">
                        <button className={`mx-1   text-white ${!isEditing ? "bg-yellow-700 hover:bg-yellow-600" : "bg-green-700 hover:bg-green-600"}  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`} onClick={handleEditSaveClick}>{buttonLabel}</button>
                        <button className="mx-1 text-white bg-red-600 hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow " onClick={() => onDeleteTask(task.id)} >Apagar</button>
                    </div>
                </li>
            </div>
        </>
    )
}