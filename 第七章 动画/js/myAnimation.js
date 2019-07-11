/*
动画的函数
@param{object} obj 当前的对象
@param{object} attr 当前元素的对象属性
@param{object} endTarget 末尾位置
*/
var speed = 0;

function startAnimation(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flag = true //当所有值到达标杆的时候设置为true，来判断是否关闭定时器
		var cur = 0; 
		for (var attr in json) {
			if(attr==='opacity'){
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			}else if(attr==='scrollTop'){
				cur = Math.ceil(obj[attr]);
			}else{
				cur = parseInt(getStyle(obj, attr));
			}
			/*
			switch (attr) {
				case 'opacity':
					cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
					break;
				case 'scrollTop':
					cur = obj[attr];
					break;
				default:
					cur = parseInt(getStyle(obj, attr));
					break;
			}*/
			speed = (json[attr] - cur) / 20;
			speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
			if (json[attr] !== cur) {
				flag = false;
			}
			//运动起来
			if(attr==='opacity'){
				obj.style[attr] = (cur + speed) / 100;
			}else if(attr==='scrollTop'){
				obj.scrollTop = cur + speed;
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		
			/*
			switch (attr) {
				case 'opacity':
					obj.style[attr] = (cur + speed) / 100;
					break;
				case 'scrollTop':
					obj.scrollTop = cur + speed;
					break;
				default:
					obj.style[attr] = cur + speed + 'px';
					break;
			}*/
		}
		if (flag) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
			return; 
		}
	}, 30)
}
//获取元素属性
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		//支持ie
		return obj.currentStyle[attr];
	} else {
		// console.log(getComputedStyle(obj,null)[attr])
		return getComputedStyle(obj, null)[attr]
	}
}
