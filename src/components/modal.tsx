import { ReactNode } from "react"

const Root = ({children}:{children:ReactNode})=>{
    return <>
        {children}
    </>
}

const Trigger = ()=>{
    return "TRIGER";
}

const Content = ()=>{

}


export {
    Root,
    Trigger,
    Content
}
