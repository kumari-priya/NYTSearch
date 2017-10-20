	
'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=84e5b9f211354d4d96b8466579a50b44&q=cat&begin_date=20160101&end_date=20170101'


	$('#search').on("click", function(event) {
		event.preventDefault();
		var apiKey = '84e5b9f211354d4d96b8466579a50b44'
		var searchTerm = $('#search-terms').val().trim();
		var recordCount = $('#records').val().trim();
		var startYear =  $('#start').val().trim()+'0101'
		var endYear = $('#end').val().trim()+'0101'
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		var queryString = '?api-key='+apiKey+'&q='+searchTerm+'&begin_date='+startYear+'&end_date='+endYear;

		console.log(searchTerm);
		console.log(recordCount);

		console.log(url+queryString);

		$.ajax({
		  url: url+queryString,
		  method: 'GET',
		}).done(function(result) {
			

			for (var i = 0; i < recordCount; i++) {
		
				var headline = result.response.docs[i].headline.main;
				var articleLink = result.response.docs[i].web_url;
				var timeStamp = result.response.docs[i].pub_date;
				var section = result.response.docs[i].section_name;
				var author = result.response.docs[i].byline.original;
				
				var articleDiv = $('<div>');

				var headlineDiv = $('<h1>');
				var authorDiv = $('<h2>');
				var countDiv = $('<div>');
				var sectionDiv = $('<div>');
				var linkDiv = $('<div>');
				var timeStampDiv = $('<div>');

				headlineDiv.text(headline);
				authorDiv.text(author);
				countDiv.text(i);
				sectionDiv.text(section);
				linkDiv.text(articleLink);
				timeStampDiv.text(timeStamp);

				articleDiv.append(headlineDiv);
				articleDiv.append(authorDiv);
				articleDiv.append(sectionDiv);
				articleDiv.append(timeStampDiv);
				articleDiv.append(linkDiv);
				console.log(articleDiv);
				$('#articleList').append(articleDiv);
				console.log(i);

			}
		}).fail(function(err) {
		  throw err;
		});

	});
