# Props

Props allow passing data from parent component to child component.

Example:

<User name="Eman"/>

function User(props){
 return <h1>{props.name}</h1>
}