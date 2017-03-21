	
	function generateForm() {
		
		var form = document.getElementById("my-form");
		
		var html = "";
		var checkbox = document.getElementsByName('isCheck');
		for (var i=0; i<checkbox.length; i++) {
			
			if (checkbox[i].checked) {
				console.log(i);
				html += '<input type="hidden" name="no" value="'+checkbox[i].value+'">';
				var qty = document.getElementById('qty-'+ checkbox[i].value).value;
				html += '<input type="hidden" name="qty" value="'+qty+'">';
				
			}
			
		}
		form.innerHTML += html;
		form.submit();
		
	}
	
	// 바디태그 초기화
	var bodyLoad = document.getElementsByTagName('body');
	for (var a=0; a<bodyLoad.length; a++) {
		
		//클래스명이 price 인태그들을 담아서 allPrice 변수에 담다.
		var allPrice = document.getElementsByClassName('price');
		
		// 바디태그 로드시 사용변수값 초기화
		var allProductPrice = 0;
		
		for (var a=0; a<allPrice.length; a++) {
			
			// allPrice[a]번째에 있는 textContent를 숫자로 변환시켜서 allProductPrice에 누적시킨다.
			allProductPrice += parseInt(allPrice[a].textContent);
			
			// 아이디가 productPrice인 태그에 textContent에다가 누적시킨 allProductPrice를 대입시킨다.
			document.getElementById('productPrice').textContent = allProductPrice;
			
			// 만약에 allProductPrice 가 50000원 보다 작으면
			if (allProductPrice < 50000) {
				
				// 아이디가 delivery인 태그에 textContent를 2500으로 지정하고
				document.getElementById('delivery').textContent = '2500';
				// allProductPrice와 방금 2500으로 지정한 delivery를 숫자로 변환해 더하고 bookPrice변수에 담는다
				bookPrice = allProductPrice + parseInt(document.getElementById('delivery').textContent);
				// 아이디가 totalPrice 인 html 태그를 찾아서 방굼 bookPrice에 담긴 값을 html화면에 넣어준다.
				document.getElementById('totalPrice').innerHTML = bookPrice;
				
			//만약에 allProductPrice가 50000원 이상이면
			}else {
				
				// delivery태그에 0을 대입하고
				document.getElementById('delivery').textContent = '0';
				// 0을 대입한것과 allProductPrice를 더해서 bookPrice 변수에 담는다
				bookPrice = allProductPrice + parseInt(document.getElementById('delivery').textContent);
				// 담은것을 totalPricehtml안에 담아 화면에 넣어준다.
				document.getElementById('totalPrice').textContent = bookPrice;
				
			}
		}
	}
	
	//제일 상단 체크박스 클릭 이벤트 (가격 초기화)
	document.getElementById("checkbox").addEventListener('click', 
		function(e) {
			// 태그명이 input인 태그들을 모아서 inputs 변수에 담는다
			var inputs = document.getElementsByTagName("input");
			
			// 클릭 이벤트 함수 시작시 사용변수값 초기화
			var productPrice = 0;
			for (var a=0; a<checkbox.length; a++) {
				
				// 가격이적힌 price들안에 textContent를 담아서 숫자로 변환후 productPrice에 담는다.
				test = checkbox[a].parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
				productPrice += parseInt(test.textContent);
				
			}
			
			// input이 include 한 nav에 도 1개 있음으로 i를 0이 아닌 1부터 시작한다.
			for(var i=1; i<inputs.length; i++){
				
				// 각각 불러서 담아둔 변수 inputs에 있는 것들을 input에 하나씩 부르고 'checked'속성명을 불러 checked에 담는다
				var input = inputs[i];
				var checked = input.getAttribute('checked');
				
				// 만약에 부른 속성이 true면
				if (checked) {
					console.log(true);
					// 맨위에 checkBox를 눌렀을때 checked 속성을 전부지우고 false로 해둔다.
					input.removeAttribute('checked');
					input.checked = false;
					
					// 속성을 지우고 false로 해둠과 동시에 delivery에는 모든 체크가지워져있음으로 2500을 넣어주고 나머지는 0으로 한다.
					document.getElementById('delivery').textContent = '2500';
					document.getElementById('productPrice').innerHTML = '0';
					document.getElementById('totalPrice').innerHTML = '0';
					
					// 만약 부른속성이 true이 아니라 false면
				}else {
					console.log(false);
					// input태그에 checked속성을 부여하고 checked로 설정하고 true로 한다.
					input.setAttribute('checked', 'checked');
					input.checked = true;
					
					
					document.getElementById('productPrice').innerHTML = productPrice;
					document.getElementById('totalPrice').innerHTML = productPrice;
					
					// productPrice가 50000원보다 미만이면 실행됨
					if (productPrice < 50000) {
						
						var deliveryPrice = document.getElementById('delivery').textContent = '2500';
						document.getElementById('totalPrice').innerHTML = productPrice + parseInt(deliveryPrice);
						
						// productPrice가 50000원보다 초과하면 실행된다.
					}else {
						
						document.getElementById('delivery').textContent = '0';
						
					}
				}
			}
	});
	
	// 수량 셀렉박스 클릭이벤트
	var selects = document.getElementsByTagName('select');
	for (var a=0; a<selects.length; a++) {
		
		selects[a].addEventListener('click', function() {
			
			// 클릭 이벤트 함수 시작시 사용변수값 초기화
			var totalPrice = 0;
			var test ='';
			var productPrice = 0;
			var bookPrice = 0;
			
			for (var b = 0; b<selects.length; b++){
				
				if (checkbox[b].checked) {
					
					test = checkbox[b].parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
					productPrice = totalPrice += parseInt(test.textContent) * selects[b].value;
					
				}
			}
			
			if (productPrice < 50000) {
				
				document.getElementById('productPrice').innerHTML = productPrice;
				document.getElementById('delivery').textContent = '2500';
				bookPrice = productPrice + parseInt(document.getElementById('delivery').textContent);
				document.getElementById('totalPrice').innerHTML = bookPrice;
				
			}else {
				
				document.getElementById('productPrice').innerHTML = productPrice;
				document.getElementById('delivery').textContent = '0';
				document.getElementById('totalPrice').innerHTML = productPrice;
				
			}
		});
	}
	
	// 체크박스 클릭이벤트
	var checkbox = document.getElementsByName('isCheck');
	
	for (var a=0; a<checkbox.length; a++) {
		
		checkbox[a].addEventListener('click', function() {
			
			// 클릭 이벤트 함수 시작시 사용변수값 초기화
			var totalPrice = 0;
			var test ='';
			var productPrice = 0;
			var bookPrice = 0;
			
			for (var b=0; b<checkbox.length; b++) {
				
				if (checkbox[b].checked) {
					
					test = checkbox[b].parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
					productPrice = totalPrice += parseInt(test.textContent)*selects[b].value;
					
				}
			}
			
			if (productPrice < 50000) {
				
				document.getElementById('productPrice').innerHTML = productPrice;
				document.getElementById('delivery').textContent = '2500';
				bookPrice = productPrice + parseInt(document.getElementById('delivery').textContent);
				document.getElementById('totalPrice').innerHTML = bookPrice;
				
			}else {
				
				document.getElementById('productPrice').innerHTML = productPrice;
				document.getElementById('delivery').textContent = '0';
				document.getElementById('totalPrice').innerHTML = productPrice;
				
			}
			
		});
	}
	
	// 상품을 한가지이상 고르지않을시 띄어주는 창
	// document.getElementById('btn').addEventListener('click', function() {
	//	var unChecked=0;
	//	for (var i=0; i<checkbox.length; i++) {
	//		if(!checkbox[i].checked){
	//			unChecked ++;
	//		}
	//	}
	//	if (unChecked == checkbox.length){
	//		alert('상품을 한가지 이상 고르셔야 됩니다.');
	//		return false;
	//	}
		
	// });
	