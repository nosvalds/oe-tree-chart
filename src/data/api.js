export const formatTreeData = (data) => {
    // need to run through the data and get the total sum of trees per day and then put it in a format that Chart.js understands. 
    // first I want to get it into this format:
    // result = {
    //     "YYYY-MM-DD": numTrees,
    //     "YYYY-MM-DD": numTrees,
    // }
    return data.filter((v, i) => i < 1000).reduce((result, event) => {
        let dateTime = new Date(event.createdAt);
        let dateStr = `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`
        let value = event.value

        return {...result, 
            [dateStr]: result.hasOwnProperty(dateStr) ? 
            result[dateStr] + value 
            : value
        }
    },{})
} 