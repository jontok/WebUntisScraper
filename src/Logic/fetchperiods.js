import {useState,useEffect} from 'react';

function FetchPeriods(props) {
    var domain = props.domain;
    var id = props.id;
    var classid = props.classid;
    var date = props.date;

    var options = { weekday: 'long'};
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
          setItems(result.periods);
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

  function changeTime(time) {
    var four_digit;
    if (time.toString().length === 3){
      four_digit = "0" + time.toString();
    } else {
      four_digit = time.toString();
    }

    var new_time = `${four_digit.substring(0,2)}:${four_digit.substring(2,4)}`

    return new_time;
  }

  function changeDate(date) {
    var date_string = `${date.toString().substring(0,4)}-${date.toString().substring(4,6)}-${date.toString().substring(6,8)}`;
    return date_string;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    var itemse = items.sort((a,b) => (a.date > b.date));
    var periods_mon = itemse.map((item) =>

      <div key={item.id} className="period">
        <p className={(item.changed) ? "changed" : ""}>{(item.changed) ? "NEW" : ""}</p>
        <p>{item.name}</p>
        <p>{changeDate(item.date)}</p>
        <p>{changeTime(item.start)}</p>
        <p>{changeTime(item.end) }</p>
        <p>{item.room}</p>
        
      </div>
    );
    var periods_tue;
    var periods_wed;
    var periods_thu;
    var periods_fri;


    return (
      <div className='timetable'>
        { periods_mon }
      </div>
    );
  }

}

export default FetchPeriods;