import React, { useEffect, useState } from 'react';
import useJsonFetch from './custom/useJsonFetch';
import './App.css'

const MyComponent = ({type}) => {
 	const [data, loading, error] = useJsonFetch(`http://localhost:7070/${type}`,{})

 	if (loading) {
    return <div>{loading}</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (<div>{data}</div>)

}


const App = () => {
	const [type, setType] = useState('loading')

	useEffect(() => {
		console.log(type)
	},[type])
	
	return (
		<>
			<button onClick={() => setType('data')}>успешное получение данных</button>
			<button onClick={() => setType('error')}>получение 500 ошибки</button>
			<button onClick={() => setType('loading')}>индикатор загрузки</button>
			<MyComponent type={type}/>
		</>
	)
}

export default App;


