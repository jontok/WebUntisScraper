import {useState,useEffect} from 'react';

function FetchClasses(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  var [id, setSchool] = useState("K175055");
  var [domain, setDomain] = useState("hektor.webuntis.com");

  
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    setDomain(props.domain);
    setSchool(props.id);
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
    return (
        <select className='input' >
          {items.course.map(item => (
              <option value={item.id} key={item.id}>
                {item.name} 
              </option>
            ))}
        </select>
    );
  }

}

export default FetchClasses;