	var apiKey = '84e5b9f211354d4d96b8466579a50b44'
	var searchTerm = 'cat';
	var recordCount;
	var startYear =  '20160101';
	var endYear = '20170401';


	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";



	var queryString = '?api-key='+apiKey+'&q='+searchTerm+'&begin_date='+startYear+'&end_date='+endYear


	$.ajax({
	  url: url+queryString,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});

	var headline = response.docs.headline.main;
	var articleLink = response.docs.web_url;
	var timeStamp = response.docs.pub_date;
	var section = response.docs.section_name;
	var author = response.docs.byline.original;

	for (var i = 0; i < recordCount.length; i++) {
		
		var articleDiv = $('<div>');

		var headlineDiv = $('<h1>');
		var authorDiv = $('<h2>');
		var countDiv = $('<div>');
		var sectionDiv = $('<div>');
		var linkDiv = $('<div>');
		var timeStampDiv = $('<div>');

		headlineDiv.text(headline)
		authorDiv.text(author)
		countDiv.text(i++)
		sectionDiv.text(section)
		linkDiv.text(articleLink)
		timeStampDiv.text(timeStamp)

		articleDiv.append(headlineDiv);
		articleDiv.append(authorDiv);
		articleDiv.append(sectionDiv);
		articleDiv.append(timeStampDiv);
		articleDiv.append(linkDiv);

		$('.container articles').append(articleDiv);

	}