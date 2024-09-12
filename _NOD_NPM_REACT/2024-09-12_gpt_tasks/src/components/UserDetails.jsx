function UserDetails(props){
    return (
        <div>
      {Object.keys(props.user).map((key, index) => (
        <p key="{index}">
          {key}: {props.user[key]}
        </p>
      ))}
    </div>
    )
}

export default UserDetails;