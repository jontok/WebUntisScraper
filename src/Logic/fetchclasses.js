import {useState,useEffect} from 'react';

function FetchClasses(props) {
    var domain = props.domain;
    var id = props.id;
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`http://localhost:5000/classes/${domain}/${id}`)
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
      console.log(items);
    return (
      <table>
          <thead>
              <th>Class</th>
              <th>ID</th>
          </thead>
          <tbody>
        {items.course.map(item => (
            <tr>
            <td key={item.id}>
                        {item.name} 
                    </td>
                   <td>{item.id}</td>
            </tr>
           ))}
        </tbody>
      </table>
    );
  }

}

export default FetchClasses;