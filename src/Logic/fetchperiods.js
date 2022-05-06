import {useState,useEffect} from 'react';


function FetchPeriods(props) {
    var domain = props.domain;
    var id = props.id;
    var classid = props.classid;
    var date = props.date;
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`http://localhost:5000/periods/${domain}/${id}/${classid}/${date}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
          <thead>
              <th>Course</th>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Room</th>
              <th>Changed</th>
          </thead>
          <tbody>
        {items.periods.map(item => (

            <tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.date}</td>
                   <td>{item.start}</td>
                   <td>{item.end}</td>
                   <td>{item.room}</td>
                   <td>{(item.changed) ? "Changed" : ""}</td>

            </tr>
           ))}
        </tbody>
      </table>
    );
  }

}

export default FetchPeriods;