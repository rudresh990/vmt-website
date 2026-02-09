type GlassCardProps ={
    children: React.ReactNode,
    className?:string
}

export default function GlassCard({children,className=""}:GlassCardProps){
    return(
        <div className={`${className} vmt-glass-card`}>
            {children}
        </div>
    );
}