export default function Input( {children, ...props}) {

return (
    <div id="user-input " {...props}>
        <label htmlFor=""> {children}</label>
        <input type="text" />
    </div>
) }