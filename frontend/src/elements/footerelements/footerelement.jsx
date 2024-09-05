
export default function FooterElement({title,description}){
    return(
        <>
             <div >
            <ul>
                <li>
                    <strong>{title}:&nbsp;</strong>{description}
                </li>
            </ul>
        </div>
        </>
    )
}