function InfoCard(props) {
  if (!props.title || !props.content) {
    return;
  }

  return (
    <div className="info-card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default InfoCard;
