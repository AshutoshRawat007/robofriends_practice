import React from 'react';
import CardList from'../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component 
{
	constructor(){
		super();
		this.state={
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		}).then(users=>{
			this.setState({robots:users});
		})

		
		 console.log('check2');
	}

onSearchChange=(event)=>{
	this.setState({searchfield:event.target.value })
	// console.log(filter);
	}

	render()
	{
		const{ robots, searchfield} = this.state;	

	const filter = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return(

			<div className='tc'>
			<h1 className = 'f1'>Robot friends</h1>
			<SearchBox searchChange ={this.onSearchChange}/>
			<Scroll>
				<CardList robots ={filter}/>
			</Scroll>
			</div>
		);
	}
	
}

export default App;