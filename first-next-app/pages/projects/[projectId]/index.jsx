import { useRouter } from "next/router";
import axios from "axios";

export default function ProjectInfoPage(props){
    const { project } = props;
    return (
        <>
            <h3>{project.name} - [{project.id}]</h3>
            <hr/>
            <div>{project.desc}</div>
        </>
    )
}

export async function getServerSideProps({query}){
    const { projectId } = query;
    const response = await axios.get(`http://localhost:3030/projects/${projectId}`)
    return {
        props : {
            project : response.data
        }
    }
}