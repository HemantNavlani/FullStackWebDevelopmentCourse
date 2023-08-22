
const LinkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;


function validateLinkedinURL(url){
    if (LinkedinRegex.test(url)){
        console.log(`${url} is a valid url`);
    }
    else{
        console.log(`${url} is not a valid url`);
    }
}
validateLinkedinURL("https://www.linkedin.com/in/john-doe-123abc"); 
validateLinkedinURL("https://www.linkedin.com/in/jane_smith"); 
validateLinkedinURL("https://www.linkedin.com/in/1_2_3_4_5_6_7_8_9_10_11_12_13_14"); 
validateLinkedinURL("https://www.linkedin.com/pub/username/1/3b2/"); 