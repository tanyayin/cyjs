
function add(num){
	for(var i=1;i<=6;i++){
		if(num==i){
			document.getElementById("zj_tit"+i).className = "off";
			document.getElementById("zj_txt"+i).className = "ld_zj_txt";
		}else{
			document.getElementById("zj_tit"+i).className = "on";
			document.getElementById("zj_txt"+i).className = "hidden";
		}
	}
	
}

