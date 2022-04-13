import { useRouter } from "next/router";
const Videos =()=>{
    const router = useRouter()
        console.log(router.query.slug,'router.query')
    return(
        <div className="flex justify-center items-center min-h-screen bg-slate-400 ">
        <iframe width="800" height="500" src={`https://www.youtube.com/embed/${router.query.slug}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default Videos;