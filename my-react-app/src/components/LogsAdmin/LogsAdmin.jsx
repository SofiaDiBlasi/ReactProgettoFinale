/*import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getLogs, deleteLog } from "../../config/logsService";

export function LogsAdmin(){
    const [logs,setLogs] = useState([]);

    useEffect(()=>{
        async function fetchLogs(){
            const logs = await getLogs();
            setLogs(logs);
        }
        fetchLogs();
    },[]);

    async function cancella(event,id) {
        event.preventDefault();
        deleteLog(id);
    }

    return<>
        <div>
        {logs.map((element) => (
                <div className="card">
                    <h3>{element.message} {element.date}</h3>
                    <button className="btn btn-primary w-25" onClick={(event)=>cancella(event,element.id)} type="button">Cancella</button>
                </div>
            ))}
        </div>
    </>
}*/