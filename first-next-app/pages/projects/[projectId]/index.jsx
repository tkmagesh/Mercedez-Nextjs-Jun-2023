import { useRouter } from "next/router";
import axios from "axios";

export default function ProjectInfoPage(props){
    const { project } = props;
    console.log(props);

    return (
        <>
            <h3>{project?.name} - [{project?.id}]</h3>
            <hr/>
            <div>{project?.desc}</div>
        </>
    )
}

export async function getStaticProps({params}){
    const { projectId } = params;
    const response = await axios.get(`http://localhost:3030/projects/${projectId}`)
    return {
        props : {
            project : response.data
        }
    }
}

export async function getStaticPaths(){
    const paths = [
        {
            params : {
                projectId : "1"
            }
        },
        {
            params : {
                projectId : "2"
            }
        }
    ]
    return {
        paths : paths,
        fallback : true
    }
}