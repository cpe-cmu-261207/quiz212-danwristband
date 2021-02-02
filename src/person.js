function person(props) {
  const { personlist } = props;
  return (
    // <div className="tattoo-item">
    //     <img src={tattoo.thumbnailUrl} onClick={() => onTattooClick(tattoo)} />
    //     <h4>{tattoo.title}</h4>
    // </div>

    <table class="table is-bordered mb-3">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{personlist.name}</td>
          <td>{personlist.gender}</td>
          <td>{personlist.age}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default person;
