const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    if(userInput.value) {
        result.style.display = 'block'; 
        if(isPalindrome(userInput.value)){
          result.textContent = `${userInput.value} is a Palindrome!`;
        }
        else{
            result.textContent = `${userInput.value} is not a Palindrome.`;
        }
    }
    else{
        alert("Please input a value")
        result.style.display = 'block'; 
            result.textContent = 'Please enter a text.';  
            setTimeout(() => {
                result.textContent = '';
                result.style.display = 'none';
            }, 1500);
            return;
    }
})

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    const palindrome = reversedStr === cleanedStr;
            return palindrome;
}
