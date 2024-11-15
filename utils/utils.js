export const calculateReadTime = (text = '') => {
    const wordsPerMinute = 225; // Average reading speed
    const textLength = text?.split(/\s+/).length; // Split by whitespace and get the number of words
    const readTime = textLength / wordsPerMinute;
    // Round the time to the nearest half-minute for better readability
    const roundedReadTime = Math.ceil(readTime * 2) / 2;

    return `${roundedReadTime} min${roundedReadTime !== 1 ? 's' : ''} to read`;
};
export const calculateReadDays = (inputDateString) => {
    // Input date string

    // Convert input date string to a Date object
    const inputDate = new Date(inputDateString);

    // Current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate.getTime() - inputDate.getTime();

    // Convert milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference - 1;
};
