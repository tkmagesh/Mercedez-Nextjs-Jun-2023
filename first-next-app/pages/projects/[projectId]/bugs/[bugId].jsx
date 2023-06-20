
import { useRouter } from "next/router";

export default function BugInfoPage(){
    const router = useRouter()
    const { projectId, bugId} = router.query;

    return (
        <>
            <h3>Bug - [{bugId} = (Project : {projectId})]</h3>
            <hr/>
            <div>Information about [{bugId}] will be displayed here...</div>
        </>
    )
}