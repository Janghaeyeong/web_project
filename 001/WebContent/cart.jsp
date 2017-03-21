<%@page import="dao.CartDAO"%>
<%@page import="vo.CartVO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="javax.script.ScriptEngineManager"%>
<%@page import="javax.script.ScriptEngine"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" session="false"%>
<%
	CartDAO dao = new CartDAO();
	ArrayList<CartVO> cartList =  dao.testCart();
	
%>
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
	<%@include file="nav.jsp" %>
	<div class="jumbotron text-center">
		<p>my cart</p>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2">
				<div class="text-right">
					<table class="table table-striped table-hover text-center">
						<thead>
							<tr>
								<th class="text-center">
									<input id="checkbox" type="checkbox" checked="checked">
								</th>
								<th class="text-center">photo</th>
								<th class="text-center">productName</th>
								<th class="text-center">count</th>
								<th class="text-center">point</th>
								<th class="text-center">price</th>
								<th class="text-center">completed</th>
							</tr>
						</thead>
						<tbody>
						<% 
							for (CartVO cart : cartList) {
						%>
							<tr>
								<td>
									<input name="isCheck" type="checkbox" checked="checked"  value="<%=cart.getItem().getItemNo()%>">
								</td>
								<td>
									<img src="<%=cart.getItem().getItemSrc() %>" alt="<%=cart.getItem().getItemSrc() %>">
								</td>
								<td>
									<div class="row">
										<%=cart.getItem().getItemName()%>
									</div>
								<hr>
									<div class="row">
										<%=cart.getItem().getItemEtc() %>
									</div>
								</td>
								<td>
									<select class="form-control" id="qty-<%=cart.getItem().getItemNo()%>">
							          <option value="1">1</option>
							          <option value="2">2</option>
							          <option value="3">3</option>
							          <option value="4">4</option>
							          <option value="5">5</option>
							        </select>
								</td>
								<td>119</td>
								<td class="price"><%=cart.getItem().getPrice() %></td>
								<td class="text-center">
									<a href="#" class="btn btn-default btn-xs">삭제</a>
								</td>
							</tr>
						<%
							}
						%>
						</tbody>	
					</table>
					<button onclick="generateForm();" class="btn btn-default btn-xs">상품주문</button>
					<hr>
					<div class="row">
						<div class="col-sm-8 col-sm-offset-2">
							<div class="well">
								<p class="text-center">상품 최종금액: <span id="productPrice"></span>원 + 배송료 <span id="delivery">2500</span>원  합산금액 <span id="totalPrice"></span>원</p>
								<p class="text-center" style="color:red;">총 구매금액이 5만원보다 많으면 배송비가 무료입니다.</p>
							</div>
						</div>
					</div>
				</div>
				<form id="my-form" method="post" action="cartRegister.jsp">
				</form>
			</div>
		</div>
	</div>
	<hr>
	<%@include file="footer.jsp" %>
</body>
<script src="/js/cartJavaScript.js"></script>
</html>