<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript">
	$(function() {
		$('button').click(function() {
			var nation = $(this).attr('id').replace('-btn', '');
			$('#food-list').empty();
			$.ajax({
				type:"get",
				url:"../food.json?na="+nation,
				success:function(data){		// data에는 배열 형식의 데이터가 들어있다.
					$.each(data, function(index, item) {
						$('#food-list').append("<li class='list-group-item'>"+item+"</li>");
					});
				}
			});
		});
	});
</script>
<title>sample</title>
</head>
<body>
	<div class="container">
		<h1>메뉴 고르기</h1>
		
		<div>
			<button id="kr-btn" class="btn btn-default">한국</button>
			<button id="ch-btn" class="btn btn-default">중국</button>
			<button id="ja-btn" class="btn btn-default">일본</button>
		</div>
		<hr>
		<ul id="food-list" class="list-group">
			<li class="list-group-item">없음</li>
		</ul>
	</div>
</body>
</html>