//DOM func
function _(data){
	return document.querySelector(data);
}

//value
const form = _('#form');
const btn = _('#search-btn');
const dictOne = dict_1;


//Search Class
class Search {
	constructor(){
		this.dictOne = dictOne;
		this.result = [];
	}
	//search eng
	engSearch (eng){
		eng = eng.toUpperCase();
		
		if(this.dictOne.length > 0){
			//loop
			this.result = this.dictOne.filter(dict => this.wordCheck(dict.en.toUpperCase(), eng));
		}

		this.showResult(this.result);
	}

	//Show result
	showResult (result){
		let res = '';
		if(result.length == 0){
			return _('#found-words').innerHTML = '<h3>Not Found!</h3>';
		}
		result.forEach(out =>{
			res += 
			`<li class="list-item">
				<strong class="strong">ENG</strong>:${out.en}<br>
				<strong class="strong">State</strong>:${out.state}<br>
				<strong class="strong">MM</strong>:${out.mm}<br>
			</li>`
		})
		_('#found-words').innerHTML = res;
	}

	//check 
	wordCheck(name,eng){
		let reg = new RegExp(eng, 'gi');
		name = reg.test(name);
		return name;
	}


}

//class init
const search = new Search();


//Event
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let word = _('#search').value;

	search.engSearch(word);	

})

// _('#search').addEventListener('input',(e)=>{
// 
// 	search.engSearch(e.target.value);
// })