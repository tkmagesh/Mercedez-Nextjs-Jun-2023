import { useRouter } from "next/router";

export default function ProjectInfoPage(){
    const router = useRouter()
    const { projectId } = router.query
    return (
        <>
            <h3>Project - [{projectId}]</h3>
            <hr/>
            <div>Information about [{projectId}] will be displayed here...</div>
        </>
    )
}