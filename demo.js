// more-than-progress | MIT License | @author: https://github.com/Shadow-Scientist
var progress_path, total_length;

function init(){
	progress_path = document.querySelector('.progress-container .progress');
	total_length = progress_path.getTotalLength();
	progress_path.style.setProperty('--total', total_length+'px');
}

function update(x)
{
	progress_path.style.strokeDashoffset = (total_length - (total_length*(x/100))) +'px';
}

window.addEventListener('load', function(){init()});
