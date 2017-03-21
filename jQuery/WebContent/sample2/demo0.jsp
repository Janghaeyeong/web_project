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
<title>sample</title>
</head>
<body>
	<h1>사원정보조회</h1>
	<button onclick="getData()">조회</button>
</body>
<script type="text/javascript">
	function abc(data){
		alert(JSON.stringify(data));
	}

	function getData() {
		/* // <script>태그 만들기
		var scriptEL = document.createElement("script");
		scriptEL.setAttribute('type', 'text/javascript');
		scriptEL.setAttribute('src', 'http://192.168.10.116?callback=abc');
		
		document.getElementsByTagName('body')[0].appendChild(scriptEL);
		 */
		 
		 $("<script><\/script>")
		 	.attr("type","text/javascript")
		 	.attr("src", "http://192.168.10.116/jquery/getData?callback=abc")
		 	.appendTo("body");
	};
</script>
</html>