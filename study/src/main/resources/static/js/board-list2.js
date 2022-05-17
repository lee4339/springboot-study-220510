/**
 * 
 */
 
 const boardListTable = document.querySelector('.board-list-table');
 const boardListPage = document.querySelector('.board-list-page');
 const pageButton = boardListPage.querySelectorAll('div');
 
 
 let nowPage = 1;
 
 load(nowPage);
 
 function load(page) {
	$.ajax({
		type: "get",
		url: "/board/list",
		data: {
			"page": page
		},
		dataType: "text",
		success: function(data){
			console.log(data);
			let boardList = JSON.parse(data);
			getBoardList(boardList.data);
			getBoardItems();
		},
		error: function(){
			alert("비동기 처리 오류");
		}
	});
}

function getBoardList(data){
	while(boardListTable.hasChildNodes()){
		boardListTable.removeChild(boardListTable.firstChild);
	}
	let tableStr = `
	<tr>
		<th>번호</th>
		<th>제목</th>
		<th>작성자</th>
		<th>조회수</th>
	</tr>
	`
	for(let i = 0; i < data.length; i++){
		tableStr += `
		<tr class="board-items">
			<td>${data[i].boardCode}</td>
			<td>${data[i].title}</td>
			<td>${data[i].username}</td>
			<td>${data[i].boardCount}</td>
		</tr>
		`;
	}
	
	boardListTable.innerHTML = tableStr;
	
}

for(let i = 0; i < pageButton.length; i++) {
	pageButton[i].onclick = () => {
		nowPage = pageButton[i].textContent;
		load(nowPage);
	}
}

function getBoardItems() {
	const boardItems = document.querySelectorAll('.board-items');
	for(let i = 0; i < boardItems.length; i++) {
	boardItems[i].onclick = () => {
			alert(boardItems[i].querySelectorAll('td')[0].textContent);
		}
	}

}


/*
function getData() {
	return new Promise(function(resolve, reject) {
		var date = 100;
		if(data > 100) {
			resolve(data);
		}
		throw reject(new Error("Request is failed" + data));
	});
}
	
// resolver()의 결과 값 data를 resolvedData로 받음
getData()
.then(resolvedData => console.log(resolvedData))
.catch(error => console.log(error));

new Promise((resolve, reject) => setTimeout((() => resolve(1)), 2000))
.then(result => {console.log(result); return result + 10;})
.then(result => {console.log(result); return result + 20;})
.then(result => console.log(result));
*/