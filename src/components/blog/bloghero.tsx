import ReadingProgress from "@/components/blog/progress"

export default function BlogHero({
    title, author,date,
}:{title:string,author:string,date:string}){
    return(
        <div className=" sticky  top-[-1] z-40 backdrop-blur-md border-b border-gray-800 py-1">

            <h1 className="main-headings text-center mb-1">
                {title}
            </h1>
            <p className="text-center text-(--text-muted) uppercase">{author} • {date}</p>
            <ReadingProgress/>
        </div>
    )
}