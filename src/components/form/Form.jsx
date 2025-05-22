export default function Form({children,...spread}) {
  
    return (
        <form {...spread}>
            {children}
        </form>
    )
}
