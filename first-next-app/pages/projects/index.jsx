import Link  from "next/link";
import { useRouter } from "next/router";
import axios  from "axios";

export default function ProjectsPage(props){
    const projects = props.list;
    return (
        <>
            <h3>Projects [refactored]</h3>
            <hr/>
            <ul>
                { projects.map(project => (
                    <li key={project.id}>
                        <Link href={{
                                pathname : '/projects/[projectId]',
                                query : {
                                    projectId : project.id
                                }
                            }}
                        >{project.name}</Link>
                    </li>)
                  )
                }
            </ul>
        </>
    )
}


async function getProjectsFromServer(){
    const response = await axios.get('http://localhost:3030/projects')
    return response.data
}

/* 

// To implement - SSR
export async function getServerSideProps(){
    const projects = await getProjectsFromServer()
    return {
        props : {
            list : projects
        }
    }
} 
*/

// To implement - SSG (page rendered during application build)
export async function getStaticProps(){
    const projects = await getProjectsFromServer()
    return {
        props : {
            list : projects
        }
    }
} 
