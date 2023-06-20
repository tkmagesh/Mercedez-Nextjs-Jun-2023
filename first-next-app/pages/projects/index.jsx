import Link  from "next/link";
import { useRouter } from "next/router";
import axios  from "axios";
import styles from './index.module.css'

export default function ProjectsPage(props){
    const router = useRouter()
    const projects = props.list;
    const onBtnProjectClick = (projectId) => {
        router.push({
            pathname : '/projects/[projectId]',
            query : {
                projectId : projectId
            }
        })
    }
    return (
        <>
            <h3>Projects</h3>
            <hr/>
            <ul className={styles.list}>
                { projects.map(project => (
                    <li className={styles.listItem} key={project.id}>
                        <span className={styles.projectName}>{project.name}</span>
                        <div className={styles.projectDesc}>{project.desc}</div>
                        <button onClick={() => onBtnProjectClick(project.id)}>Show Bugs</button>
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



// To implement - SSR
export async function getServerSideProps(){
    const projects = await getProjectsFromServer()
    return {
        props : {
            list : projects
        }
    }
} 


// To implement - SSG (page rendered during application build)
/* export async function getStaticProps(){
    const projects = await getProjectsFromServer()
    return {
        props : {
            list : projects
        },
        revalidate : 10
    }
}  */
