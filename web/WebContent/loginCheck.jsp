<%@page import="vo.UserVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" session="false"%>
<%
	HttpSession session = request.getSession(false);
	if (session == null) {
		response.sendRedirect("loginForm.jsp?err=deny");
		return;
	} 
	UserVO user = (UserVO) session.getAttribute("LOGINED_USER");
	if (user == null) {
		response.sendRedirect("loginForm.jsp?err=deny");
		return;
	}
%>