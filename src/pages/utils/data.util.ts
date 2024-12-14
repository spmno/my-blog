
export const formatDate = (pubDate: string) => {
  var options: Intl.DateTimeFormatOptions = {
	weekday: 'short',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};

  return new Date(pubDate).toLocaleDateString('en-US', options);
}

