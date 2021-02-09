var updateUrl = function(url){
		var regex = /https:\/\/atcoder.jp\/contests\/\w+/;
		if (regex.test(url)){
			window.open(url + "/submit");
			window.open(url + "/tasks_print");
			var urls = ["/tasks_print", "/submit"];
			for (let i = 0; i < urls.length; i++){
				chrome.tabs.create({
					index:tab.index+i+1,
					url:url + urls[i],
					active: false,
					selected: false,
					openerTabId: tab.index
				});
			}
		}else{
			;
		}
		
	}