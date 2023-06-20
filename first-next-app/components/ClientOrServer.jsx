
import { useEffect, useState } from 'react'
export default function ClientOrServer(){
    const [side, setSide] = useState('')
    if (typeof window === 'undefined'){
        console.log('server side processing')
    }
    useEffect(() => {
        setTimeout(() => {
        setSide('client')
        }, 4000);
    }, []) 
    return (<div>You&apos;re currently on the {side}-side.</div>);
}