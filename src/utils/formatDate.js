const getFormattedDate = (date, format) => {
    const dateFormatter = new Intl.DateTimeFormat('en-IN', { weekday: 'short', day: '2-digit', month: 'short' });
    const formattedDate = dateFormatter.format(date);
    
    if (format === "") {
        if( date.getDate() === new Date().getDate() ) {
            return 'Today';
        }
        
        if( date.getDate() === new Date().getDate() + 1 ) {
            return 'Tomorrow';
        }
    }
    
    return formattedDate;
}

export default getFormattedDate;