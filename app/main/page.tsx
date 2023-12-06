'use client'
import { Button } from "react-bootstrap";
import { useAppContext } from "../context/ApiContext"

export default function Page() {
    const { name, setName } = useAppContext();
    return (
        <>
            <div>Page  {name} </div>
            <Button onClick={e => setName('Singnakong')}>คลิก</Button>
        </>

    )
}
